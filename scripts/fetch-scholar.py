#!/usr/bin/env python3
"""
Google Scholar Publication Fetcher
Fetches publications from Google Scholar and generates TypeScript data file
"""

import json
import sys
from typing import List, Dict, Any
from datetime import datetime

try:
    from scholarly import scholarly, ProxyGenerator
except ImportError:
    print("Error: 'scholarly' library not installed.")
    print("Install it with: pip install scholarly")
    sys.exit(1)


def setup_proxy():
    """Setup proxy to avoid rate limiting (optional)"""
    try:
        pg = ProxyGenerator()
        pg.FreeProxies()
        scholarly.use_proxy(pg)
        print("✓ Proxy configured successfully")
    except Exception as e:
        print(f"⚠ Warning: Could not setup proxy: {e}")
        print("  Continuing without proxy (may be rate-limited)")


def fetch_author_data(scholar_id: str) -> Dict[str, Any]:
    """
    Fetch author data from Google Scholar

    Args:
        scholar_id: Google Scholar author ID

    Returns:
        Dictionary containing author information and publications
    """
    print(f"Fetching data for scholar ID: {scholar_id}")

    try:
        # Search for author
        search_query = scholarly.search_author_id(scholar_id)
        author = scholarly.fill(search_query)

        print(f"✓ Found author: {author.get('name', 'Unknown')}")

        return author
    except Exception as e:
        print(f"✗ Error fetching author data: {e}")
        sys.exit(1)


def parse_publication(pub: Dict[str, Any]) -> Dict[str, Any]:
    """
    Parse publication data into our format

    Args:
        pub: Publication dictionary from scholarly

    Returns:
        Formatted publication dictionary
    """
    # Get venue and title for type detection
    venue = pub.get('bib', {}).get('venue', '').lower()
    title = pub.get('bib', {}).get('title', '').lower()
    pub_type = 'conference'  # default

    # Enhanced journal detection
    journal_keywords = [
        'journal', 'transactions', 'magazine', 'letters', 'review',
        'proceedings', 'jnl', 'trans.', 'ieee access', 'nature',
        'science', 'communications', 'annals', 'bulletin'
    ]

    # Conference keywords for better detection
    conference_keywords = [
        'conference', 'symposium', 'workshop', 'congress', 'summit',
        'meeting', 'colloquium', 'seminar'
    ]

    # Book keywords
    book_keywords = ['book', 'chapter', 'handbook', 'encyclopedia']

    # Detect type based on venue and title
    if any(keyword in venue for keyword in journal_keywords):
        pub_type = 'journal'
    elif any(keyword in venue for keyword in book_keywords):
        pub_type = 'book'
    elif any(keyword in title for keyword in book_keywords):
        pub_type = 'book'
    elif any(keyword in venue for keyword in conference_keywords):
        pub_type = 'conference'

    # Get year
    year_str = pub.get('bib', {}).get('pub_year', '')
    try:
        year = int(year_str) if year_str else 0
    except (ValueError, TypeError):
        year = 0

    # Get authors - handle list or string
    authors_raw = pub.get('bib', {}).get('author', 'Unknown')
    if isinstance(authors_raw, list):
        authors = ', '.join(authors_raw)
    else:
        authors = authors_raw

    return {
        'title': pub.get('bib', {}).get('title', 'Untitled'),
        'authors': authors,
        'venue': pub.get('bib', {}).get('venue', 'Unknown Venue'),
        'year': year,
        'type': pub_type,
        'citations': pub.get('num_citations', 0),
        'url': pub.get('pub_url', ''),
        'abstract': pub.get('bib', {}).get('abstract', ''),
        'scholar_id': pub.get('author_pub_id', ''),
    }


def generate_typescript_file(author: Dict[str, Any], publications: List[Dict[str, Any]], output_path: str):
    """
    Generate TypeScript file with publication data

    Args:
        author: Author information
        publications: List of publications
        output_path: Path to output TypeScript file
    """
    # Sort publications by year (descending) and citations
    publications.sort(key=lambda x: (x['year'], x['citations']), reverse=True)

    # Format publications as TypeScript
    ts_publications = []
    for pub in publications:
        # Escape quotes in strings
        title = pub['title'].replace("'", "\\'").replace('"', '\\"')
        authors = pub['authors'].replace("'", "\\'").replace('"', '\\"')
        venue = pub['venue'].replace("'", "\\'").replace('"', '\\"')
        abstract = pub.get('abstract', '').replace("'", "\\'").replace('"', '\\"')[:500]  # Limit abstract length

        ts_pub = f"""  {{
    title: '{title}',
    authors: '{authors}',
    venue: '{venue}',
    year: {pub['year']},
    type: '{pub['type']}' as const,
    citations: {pub['citations']},
    url: '{pub.get('url', '')}',
    abstract: '{abstract}',
  }}"""
        ts_publications.append(ts_pub)

    # Generate TypeScript file content
    ts_content = f"""// Auto-generated from Google Scholar
// Last updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
// Scholar ID: {author.get('scholar_id', 'unknown')}
// Total citations: {author.get('citedby', 0)}
// h-index: {author.get('hindex', 0)}
// i10-index: {author.get('i10index', 0)}

export const scholarStats = {{
  totalPublications: {len(publications)},
  totalCitations: {author.get('citedby', 0)},
  hIndex: {author.get('hindex', 0)},
  i10Index: {author.get('i10index', 0)},
  lastUpdated: '{datetime.now().isoformat()}',
}};

export const publications = [
{','.join(ts_publications)}
];
"""

    # Write to file
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        print(f"✓ Generated TypeScript file: {output_path}")
        print(f"  Publications: {len(publications)}")
        print(f"  Total citations: {author.get('citedby', 0)}")
        print(f"  h-index: {author.get('hindex', 0)}")
    except Exception as e:
        print(f"✗ Error writing TypeScript file: {e}")
        sys.exit(1)


def remove_duplicates(publications: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Remove duplicate publications based on title similarity

    Args:
        publications: List of publication dictionaries

    Returns:
        List of unique publications
    """
    seen_titles = set()
    unique_pubs = []
    duplicates_removed = 0

    for pub in publications:
        # Normalize title for comparison
        title_normalized = pub['title'].lower().strip().replace(' ', '')

        if title_normalized not in seen_titles:
            seen_titles.add(title_normalized)
            unique_pubs.append(pub)
        else:
            duplicates_removed += 1
            print(f"    ⚠ Removing duplicate: {pub['title'][:50]}...")

    if duplicates_removed > 0:
        print(f"  Removed {duplicates_removed} duplicate(s)")

    return unique_pubs


def main():
    """Main function"""
    # Configuration
    SCHOLAR_ID = "eydLJrwAAAAJ"  # Your Google Scholar ID
    OUTPUT_PATH = "../src/data/publications-auto.ts"

    print("=" * 60)
    print("Google Scholar Publication Fetcher")
    print("=" * 60)
    print()

    # Setup proxy (optional, helps avoid rate limiting)
    # setup_proxy()

    # Fetch author data
    author = fetch_author_data(SCHOLAR_ID)

    # Get publications
    print("Fetching publications...")
    publications = []

    # Track statistics
    fetch_success = 0
    fetch_failed = 0

    try:
        total_pubs = len(author.get('publications', []))

        for i, pub in enumerate(author.get('publications', []), 1):
            title = pub.get('bib', {}).get('title', 'Unknown')[:60]
            print(f"  [{i}/{total_pubs}] {title}...")

            # Fill publication details with retry
            max_retries = 2
            for attempt in range(max_retries):
                try:
                    filled_pub = scholarly.fill(pub)
                    parsed_pub = parse_publication(filled_pub)

                    # Log type detection for debugging
                    venue = parsed_pub.get('venue', 'Unknown')
                    if venue != 'Unknown Venue':
                        print(f"      Type: {parsed_pub['type']} | Venue: {venue[:40]}")

                    publications.append(parsed_pub)
                    fetch_success += 1
                    break  # Success, exit retry loop

                except Exception as e:
                    if attempt < max_retries - 1:
                        print(f"      Retry {attempt + 1}/{max_retries}...")
                        continue
                    else:
                        print(f"      ⚠ Using basic info (fetch failed)")
                        # Use basic info if all retries fail
                        parsed_pub = parse_publication(pub)
                        publications.append(parsed_pub)
                        fetch_failed += 1

        print(f"\n✓ Fetched {len(publications)} publications")
        print(f"  Detailed fetch success: {fetch_success}")
        print(f"  Basic info only: {fetch_failed}")

    except Exception as e:
        print(f"✗ Error fetching publications: {e}")
        sys.exit(1)

    # Remove duplicates
    print("\nRemoving duplicates...")
    publications = remove_duplicates(publications)
    print(f"✓ Final count: {len(publications)} unique publications")

    # Count by type for reporting
    type_counts = {}
    for pub in publications:
        pub_type = pub['type']
        type_counts[pub_type] = type_counts.get(pub_type, 0) + 1

    print("\nPublication types:")
    for pub_type, count in sorted(type_counts.items()):
        print(f"  {pub_type.capitalize()}: {count}")

    # Generate TypeScript file
    generate_typescript_file(author, publications, OUTPUT_PATH)

    print()
    print("=" * 60)
    print("✓ Success! Publications updated.")
    print("=" * 60)


if __name__ == "__main__":
    main()
