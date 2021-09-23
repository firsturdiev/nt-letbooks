const library = JSON.parse(localStorage.getItem('library')) || [];

// Show books

let elBooksList = document.querySelector('.books');
let tempBook = document.querySelector('#tempBook').content;
let booksFragment = document.createDocumentFragment();
let books = booksData.slice();

let TOTAL_ITEMS = books.length;
let ITEMS_PER_PAGE = 9;
let CURRENT_PAGE = 1;
let NEIGHBOUR_PAGES = 2;
let TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);
let isPaginationValid = (CURRENT_PAGE + NEIGHBOUR_PAGES) - (CURRENT_PAGE - NEIGHBOUR_PAGES) === NEIGHBOUR_PAGES * 2 && CURRENT_PAGE - NEIGHBOUR_PAGES >= 1 && CURRENT_PAGE + NEIGHBOUR_PAGES <= TOTAL_PAGES;

function showBooks(books, searchWord) {
  elBooksList.innerHTML = '';

  for (let book of books) {
    let newBook = tempBook.cloneNode(true);
    newBook.querySelector('.book__poster').src = book.imageLink;
    newBook.querySelector('.book__poster').alt = `Poster of ${book.title}`;
    if (searchWord.source !== '(?:)' && searchWord)
      newBook.querySelector('.book__title').innerHTML = book.title.replace(searchWord, `<mark class="p-0 bg-warning">${searchWord.source}</mark>`);
    else
      newBook.querySelector('.book__title').textContent = book.title;
    newBook.querySelector('.book__author').textContent = book.author;
    newBook.querySelector('.book__info-year').textContent = book.year;
    newBook.querySelector('.book__info-language').textContent = book.language;
    newBook.querySelector('.book__info-country').textContent = book.country;
    newBook.querySelector('.book__more-link').href = book.link;
    newBook.querySelector('.book__add-library').dataset.uniqueId = book.uniqueId;

    if (library.find(libraryItem => newBook.querySelector('.book__add-library').dataset.uniqueId === libraryItem.uniqueId)) {
      newBook.querySelector('.book__add-library').classList.add('book__add-library--added');
      newBook.querySelector('.book__add-library').children[0].src = './img/icon-bookmark.svg';
      newBook.querySelector('.book__add-library').children[1].textContent = 'Added to library';
    } else {
      newBook.querySelector('.book__add-library').classList.remove('book__add-library--added');
      newBook.querySelector('.book__add-library').children[0].src = './img/icon-bookmark-add.svg';
      newBook.querySelector('.book__add-library').children[1].textContent = 'Add to library';
    }

    booksFragment.appendChild(newBook);
  }

  elBooksList.appendChild(booksFragment);
}

// Filters

let filteredBooks = [];
const elFilters = document.querySelector('.filters');
const elFiltersQuery = elFilters.q;
const elFiltersYearMin = elFilters.from_year;
const elFiltersYearMax = elFilters.to_year;
const elFiltersFilter = elFilters.filter;

function filterBooks(arr, option) {
  if (option === 'a-z') {
    arr.sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    })
  }
  else if (option === 'z-a') {
    arr.sort((a, b) => {
      if (a.title > b.title) return -1;
      if (a.title < b.title) return 1;
      return 0;
    })
  }
  else if (option === 'year') {
    arr.sort((a, b) => {
      return b.year - a.year;
    })
  }
}

elFilters.addEventListener('submit', e => {
  e.preventDefault();

  let regexSearch = new RegExp(elFiltersQuery.value.trim(), 'gi');
  filteredBooks = books.filter(book => {
    return (
      (book.title.match(regexSearch)) &&
      (book.year >= (Number(elFiltersYearMin.value) || 1000) && book.year <= (Number(elFiltersYearMax.value) || 2021))
    );
  });

  if (filteredBooks.length > 0) {
    filterBooks(filteredBooks, elFiltersFilter.value);

    buildPagination(CURRENT_PAGE);
    buildPage(CURRENT_PAGE);
  }
  else
    elBooksList.innerHTML = '<p class="text-center fw-bold h2 mb-0">No book found</p>'
})

// Library

elBooksList.addEventListener('click', e => {
  if (e.target.matches('.book__add-library')) {
    if (e.target.matches('.book__add-library--added')) {
      e.target.classList.remove('book__add-library--added');
      e.target.children[0].src = './img/icon-bookmark-add.svg';
      e.target.children[1].textContent = 'Add to library';

      let libraryItemIndex = library.findIndex(libraryItem => e.target.dataset.uniqueId === libraryItem.uniqueId);
      library.splice(libraryItemIndex, 1);
    }
    else {
      e.target.classList.add('book__add-library--added');
      e.target.children[0].src = './img/icon-bookmark-added.svg';
      e.target.children[1].textContent = 'Added to library';

      let newLibraryItem = books.find(book => e.target.dataset.uniqueId === book.uniqueId);
      library.push(newLibraryItem);
    }

    localStorage.setItem('library', JSON.stringify(library));
  }
})

// Library modal actions 

const elLibraryModal = document.querySelector('.library-modal');
const elLibraryGroup = elLibraryModal.querySelector('.library-modal__list');
const libraryFragment = document.createDocumentFragment();

function showLibrary() {
  elLibraryGroup.innerHTML = '';

  for (let libraryItem of library) {
    let newLibraryItem = `<li class="library-item library-modal__item list-group-item d-flex align-items-center justify-content-between">
    <a class="library-item__title h4 link-info" href="${libraryItem.link}" target="_blank">${libraryItem.title} (${libraryItem.year})</a>
    <button class="library-item__remove btn btn-danger btn-sm text-white" type="button" title="Remove from library" data-unique-id="${libraryItem.uniqueId}">&#10006;</button>
    </li>`;
    elLibraryGroup.insertAdjacentHTML('beforeend', newLibraryItem)
  }
}

elLibraryModal.addEventListener('show.bs.modal', showLibrary);

elLibraryModal.addEventListener('click', (e) => {
  debugger;
  if (e.target.matches('.library-item__remove')) {
    const libraryItemIndex = library.findIndex(libraryItem => libraryItem.uniqueId === e.target.dataset.uniqueId);
    const removedLibraryItem = library.splice(libraryItemIndex, 1)[0];

    const elBookAddLibrary = elBooksList.querySelector(`.book__add-library[data-unique-id=${removedLibraryItem.uniqueId}]`);
    if (elBookAddLibrary) {
      elBookAddLibrary.classList.remove('book__add-library--added');
      elBookAddLibrary.children[0].src = './img/icon-bookmark-add.svg';
      elBookAddLibrary.children[1].textContent = 'Add to library';
    }

    localStorage.setItem('library', JSON.stringify(library));
    showLibrary();
  }
})


// Pagination

const elPagination = document.querySelector('.pagination');
const elsPaginationLinks = elPagination.querySelectorAll('.pagination__link');
const elPaginationControlPrev = elPagination.querySelector('.pagination__control--prev');
const elPaginationControlNext = elPagination.querySelector('.pagination__control--next');

function buildPagination(clickedPage) {
  isPaginationValid = (clickedPage + NEIGHBOUR_PAGES) - (clickedPage - NEIGHBOUR_PAGES) === NEIGHBOUR_PAGES * 2 && clickedPage - NEIGHBOUR_PAGES >= 1 && clickedPage + NEIGHBOUR_PAGES <= TOTAL_PAGES;

  if (isPaginationValid) {
    for (let i = clickedPage - NEIGHBOUR_PAGES, j = 0; i <= clickedPage + NEIGHBOUR_PAGES; i++, j++) {
      elsPaginationLinks[j].textContent = i;
    }
  }
}

function buildPage(currPage) {
  if (currPage < 1 || currPage > TOTAL_PAGES) return;

  if (currPage === 1)
    elPaginationControlPrev.parentElement.classList.add('disabled');
  else
    elPaginationControlPrev.parentElement.classList.remove('disabled');
  if (currPage === TOTAL_PAGES)
    elPaginationControlNext.parentElement.classList.add('disabled');
  else
    elPaginationControlNext.parentElement.classList.remove('disabled');

  for (let link of elsPaginationLinks) {
    if (+link.textContent === currPage)
      link.parentElement.classList.add('active');
    else
      link.parentElement.classList.remove('active');
  }

  const trimStart = (currPage - 1) * ITEMS_PER_PAGE;
  const trimEnd = trimStart + ITEMS_PER_PAGE;

  if (filteredBooks.length > 0) {
    TOTAL_ITEMS = filteredBooks.length;
    TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE)
    if (TOTAL_PAGES < 5) {
      for (let i = 1; i <= 5; i++) {
        if (i > TOTAL_PAGES) {
          elsPaginationLinks[i - 1].style.display = 'none';
        }
      }
    } else {
      debugger;
      for (let i = 0; i <= 4; i++) {
        elsPaginationLinks[i].style.display = 'initial';
      }
    }

    showBooks(filteredBooks.slice(trimStart, trimEnd), new RegExp(elFiltersQuery.value.trim(), 'gi'));
    return;
  }

  showBooks(books.slice(trimStart, trimEnd), '');
}

function onPaginationAction(currPage) {
  CURRENT_PAGE = currPage;
  buildPagination(CURRENT_PAGE);
  buildPage(CURRENT_PAGE);
}

elsPaginationLinks.forEach(link => {
  link.addEventListener('click', () => {
    onPaginationAction(+link.textContent);
  })
})

elPaginationControlPrev.addEventListener('click', () => {
  onPaginationAction(CURRENT_PAGE - 1);
});
elPaginationControlNext.addEventListener('click', () => {
  onPaginationAction(CURRENT_PAGE + 1);
});

buildPage(CURRENT_PAGE);