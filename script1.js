const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  ];

  const searchInput = document.getElementById('search-input');
  const bookList = document.getElementById('book-list');
  
  function renderBooks(booksToRender) {
    bookList.innerHTML = '';
    if (booksToRender.length === 0) {
      bookList.innerHTML = '<p>No books found</p>';
      return;
    }
    booksToRender.forEach(book => {
      const div = document.createElement('div');
      div.classList.add('book');
      div.innerHTML = `<strong>Title:</strong> ${highlightMatches(book.title)}<br><strong>Author:</strong> ${highlightMatches(book.author)}<br><strong>Year:</strong> ${book.year}`;
      bookList.appendChild(div);
    });
  }
  
  function highlightMatches(text) {
    const searchQuery = searchInput.value.trim().toLowerCase();
    if (!searchQuery) {
      return text;
    }
    const regex = new RegExp(searchQuery, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }
  
  function handleSearch() {
    const searchQuery = searchInput.value.trim().toLowerCase();
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery)
    );
    renderBooks(filteredBooks);
  }
  
  searchInput.addEventListener('input', handleSearch);
  renderBooks(books);  