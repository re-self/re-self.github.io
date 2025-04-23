const terminal = document.getElementById("terminal");
const output = document.getElementById("output");
const input = document.getElementById("cmd");

const commands = {
  help: `Available commands:
  - help: Show this message
  - about: What is reself?
  - contact: How to reach us
  - clear: Clear the screen`,

  about: `reself is a digital legacy platform — a way to preserve and share your digital self through AI.`,

  contact: `📧 Email: amirodan@gmail.com\n`,
};

function handleCommand(cmd) {
  const userInput = `reself@startup:~$ ${cmd}`;
  const lower = cmd.trim().toLowerCase();
  const response = commands[lower] || `Command not found: ${cmd}`;
  output.innerText += `${userInput}\n${response}\n\n`;
  terminal.scrollTop = terminal.scrollHeight;
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value;
    if (cmd.trim().toLowerCase() === "clear") {
      output.innerText = "";
    } else {
      handleCommand(cmd);
    }
    input.value = "";
  }
});

// Run 'help' on load to display available commands
window.onload = () => {
  handleCommand("help");
};
