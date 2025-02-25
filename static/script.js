// static/script.js
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const chatContainer = document.getElementById('chatContainer');
const messageInput = document.querySelector('.message-input');
const sendButton = document.querySelector('.send-button');
const typingIndicator = document.querySelector('.typing-indicator');
const contextInput = document.getElementById('context');
const modeSelect = document.getElementById('mode'); // Add mode selection

// Theme toggling
let isDarkTheme = false;
themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    themeToggle.innerHTML = isDarkTheme ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
});

// Chat functionality
function createMessageElement(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    messageDiv.innerHTML = `
        <div class="avatar">${isUser ? 'U' : 'AI'}</div>
        <div class="message-bubble">${content}</div>
    `;
    
    return messageDiv;
}

function addMessage(content, isUser = false) {
    const messageElement = createMessageElement(content, isUser);
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showTypingIndicator() {
    typingIndicator.style.display = 'block';
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

function fetchBotResponse(userMessage) {
    const context = contextInput.value.trim();
    const mode = modeSelect.value; // Get the selected mode
    console.log("Selected mode:", mode); // Log the selected mode
    showTypingIndicator();
    
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_input: userMessage, context: context, mode: mode }) // Include mode in the request
    })
    .then(response => response.json())
    .then(data => {
        hideTypingIndicator();
        addMessage(data.response);
    })
    .catch(error => {
        hideTypingIndicator();
        console.error('Error:', error);
        addMessage('Sorry, there was an error processing your message.', false);
    });
}

function handleSendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, true);
        messageInput.value = '';
        fetchBotResponse(message);
    }
}

sendButton.addEventListener('click', handleSendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});

// Initial greeting message
setTimeout(() => {
    addMessage("Hello! I'm ChatterBot, your AI assistant. How can I help you today?");
}, 500);
