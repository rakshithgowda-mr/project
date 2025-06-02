const socket = new WebSocket("ws://localhost:8080/yourAppName/chat");
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");

socket.onmessage = function(event) {
  const msg = document.createElement("div");
  msg.textContent = event.data;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
  const message = input.value;
  if (message.trim() !== "") {
    socket.send(message);
    input.value = "";
  }
}
