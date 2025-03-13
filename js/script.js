// Simple toggle functionality for resource items
document.querySelectorAll('.resource-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
        
        // Change the + to - and vice versa
        const icon = header.querySelector('.resource-icon');
        icon.textContent = item.classList.contains('active') ? '-' : '+';
    });
});

function openPdfOverlay() {
    document.getElementById("pdfOverlay").style.display = "flex";
}
function closePdfOverlay() {
    document.getElementById("pdfOverlay").style.display = "none";
}

// document.querySelectorAll('.resource-header').forEach(item => {
//     item.addEventListener('click', function () {
//         // Close all items
//         document.querySelectorAll('.resource-item').forEach(el => {
//             el.classList.remove('active');
//             el.querySelector('.resource-icon').textContent = '+';
//         });

//         // Open the clicked item
//         this.classList.add('active');
//         this.querySelector('.resource-icon').textContent = '-';
//     });
// });
// Chatbot functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const aiButton = document.querySelector('.ai-btn');
//     const chatTrigger = document.getElementById('chatTrigger');
//     const chatStatus = document.getElementById('chatStatus');
//     const chatOverlay = document.getElementById('chatOverlay');
//     const closeChat = document.getElementById('closeChat');
//     const chatMessages = document.getElementById('chatMessages');
//     const messageInput = document.getElementById('messageInput');
//     const sendMessage = document.getElementById('sendMessage');
    
//     // When AI button is clicked, activate the chat trigger in the corner
//     aiButton.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         // Show the chat button in bottom-right
//         chatTrigger.classList.add('active');
        
//         // Show the status message
//         chatStatus.classList.add('active');
        
//         // Hide status message after 5 seconds
//         setTimeout(() => {
//             chatStatus.classList.remove('active');
//         }, 5000);
        
//         // Add a special message about the Wholesale Sellers Guide
//         addSpecialOption();
//     });
    
//     // Open chat when the chat trigger is clicked
//     chatTrigger.addEventListener('click', function() {
//         chatOverlay.classList.add('active');
        
//         // If this is the first time opening, add welcome messages
//         if (!chatMessages.querySelector('.message')) {
//             setTimeout(() => {
//                 addBotMessage("Welcome to Dominion Mortgage Intelligence. How can I assist you with your lending needs today?");
//             }, 1000);
            
//             setTimeout(() => {
//                 addBotMessage("You can ask me about:<br>• Loan eligibility requirements<br>• Document checklists<br>• Current rates<br>• Application status<br>• Income calculation methods");
//             }, 2500);
//         }
//     });
    
//     // Close chat
//     closeChat.addEventListener('click', function() {
//         chatOverlay.classList.remove('active');
//     });
    
//     // Send message
//     function sendUserMessage() {
//         const message = messageInput.value.trim();
//         if (message) {
//             addUserMessage(message);
//             messageInput.value = '';
            
//             // Show typing indicator
//             showTypingIndicator();
            
//             // Simulate AI response after a delay
//             setTimeout(() => {
//                 hideTypingIndicator();
//                 processUserMessage(message);
//             }, 1500);
//         }
//     }
    
//     // Add special option for accessing Wholesale Sellers Guide
//     function addSpecialOption() {
//         // First open the chat to show this message
//         setTimeout(() => {
//             chatOverlay.classList.add('active');
            
//             setTimeout(() => {
//                 addBotMessage("I notice you're interested in our mortgage offerings. Would you like to view our <a href='#' class='guide-link'>Wholesale Sellers Guide</a>?");
                
//                 // Add click event to the guide link
//                 setTimeout(() => {
//                     document.querySelector('.guide-link').addEventListener('click', function(e) {
//                         e.preventDefault();
//                         chatOverlay.classList.remove('active');
                        
//                         // Scroll to and highlight the Guidelines section
//                         const guidelinesSection = document.querySelector('.resource-item.active');
//                         guidelinesSection.scrollIntoView({ behavior: 'smooth' });
//                         guidelinesSection.style.animation = 'highlight 2s';
//                     });
//                 }, 100);
//             }, 1000);
//         }, 1000);
//     }
    
//     // Process the user's message and return an appropriate response
//     function processUserMessage(message) {
//         const lowercaseMsg = message.toLowerCase();
        
//         // Check for Wholesale Sellers Guide related queries
//         if (lowercaseMsg.includes('guide') || lowercaseMsg.includes('wholesale') || lowercaseMsg.includes('seller')) {
//             addBotMessage("You can access the <a href='#' class='guide-link'>Wholesale Sellers Guide</a> directly from our resources section.");
            
//             // Add click event to the guide link
//             setTimeout(() => {
//                 document.querySelector('.guide-link').addEventListener('click', function(e) {
//                     e.preventDefault();
//                     chatOverlay.classList.remove('active');
                    
//                     // Scroll to and highlight the Guidelines section
//                     const guidelinesSection = document.querySelector('.resource-item.active');
//                     guidelinesSection.scrollIntoView({ behavior: 'smooth' });
//                     guidelinesSection.style.animation = 'highlight 2s';
//                 });
//             }, 100);
//             return;
//         }
        
//         // Simple response logic
//         if (lowercaseMsg.includes('hello') || lowercaseMsg.includes('hi')) {
//             addBotMessage("Hello! How can I help with your mortgage questions today?");
//         } 
//         else if (lowercaseMsg.includes('rates') || lowercaseMsg.includes('interest')) {
//             addBotMessage("Our current rates for DSCR loans start at 5.75% with 2 points. Non-QM rates start at 6.25%. Would you like me to calculate potential payments for a specific loan amount?");
//         }
//         else if (lowercaseMsg.includes('document') || lowercaseMsg.includes('checklist')) {
//             addBotMessage("For most loan programs, you'll need:<br>• Income documentation (2 years)<br>• Bank statements<br>• Property information<br>• Government ID<br>• Proof of insurance<br><br>Would you like the specific checklist for a particular loan program?");
//         }
//         else if (lowercaseMsg.includes('dscr')) {
//             addBotMessage("Our DSCR program requires a minimum debt service coverage ratio of 1.0. We can go as low as 0.75 in some scenarios. The minimum credit score is 640, and we offer loan amounts up to $3M. Would you like more details?");
//         }
//         else if (lowercaseMsg.includes('status') || lowercaseMsg.includes('application')) {
//             addBotMessage("I can help check the status of your client's loan application. Please provide the loan number or client's last name and property address.");
//         }
//         else {
//             addBotMessage("I understand you're asking about " + message + ". I'd be happy to help with this. Could you provide a bit more detail so I can give you the most accurate information?");
//         }
//     }
    
//     // Add user message to chat
//     function addUserMessage(message) {
//         const messageElement = document.createElement('div');
//         messageElement.classList.add('message', 'user-message');
//         messageElement.textContent = message;
//         chatMessages.appendChild(messageElement);
//         chatMessages.scrollTop = chatMessages.scrollHeight;
//     }
    
//     // Add bot message to chat
//     function addBotMessage(message) {
//         const messageElement = document.createElement('div');
//         messageElement.classList.add('message', 'bot-message');
//         messageElement.innerHTML = message;
//         chatMessages.appendChild(messageElement);
//         chatMessages.scrollTop = chatMessages.scrollHeight;
//     }
    
//     // Show typing indicator
//     function showTypingIndicator() {
//         const typingElement = document.createElement('div');
//         typingElement.classList.add('message', 'typing-indicator');
//         typingElement.id = 'typingIndicator';
        
//         for (let i = 0; i < 3; i++) {
//             const dot = document.createElement('div');
//             dot.classList.add('typing-dot');
//             typingElement.appendChild(dot);
//         }
        
//         chatMessages.appendChild(typingElement);
//         chatMessages.scrollTop = chatMessages.scrollHeight;
//     }
    
//     // Hide typing indicator
//     function hideTypingIndicator() {
//         const typingElement = document.getElementById('typingIndicator');
//         if (typingElement) {
//             typingElement.remove();
//         }
//     }
    
//     // Send message on button click
//     sendMessage.addEventListener('click', sendUserMessage);
    
//     // Send message on Enter key
//     messageInput.addEventListener('keypress', function(e) {
//         if (e.key === 'Enter') {
//             sendUserMessage();
//         }
//     });
    
//     // Add highlight animation
//     const style = document.createElement('style');
//     style.textContent = `
//         @keyframes highlight {
//             0%, 100% { background-color: #f9f9f9; }
//             50% { background-color: rgba(139, 195, 74, 0.2); }
//         }
//     `;
//     document.head.appendChild(style);
// });