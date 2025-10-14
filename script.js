// JavaScript for Griya Kost Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Room booking functionality
    const bookingButtons = document.querySelectorAll('.btn-book');
    
    bookingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const roomCard = this.closest('.room-card');
            const roomTitle = roomCard.querySelector('.room-title').textContent;
            const roomPrice = roomCard.querySelector('.price-amount').textContent;
            
            // Scroll to booking form
            const bookingSection = document.querySelector('#contact');
            bookingSection.scrollIntoView({ behavior: 'smooth' });
            
            // Pre-fill room type in form
            setTimeout(() => {
                const roomSelect = document.querySelector('select[required]');
                if (roomSelect) {
                    // Map room titles to select options
                    const roomMapping = {
                        'Kamar Premium AC': 'premium',
                        'Kamar Standard': 'standard',
                        'Kamar Ekonomis': 'ekonomis'
                    };
                    
                    const optionValue = roomMapping[roomTitle];
                    if (optionValue) {
                        roomSelect.value = optionValue;
                    }
                }
                
                // Show notification
                showNotification(`Silakan lengkapi form booking untuk ${roomTitle}`, 'info');
            }, 1000);
        });
    });

    // Room detail functionality
    const detailButtons = document.querySelectorAll('.btn-detail');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const roomCard = this.closest('.room-card');
            const roomTitle = roomCard.querySelector('.room-title').textContent;
            const roomDescription = roomCard.querySelector('.room-description').textContent;
            const roomPrice = roomCard.querySelector('.price-amount').textContent;
            const features = Array.from(roomCard.querySelectorAll('.room-features .feature-item span')).map(span => span.textContent);
            
            showRoomModal(roomTitle, roomDescription, roomPrice, features);
        });
    });

    // Booking form submission
    const bookingForm = document.querySelector('#bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Validate required fields
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (!isValid) {
                showNotification('Mohon lengkapi semua field yang wajib diisi', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Mengirim...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Create WhatsApp message
                const name = this.querySelector('input[type="text"]').value;
                const phone = this.querySelector('input[type="tel"]').value;
                const roomType = this.querySelector('select').value;
                const checkIn = this.querySelector('input[type="date"]').value;
                const message = this.querySelector('textarea').value;
                
                const whatsappMessage = createWhatsAppMessage(name, phone, roomType, checkIn, message);
                
                // Open WhatsApp
                window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                
                // Show success message
                showNotification('Booking request berhasil dikirim! Anda akan diarahkan ke WhatsApp.', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Quick action buttons
    const quickActionButtons = document.querySelectorAll('.quick-actions .btn');
    
    quickActionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            
            if (action.includes('WhatsApp')) {
                window.open('https://wa.me/6281234567890?text=Halo, saya tertarik dengan Griya Kost. Bisa minta informasi lebih lanjut?', '_blank');
            } else if (action.includes('Telepon')) {
                window.open('tel:+6231234567890');
            } else if (action.includes('Kunjungan')) {
                // Scroll to booking form
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                showNotification('Silakan isi form booking untuk jadwalkan kunjungan', 'info');
            }
        });
    });

    // Floating WhatsApp button
    const floatingWhatsApp = document.querySelector('.floating-whatsapp .btn');
    if (floatingWhatsApp) {
        floatingWhatsApp.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://wa.me/6281234567890?text=Halo, saya tertarik dengan Griya Kost. Bisa minta informasi lebih lanjut?', '_blank');
        });
    }

    // Room availability animation
    const availabilityDots = document.querySelectorAll('.availability-dot');
    availabilityDots.forEach(dot => {
        setInterval(() => {
            dot.style.opacity = dot.style.opacity === '0.5' ? '1' : '0.5';
        }, 1000);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection && window.innerWidth > 768) {
            const rate = scrolled * -0.3;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });

    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Room card hover effects
    const roomCards = document.querySelectorAll('.room-card');
    
    roomCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Facility card animations
    const facilityCards = document.querySelectorAll('.facility-card');
    
    facilityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.facility-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.facility-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'btn btn-primary position-fixed';
    backToTopBtn.style.cssText = `
        bottom: 100px;
        right: 30px;
        z-index: 999;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: none;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Back to top functionality
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Real-time availability update simulation
    function updateAvailability() {
        const availableCount = document.querySelector('.indicator.available');
        const occupiedCount = document.querySelector('.indicator.occupied');
        
        if (availableCount && occupiedCount) {
            // Simulate random availability changes
            const available = Math.floor(Math.random() * 4) + 1;
            const occupied = 7 - available;
            
            availableCount.innerHTML = `<i class="fas fa-circle text-success me-1"></i>${available} Tersedia`;
            occupiedCount.innerHTML = `<i class="fas fa-circle text-danger me-1"></i>${occupied} Terisi`;
        }
    }

    // Update availability every 30 seconds
    setInterval(updateAvailability, 30000);

    // Form validation enhancement
    const formInputs = document.querySelectorAll('.form-control, .form-select');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
            }
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid') && this.value.trim()) {
                this.classList.remove('is-invalid');
            }
        });
    });

    // Console welcome message
    console.log(`
    🏠 Griya Kost - Website Bisnis Kos
    ================================
    Website berhasil dimuat!
    Terima kasih telah mengunjungi website kami.
    
    Untuk booking dan informasi:
    📱 WhatsApp: +62 812-3456-7890
    📞 Telepon: +62 31-1234-5678
    📧 Email: info@griyakost.com
    
    Alamat: JL. Gunung Anyar Tambak 4 gg Jambu KAV 109
    `);
});

// Utility Functions

// Create WhatsApp message
function createWhatsAppMessage(name, phone, roomType, checkIn, message) {
    const roomTypes = {
        'premium': 'Premium AC (Rp 1.200.000/bulan)',
        'standard': 'Standard (Rp 800.000/bulan)',
        'ekonomis': 'Ekonomis (Rp 600.000/bulan)'
    };
    
    const selectedRoom = roomTypes[roomType] || roomType;
    
    return `Halo Griya Kost! 👋

Saya ingin booking kamar kos dengan detail berikut:

👤 Nama: ${name}
📱 No. HP: ${phone}
🏠 Tipe Kamar: ${selectedRoom}
📅 Tanggal Masuk: ${checkIn || 'Segera'}
💬 Pesan: ${message || 'Tidak ada pesan tambahan'}

Mohon informasi lebih lanjut mengenai:
- Ketersediaan kamar
- Proses booking
- Persyaratan yang diperlukan
- Jadwal kunjungan

Terima kasih! 🙏`;
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const typeClasses = {
        'success': 'alert-success',
        'error': 'alert-danger',
        'warning': 'alert-warning',
        'info': 'alert-info'
    };
    
    notification.className = `alert ${typeClasses[type]} alert-dismissible fade show position-fixed`;
    notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Show room modal
function showRoomModal(title, description, price, features) {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                 class="img-fluid rounded mb-3" alt="${title}">
                        </div>
                        <div class="col-md-6">
                            <h4 class="text-primary fw-bold mb-3">${price}/bulan</h4>
                            <p class="text-muted mb-3">${description}</p>
                            <h6 class="fw-bold mb-2">Fasilitas:</h6>
                            <ul class="list-unstyled">
                                ${features.map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                    <button type="button" class="btn btn-primary" onclick="document.querySelector('#contact').scrollIntoView({behavior: 'smooth'}); bootstrap.Modal.getInstance(this.closest('.modal')).hide();">
                        <i class="fas fa-calendar-check me-2"></i>Booking Sekarang
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
    
    // Remove modal from DOM when hidden
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

// CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .lazy {
        filter: blur(5px);
        transition: filter 0.3s;
    }
    
    .lazy.loaded {
        filter: blur(0);
    }
    
    .is-invalid {
        border-color: #dc3545 !important;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
    }
`;

document.head.appendChild(style);