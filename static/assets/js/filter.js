/**
 * filter.js – Category filtering functionality for the homepage
 * Filters article cards based on the selected category.
 */

// Query-selector constants
const FILTER_BUTTONS_SELECTOR = '.filter-btn';
const GRID_ITEM_SELECTOR      = '.grid-item';

// Helper functions to show and hide items with transitions
function showItem(item) {
  item.style.opacity = '0';
  item.style.display = 'block';
  setTimeout(() => {
    item.style.transition = 'opacity 0.4s ease';
    item.style.opacity = '1';
  }, 10);
}

function hideItem(item) {
  item.style.opacity = '0';
  setTimeout(() => {
    item.style.display = 'none';
  }, 400); // Keep this in sync with CSS
}

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll(FILTER_BUTTONS_SELECTOR);
  const gridItems     = document.querySelectorAll(GRID_ITEM_SELECTOR);

  // Abort early if the expected elements aren’t on the page
  if (filterButtons.length === 0 || gridItems.length === 0) {
    console.warn('filter.js: missing filter buttons or grid items.');
    return;
  }

  // Delegate click handler to each filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.dataset.category;

      // Update active-button styling
      filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));

      // Show or hide grid items
      gridItems.forEach(item => {
        const itemCategory = item.dataset.category;
        (selectedCategory === 'all' || selectedCategory === itemCategory)
          ? showItem(item)
          : hideItem(item);
      });
    });
  });
});