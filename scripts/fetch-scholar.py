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
    # Determine publication type based on venue
    venue = pub.get('bib', {}).get('venue', '').lower()
    pub_type = 'conference'  # default

    if any(keyword in venue for keyword in ['journal', 'transactions', 'magazine', 'letters']):
        pub_type = 'journal'
    elif any(keyword in venue for keyword in ['book', 'chapter']):
        pub_type = 'book'

    # Get year
    year_str = pub.get('bib', {}).get('pub_year', '')
    try:
        year = int(year_str) if year_str else 0
    except (ValueError, TypeError):
        year = 0

    return {
        'title': pub.get('bib', {}).get('title', 'Untitled'),
        'authors': pub.get('bib', {}).get('author', 'Unknown'),
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

    try:
        for i, pub in enumerate(author.get('publications', []), 1):
            print(f"  [{i}] Processing: {pub.get('bib', {}).get('title', 'Unknown')[:60]}...")

            # Fill publication details
            try:
                filled_pub = scholarly.fill(pub)
                parsed_pub = parse_publication(filled_pub)
                publications.append(parsed_pub)
            except Exception as e:
                print(f"    ⚠ Warning: Could not fetch details: {e}")
                # Use basic info if detailed fetch fails
                parsed_pub = parse_publication(pub)
                publications.append(parsed_pub)

        print(f"✓ Fetched {len(publications)} publications")
    except Exception as e:
        print(f"✗ Error fetching publications: {e}")
        sys.exit(1)

    # Generate TypeScript file
    generate_typescript_file(author, publications, OUTPUT_PATH)

    print()
    print("=" * 60)
    print("✓ Success! Publications updated.")
    print("=" * 60)


if __name__ == "__main__":
    main()
