# Book Library

A dynamic web application that fetches and displays book data from the FreeAPI.app API. This project showcases a user-friendly interface with features like search, sort, pagination, and a list/grid view toggle, built using HTML, CSS, and JavaScript.

## Features

- **Dynamic Book Fetching**: Retrieves book data from `https://api.freeapi.app/api/v1/public/books` and displays it dynamically.
- **List/Grid Toggle**: Switch between list and grid views using a stylish toggle switch.
- **Book Details**: Displays title, author, publisher, published date, and thumbnail for each book.
- **Search**: Filter books by title or author in real-time as you type.
- **Sort**: Sort books alphabetically by title (A-Z or Z-A) or by published date (oldest or newest first).
- **Pagination**: Navigate through multiple pages of books with Previous/Next buttons.
- **Clickable Books**: Click a book to open its detailed info page in a new tab via the `infoLink`.

## Tech Stack

- **HTML**: Structure of the webpage.
- **CSS**: Styling with a modern, responsive design and smooth transitions.
- **JavaScript**: Handles API requests, DOM manipulation, and interactivity.

## Prerequisites

- A modern web browser (e.g., Chrome, Firefox).
- An internet connection to fetch data from the API.
- (Optional) github or a local development environment with a simple server (e.g., Python's `http.server`).

## Setup Instructions

### Running in github
1. **Fork or Clone the Repository**:
   - Fork this repository to your GitHub account or clone it locally:


2. **Open in github**:
- If using github, prepend `https://github.io/#` to your repository URL and open it in your browser (e.g., `https://github.io/#https://github.com/your-username/book-library`).

3. **Start the Server**:
- In the github terminal, navigate to the project directory (if not already there):

- Run a simple HTTP server:

- Click "Open Browser" when github prompts you, or visit the provided URL (e.g., `https://8000-<your-github-id>.ws.github.io/`).

### Running Locally
1. **Clone the Repository**:


2. **Serve the Files**:
- Use a local server like Python’s built-in server:

- Or use an extension like "Live Server" in VS Code.

3. **Open in Browser**:
- Navigate to `http://localhost:8000` in your browser.

## Project Structure
book-library/
├── index.html    # Main HTML file with structure
├── styles.css    # CSS for styling and layout
├── script.js     # JavaScript for API fetching and interactivity
└── README.md     # This file


## Usage

1. **View Books**: On page load, books from the first page of the API are displayed.
2. **Search**: Type in the search bar to filter books by title or author.
3. **Sort**: Use the dropdown to sort books by title or published date.
4. **Toggle View**: Click the List/Grid switch to change the display format.
5. **Paginate**: Use the Previous/Next buttons to navigate through pages.
6. **View Details**: Click any book to open its detailed info in a new tab.

## API Details

- **Endpoint**: `GET https://api.freeapi.app/api/v1/public/books?page=<page-number>`
- **Documentation**: [FreeAPI Documentation](https://freeapi.hashnode.space/api-guide/apireference/getBooks)
- **Response**: Returns 10 books per page with fields like `title`, `authors`, `publisher`, `publishedDate`, `imageLinks.thumbnail`, and `infoLink`.

## Troubleshooting

- **Mixed Content Error**: If you see a "Mixed Content" warning, ensure all resources (API, thumbnails, info links) use HTTPS. The provided code includes fixes for this (e.g., replacing `http://` with `https://`).
- **API Not Loading**: Verify your internet connection and test the API endpoint in a browser.
- **github Issues**: Restart the workspace or ensure port 8000 is open.

## Future Improvements

- Fetch and cache all pages for full-dataset search/sort.
- Add loading indicators during API requests.
- Implement infinite scroll instead of pagination.
- Add error handling UI for failed API requests.

## Credits

- Built as a practice project using the FreeAPI.app API.
- Inspired by modern library UI designs.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it!