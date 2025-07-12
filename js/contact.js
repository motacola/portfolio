// Enhanced contact page script with proper form handling
document.addEventListener("DOMContentLoaded", function() {
    try {
        const contactForm = document.getElementById("contactForm");
        
        if (contactForm) {
            // Form validation patterns
            const validationRules = {
                name: {
                    required: true,
                    minLength: 2,
                    pattern: /^[a-zA-Z\s'-]+$/,
                    message: "Please enter a valid name (letters, spaces, hyphens, and apostrophes only)"
                },
                email: {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                },
                subject: {
                    required: true,
                    minLength: 3,
                    maxLength: 100,
                    message: "Subject must be between 3 and 100 characters"
                },
                message: {
                    required: true,
                    minLength: 10,
                    maxLength: 1000,
                    message: "Message must be between 10 and 1000 characters"
                }
            };
            
            // Real-time validation
            Object.keys(validationRules).forEach(fieldName => {
                const field = document.getElementById(fieldName);
                if (field) {
                    field.addEventListener('blur', () => validateField(field, validationRules[fieldName]));
                    field.addEventListener('input', () => clearFieldError(field));
                }
            });
            
            // Form submission handler
            contactForm.addEventListener("submit", function(event) {
                event.preventDefault();
                
                // Clear previous messages
                clearMessages();
                
                // Validate all fields
                let isValid = true;
                const formData = {};
                
                Object.keys(validationRules).forEach(fieldName => {
                    const field = document.getElementById(fieldName);
                    if (field) {
                        const fieldValid = validateField(field, validationRules[fieldName]);
                        if (!fieldValid) isValid = false;
                        formData[fieldName] = field.value.trim();
                    }
                });
                
                if (isValid) {
                    submitForm(formData);
                } else {
                    showMessage("Please correct the errors above.", "error");
                    // Focus on first invalid field
                    const firstError = contactForm.querySelector('.form-group input:invalid, .form-group textarea:invalid');
                    if (firstError) firstError.focus();
                }
            });
            
            // Validate individual field
            function validateField(field, rules) {
                const value = field.value.trim();
                let isValid = true;
                let errorMessage = '';
                
                // Required validation
                if (rules.required && !value) {
                    isValid = false;
                    errorMessage = `${field.labels[0]?.textContent || field.name} is required`;
                }
                
                // Length validation
                if (value && rules.minLength && value.length < rules.minLength) {
                    isValid = false;
                    errorMessage = `${field.labels[0]?.textContent || field.name} must be at least ${rules.minLength} characters`;
                }
                
                if (value && rules.maxLength && value.length > rules.maxLength) {
                    isValid = false;
                    errorMessage = `${field.labels[0]?.textContent || field.name} must be no more than ${rules.maxLength} characters`;
                }
                
                // Pattern validation
                if (value && rules.pattern && !rules.pattern.test(value)) {
                    isValid = false;
                    errorMessage = rules.message;
                }
                
                // Update field state
                if (isValid) {
                    field.classList.remove('invalid');
                    field.classList.add('valid');
                    removeFieldError(field);
                } else {
                    field.classList.remove('valid');
                    field.classList.add('invalid');
                    showFieldError(field, errorMessage);
                }
                
                return isValid;
            }
            
            // Show field-specific error
            function showFieldError(field, message) {
                removeFieldError(field);
                const errorDiv = document.createElement('div');
                errorDiv.className = 'field-error';
                errorDiv.style.cssText = 'color: var(--accent-color); font-size: 0.875rem; margin-top: 0.25rem;';
                errorDiv.textContent = message;
                field.parentNode.appendChild(errorDiv);
            }
            
            // Remove field-specific error
            function removeFieldError(field) {
                const existingError = field.parentNode.querySelector('.field-error');
                if (existingError) {
                    existingError.remove();
                }
            }
            
            // Clear field error on input
            function clearFieldError(field) {
                field.classList.remove('invalid');
                removeFieldError(field);
            }
            
            // Submit form (simulate submission)
            async function submitForm(formData) {
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                try {
                    // Disable submit button and show loading state
                    submitButton.disabled = true;
                    submitButton.textContent = 'Sending...';
                    
                    // Simulate API call (replace with actual endpoint)
                    await simulateFormSubmission(formData);
                    
                    // Success
                    showMessage("Thank you for your message! I will get back to you soon.", "success");
                    contactForm.reset();
                    
                    // Clear validation classes
                    contactForm.querySelectorAll('input, textarea').forEach(field => {
                        field.classList.remove('valid', 'invalid');
                    });
                    
                    // Track form submission (replace with your analytics)
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_submit', {
                            'event_category': 'Contact',
                            'event_label': 'Contact Form'
                        });
                    }
                    
                } catch (error) {
                    console.error('Form submission error:', error);
                    showMessage("Sorry, there was an error sending your message. Please try again or contact me directly.", "error");
                } finally {
                    // Re-enable submit button
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }
            }
            
            // Simulate form submission (replace with actual implementation)
            function simulateFormSubmission(formData) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // Simulate success (90% of the time)
                        if (Math.random() > 0.1) {
                            resolve();
                        } else {
                            reject(new Error('Simulated network error'));
                        }
                    }, 2000);
                });
            }
            
            // Show general message
            function showMessage(text, type) {
                clearMessages();
                const messageDiv = document.createElement('div');
                messageDiv.className = `form-${type}`;
                messageDiv.textContent = text;
                contactForm.insertBefore(messageDiv, contactForm.firstChild);
                
                // Auto-remove success messages after 5 seconds
                if (type === 'success') {
                    setTimeout(() => {
                        if (messageDiv.parentNode) {
                            messageDiv.remove();
                        }
                    }, 5000);
                }
            }
            
            // Clear all messages
            function clearMessages() {
                const messages = contactForm.querySelectorAll('.form-success, .form-error');
                messages.forEach(msg => msg.remove());
            }
        }
        
        // Social links tracking
        const socialLinks = document.querySelectorAll('.social-link, .social-links a');
        socialLinks.forEach(link => {
            link.addEventListener('click', function() {
                const platform = this.href.includes('linkedin') ? 'LinkedIn' : 'Social';
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'social_click', {
                        'event_category': 'Social',
                        'event_label': platform
                    });
                }
            });
        });
        
    } catch (error) {
        console.error('Error initializing contact page:', error);
        
        // Fallback simple form handling
        const contactForm = document.getElementById("contactForm");
        if (contactForm) {
            contactForm.addEventListener("submit", function(event) {
                event.preventDefault();
                
                const name = document.getElementById("name")?.value;
                const email = document.getElementById("email")?.value;
                const subject = document.getElementById("subject")?.value;
                const message = document.getElementById("message")?.value;
                
                if (name && email && subject && message) {
                    alert("Thank you for your message! I will get back to you soon.");
                    contactForm.reset();
                } else {
                    alert("Please fill in all fields");
                }
            });
        }
    }
});