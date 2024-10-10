  // Create and append the title button
  const titleButton = document.createElement('button');
  titleButton.textContent = 'EXPLORER hide/show';
  titleButton.style.color = '#000000';
  titleButton.style.textAlign = 'center';
  titleButton.style.marginBottom = '15px';
  titleButton.style.backgroundColor = '#61afef';
  titleButton.style.border = 'none';
  titleButton.style.cursor = 'pointer';
  titleButton.style.borderRadius = '8px';

document.addEventListener('DOMContentLoaded', function () {
  const divForButton = document.createElement('div');
  divForButton.style.display = 'flex';
  divForButton.style.left = '0';
  divForButton.style.justifyContent = 'center';
  divForButton.appendChild(titleButton);
  document.body.appendChild(divForButton);
  divForButton.style.position = 'fixed';
  divForButton.style.top = '10px';
  divForButton.style.padding = '15px';
  titleButton.style.fontSize = '15px';
  titleButton.style.border = '2px solid #61afef';

  // Create the menu structure
  const menuContainer = document.getElementById('menu-container');
  menuContainer.style.fontFamily = 'Monaco, monospace';
  menuContainer.style.width = '200px';
  menuContainer.style.backgroundColor = '#1e2228';
  menuContainer.style.padding = '20px';
  menuContainer.style.paddingTop = '50px';
  menuContainer.style.boxSizing = 'border-box';
  menuContainer.style.overflowY = 'auto';
  // menuContainer.style.display = 'block'; // Ensure the menu is initially visible
  // Add an event listener to toggle the menu visibility
  titleButton.addEventListener('click', function () {
    menuContainer.style.transition = "1s";
    // menuContainer.style.display = (menuContainer.style.display === 'none' || menuContainer.style.display === '') ? 'block' : 'none';
    if (menuContainer.style.width == '0px'){
      menuContainer.style.width = '200px';
      menuContainer.style.paddingLeft = '15px';
      menuContainer.style.paddingRight = '15px';
    }
    else{
      menuContainer.style.width = '0px';
      menuContainer.style.paddingLeft = '0px';
      menuContainer.style.paddingRight = '0px';
    }
    if (titleButton.innerHTML == "+"){
      titleButton.innerHTML = 'EXPLORER HIDE';
    menuContainer.style.transition = "1s";

    }else{
      titleButton.innerHTML = "+";
    }
});



  const pages = [
    { name: 'Home.txt', link: 'index.html' },
    { name: 'About.txt', link: 'about.html' },
    { name: 'Contact.txt', link: 'contact.html' },
    { name: 'Skills.txt', link: 'skills.html' },
    { name: 'CV.pdf', link: 'cv.html' },
    { name: 'Certificate.pdf', link: 'certificate.html' },
   // { name: 'Examples.html', link: 'examples.html' },

    //{ name: 'Game', link: 'snake.html' }
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
  const statusText = ` ${currentTime} `;
  statusLine.textContent = statusText;
}, 1000); // Update every second


