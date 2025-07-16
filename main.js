let currentLanguage = 'no';

function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active state of language buttons
    document.querySelectorAll('.language-selector button').forEach(button => {
        button.classList.remove('active');
        if (button.onclick.toString().includes(lang)) {
            button.classList.add('active');
        }
    });
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Clear the form
    this.reset();
    
    // Show success message (you can customize this)
    alert(translations[currentLanguage]['contact-submit-success'] || 'Message sent successfully!');
});

// Initialize the page in Norwegian
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('no');
});