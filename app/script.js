document.addEventListener('DOMContentLoaded', () => {
 const themeToggle = document.getElementById('theme-toggle');
 const themeIcon = document.getElementById('theme-icon');
 const body = document.body;

 themeToggle.addEventListener('click', () => {
     if (body.classList.contains('dark-mode')) {
         body.classList.remove('dark-mode');
         body.classList.add('light-mode');
         themeIcon.classList.remove('fa-moon');
         themeIcon.classList.add('fa-sun');
     } else {
         body.classList.remove('light-mode');
         body.classList.add('dark-mode');
         themeIcon.classList.remove('fa-sun');
         themeIcon.classList.add('fa-moon');
     }
 });

 // Set default theme to dark mode
 body.classList.add('dark-mode');
});



const ano = document.querySelector("#ano-atual");
ano.innerHTML = new Date().getFullYear();
