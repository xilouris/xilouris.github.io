# Google Scholar Automation Scripts

This directory contains scripts to automatically fetch publications from Google Scholar and update the website.

## Setup

### 1. Install Python Dependencies

```bash
cd scripts
pip install -r requirements.txt
```

### 2. Configure Your Scholar ID

Edit `fetch-scholar.py` and update the `SCHOLAR_ID` variable with your Google Scholar ID:

```python
SCHOLAR_ID = "eydLJrwAAAAJ"  # Your Google Scholar ID
```

You can find your Scholar ID in your Google Scholar profile URL:
```
https://scholar.google.com/citations?user=YOUR_ID_HERE
```

## Usage

### Manual Update

Run the script manually to fetch publications:

```bash
cd scripts
python3 fetch-scholar.py
```

This will:
1. Fetch all publications from your Google Scholar profile
2. Extract citation counts, publication details, and metadata
3. Generate `/src/data/publications-auto.ts` with formatted data
4. The website will automatically use this data on next build

### Automated Updates

The script is designed to run automatically via GitHub Actions (see `/.github/workflows/update-publications.yml`).

By default, it runs:
- **Weekly** on Sundays at midnight UTC
- **On demand** via workflow dispatch (manual trigger)
- **After any push** to main branch

## Output

The script generates `/src/data/publications-auto.ts` containing:

- **Scholar Statistics**: Total publications, citations, h-index, i10-index
- **Publications Array**: All publications with metadata
- **Last Updated**: Timestamp of last fetch

## Troubleshooting

### Rate Limiting

Google Scholar may rate-limit requests. If you encounter issues:

1. **Uncomment the proxy setup** in `fetch-scholar.py`:
   ```python
   setup_proxy()  # Uncomment this line
   ```

2. **Add delays** between requests (already implemented)

3. **Run less frequently** (adjust GitHub Action schedule)

### Missing Dependencies

If you see errors about missing libraries:

```bash
pip install --upgrade scholarly
```

### Authentication Issues

The script uses the public Google Scholar API and doesn't require authentication. However, if you have access issues:

1. Check your internet connection
2. Verify your Scholar ID is correct
3. Try running with proxy enabled

## Manual Data Override

If you need to manually edit publications, you can:

1. Disable auto-updates in the GitHub Action
2. Manually edit `/src/data/publications-auto.ts`
3. The website will use your manual data

## Files

- `fetch-scholar.py` - Main script to fetch publications
- `requirements.txt` - Python dependencies
- `README.md` - This file

## Notes

- The script automatically determines publication type (journal/conference/book) based on venue
- Abstracts are truncated to 500 characters to keep file size reasonable
- Publications are sorted by year (descending) and citation count
- Failed fetches for individual publications won't stop the entire process
