document.querySelector('.fa-eye').addEventListener('click', toggleVisibility)

function toggleVisibility(e) {
  const passField = e.target.previousElementSibling.type
  if (passField === 'password') {
    document.getElementById('password').type = 'text'
    e.target.className = 'fa-regular fa-eye-slash'
    // e.target.src = 'icons/hide.png'
  } else {
    document.getElementById('password').type = 'password'
    e.target.className = 'fa-regular fa-eye'
    // e.target.src = 'icons/show.png'
  }
}