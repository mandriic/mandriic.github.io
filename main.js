// Open the menu sidebar by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('menu-sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.style.width = '0px';
    mainContent.style.marginLeft = '10px';
});

// Toggle the menu sidebar when the menu button is clicked
document.getElementById('menu-btn').addEventListener('click', function() {
    var sidebar = document.getElementById('menu-sidebar');
    var mainContent = document.getElementById('main-content');
    if (sidebar.style.width === '350px') {
        sidebar.style.width = '0';
        mainContent.style.marginLeft = '0px';
    } else {
        sidebar.style.width = '350px';
        mainContent.style.marginLeft = '350px';
    }
});

document.getElementById('main').addEventListener('click', function() {
    var mainContent = document.getElementById('main_iframe');
        mainContent.src = 'main.html';
    }
);

document.getElementById('tools').addEventListener('click', function() {
    var mainContent = document.getElementById('main_iframe');
        mainContent.src = 'tools.html';
    }
);