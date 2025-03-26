// Constants
const DOM = {
    container: document.querySelector('.container'),
    searchBar: document.querySelector('.search-bar'),
    sortSelect: document.querySelector('.sort-select'),
    viewToggle: document.querySelector('#viewToggle'),
    bookContainer: document.querySelector('.book-container'),
    prevBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),
    pageInfo: document.querySelector('.page-info'),
};

let AllBooks = [];
let currentPage = 1;
const booksPerPage = 10;
const API_URI = "https://api.freeapi.app/api/v1/public/books?page=";

const options = {
    method: 'GET',
    headers: { accept: 'application/json' }
};

const fetchBooks = async (page = 1) => {
    try {
        const response = await fetch(`${API_URI}${page}`, options);
        const data = await response.json();
        AllBooks = data.data.data;
        updateDOM(AllBooks);
        updatePagination(data.data.totalPages, page);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
};

const updateDOM = (books) => {
    DOM.bookContainer.innerHTML = '';
    
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        const thumbnail = book.volumeInfo.imageLinks?.thumbnail?.replace('http://', 'https://') || 'https://via.placeholder.com/100x150';
        const infoLink = book.volumeInfo.infoLink?.replace('http://', 'https://') || '#';

        bookItem.innerHTML = `
            <img src="${thumbnail}" alt="${book.volumeInfo.title}">
            <div class="book-details">
                <h2>${book.volumeInfo.title}</h2>
                <p><strong>Author:</strong> ${book.volumeInfo.authors?.[0] || 'Unknown'}</p>
                <p><strong>Publisher:</strong> ${book.volumeInfo.publisher || 'Not specified'}</p>
                <p><strong>Published:</strong> ${book.volumeInfo.publishedDate || 'Unknown'}</p>
            </div>
        `;
        bookItem.addEventListener('click', () => {
            window.open(infoLink, '_blank');
        });
        DOM.bookContainer.appendChild(bookItem);
    });
};

// Search functionality
DOM.searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredBooks = AllBooks.filter(book => 
        book.volumeInfo.title.toLowerCase().includes(searchTerm) ||
        book.volumeInfo.authors?.[0]?.toLowerCase().includes(searchTerm) || ''
    );
    updateDOM(filteredBooks);
});

// Sort functionality
DOM.sortSelect.addEventListener('change', (e) => {
    const [sortBy, order] = e.target.value.split('-');
    const sortedBooks = [...AllBooks].sort((a, b) => {
        if (sortBy === 'title') {
            return order === 'asc' 
                ? a.volumeInfo.title.localeCompare(b.volumeInfo.title)
                : b.volumeInfo.title.localeCompare(a.volumeInfo.title);
        } else {
            const dateA = new Date(a.volumeInfo.publishedDate || '0');
            const dateB = new Date(b.volumeInfo.publishedDate || '0');
            return order === 'asc' ? dateA - dateB : dateB - dateA;
        }
    });
    updateDOM(sortedBooks);
});

// Toggle View functionality
DOM.viewToggle.addEventListener('change', () => {
    if (DOM.viewToggle.checked) {
        DOM.bookContainer.classList.add('grid-view');
    } else {
        DOM.bookContainer.classList.remove('grid-view');
    }
});

// Pagination
const updatePagination = (totalPages, page) => {
    DOM.pageInfo.textContent = `Page ${page} of ${totalPages}`;
    DOM.prevBtn.disabled = page === 1;
    DOM.nextBtn.disabled = page === totalPages;
};

DOM.prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchBooks(currentPage);
    }
});

DOM.nextBtn.addEventListener('click', () => {
    currentPage++;
    fetchBooks(currentPage);
});

// Initialize
fetchBooks(currentPage);