const paths = {
    home: 'portfolio > src > home.js',
    about: 'portfolio > src > about.json',
    contact: 'portfolio > src > contact.js',
    experience: 'portfolio > src > experience.js'
};

function toggleSidebar() {
    document.getElementById('appSidebar').classList.toggle('open');
    document.getElementById('sidebarBackdrop').classList.toggle('open');
}

function switchTab(tabName) {
    document.querySelectorAll('.editor-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.editor-tab').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tree-file').forEach(el => el.classList.remove('active'));

    document.getElementById('content-' + tabName).classList.add('active');
    
    document.querySelector('.editor-tab[data-tab="' + tabName + '"]').classList.add('active');
    document.querySelector('.tree-file[data-tab="' + tabName + '"]').classList.add('active');

    document.getElementById('breadcrumb-path').textContent = paths[tabName];

    if (window.innerWidth <= 768) {
        document.getElementById('appSidebar').classList.remove('open');
        document.getElementById('sidebarBackdrop').classList.remove('open');
    }
}