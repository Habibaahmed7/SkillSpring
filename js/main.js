(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Courses carousel
    $(".courses-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });


    // Related carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", () => {
    const messagesDiv = document.getElementById("messages");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const chatbot = document.getElementById("chatbot");
    const chatToggle = document.getElementById("chat-toggle");
    const closeChatbot = document.getElementById("close-chatbot");
  
    const botResponses = {
      "hello": "Hi there! How can I help you today?",
      "how are you?": "I'm just a bot, but I'm doing great! How about you?",
      "bye": "Goodbye! Have a great day!",
      "default": "I'm sorry, I didn't understand that. Could you please rephrase?"
    };
  
    const appendMessage = (message, sender) => {
      const messageDiv = document.createElement("div");
      messageDiv.className = sender === "user" ? "user-message" : "bot-message";
      messageDiv.textContent = message;
      messagesDiv.appendChild(messageDiv);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    };
  
    // إرسال رسالة
    sendBtn.addEventListener("click", () => {
      const userMessage = chatInput.value.trim();
      if (userMessage) {
        appendMessage(userMessage, "user");
        chatInput.value = "";
  
        const botMessage = botResponses[userMessage.toLowerCase()] || botResponses["default"];
        setTimeout(() => appendMessage(botMessage, "bot"), 500);
      }
    });
  
    // فتح وإغلاق الشات بوت عند النقر على زر الفتح
    chatToggle.addEventListener("click", () => {
      chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
    });
  
    // غلق الشات بوت عند النقر على زر الغلق
    closeChatbot.addEventListener("click", () => {
      chatbot.style.display = "none";
    });
  });
  