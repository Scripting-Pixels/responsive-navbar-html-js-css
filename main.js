const toggleButton = document.querySelector('#toggle-menu-button')
const nav = document.querySelector('.nav')
const menuIcon = document.getElementById('toggle-menu-button');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active')

  // Toggle the icon between burger (☰) and times (✖)
  if (nav.classList.contains('active')) {
    menuIcon.textContent = '✖';  // Times icon when menu is open
  } else {
      menuIcon.textContent = '☰';  // Burger icon when menu is closed
  }
})