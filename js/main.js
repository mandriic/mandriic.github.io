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
            appendToOutput('Available commands:\n- help\n- date\n- echo\n- ls\n- cat <filename>\n- pwd\n');
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
            appendToOutput('file1.txt  file2.txt  file3.txt\n');
            break;
          case 'pwd':
            appendToOutput(terminalLine);
            break;
          case 'cat':
            const fileName = commandParts.slice(1).join(' ').trim(); // Join the rest of the parts as the filename
            if (fileName) {
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
