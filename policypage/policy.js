const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

// Open Sidebar
openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

