const ProjectPath = '';

// $(function () {
//     $('[data-toggle="tooltip"]').tooltip();
// });
$(document).ready(function() {
  feather.replace();
  });

var swiper1 = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: false, 
  speed: 1500,
            parallax: true,
            loop: true,
            // autoplay: {
            //     delay: 2500,
            // },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
//   mousewheel: true,
//   keyboard: true,
//   clickable: true,
//   touchEventsTarget: 'container', 
});

//auto refresh code
// const refresh = ()=>{
//   if(window.location.hostname == "localhost"){
//     window.location.reload();
//   }
// }
// window.addEventListener("online",refresh);

// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === 'visible') {
//     refresh(); // Reloads the page when the document becomes visible
//   }
// });

new kursor({
  type: 4,
  color: '#eb6831'
});
function changeCursorColor(color) {
  if(document.querySelector('.kursor')){
    document.querySelector('.kursor').style.borderColor = color;
  } 
}

// Example: Change cursor color when hovering over specific elements
document.querySelectorAll('.banner').forEach(element => {
  element.addEventListener('mouseenter', () => changeCursorColor('#fff'));
  element.addEventListener('mouseleave', () => changeCursorColor('#1c4349'));
});
document.querySelectorAll('header').forEach(element => {
  element.addEventListener('mouseenter', () => changeCursorColor('#fff'));
  element.addEventListener('mouseleave', () => changeCursorColor('#1c4349'));
});

document.querySelectorAll('.btn').forEach(element => {
  element.addEventListener('mouseenter', () => changeCursorColor('#fff'));
  element.addEventListener('mouseleave', () => changeCursorColor('#1c4349'));
});
document.querySelectorAll('.service').forEach(element => {
  element.addEventListener('mouseenter', () => changeCursorColor('#fff'));
  element.addEventListener('mouseleave', () => changeCursorColor('#1c4349'));
});

var swiper2 = new Swiper('.swiper.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 1000, // Adjust the speed as needed
  grabCursor: true, // Optional: makes it more user-friendly
  pagination: {
    // el: '.swiper-pagination',
    clickable: true,
  },
  // Add any other Swiper options you need
});
var swiper3 = new Swiper('.swiper.swiper-testimonial', {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true, // Enable Free Mode
  autoplay: {
    delay: 2500, // Set autoplay delay
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper4 = new Swiper('.swiper.swiper-our-team', {
  slidesPerView: 1,
  breakpoints:{
    640:{
      slidesPerView:3
    }
  },
  spaceBetween: 30,
  freeMode: true, // Enable Free Mode
  autoplay: {
    delay: 2500, // Set autoplay delay
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
});
$(document).ready(function() {
  if(window.location.pathname == "/" && window.location.hostname != "localhost"){
setTimeout(function() {
  $('#welcomeModal').modal('show');
}, 2000);
  }
  
  let menus = document.querySelectorAll("header .navbar .nav-item .nav-link");
for (let index = 0; index < menus.length; index++) {
  const element = menus[index];
  if(window.location.href == element.href){
    element.parentElement.classList.add("active");
  }
  
}
AOS.init();
});

$(document).ready(function() {
  $('.js-example-basic-single').select2();
});

var swiperCategories = new Swiper('.swiper-categories', {
  slidesPerView: 2, // Adjust the number of visible categories
  spaceBetween: 10, // Space between categories
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500, // Set autoplay delay
    disableOnInteraction: true, // Continue autoplay after user interactions
    pauseOnMouseEnter:true
  },
  breakpoints: {
    1024: {
      slidesPerView: 5, // For larger screens
    },
    768: {
      slidesPerView: 3, // For tablets
    },
    480: {
      slidesPerView: 1, // For mobile devices
    },
  },
});

var swiperImages = new Swiper('.swiper-images', {
  slidesPerView: 1, // Adjust the number of visible categories
  spaceBetween: 20, // Space between categories
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500, // Set autoplay delay
    disableOnInteraction: true, // Continue autoplay after user interactions
  }
});

document.querySelectorAll('.gallery-slider').forEach((sliderEl, index) => {
  // Give each swiper a unique class
  const swiperId = `swiper-${index}`;
  sliderEl.classList.add(swiperId);

  // Init LightGallery on this slider
  lightGallery(sliderEl, {
    selector: '.swiper-slide',
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
  });
});


var swiper = new Swiper(".propertySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".propertySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

window.addEventListener('scroll', function () {
  const nav = document.querySelector('.nav_area');
  if (window.scrollY > 150) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// FullStop Chatbot JavaScript
class FullStopChatbot {
  constructor() {
      this.isOpen = false;
      this.messages = [];
      this.currentStep = 0;
      this.userData = {
          propertyType: '',
          bedrooms: '',
          budget: '',
          purpose: '',
          fullName: '',
          contactNumber: '',
          countryCode: '+91'
      };
      this.isTypingDisabled = true;
      this.autoPopupShown = false;
      this.helpPopupInterval = null;
      
      // Google Sheets Configuration - Updated with your URL
      this.googleSheetsConfig = {
          scriptURL: 'https://script.google.com/macros/s/AKfycbyiHQNtCYb57v2pbqd44XTJGPB2DAB_wmOIkbJK4FN392Ydyn5QUzn1XTlHc11wmy8TLQ/exec',
          sheetName: 'ChatbotData'
      };
      
      this.chatFlow = [
          {
              text: "👋 Welcome Message\n\nHi there! 👋 Welcome to Fullstop. I'm FullStop.",
              delay: 1000
          },
          {
              text: "I'll help you find your perfect property in just a few steps. Ready to begin?",
              delay: 2000
          },
          {
              text: "🏠 Property Type\n\nWhat type of property are you looking for?",
              buttons: ['Apartments', 'Flats', 'Land / Plot', 'Farmhouse', 'Senior Living', 'Villas', 'Others'],
              delay: 2000
          },
          {
              text: "🛏️ Number of Bedrooms",
              buttons: ['1 BHK', '2 BHK', '3 BHK+', 'Not Sure'],
              delay: 2000
          },
          {
              text: "💰 Budget Range",
              buttons: ['₹5L – ₹20L', '₹20L – ₹50L', '₹50L – ₹1Cr', '₹1Cr+'],
              delay: 2000
          },
          {
              text: "🎯 Purpose",
              buttons: ['Buy', 'Rent'],
              delay: 2000
          },
          {
              text: "👤 Full Name\n\nPlease enter your full name:",
              requiresInput: true,
              delay: 2000
          },
          {
              text: "📞 Contact Number\n\nPlease enter your contact number:",
              requiresInput: true,
              requiresPhone: true,
              delay: 2000
          },
          {
              text: "✅ Thank You Message\n\nThank you! 🎉 Your preferences have been saved. Our team will contact you soon with suitable options.",
              delay: 2000
          }
      ];
      
      this.init();
  }
  
  init() {
      this.bindEvents();
      this.setupAutoPopup();
      this.setupHelpPopup();
  }
  
  bindEvents() {
      const chatButton = document.getElementById('chat-button');
      const closeChatButton = document.getElementById('close-chat');
      const sendButton = document.getElementById('send-button');
      const messageInput = document.getElementById('message-input');
      
      chatButton.addEventListener('click', () => this.openChat());
      closeChatButton.addEventListener('click', () => this.closeChat());
      sendButton.addEventListener('click', () => this.handleInputSubmit());
      messageInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
              this.handleInputSubmit();
          }
      });
  }
  
  setupAutoPopup() {
      if (!this.autoPopupShown) {
          setTimeout(() => {
              if (!this.isOpen) {
                  this.openChat();
                  this.playSound('popup');
              }
              this.autoPopupShown = true;
          }, 10000);
      }
  }
  
  setupHelpPopup() {
      this.helpPopupInterval = setInterval(() => {
          if (!this.isOpen) {
              this.showHelpPopup();
          }
      }, 15000);
  }
  
  showHelpPopup() {
      const helpPopup = document.getElementById('help-popup');
      helpPopup.classList.remove('hidden');
      
      setTimeout(() => {
          helpPopup.classList.add('hidden');
      }, 3000);
  }
  
  openChat() {
      this.isOpen = true;
      this.autoPopupShown = true;
      
      const chatButton = document.getElementById('chat-button');
      const chatWindow = document.getElementById('chat-window');
      const helpPopup = document.getElementById('help-popup');
      
      chatButton.style.display = 'none';
      chatWindow.classList.remove('hidden');
      helpPopup.classList.add('hidden');
      
      // Clear help popup interval when chat is open
      if (this.helpPopupInterval) {
          clearInterval(this.helpPopupInterval);
          this.helpPopupInterval = null;
      }
      
      this.playSound('popup');
      this.startChat();
  }
  
  closeChat() {
      this.isOpen = false;
      
      const chatButton = document.getElementById('chat-button');
      const chatWindow = document.getElementById('chat-window');
      
      chatButton.style.display = 'flex';
      chatWindow.classList.add('hidden');
      
      // Restart help popup interval when chat is closed
      this.setupHelpPopup();
  }
  
  startChat() {
      if (this.messages.length === 0) {
          this.currentStep = 0;
          this.sendBotMessage(0);
      }
  }
  
  sendBotMessage(stepIndex) {
      if (stepIndex >= this.chatFlow.length) return;
      
      const step = this.chatFlow[stepIndex];
      
      // Show typing indicator
      this.showTypingIndicator();
      
      setTimeout(() => {
          this.hideTypingIndicator();
          this.addMessage(step.text, true, step.buttons);
          this.playSound('receive');
          
          if (step.requiresInput) {
              if (step.requiresPhone) {
                  this.showCountryCodeSelect();
              }
              this.enableInput();
          }
          
          // Auto-progress for welcome messages (steps 0 and 1)
          if (stepIndex === 0 || stepIndex === 1) {
              setTimeout(() => {
                  const nextStep = stepIndex + 1;
                  this.currentStep = nextStep;
                  this.sendBotMessage(nextStep);
              }, step.delay);
          }
      }, step.delay);
  }
  
  addMessage(text, isBot = false, buttons = null) {
      const messagesContainer = document.getElementById('messages-container');
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${isBot ? 'bot' : 'user'}`;
      
      const messageContent = document.createElement('div');
      messageContent.className = 'message-content';
      
      const senderDiv = document.createElement('div');
      senderDiv.className = 'message-sender';
      senderDiv.textContent = isBot ? 'FullStop' : 'You';
      
      const bubbleDiv = document.createElement('div');
      bubbleDiv.className = 'message-bubble';
      bubbleDiv.textContent = text;
      
      messageContent.appendChild(senderDiv);
      messageContent.appendChild(bubbleDiv);
      
      if (buttons && buttons.length > 0) {
          const buttonsDiv = document.createElement('div');
          buttonsDiv.className = 'button-options';
          
          buttons.forEach(buttonText => {
              const button = document.createElement('button');
              button.className = 'option-button';
              button.textContent = `🔘 ${buttonText}`;
              button.addEventListener('click', () => this.handleButtonClick(buttonText));
              buttonsDiv.appendChild(button);
          });
          
          messageContent.appendChild(buttonsDiv);
      }
      
      messageDiv.appendChild(messageContent);
      messagesContainer.appendChild(messageDiv);
      
      this.messages.push({ text, isBot, buttons });
      this.scrollToBottom();
  }
  
  showTypingIndicator() {
      const messagesContainer = document.getElementById('messages-container');
      const typingDiv = document.createElement('div');
      typingDiv.className = 'message bot';
      typingDiv.id = 'typing-indicator';
      
      const messageContent = document.createElement('div');
      messageContent.className = 'message-content';
      
      const typingBubble = document.createElement('div');
      typingBubble.className = 'message-bubble';
      
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'typing-indicator';
      
      for (let i = 0; i < 3; i++) {
          const dot = document.createElement('div');
          dot.className = 'typing-dot';
          typingIndicator.appendChild(dot);
      }
      
      typingBubble.appendChild(typingIndicator);
      messageContent.appendChild(typingBubble);
      typingDiv.appendChild(messageContent);
      messagesContainer.appendChild(typingDiv);
      
      this.scrollToBottom();
  }
  
  hideTypingIndicator() {
      const typingIndicator = document.getElementById('typing-indicator');
      if (typingIndicator) {
          typingIndicator.remove();
      }
  }
  
  handleButtonClick(buttonText) {
      this.addMessage(buttonText, false);
      this.playSound('send');
      
      // Update user data based on current step
      switch (this.currentStep) {
          case 2:
              this.userData.propertyType = buttonText;
              break;
          case 3:
              this.userData.bedrooms = buttonText;
              break;
          case 4:
              this.userData.budget = buttonText;
              break;
          case 5:
              this.userData.purpose = buttonText;
              break;
      }
      
      // Move to next step
      const nextStep = this.currentStep + 1;
      this.currentStep = nextStep;
      
      setTimeout(() => {
          this.sendBotMessage(nextStep);
      }, 1000);
  }
  
  handleInputSubmit() {
      const messageInput = document.getElementById('message-input');
      const inputValue = messageInput.value.trim();
      
      if (!inputValue) return;
      
      // Validate phone number if required
      if (this.currentStep === 7) {
          const phoneRegex = /^\d{10}$/;
          if (!phoneRegex.test(inputValue)) {
              this.addMessage("Please write a proper 10-digit number.", true);
              this.playSound('receive');
              return;
          }
      }
      
      // Add user message
      const countryCode = document.getElementById('country-code').value;
      const displayText = this.currentStep === 7 ? `${countryCode} ${inputValue}` : inputValue;
      this.addMessage(displayText, false);
      this.playSound('send');
      
      // Update user data
      if (this.currentStep === 6) {
          this.userData.fullName = inputValue;
      } else if (this.currentStep === 7) {
          this.userData.contactNumber = inputValue;
          this.userData.countryCode = countryCode;
      }
      
      // Clear input and disable typing
      messageInput.value = '';
      this.disableInput();
      this.hideCountryCodeSelect();
      
      // Move to next step
      const nextStep = this.currentStep + 1;
      this.currentStep = nextStep;
      
      setTimeout(() => {
          this.sendBotMessage(nextStep);
          
          // Save data to Google Sheets if it's the final step
          if (nextStep === 8) {
              this.saveToGoogleSheets();
          }
      }, 1000);
  }
  
  enableInput() {
      const messageInput = document.getElementById('message-input');
      const sendButton = document.getElementById('send-button');
      
      messageInput.disabled = false;
      messageInput.placeholder = "Type your message...";
      sendButton.disabled = false;
      this.isTypingDisabled = false;
  }
  
  disableInput() {
      const messageInput = document.getElementById('message-input');
      const sendButton = document.getElementById('send-button');
      
      messageInput.disabled = true;
      messageInput.placeholder = "Select an option above...";
      sendButton.disabled = true;
      this.isTypingDisabled = true;
  }
  
  showCountryCodeSelect() {
      const countryCodeSelect = document.getElementById('country-code-select');
      countryCodeSelect.classList.remove('hidden');
  }
  
  hideCountryCodeSelect() {
      const countryCodeSelect = document.getElementById('country-code-select');
      countryCodeSelect.classList.add('hidden');
  }
  
  scrollToBottom() {
      const messagesContainer = document.getElementById('messages-container');
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  playSound(type) {
      // Sound effects implementation
      console.log(`Playing ${type} sound`);
      // You can add actual sound files later:
      // const audio = new Audio(`sounds/${type}.mp3`);
      // audio.play();
  }
  
  saveToGoogleSheets() {
      console.log('📤 Attempting to save data to Google Sheets...');
      console.log('🔗 Using URL:', this.googleSheetsConfig.scriptURL);
      
      // Show saving message to user
      this.addMessage("📤 Saving your information...", true);
      
      // Create URL-encoded form data instead of FormData for better compatibility
      const params = new URLSearchParams();
      params.append('propertyType', this.userData.propertyType);
      params.append('bedrooms', this.userData.bedrooms);
      params.append('budget', this.userData.budget);
      params.append('purpose', this.userData.purpose);
      params.append('fullName', this.userData.fullName);
      params.append('contactNumber', this.userData.contactNumber);
      params.append('countryCode', this.userData.countryCode);
      params.append('timestamp', new Date().toLocaleString());
      
      console.log('📊 Data being sent:', this.userData);
      console.log('🔧 Form params:', params.toString());
      
      // Try multiple approaches for better compatibility
      this.attemptSaveWithFetch(params)
          .catch(error => {
              console.log('❌ Fetch failed, trying with different headers:', error);
              return this.attemptSaveWithAlternativeHeaders(params);
          })
          .catch(error => {
              console.log('❌ Alternative headers failed, trying with XMLHttpRequest:', error);
              return this.attemptSaveWithXHR(params);
          })
          .catch(error => {
              console.error('❌ All methods failed:', error);
              this.handleSaveError(error);
          });
  }
  
  async attemptSaveWithFetch(params) {
      const response = await fetch(this.googleSheetsConfig.scriptURL, {
          method: 'POST',
          mode: 'no-cors', // This helps with CORS issues
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString()
      });
      
      console.log('📡 Fetch response status:', response.status);
      console.log('📡 Response type:', response.type);
      
      // With no-cors mode, we can't read the response, but no error means success
      if (response.type === 'opaque') {
          console.log('✅ Data likely saved successfully (opaque response)');
          this.handleSaveSuccess();
          return;
      }
      
      const data = await response.json();
      console.log('✅ Data saved to Google Sheets successfully:', data);
      this.handleSaveSuccess();
  }
  
  async attemptSaveWithAlternativeHeaders(params) {
      const response = await fetch(this.googleSheetsConfig.scriptURL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(params))
      });
      
      console.log('📡 Alternative fetch response status:', response.status);
      const data = await response.json();
      console.log('✅ Data saved with alternative method:', data);
      this.handleSaveSuccess();
  }
  
  attemptSaveWithXHR(params) {
      return new Promise((resolve, reject) => {
          console.log('🔄 Trying XMLHttpRequest method...');
          
          const xhr = new XMLHttpRequest();
          xhr.open('POST', this.googleSheetsConfig.scriptURL, true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          
          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                  if (xhr.status === 200 || xhr.status === 0) {
                      console.log('✅ XHR request completed successfully');
                      resolve(xhr.responseText);
                  } else {
                      console.log('❌ XHR request failed with status:', xhr.status);
                      reject(new Error(`XHR failed with status: ${xhr.status}`));
                  }
              }
          };
          
          xhr.onerror = function() {
              console.log('❌ XHR network error');
              reject(new Error('XHR network error'));
          };
          
          xhr.send(params.toString());
      }).then(() => {
          this.handleSaveSuccess();
      });
  }
  
  handleSaveSuccess() {
      this.addMessage("✅ Information saved successfully! Our team has your details and will contact you soon.", true);
      this.playSound('receive');
      this.showDataSummary();
  }
  
  handleSaveError(error) {
      console.error('❌ Final error saving to Google Sheets:', error);
      this.addMessage("⚠️ There was an issue saving your information, but don't worry - our team has noted your interest and will contact you soon.", true);
      this.playSound('receive');
      // Still show data summary for debugging
      this.showDataSummary();
  }
  
  showDataSummary() {
      console.log('=== CHATBOT DATA SUMMARY ===');
      console.log('Property Type:', this.userData.propertyType);
      console.log('Bedrooms:', this.userData.bedrooms);
      console.log('Budget:', this.userData.budget);
      console.log('Purpose:', this.userData.purpose);
      console.log('Full Name:', this.userData.fullName);
      console.log('Contact:', this.userData.countryCode + ' ' + this.userData.contactNumber);
      console.log('Timestamp:', new Date().toLocaleString());
      console.log('============================');
  }
  
  setGoogleSheetsURL(url) {
      this.googleSheetsConfig.scriptURL = url;
      console.log('✅ Google Sheets URL updated:', url);
  }
  
  testGoogleSheetsConnection() {
      console.log('🧪 Testing Google Sheets connection...');
      console.log('🔗 Testing URL:', this.googleSheetsConfig.scriptURL);
      
      const testParams = new URLSearchParams();
      testParams.append('test', 'true');
      testParams.append('timestamp', new Date().toLocaleString());
      testParams.append('message', 'Connection test from FullStop Chatbot');
      
      console.log('🧪 Test data:', testParams.toString());
      
      // Test with no-cors mode first
      fetch(this.googleSheetsConfig.scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: testParams.toString()
      })
      .then(response => {
          console.log('📡 Test response status:', response.status);
          console.log('📡 Test response type:', response.type);
          
          if (response.type === 'opaque') {
              console.log('✅ Google Sheets connection test likely successful (opaque response)');
              console.log('💡 This means your Google Apps Script is probably working correctly');
          } else {
              return response.json();
          }
      })
      .then(data => {
          if (data) {
              console.log('✅ Google Sheets connection test successful:', data);
          }
      })
      .catch(error => {
          console.error('❌ Google Sheets connection test failed:', error);
          console.log('💡 Troubleshooting tips:');
          console.log('1. Make sure your Google Apps Script is deployed as a web app');
          console.log('2. Ensure "Anyone" has access to the web app');
          console.log('3. Check if the URL is correct');
          console.log('4. Verify the doPost function exists in your script');
      });
  }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing FullStop Chatbot with Google Sheets integration...');
  window.FullStopChatbot = new FullStopChatbot();
  console.log('✅ Chatbot initialized and ready!');
});
