// Toggle dropdown content visibility
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
dropdownBtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});
