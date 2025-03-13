const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");
const chatbotToggler = document.querySelector("#chatbot-toggler");
const closeChatbot = document.querySelector("#close-chatbot");

// API Endpoint
const API_URL = "https://n8n-prod.onrender.com/webhook/wholesale-query";

// Create message element
const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
};

// Send message to chatbot API
const sendMessageToAPI = async (userMessage, incomingMessageDiv) => {
    const messageElement = incomingMessageDiv.querySelector(".message-text");
    
    try {
        let response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: userMessage })
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        let data = await response.text();
        let botReply = data || "Sorry, I didn't understand that.";
        
        messageElement.innerHTML = botReply; // Render response as HTML
    } catch (error) {
        console.error("Error fetching chatbot response:", error);
        messageElement.innerText = "Error connecting to chatbot service.";
        messageElement.style.color = "#ff0000";
    } finally {
        incomingMessageDiv.classList.remove("thinking");
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    }
};

// Handle outgoing user messages
const handleOutgoingMessage = (e) => {
    e.preventDefault();
    const userMessage = messageInput.value.trim();
    if (!userMessage) return;

    messageInput.value = "";
    
    const outgoingMessageDiv = createMessageElement(
        `<div class="message-text">${userMessage}</div>`,
        "user-message"
    );
    chatBody.appendChild(outgoingMessageDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

    // Simulate bot response with thinking indicator
    setTimeout(() => {
        const incomingMessageDiv = createMessageElement(
            `<img class="bot-avatar" src="./images/robotic.png" alt="Chatbot Logo" width="50" height="50">
            <div class="message-text">
                <div class="thinking-indicator">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>`,
            "bot-message", "thinking"
        );
        chatBody.appendChild(incomingMessageDiv);
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
        sendMessageToAPI(userMessage, incomingMessageDiv);
    }, 600);
};

// Handle Enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        handleOutgoingMessage(e);
    }
});

// Send message on button click
sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e));

// Toggle chatbot visibility
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
closeChatbot.addEventListener("click", () => document.body.classList.remove("show-chatbot"));

// Select the guide button
const guideBtn = document.querySelector(".guide-btn");

// Add click event listener to open chatbot
guideBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default download behavior if needed
    document.body.classList.add("show-chatbot"); // Open chatbot
});

function togglePdfViewer() {
    let pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.style.display = pdfViewer.style.display === "none" || pdfViewer.style.display === "" ? "block" : "none";
}

