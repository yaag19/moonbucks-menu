export const $ = (selector) => document.querySelector(selector);

export const makeMenuTemplate = (menuItem, idx) =>
  `<li data-menu-id=${idx} class='menu-list-item d-flex items-center py-2'>
    <span class='w-100 pl-2 menu-name ${menuItem.soldOut ? 'sold-out' : ''}'>${menuItem.name}</span>
    <button type='button' class='bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button'>
      품절
    </button>
    <button type='button' class='bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button'>
      수정
    </button>
    <button type='button' class='bg-gray-50 text-gray-500 text-sm menu-remove-button'>
      삭제
    </button>
  </li>`;

export const getMenuId = (liTag) => Number(liTag.dataset.menuId);

export const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
