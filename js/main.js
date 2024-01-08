    document.addEventListener("DOMContentLoaded", function() {
      const outputElement = document.getElementById('output');
      const inputElement = document.getElementById('input');
      const inputBtn = document.getElementById('input-btn');
      const inputPrefixElement = document.getElementById('input-prefix');
      const terminalLine = "/Welhome/Nico/$"
      inputBtn.addEventListener('click', function() {
        const command = inputElement.value.trim();
        executeCommand(command);
      });

      function executeCommand(command) {
        appendToOutput(`$ ${command}\n`);
        const commandParts = command.split(' ');
        const commandName = commandParts[0].toLowerCase();

        switch (commandName) {
          case 'help':
            appendToOutput('Available commands:\n- help\n- date\n- echo\n- ls\n- cat <filename>\n- pwd\n- exit\n');
            break;
          case 'exit':
              appendToOutput('exit');
              document.getElementById("terminal").style.display = "none";
              break;
          case 'date':
            const currentDate = new Date().toLocaleString();
            appendToOutput(currentDate + '\n');
            break;
          case 'echo':
            const textToEcho = command.slice(5); // Remove "echo " from the command
            appendToOutput(textToEcho + '\n');
            break;
          case 'ls':
            appendToOutput('Home.txt About.txt Contact.txt Skills.txt CV.pdf\n');
            break;
          case 'pwd':
            appendToOutput(terminalLine);
            break;
          case 'cat':
            const fileName = commandParts.slice(1).join(' ').trim(); // Join the rest of the parts as the filename
            if (fileName) {
              if (fileName){
                window.alert("You can read " + fileName + " in index.html. Temporary this funcion not work because In JavaScript, you can't directly open files on a user's machine due to security restrictions in modern web browsers")
              }
              // You can implement file reading logic here
              // For simplicity, we'll just return a placeholder text
              appendToOutput(`Content of ${fileName}:\nThis is the content of ${fileName}\n`);
            } else {
              appendToOutput('Usage: cat <filename>\n');
            }
            break;
          default:
            appendToOutput(`Command not found: ${command}\n`);
            break;
        }

        clearInput();
        scrollToBottom();
      }

      function appendToOutput(text) {
        outputElement.textContent += text;
      }

      function clearInput() {
        inputElement.value = '';
      }

      function scrollToBottom() {
        outputElement.scrollTop = outputElement.scrollHeight;
      }

      inputElement.addEventListener('input', function() {
        const value = inputElement.value.trim();
        inputPrefixElement.textContent = value.length > 0 ? terminalLine : '';
      });

      inputElement.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          inputBtn.click();
        }
      });

      inputElement.focus();
    });
    function openDivsWithDelay() {
      const boxes = document.querySelectorAll('.box');
    
      function openBox(index) {
          if (index < boxes.length) {
              boxes[index].style.opacity = '1';
              setTimeout(() => {
                  openBox(index + 1);
              }, 100); // Delay of 1 second (1000 milliseconds)
          }
      }
    
      openBox(0);
    }
    
    // Call the function when the page is loaded
    window.onload = openDivsWithDelay;