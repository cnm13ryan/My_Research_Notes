/**
 * filter.js - Category filtering functionality for the homepage
 * This script filters article cards based on the selected category
 */

document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const gridItems = document.querySelectorAll('.grid-item');

  const showItem = (item) => {
    item.classList.remove('hidden', 'fade-out');
    item.classList.add('fade-in');

    const handler = () => {
      item.classList.remove('fade-in');
      item.removeEventListener('animationend', handler);
    };
    item.addEventListener('animationend', handler);
  };

  const hideItem = (item) => {
    if (item.classList.contains('hidden')) return;

    item.classList.remove('fade-in');
    item.classList.add('fade-out');

    const handler = () => {
      item.classList.add('hidden');
      item.classList.remove('fade-out');
      item.removeEventListener('animationend', handler);
    };
    item.addEventListener('animationend', handler);
  };

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
