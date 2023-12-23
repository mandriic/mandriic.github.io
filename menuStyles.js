document.addEventListener('DOMContentLoaded', function () {
    // Your existing code...
  
    // Append the menu container to the body
    document.body.appendChild(menuContainer);
  
    // Continue with your existing Vim container code
    const vimContainer = document.getElementById('vim-container');
    const vimHeader = document.getElementById('vim-header');
    const vimContent = document.getElementById('vim-content');
    const vimFooter = document.getElementById('vim-footer');
    const statusLine = document.getElementById('status-line');
  
    // Apply styles to elements with class 'vim-container'
    vimContainer.style.border = '2px solid #61afef';
    vimContainer.style.borderRadius = '5px';
    vimContainer.style.overflow = 'hidden';
    vimContainer.style.display = 'flex';
    vimContainer.style.flexDirection = 'column';
    vimContainer.style.flex = '1';
  
    // Modify the Vim container content and status line as needed
    vimHeader.textContent = 'Vim-like HTML';
    vimContent.innerHTML = '<pre>__      _______ __  __ \n' +
                            '\\ \\    / /_   _|  \\/  |\n' +
                            ' \\ \\  / /  | | | \\  / | VIM - Vi IMproved\n' +
                            '  \\ \\/ /   | | | |\\/| | Vim is open source and freely distributable.\n' +
                            '   \\  /   _| |_| |  | | type  help in terminal for on-line help\n' +
                            '    \\/   |_____|_|  |_|\n' +
                            '                                      \n' +
                            'Welcome to ABOUT\n' +
                            '</pre>';
  
    // Example dynamic status line update
    setInterval(function() {
      const currentTime = new Date().toLocaleTimeString();
      const statusText = `NORMAL   vim_terminal   [No Name]   +                                                    ${currentTime}     1:0`;
      statusLine.textContent = statusText;
    }, 1000); // Update every second
  
    vimFooter.innerHTML = '&nbsp;Mykola Andriichuk';
  });
  