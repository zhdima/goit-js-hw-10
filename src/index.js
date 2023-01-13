import debounce from 'lodash.debounce';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputSearch = document.querySelector('input#search-box');

if (!inputSearch) {
  throw new Error('Error: invalid markup!');
}

inputSearch.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(evt) {
  console.log(1);
}