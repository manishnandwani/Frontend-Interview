
// Select all elements with the class 'accordion-header'
const headers = document.querySelectorAll('.accordion-header');

// Keep track of currently open accordion item
let currentOpen = null;

// Loop through each header and attach a click event listener
headers.forEach(header => {
  header.addEventListener('click', () => {
    // Get the parent 'accordion-item' element
    const item = header.parentElement;

    // Get the associated content and icon elements
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('.icon');

    // If there's an open item that's not the current one, close it
    if (currentOpen && currentOpen !== item) {
      const prevContent = currentOpen.querySelector('.accordion-content');
      const prevIcon = currentOpen.querySelector('.icon');

      // Remove 'open' class to hide the content
      prevContent.classList.remove('open');

      // Reset icon style and text to '+'
      prevIcon.classList.remove('rotate');
      prevIcon.textContent = '+';
    }

    // Check if clicked item is already open
    const isOpen = content.classList.contains('open');

    if (isOpen) {
      // If open, close it and reset icon
      content.classList.remove('open');
      icon.textContent = '+';
      currentOpen = null;
    } else {
      // If closed, open it and change icon
      content.classList.add('open');
      icon.textContent = '−';
      currentOpen = item;
    }
  });
});