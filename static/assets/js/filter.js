/**
 * filter.js - Category filtering functionality for the homepage
 * This script filters article cards based on the selected category
 */

// Query selector constants
const FILTER_BUTTONS_SELECTOR = '.filter-btn';
const GRID_ITEM_SELECTOR = '.grid-item';

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
  }, 400); // Match this with the CSS transition time
}

document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll(FILTER_BUTTONS_SELECTOR);
  const gridItems = document.querySelectorAll(GRID_ITEM_SELECTOR);
  
  // Event listener for filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const selectedCategory = this.getAttribute('data-category');
      
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show or hide articles based on category
      gridItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (selectedCategory === 'all' || selectedCategory === itemCategory) {
          showItem(item);
        } else {
          hideItem(item);
        }
      });
    });
  });
});
