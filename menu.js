document.addEventListener('DOMContentLoaded', function () {
    // Create the menu structure
    const menuContainer = document.getElementById('menu-container');
    menuContainer.style.fontFamily = 'Monaco, monospace';
    menuContainer.style.width = '200px';
    menuContainer.style.backgroundColor = '#1e2228';
    menuContainer.style.padding = '20px';
    menuContainer.style.boxSizing = 'border-box';
    menuContainer.style.overflowY = 'auto';
  
    // Create and append the title
    const title = document.createElement('h2');
    title.textContent = 'EXPLORER';
    title.style.color = '#61afef';
    title.style.textAlign = 'center';
    title.style.marginBottom = '15px';
    menuContainer.appendChild(title);
  
    const pages = [
      { name: 'Home.txt', link: 'index.html' },
      { name: 'About.txt', link: 'about.html' },
      { name: 'Contact.txt', link: 'contact.html' },
      { name: 'Skills.txt', link: 'skills.html' }
      // Add more pages as needed
    ];
  
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
  
    pages.forEach(page => {
      const li = document.createElement('li');
      const a = document.createElement('a');
  
      a.href = page.link;
      a.textContent = page.name;
      a.style.textDecoration = 'none';
      a.style.color = '#1b718c';
      a.style.transition = 'color 0.5s ease';
  
      a.addEventListener('mouseenter', function () {
        a.style.textDecoration = 'underline';
        a.style.color = '#ffffff';
      });
  
      a.addEventListener('mouseleave', function () {
        a.style.textDecoration = 'none';
        a.style.color = '#1b718c';
      });
  
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    nav.appendChild(ul);
    menuContainer.appendChild(nav);
  
    // Apply styles to elements with class 'vim-container'
    const vimContainers = document.querySelectorAll('.vim-container');
    vimContainers.forEach(vimContainer => {
      vimContainer.style.border = '2px solid #61afef';
      vimContainer.style.borderRadius = '5px';
      vimContainer.style.overflow = 'hidden';
      vimContainer.style.display = 'flex';
      vimContainer.style.flexDirection = 'column';
      vimContainer.style.flex = '1';
    });
  });
  
  setInterval(function() {
    const currentTime = new Date().toLocaleTimeString();
    const statusText = `NORMAL   vim_terminal   [No Name]   +                                                    ${currentTime}     1:0`;
    statusLine.textContent = statusText;
  }, 1000); // Update every second