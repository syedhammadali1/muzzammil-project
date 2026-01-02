/**
 * SchoolsInfo - Main JavaScript File
 * Single Page Application with all functionality
 * 
 * Features:
 * - School data management
 * - Search and filter
 * - Favourites (LocalStorage)
 * - Compare schools (max 2)
 * - Interactive map (Google Maps / Leaflet fallback)
 * - Feedback/Rating system
 * - Modal for school details
 */

/* ========================================
   GLOBAL VARIABLES & CONSTANTS
   ======================================== */

// Schools data with all required information
const schoolsData = [
    {
        id: 1,
        name: "Greenfield International School",
        area: "Downtown Area",
        location: "Downtown Area",
        address: "123 Main Street, Downtown",
        coordinates: { lat: 40.7128, lng: -74.0060 },
        images: [
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
        ],
        capacity: 1200,
        facilities: {
            library: true,
            canteen: true,
            boarding: false
        },
        sports: ["Football", "Basketball", "Cricket", "Swimming", "Athletics"],
        summary: "A premier educational institution offering world-class facilities and comprehensive education. Established in 1995, Greenfield International School has been at the forefront of academic excellence.",
        admissionStatus: "Available",
        detailedDocLink: "docs/greenfield_international_school.docx"
    },
    {
        id: 2,
        name: "Sunshine Public School",
        area: "East Side",
        location: "East Side",
        address: "456 Oak Avenue, East Side",
        coordinates: { lat: 40.7589, lng: -73.9851 },
        images: [
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800"
        ],
        capacity: 800,
        facilities: {
            library: true,
            canteen: true,
            boarding: true
        },
        sports: ["Football", "Basketball", "Swimming", "Tennis"],
        summary: "A well-established school providing quality education with modern facilities. Sunshine Public School focuses on holistic development of students.",
        admissionStatus: "Limited",
        detailedDocLink: "docs/sunshine_public_school.docx"
    },
    {
        id: 3,
        name: "Riverside Academy",
        area: "Riverside",
        location: "Riverside",
        address: "789 River Road, Riverside",
        coordinates: { lat: 40.7484, lng: -73.9857 },
        images: [
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
            "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800"
        ],
        capacity: 1500,
        facilities: {
            library: true,
            canteen: true,
            boarding: true
        },
        sports: ["Football", "Cricket", "Swimming", "Athletics", "Tennis", "Volleyball"],
        summary: "One of the largest schools in the city, Riverside Academy offers extensive facilities and a wide range of extracurricular activities.",
        admissionStatus: "Available",
        detailedDocLink: "docs/riverside_academy.docx"
    },
    {
        id: 4,
        name: "Maplewood Elementary",
        area: "North District",
        location: "North District",
        address: "321 Maple Street, North District",
        coordinates: { lat: 40.7614, lng: -73.9776 },
        images: [
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
        ],
        capacity: 600,
        facilities: {
            library: true,
            canteen: false,
            boarding: false
        },
        sports: ["Football", "Basketball", "Athletics"],
        summary: "A friendly neighborhood school focusing on primary education with excellent teacher-student ratio and personalized attention.",
        admissionStatus: "Full",
        detailedDocLink: "docs/maplewood_elementary.docx"
    },
    {
        id: 5,
        name: "Oakridge High School",
        area: "West End",
        location: "West End",
        address: "654 Pine Boulevard, West End",
        coordinates: { lat: 40.7505, lng: -74.0014 },
        images: [
            "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
        ],
        capacity: 1000,
        facilities: {
            library: true,
            canteen: true,
            boarding: false
        },
        sports: ["Football", "Basketball", "Cricket", "Swimming", "Tennis", "Athletics"],
        summary: "A prestigious high school known for academic excellence and outstanding sports facilities. Oakridge High School prepares students for higher education.",
        admissionStatus: "Limited",
        detailedDocLink: "docs/oakridge_high_school.docx"
    },
    {
        id: 6,
        name: "Meadowbrook School",
        area: "Central Park Area",
        location: "Central Park Area",
        address: "987 Garden Lane, Central Park",
        coordinates: { lat: 40.7829, lng: -73.9654 },
        images: [
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800"
        ],
        capacity: 900,
        facilities: {
            library: true,
            canteen: true,
            boarding: true
        },
        sports: ["Football", "Basketball", "Swimming", "Tennis", "Athletics"],
        summary: "Located in a serene environment, Meadowbrook School offers a perfect blend of academics and extracurricular activities in a modern campus.",
        admissionStatus: "Available",
        detailedDocLink: "docs/meadowbrook_school.docx"
    }
];

// Global state variables
let currentMap = null;
let mapMarkers = [];
let leafletMap = null;
let currentSection = 'home';
let compareSchools = [];
let feedbackData = [];
let userRating = 0;

// Sample feedback comments
const sampleFeedback = [
    {
        id: 1,
        author: "Sarah Johnson",
        rating: 5,
        comment: "Excellent platform! Found the perfect school for my daughter. The comparison feature is very helpful.",
        date: "2024-01-15"
    },
    {
        id: 2,
        author: "Ahmed Ali",
        rating: 4,
        comment: "Great website with comprehensive information. The map feature makes it easy to find schools near me.",
        date: "2024-01-20"
    },
    {
        id: 3,
        author: "Maria Garcia",
        rating: 5,
        comment: "Very user-friendly interface. The search filters helped me narrow down options quickly.",
        date: "2024-02-01"
    },
    {
        id: 4,
        author: "John Smith",
        rating: 4,
        comment: "Good collection of schools. Would love to see more detailed reviews from other parents.",
        date: "2024-02-10"
    }
];

/* ========================================
   INITIALIZATION
   ======================================== */

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    displayAllSchools();
    populateLocationFilter();
    loadFavourites();
    displayFavourites();
    loadFeedback();
    displayFeedback();
    updateStats();
    initializeHeroSlider();
    initializeChatWidget();
    
    // Show home section by default
    showSection('home');
});

/* ========================================
   NAVIGATION & SECTIONS
   ======================================== */

/**
 * Initialize navigation menu
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobileMenuToggle');
    
    // Handle nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section') || this.getAttribute('href').substring(1);
            showSection(sectionId);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            document.getElementById('navMenu').classList.remove('active');
        });
    });
    
    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        });
    }
}

/**
 * Show specific section and hide others
 * @param {string} sectionId - ID of section to show
 */
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Initialize section-specific features
        if (sectionId === 'sitemap') {
            setTimeout(() => {
                if (typeof google !== 'undefined' && google.maps && currentMap) {
                    // Google Maps already initialized
                    google.maps.event.trigger(currentMap, 'resize');
                } else if (!leafletMap) {
                    // Try to initialize map
                    initLeafletMap();
                }
            }, 100);
        }
    }
}

/**
 * Scroll to section smoothly
 * @param {string} sectionId - ID of section to scroll to
 */
function scrollToSection(sectionId) {
    showSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

/* ========================================
   HERO SLIDER
   ======================================== */

/**
 * Initialize hero image slider with manual controls
 */
function initializeHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    let autoPlayInterval = null;
    
    if (slides.length === 0) return;
    
    // Function to show specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Function to go to next slide
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoPlay();
            startAutoPlay(); // Restart auto-play after manual navigation
        });
    });
    
    // Pause auto-play on hover
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', stopAutoPlay);
        heroSlider.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Start auto-play
    startAutoPlay();
}

/* ========================================
   STATS UPDATE
   ======================================== */

/**
 * Update quick stats on home page
 */
function updateStats() {
    const totalSchools = schoolsData.length;
    const locations = [...new Set(schoolsData.map(s => s.location))].length;
    
    const totalSchoolsEl = document.getElementById('totalSchools');
    const totalLocationsEl = document.getElementById('totalLocations');
    
    if (totalSchoolsEl) totalSchoolsEl.textContent = totalSchools;
    if (totalLocationsEl) totalLocationsEl.textContent = locations;
}

/* ========================================
   SCHOOL DISPLAY
   ======================================== */

/**
 * Display all schools in the schools grid
 */
function displayAllSchools() {
    const schoolsGrid = document.getElementById('schoolsGrid');
    if (!schoolsGrid) return;
    
    schoolsGrid.innerHTML = '';
    schoolsData.forEach((school, index) => {
        const card = createSchoolCard(school);
        // Add staggered animation delay
        card.style.animationDelay = `${index * 0.1}s`;
        schoolsGrid.appendChild(card);
    });
}

/**
 * Create school card element
 * @param {Object} school - School data object
 * @returns {HTMLElement} School card element
 */
function createSchoolCard(school) {
    const card = document.createElement('div');
    card.className = 'school-card';
    
    const isFavourite = isSchoolFavourite(school.id);
    const isInCompare = compareSchools.includes(school.id);
    
    // Get status badge class
    const statusClass = `status-${school.admissionStatus.toLowerCase()}`;
    const statusIcon = {
        'Available': 'fa-check-circle',
        'Limited': 'fa-exclamation-circle',
        'Full': 'fa-times-circle'
    }[school.admissionStatus] || 'fa-info-circle';
    
    card.innerHTML = `
        <img src="${school.images[0]}" alt="${school.name}" class="school-card-image">
        <div class="school-card-content">
            <div class="school-card-header">
                <h3 class="school-card-title">${school.name}</h3>
                <button class="school-card-favorite ${isFavourite ? 'active' : ''}" 
                        onclick="toggleFavourite(${school.id}); event.stopPropagation();"
                        title="${isFavourite ? 'Remove from favourites' : 'Add to favourites'}">
                    <i class="fas ${isFavourite ? 'fa-star' : 'fa-star'}"></i>
                </button>
            </div>
            <p class="school-card-location">
                <i class="fas fa-map-marker-alt"></i>
                ${school.area} - ${school.address}
            </p>
            <div class="school-card-info">
                <p><strong>Capacity:</strong> ${school.capacity} students</p>
                <p><strong>Admission:</strong> 
                    <span class="school-card-status ${statusClass}">
                        <i class="fas ${statusIcon}"></i> ${school.admissionStatus}
                    </span>
                </p>
            </div>
            <div class="school-card-facilities">
                ${school.facilities.library ? '<span class="facility-badge has">Library</span>' : ''}
                ${school.facilities.canteen ? '<span class="facility-badge has">Canteen</span>' : ''}
                ${school.facilities.boarding ? '<span class="facility-badge has">Boarding</span>' : ''}
                ${school.sports.slice(0, 2).map(sport => `<span class="facility-badge">${sport}</span>`).join('')}
            </div>
            <div class="school-card-actions">
                <button class="btn btn-primary" onclick="showSchoolDetails(${school.id}); event.stopPropagation();">
                    View Details
                </button>
                <button class="btn btn-secondary" onclick="addToCompare(${school.id}); event.stopPropagation();">
                    Compare
                </button>
            </div>
            <div class="school-card-compare">
                <input type="checkbox" id="compare${school.id}" ${isInCompare ? 'checked' : ''}
                       onchange="handleCompareCheckbox(${school.id}, this.checked); event.stopPropagation();">
                <label for="compare${school.id}">Add to comparison</label>
            </div>
        </div>
    `;
    
    // Add click handler to view details
    card.addEventListener('click', function() {
        if (event.target.type !== 'checkbox' && event.target.tagName !== 'BUTTON') {
            showSchoolDetails(school.id);
        }
    });
    
    return card;
}

/* ========================================
   SEARCH & FILTER
   ======================================== */

/**
 * Populate location filter dropdown
 */
function populateLocationFilter() {
    const locationFilter = document.getElementById('locationFilter');
    if (!locationFilter) return;
    
    const locations = [...new Set(schoolsData.map(school => school.location))].sort();
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationFilter.appendChild(option);
    });
}

/**
 * Filter schools based on search criteria
 */
function filterSchools() {
    const locationFilter = document.getElementById('locationFilter').value;
    const libraryFilter = document.getElementById('libraryFilter').checked;
    const canteenFilter = document.getElementById('canteenFilter').checked;
    const boardingFilter = document.getElementById('boardingFilter').checked;
    const sportsFilter = document.getElementById('sportsFilter').value;
    const admissionFilter = document.getElementById('admissionFilter').value;
    
    let filteredSchools = schoolsData.filter(school => {
        // Location filter
        if (locationFilter && school.location !== locationFilter) {
            return false;
        }
        
        // Facility filters
        if (libraryFilter && !school.facilities.library) {
            return false;
        }
        if (canteenFilter && !school.facilities.canteen) {
            return false;
        }
        if (boardingFilter && !school.facilities.boarding) {
            return false;
        }
        
        // Sports filter
        if (sportsFilter && !school.sports.includes(sportsFilter)) {
            return false;
        }
        
        // Admission status filter
        if (admissionFilter && school.admissionStatus !== admissionFilter) {
            return false;
        }
        
        return true;
    });
    
    displaySearchResults(filteredSchools);
}

/**
 * Display search results
 * @param {Array} schools - Filtered school array
 */
function displaySearchResults(schools) {
    const searchResults = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!searchResults) return;
    
    if (resultsCount) {
        resultsCount.textContent = `${schools.length} school${schools.length !== 1 ? 's' : ''} found`;
    }
    
    searchResults.innerHTML = '';
    
    if (schools.length === 0) {
        searchResults.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No Schools Found</h3>
                <p>Try adjusting your search criteria</p>
                <button class="btn btn-primary" onclick="resetFilters()">Reset Filters</button>
            </div>
        `;
        return;
    }
    
    schools.forEach((school, index) => {
        const card = createSchoolCard(school);
        // Add staggered animation delay
        card.style.animationDelay = `${index * 0.1}s`;
        searchResults.appendChild(card);
    });
}

/**
 * Reset all search filters
 */
function resetFilters() {
    document.getElementById('locationFilter').value = '';
    document.getElementById('libraryFilter').checked = false;
    document.getElementById('canteenFilter').checked = false;
    document.getElementById('boardingFilter').checked = false;
    document.getElementById('sportsFilter').value = '';
    document.getElementById('admissionFilter').value = '';
    displaySearchResults(schoolsData);
}

/* ========================================
   SCHOOL DETAILS MODAL
   ======================================== */

/**
 * Show school details in modal
 * @param {number} schoolId - ID of school to display
 */
function showSchoolDetails(schoolId) {
    const school = schoolsData.find(s => s.id === schoolId);
    if (!school) return;
    
    const modal = document.getElementById('schoolModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    const statusClass = `status-${school.admissionStatus.toLowerCase()}`;
    const statusIcon = {
        'Available': 'fa-check-circle',
        'Limited': 'fa-exclamation-circle',
        'Full': 'fa-times-circle'
    }[school.admissionStatus] || 'fa-info-circle';
    
    modalBody.innerHTML = `
        <img src="${school.images[0]}" alt="${school.name}" class="school-detail-image">
        <h2 class="school-detail-title">${school.name}</h2>
        <p style="color: #666; margin-bottom: 1.5rem;">
            <i class="fas fa-map-marker-alt"></i> ${school.address}, ${school.area}
        </p>
        
        <div class="school-detail-info">
            <div class="info-item">
                <div class="info-item-label">Maximum Intake Capacity</div>
                <div class="info-item-value">${school.capacity} students</div>
            </div>
            <div class="info-item">
                <div class="info-item-label">Library</div>
                <div class="info-item-value">${school.facilities.library ? '✓ Available' : '✗ Not Available'}</div>
            </div>
            <div class="info-item">
                <div class="info-item-label">Canteen Facility</div>
                <div class="info-item-value">${school.facilities.canteen ? '✓ Available' : '✗ Not Available'}</div>
            </div>
            <div class="info-item">
                <div class="info-item-label">Boarding Facility</div>
                <div class="info-item-value">${school.facilities.boarding ? '✓ Available' : '✗ Not Available'}</div>
            </div>
            <div class="info-item">
                <div class="info-item-label">Admission Status</div>
                <div class="info-item-value">
                    <span class="school-card-status ${statusClass}">
                        <i class="fas ${statusIcon}"></i> ${school.admissionStatus}
                    </span>
                </div>
            </div>
            <div class="info-item">
                <div class="info-item-label">Sports Available</div>
                <div class="info-item-value">${school.sports.join(', ')}</div>
            </div>
        </div>
        
        <div style="margin-top: 2rem;">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">About ${school.name}</h3>
            <p style="line-height: 1.8; font-size: 1.1rem;">${school.summary}</p>
        </div>
        
        <div style="margin-top: 2rem;">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Image Gallery</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                ${school.images.map(img => `
                    <img src="${img}" alt="${school.name}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 5px; cursor: pointer;" onclick="this.style.transform='scale(1.5)'; setTimeout(() => this.style.transform='scale(1)', 300);">
                `).join('')}
            </div>
        </div>
        
        <div style="margin-top: 2rem;">
            <a href="${school.detailedDocLink}" class="btn btn-primary" download>
                <i class="fas fa-download"></i> Download Detailed Information (Word Document)
            </a>
            <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
                <i class="fas fa-info-circle"></i> Detailed information document available for download
            </p>
        </div>
    `;
    
    modal.style.display = 'block';
}

/**
 * Close school details modal
 */
function closeSchoolModal() {
    const modal = document.getElementById('schoolModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('schoolModal');
    if (event.target === modal) {
        closeSchoolModal();
    }
}

/* ========================================
   FAVOURITES (LocalStorage)
   ======================================== */

/**
 * Check if school is in favourites
 * @param {number} schoolId - School ID to check
 * @returns {boolean} True if school is favourited
 */
function isSchoolFavourite(schoolId) {
    const favourites = getFavourites();
    return favourites.includes(schoolId);
}

/**
 * Get favourites from LocalStorage
 * @returns {Array} Array of favourite school IDs
 */
function getFavourites() {
    const favourites = localStorage.getItem('schoolsInfoFavourites');
    return favourites ? JSON.parse(favourites) : [];
}

/**
 * Save favourites to LocalStorage
 * @param {Array} favourites - Array of school IDs
 */
function saveFavourites(favourites) {
    localStorage.setItem('schoolsInfoFavourites', JSON.stringify(favourites));
}

/**
 * Toggle favourite status of a school
 * @param {number} schoolId - School ID to toggle
 */
function toggleFavourite(schoolId) {
    let favourites = getFavourites();
    
    if (favourites.includes(schoolId)) {
        favourites = favourites.filter(id => id !== schoolId);
    } else {
        favourites.push(schoolId);
    }
    
    saveFavourites(favourites);
    loadFavourites();
    
    // Refresh current view
    if (currentSection === 'schools') {
        displayAllSchools();
    } else if (currentSection === 'search') {
        filterSchools();
    } else if (currentSection === 'favourites') {
        displayFavourites();
    }
}

/**
 * Load favourites and update UI
 */
function loadFavourites() {
    // Favourites are stored in LocalStorage
    // This function can be used to sync UI if needed
}

/**
 * Display favourite schools
 */
function displayFavourites() {
    const favouritesGrid = document.getElementById('favouritesGrid');
    const noFavourites = document.getElementById('noFavourites');
    
    if (!favouritesGrid || !noFavourites) return;
    
    const favourites = getFavourites();
    
    if (favourites.length === 0) {
        favouritesGrid.style.display = 'none';
        noFavourites.style.display = 'block';
        return;
    }
    
    favouritesGrid.style.display = 'grid';
    noFavourites.style.display = 'none';
    favouritesGrid.innerHTML = '';
    
    favourites.forEach((schoolId, index) => {
        const school = schoolsData.find(s => s.id === schoolId);
        if (school) {
            const card = createSchoolCard(school);
            // Add staggered animation delay
            card.style.animationDelay = `${index * 0.1}s`;
            favouritesGrid.appendChild(card);
        }
    });
}

/**
 * Remove school from favourites
 * @param {number} schoolId - School ID to remove
 */
function removeFromFavourites(schoolId) {
    let favourites = getFavourites();
    favourites = favourites.filter(id => id !== schoolId);
    saveFavourites(favourites);
    displayFavourites();
}

/* ========================================
   COMPARE SCHOOLS
   ======================================== */

/**
 * Add school to comparison (max 2 schools)
 * @param {number} schoolId - School ID to add
 */
function addToCompare(schoolId) {
    if (compareSchools.length >= 2) {
        alert('You can only compare 2 schools at a time. Please remove one school first.');
        return;
    }
    
    if (!compareSchools.includes(schoolId)) {
        compareSchools.push(schoolId);
        updateCompareUI();
        updateCompareTable();
        
        // Navigate to compare section
        scrollToSection('compare');
    }
}

/**
 * Handle compare checkbox change
 * @param {number} schoolId - School ID
 * @param {boolean} checked - Checkbox state
 */
function handleCompareCheckbox(schoolId, checked) {
    if (checked) {
        if (compareSchools.length >= 2) {
            alert('You can only compare 2 schools at a time. Please remove one school first.');
            document.getElementById(`compare${schoolId}`).checked = false;
            return;
        }
        if (!compareSchools.includes(schoolId)) {
            compareSchools.push(schoolId);
        }
    } else {
        compareSchools = compareSchools.filter(id => id !== schoolId);
    }
    
    updateCompareUI();
    updateCompareTable();
}

/**
 * Remove school from comparison
 * @param {number} index - Index in compare array (1 or 2)
 */
function removeFromCompare(index) {
    if (index === 1 && compareSchools.length > 0) {
        compareSchools.shift();
    } else if (index === 2 && compareSchools.length > 1) {
        compareSchools.pop();
    }
    
    updateCompareUI();
    updateCompareTable();
    
    // Refresh school cards to update checkboxes
    if (currentSection === 'schools') {
        displayAllSchools();
    }
}

/**
 * Clear all comparison
 */
function clearComparison() {
    compareSchools = [];
    updateCompareUI();
    updateCompareTable();
    
    // Refresh school cards
    if (currentSection === 'schools') {
        displayAllSchools();
    } else if (currentSection === 'search') {
        filterSchools();
    }
}

/**
 * Update compare selection UI
 */
function updateCompareUI() {
    const school1Div = document.getElementById('selectedSchool1');
    const school2Div = document.getElementById('selectedSchool2');
    const clearBtn = document.getElementById('clearCompareBtn');
    
    if (!school1Div || !school2Div) return;
    
    // Update first school
    if (compareSchools.length > 0) {
        const school1 = schoolsData.find(s => s.id === compareSchools[0]);
        if (school1) {
            school1Div.innerHTML = `
                <span class="school-name">${school1.name}</span>
                <button class="btn-remove" onclick="removeFromCompare(1)">
                    <i class="fas fa-times"></i>
                </button>
            `;
            school1Div.classList.add('has-school');
        }
    } else {
        school1Div.innerHTML = '<span class="school-name">No school selected</span>';
        school1Div.classList.remove('has-school');
    }
    
    // Update second school
    if (compareSchools.length > 1) {
        const school2 = schoolsData.find(s => s.id === compareSchools[1]);
        if (school2) {
            school2Div.innerHTML = `
                <span class="school-name">${school2.name}</span>
                <button class="btn-remove" onclick="removeFromCompare(2)">
                    <i class="fas fa-times"></i>
                </button>
            `;
            school2Div.classList.add('has-school');
        }
    } else {
        school2Div.innerHTML = '<span class="school-name">No school selected</span>';
        school2Div.classList.remove('has-school');
    }
    
    // Show/hide clear button
    if (clearBtn) {
        clearBtn.style.display = compareSchools.length > 0 ? 'block' : 'none';
    }
    
    // Show/hide compare table and message
    const compareTable = document.getElementById('compareTable');
    const compareMessage = document.getElementById('compareMessage');
    
    if (compareTable) {
        compareTable.style.display = compareSchools.length === 2 ? 'block' : 'none';
    }
    if (compareMessage) {
        compareMessage.style.display = compareSchools.length < 2 ? 'block' : 'none';
    }
}

/**
 * Update comparison table
 */
function updateCompareTable() {
    const compareTable = document.getElementById('compareTable');
    if (!compareTable || compareSchools.length !== 2) return;
    
    const school1 = schoolsData.find(s => s.id === compareSchools[0]);
    const school2 = schoolsData.find(s => s.id === compareSchools[1]);
    
    if (!school1 || !school2) return;
    
    const statusClass1 = `status-${school1.admissionStatus.toLowerCase()}`;
    const statusClass2 = `status-${school2.admissionStatus.toLowerCase()}`;
    
    compareTable.innerHTML = `
        <table class="compare-table">
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>${school1.name}</th>
                    <th>${school2.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Location</strong></td>
                    <td>${school1.area}</td>
                    <td>${school2.area}</td>
                </tr>
                <tr>
                    <td><strong>Address</strong></td>
                    <td>${school1.address}</td>
                    <td>${school2.address}</td>
                </tr>
                <tr>
                    <td><strong>Maximum Intake Capacity</strong></td>
                    <td>${school1.capacity} students</td>
                    <td>${school2.capacity} students</td>
                </tr>
                <tr>
                    <td><strong>Library</strong></td>
                    <td>${school1.facilities.library ? '✓ Available' : '✗ Not Available'}</td>
                    <td>${school2.facilities.library ? '✓ Available' : '✗ Not Available'}</td>
                </tr>
                <tr>
                    <td><strong>Canteen</strong></td>
                    <td>${school1.facilities.canteen ? '✓ Available' : '✗ Not Available'}</td>
                    <td>${school2.facilities.canteen ? '✓ Available' : '✗ Not Available'}</td>
                </tr>
                <tr>
                    <td><strong>Boarding</strong></td>
                    <td>${school1.facilities.boarding ? '✓ Available' : '✗ Not Available'}</td>
                    <td>${school2.facilities.boarding ? '✓ Available' : '✗ Not Available'}</td>
                </tr>
                <tr>
                    <td><strong>Sports</strong></td>
                    <td>${school1.sports.join(', ')}</td>
                    <td>${school2.sports.join(', ')}</td>
                </tr>
                <tr>
                    <td><strong>Admission Status</strong></td>
                    <td><span class="school-card-status ${statusClass1}">${school1.admissionStatus}</span></td>
                    <td><span class="school-card-status ${statusClass2}">${school2.admissionStatus}</span></td>
                </tr>
            </tbody>
        </table>
    `;
}

/* ========================================
   MAP FUNCTIONALITY
   ======================================== */

/**
 * Initialize Google Maps (if API key is available)
 */
function initGoogleMap() {
    if (typeof google === 'undefined' || !google.maps) {
        console.log('Google Maps not available, using Leaflet fallback');
        initLeafletMap();
        return;
    }
    
    const mapDiv = document.getElementById('map');
    if (!mapDiv) return;
    
    const defaultCenter = { lat: 40.7589, lng: -73.9851 };
    
    // Create Google Map
    currentMap = new google.maps.Map(mapDiv, {
        zoom: 12,
        center: defaultCenter,
        mapTypeId: 'roadmap'
    });
    
    // Add markers for all schools
    mapMarkers = [];
    schoolsData.forEach((school, index) => {
        const marker = new google.maps.Marker({
            position: school.coordinates,
            map: currentMap,
            title: school.name,
            label: {
                text: (index + 1).toString(),
                color: 'white',
                fontWeight: 'bold'
            }
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px; max-width: 250px;">
                    <h3 style="margin: 0 0 10px 0; color: #2c3e50;">${school.name}</h3>
                    <p style="margin: 5px 0;"><strong>Location:</strong> ${school.area}</p>
                    <p style="margin: 5px 0;"><strong>Address:</strong> ${school.address}</p>
                    <p style="margin: 5px 0;"><strong>Capacity:</strong> ${school.capacity} students</p>
                    <p style="margin: 5px 0;"><strong>Admission:</strong> ${school.admissionStatus}</p>
                    <button onclick="showSchoolDetails(${school.id})" style="margin-top: 10px; padding: 8px 15px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        View Details
                    </button>
                </div>
            `
        });
        
        marker.addListener('click', function() {
            infoWindow.open(currentMap, marker);
        });
        
        mapMarkers.push({ marker, infoWindow, school });
    });
    
    // Fit bounds to show all markers
    if (mapMarkers.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        mapMarkers.forEach(m => bounds.extend(m.marker.getPosition()));
        currentMap.fitBounds(bounds);
    }
    
    // Update map legend
    updateMapLegend();
}

/**
 * Initialize Leaflet map (fallback if Google Maps not available)
 */
function initLeafletMap() {
    const mapDiv = document.getElementById('map');
    if (!mapDiv) return;
    
    // Clear Google Maps if exists
    if (currentMap) {
        currentMap = null;
    }
    
    // Initialize Leaflet map
    leafletMap = L.map('map').setView([40.7589, -73.9851], 12);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(leafletMap);
    
    // Add markers for all schools
    mapMarkers = [];
    schoolsData.forEach((school, index) => {
        const marker = L.marker([school.coordinates.lat, school.coordinates.lng])
            .addTo(leafletMap)
            .bindPopup(`
                <div style="padding: 5px;">
                    <h3 style="margin: 0 0 5px 0; font-size: 14px;">${school.name}</h3>
                    <p style="margin: 2px 0; font-size: 12px;"><strong>Location:</strong> ${school.area}</p>
                    <p style="margin: 2px 0; font-size: 12px;"><strong>Address:</strong> ${school.address}</p>
                    <p style="margin: 2px 0; font-size: 12px;"><strong>Capacity:</strong> ${school.capacity}</p>
                    <p style="margin: 2px 0; font-size: 12px;"><strong>Admission:</strong> ${school.admissionStatus}</p>
                    <button onclick="showSchoolDetails(${school.id})" style="margin-top: 5px; padding: 5px 10px; background: #3498db; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 11px;">
                        View Details
                    </button>
                </div>
            `);
        
        mapMarkers.push({ marker, school, index: index + 1 });
    });
    
    // Fit bounds to show all markers
    if (mapMarkers.length > 0) {
        const group = new L.featureGroup(mapMarkers.map(m => m.marker));
        leafletMap.fitBounds(group.getBounds().pad(0.1));
    }
    
    // Update map legend
    updateMapLegend();
}

/**
 * Update map legend
 */
function updateMapLegend() {
    const legend = document.getElementById('mapLegend');
    if (!legend) return;
    
    legend.innerHTML = '';
    
    schoolsData.forEach((school, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${index + 1}.</strong> ${school.name} - ${school.area}`;
        li.style.cursor = 'pointer';
        li.onclick = () => {
            if (currentMap) {
                // Google Maps
                const markerData = mapMarkers[index];
                if (markerData) {
                    currentMap.setCenter(markerData.marker.getPosition());
                    currentMap.setZoom(15);
                    markerData.infoWindow.open(currentMap, markerData.marker);
                }
            } else if (leafletMap) {
                // Leaflet
                const markerData = mapMarkers[index];
                if (markerData) {
                    leafletMap.setView([school.coordinates.lat, school.coordinates.lng], 15);
                    markerData.marker.openPopup();
                }
            }
        };
        legend.appendChild(li);
    });
}

/**
 * Get user's current location and show on map
 */
function getUserLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser.');
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            
            if (currentMap) {
                // Google Maps
                const userMarker = new google.maps.Marker({
                    position: { lat: userLat, lng: userLng },
                    map: currentMap,
                    title: 'Your Location',
                    icon: {
                        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                    }
                });
                
                currentMap.setCenter({ lat: userLat, lng: userLng });
                currentMap.setZoom(14);
            } else if (leafletMap) {
                // Leaflet
                L.marker([userLat, userLng])
                    .addTo(leafletMap)
                    .bindPopup('Your Location')
                    .openPopup();
                
                leafletMap.setView([userLat, userLng], 14);
            }
        },
        function(error) {
            alert('Error getting your location: ' + error.message);
        }
    );
}

// Handle Google Maps API loading error
window.gm_authFailure = function() {
    console.log('Google Maps API key error, using Leaflet fallback');
    initLeafletMap();
};

/* ========================================
   FEEDBACK & RATING
   ======================================== */

/**
 * Initialize star rating system
 */
function initializeStarRating() {
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('ratingText');
    
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            highlightStars(rating);
            if (ratingText) {
                ratingText.textContent = getRatingText(rating);
            }
        });
        
        star.addEventListener('click', function() {
            userRating = parseInt(this.getAttribute('data-rating'));
            highlightStars(userRating);
            if (ratingText) {
                ratingText.textContent = getRatingText(userRating);
            }
        });
    });
    
    // Reset on mouse leave
    const starRating = document.getElementById('starRating');
    if (starRating) {
        starRating.addEventListener('mouseleave', function() {
            highlightStars(userRating);
            if (ratingText) {
                ratingText.textContent = userRating > 0 ? getRatingText(userRating) : 'Click to rate';
            }
        });
    }
}

/**
 * Highlight stars up to rating
 * @param {number} rating - Number of stars to highlight
 */
function highlightStars(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        const starRating = parseInt(star.getAttribute('data-rating'));
        if (starRating <= rating) {
            star.classList.add('active');
            star.querySelector('i').classList.remove('fa-star', 'far');
            star.querySelector('i').classList.add('fas', 'fa-star');
        } else {
            star.classList.remove('active');
            star.querySelector('i').classList.remove('fa-star', 'fas');
            star.querySelector('i').classList.add('far', 'fa-star');
        }
    });
}

/**
 * Get rating text description
 * @param {number} rating - Rating value
 * @returns {string} Rating description
 */
function getRatingText(rating) {
    const texts = {
        1: 'Poor',
        2: 'Fair',
        3: 'Good',
        4: 'Very Good',
        5: 'Excellent'
    };
    return texts[rating] || '';
}

/**
 * Load feedback from memory
 */
function loadFeedback() {
    // Load sample feedback
    feedbackData = [...sampleFeedback];
    
    // Try to load from localStorage (if user has submitted)
    const savedFeedback = localStorage.getItem('schoolsInfoFeedback');
    if (savedFeedback) {
        try {
            const parsed = JSON.parse(savedFeedback);
            feedbackData = [...sampleFeedback, ...parsed];
        } catch (e) {
            console.error('Error loading feedback:', e);
        }
    }
}

/**
 * Display feedback comments
 */
function displayFeedback() {
    const feedbackList = document.getElementById('feedbackList');
    if (!feedbackList) return;
    
    feedbackList.innerHTML = '';
    
    // Sort by date (newest first)
    const sortedFeedback = [...feedbackData].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    sortedFeedback.forEach(feedback => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-item';
        
        const stars = '★'.repeat(feedback.rating) + '☆'.repeat(5 - feedback.rating);
        
        commentDiv.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${feedback.author}</span>
                <span class="comment-rating">${stars}</span>
            </div>
            <p class="comment-text">${feedback.comment}</p>
            <div class="comment-date">${formatDate(feedback.date)}</div>
        `;
        
        feedbackList.appendChild(commentDiv);
    });
    
    // Initialize star rating after displaying
    setTimeout(() => {
        initializeStarRating();
    }, 100);
}

/**
 * Submit feedback
 */
function submitFeedback() {
    const comment = document.getElementById('feedbackComment').value.trim();
    
    if (userRating === 0) {
        alert('Please select a rating');
        return;
    }
    
    if (!comment) {
        alert('Please enter a comment');
        return;
    }
    
    // Create feedback object
    const newFeedback = {
        id: Date.now(),
        author: 'You',
        rating: userRating,
        comment: comment,
        date: new Date().toISOString().split('T')[0]
    };
    
    // Add to feedback data
    feedbackData.push(newFeedback);
    
    // Save to localStorage
    const savedFeedback = localStorage.getItem('schoolsInfoFeedback');
    let userFeedback = [];
    if (savedFeedback) {
        try {
            userFeedback = JSON.parse(savedFeedback);
        } catch (e) {
            userFeedback = [];
        }
    }
    userFeedback.push(newFeedback);
    localStorage.setItem('schoolsInfoFeedback', JSON.stringify(userFeedback));
    
    // Update display
    displayFeedback();
    
    // Reset form
    userRating = 0;
    highlightStars(0);
    document.getElementById('feedbackComment').value = '';
    document.getElementById('ratingText').textContent = 'Click to rate';
    
    alert('Thank you for your feedback!');
}

/**
 * Format date for display
 * @param {string} dateString - Date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

/* ========================================
   Support Chat Widget Module
   ======================================== */

// FAQ Questions and Answers
const chatFAQ = [
    {
        question: "How to search schools by location?",
        icon: "🔍",
        answer: "Go to the 'Search' section from the top menu. Use the 'Location/Area' dropdown to select a specific area. Then click the 'Search' button to filter schools by location."
    },
    {
        question: "How to filter by facilities (library/boarding/canteen)?",
        icon: "🏫",
        answer: "In the 'Search' section, you'll find facility checkboxes for Library, Canteen, and Boarding. Simply check the facilities you're interested in and click 'Search' to see schools that offer those facilities."
    },
    {
        question: "How do I use the Site Map?",
        icon: "🗺️",
        answer: "Click on 'Site Map' in the navigation menu. You'll see all schools marked on an interactive map. Click any marker to view school information, or click a school name in the legend list to locate it on the map. You can also click 'Show My Location' to see your current position."
    },
    {
        question: "How to add/remove favourites?",
        icon: "⭐",
        answer: "Click the star icon on any school card to add it to your favourites. The star will turn gold when favourited. Click it again to remove. Your favourites are saved automatically and can be viewed in the 'Favourites' section."
    },
    {
        question: "How does school comparison work?",
        icon: "⚖️",
        answer: "You can compare up to 2 schools at a time. Click the 'Compare' button or check the 'Add to comparison' checkbox on school cards. Then go to the 'Compare' section to see a side-by-side comparison table with all key features."
    },
    {
        question: "What does Seats Available/Limited/Full mean?",
        icon: "📊",
        answer: "These indicate admission availability: ✅ Seats Available (Green) - Open for admission, ⚠️ Limited (Yellow) - Few seats remaining, ❌ Full (Red) - No seats available currently. Check the status legend in the Schools section for details."
    },
    {
        question: "How to download school details Word document?",
        icon: "📥",
        answer: "Click on any school card to open detailed information. In the detail modal, you'll find a 'Download Detailed Information' button. Click it to download the comprehensive Word document with full school details, admission procedures, and contact information."
    },
    {
        question: "How can I give feedback/rating?",
        icon: "💬",
        answer: "Navigate to the 'Feedback' section from the menu. Click on stars (1-5) to rate, then type your comment in the text area. Click 'Submit Feedback' to share your thoughts. Your feedback helps us improve SchoolsInfo!"
    }
];

// Chat Widget State
let chatState = {
    isOpen: false,
    isMinimized: false,
    position: { x: null, y: null },
    size: { width: null, height: null },
    messages: []
};

// Chat Widget DOM Elements
let chatLauncher, chatPanel, chatHeader, chatBody, chatClose, chatMinimize;
let chatResizeHandle, chatInput, chatSend, messagesContainer;
let faqContainer, typingIndicator, humanSupportContainer;

/**
 * Initialize Chat Widget
 */
function initializeChatWidget() {
    // Get DOM elements
    chatLauncher = document.getElementById('chatLauncher');
    chatPanel = document.getElementById('chatPanel');
    chatHeader = document.getElementById('chatHeader');
    chatBody = document.getElementById('chatBody');
    chatClose = document.getElementById('chatClose');
    chatMinimize = document.getElementById('chatMinimize');
    chatResizeHandle = document.getElementById('chatResizeHandle');
    chatInput = document.getElementById('chatInput');
    chatSend = document.getElementById('chatSend');
    messagesContainer = document.getElementById('messagesContainer');
    faqContainer = document.getElementById('faqContainer');
    typingIndicator = document.getElementById('typingIndicator');
    humanSupportContainer = document.getElementById('humanSupportContainer');

    // Load saved state
    loadChatState();

    // Setup event listeners
    setupChatEventListeners();

    // Render FAQ questions
    renderFAQ();

    // Restore chat position and size if saved
    if (chatState.position.x !== null) {
        chatPanel.style.left = chatState.position.x + 'px';
        chatPanel.style.right = 'auto';
        chatPanel.style.bottom = chatState.position.y + 'px';
    }

    if (chatState.size.width) {
        chatPanel.style.width = chatState.size.width + 'px';
        chatPanel.style.height = chatState.size.height + 'px';
    }

    // Restore open/minimized state
    if (chatState.isOpen && !chatState.isMinimized) {
        openChat();
    } else if (chatState.isOpen && chatState.isMinimized) {
        openChat();
        minimizeChat();
    }
}

/**
 * Setup all event listeners
 */
function setupChatEventListeners() {
    // Launcher button
    chatLauncher.addEventListener('click', toggleChat);
    chatLauncher.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleChat();
        }
    });

    // Close and minimize buttons
    chatClose.addEventListener('click', closeChat);
    chatMinimize.addEventListener('click', minimizeChat);

    // Draggable header
    makeDraggable(chatHeader, chatPanel);

    // Resizable
    makeResizable(chatPanel, chatResizeHandle);

    // Send button (demo - disabled)
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !chatInput.disabled) {
            sendMessage();
        }
    });

    // Scroll to contact button
    document.getElementById('chatScrollToContact').addEventListener('click', () => {
        scrollToSection('about');
        closeChat();
    });

    // Auto-scroll chat body
    const observer = new MutationObserver(() => {
        scrollChatToBottom();
    });
    observer.observe(chatBody, { childList: true, subtree: true });
}

/**
 * Render FAQ questions
 */
function renderFAQ() {
    faqContainer.innerHTML = '';
    
    chatFAQ.forEach((faq, index) => {
        const btn = document.createElement('button');
        btn.className = 'chat-faq-btn';
        btn.innerHTML = `<span class="faq-icon">${faq.icon}</span><span>${faq.question}</span>`;
        btn.setAttribute('aria-label', faq.question);
        btn.addEventListener('click', () => handleFAQClick(faq, index));
        
        // Staggered animation
        btn.style.animationDelay = `${index * 0.05}s`;
        btn.style.animation = 'fadeInUp 0.4s ease backwards';
        
        faqContainer.appendChild(btn);
    });
}

/**
 * Handle FAQ question click
 */
function handleFAQClick(faq, index) {
    // Hide FAQ buttons
    hideFAQ();

    // Add user message
    addMessage('user', faq.question);

    // Show typing indicator
    showTypingIndicator();

    // Simulate bot typing delay, then show answer
    setTimeout(() => {
        hideTypingIndicator();
        addMessage('bot', faq.answer);
        
        // Show "Need more help?" after delay
        setTimeout(() => {
            showHumanSupport();
        }, 1000);
    }, 1500);
}

/**
 * Hide FAQ container
 */
function hideFAQ() {
    faqContainer.style.display = 'none';
}

/**
 * Show FAQ container
 */
function showFAQ() {
    faqContainer.style.display = 'flex';
}

/**
 * Add message to chat
 */
function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message chat-${sender}`;

    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.textContent = sender === 'user' ? '👤' : '🤖';

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble chat-bubble-${sender}`;

    const textDiv = document.createElement('div');
    textDiv.className = 'chat-text';
    textDiv.textContent = text;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'chat-time';
    timeDiv.textContent = getCurrentTime();

    bubble.appendChild(textDiv);
    bubble.appendChild(timeDiv);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);

    messagesContainer.appendChild(messageDiv);
    
    // Save to state
    chatState.messages.push({ sender, text, time: new Date() });
    
    // Scroll to bottom
    scrollChatToBottom();
}

/**
 * Get current time string
 */
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

/**
 * Show typing indicator
 */
function showTypingIndicator() {
    typingIndicator.style.display = 'flex';
    scrollChatToBottom();
}

/**
 * Hide typing indicator
 */
function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

/**
 * Show human support options
 */
function showHumanSupport() {
    if (humanSupportContainer.style.display === 'none' || !humanSupportContainer.style.display) {
        humanSupportContainer.style.display = 'block';
        scrollChatToBottom();
    }
}

/**
 * Hide human support options
 */
function hideHumanSupport() {
    humanSupportContainer.style.display = 'none';
}

/**
 * Scroll chat body to bottom
 */
function scrollChatToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
}

/**
 * Toggle chat open/close
 */
function toggleChat() {
    if (chatState.isOpen) {
        closeChat();
    } else {
        openChat();
    }
}

/**
 * Open chat panel
 */
function openChat() {
    chatPanel.style.display = 'flex';
    chatState.isOpen = true;
    chatState.isMinimized = false;
    chatPanel.classList.remove('minimized');
    
    // Scroll to bottom
    setTimeout(() => scrollChatToBottom(), 100);
    
    // Save state
    saveChatState();
}

/**
 * Close chat panel
 */
function closeChat() {
    chatPanel.style.display = 'none';
    chatState.isOpen = false;
    chatState.isMinimized = false;
    
    // Reset FAQ and messages visibility
    showFAQ();
    hideHumanSupport();
    messagesContainer.innerHTML = '';
    chatState.messages = [];
    
    // Save state
    saveChatState();
}

/**
 * Minimize chat panel
 */
function minimizeChat() {
    if (chatState.isMinimized) {
        // Restore
        chatPanel.classList.remove('minimized');
        chatState.isMinimized = false;
    } else {
        // Minimize
        chatPanel.classList.add('minimized');
        chatState.isMinimized = true;
    }
    
    saveChatState();
}

/**
 * Send message (demo - disabled input)
 */
function sendMessage() {
    const text = chatInput.value.trim();
    if (!text || chatInput.disabled) return;

    addMessage('user', text);
    chatInput.value = '';

    // Bot auto-reply
    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        addMessage('bot', "Thank you for your message! This is a demo. For real support, please use the contact options below.");
        showHumanSupport();
    }, 1500);
}

/**
 * Make element draggable
 */
function makeDraggable(handle, element) {
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    handle.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        if (e.target === chatClose || e.target === chatMinimize || 
            e.target.closest('.chat-header-actions')) {
            return;
        }

        const rect = element.getBoundingClientRect();
        startX = e.clientX;
        startY = e.clientY;
        
        // Get current position
        if (element.style.left) {
            initialLeft = parseInt(element.style.left, 10);
            initialTop = parseInt(element.style.top, 10);
        } else {
            // Calculate from right/bottom
            initialLeft = window.innerWidth - rect.right;
            initialTop = window.innerHeight - rect.bottom;
        }

        if (e.target === handle || handle.contains(e.target)) {
            isDragging = true;
            handle.style.cursor = 'grabbing';
            e.preventDefault();
        }
    }

    function drag(e) {
        if (!isDragging) return;

        e.preventDefault();

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        // Constrain to viewport
        const rect = element.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        let newX = initialLeft + deltaX;
        let newY = initialTop + deltaY;

        if (newX < 0) newX = 0;
        if (newX > maxX) newX = maxX;
        if (newY < 0) newY = 0;
        if (newY > maxY) newY = maxY;

        // Update position
        element.style.right = 'auto';
        element.style.bottom = 'auto';
        element.style.left = newX + 'px';
        element.style.top = newY + 'px';

        // Save position
        chatState.position = { x: newX, y: newY };
    }

    function dragEnd(e) {
        if (isDragging) {
            isDragging = false;
            handle.style.cursor = 'move';
            saveChatState();
        }
    }
}

/**
 * Make element resizable
 */
function makeResizable(element, handle) {
    let isResizing = false;
    let startX, startY, startWidth, startHeight, startLeft, startTop;

    handle.addEventListener('mousedown', resizeStart);
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', resizeEnd);

    function resizeStart(e) {
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = parseInt(window.getComputedStyle(element).width, 10);
        startHeight = parseInt(window.getComputedStyle(element).height, 10);
        startLeft = element.offsetLeft;
        startTop = element.offsetTop;
        e.preventDefault();
    }

    function resize(e) {
        if (!isResizing) return;

        const width = startWidth + (e.clientX - startX);
        const height = startHeight + (e.clientY - startY);

        // Minimum size constraints
        const minWidth = 320;
        const minHeight = 400;

        if (width >= minWidth && height >= minHeight) {
            // Constrain to viewport
            const rect = element.getBoundingClientRect();
            const maxWidth = window.innerWidth - rect.left;
            const maxHeight = window.innerHeight - rect.top;

            element.style.width = Math.min(width, maxWidth) + 'px';
            element.style.height = Math.min(height, maxHeight) + 'px';

            // Save size
            chatState.size = {
                width: parseInt(element.style.width),
                height: parseInt(element.style.height)
            };
        }
    }

    function resizeEnd(e) {
        isResizing = false;
        saveChatState();
    }
}

/**
 * Save chat state to LocalStorage
 */
function saveChatState() {
    try {
        const rect = chatPanel.getBoundingClientRect();
        const state = {
            isOpen: chatState.isOpen,
            isMinimized: chatState.isMinimized,
            position: chatState.position.x !== null ? chatState.position : null,
            size: chatState.size.width ? chatState.size : null
        };
        localStorage.setItem('schoolsInfoChatState', JSON.stringify(state));
    } catch (e) {
        console.error('Error saving chat state:', e);
    }
}

/**
 * Load chat state from LocalStorage
 */
function loadChatState() {
    try {
        const saved = localStorage.getItem('schoolsInfoChatState');
        if (saved) {
            const state = JSON.parse(saved);
            if (state.position) chatState.position = state.position;
            if (state.size) chatState.size = state.size;
            chatState.isOpen = state.isOpen || false;
            chatState.isMinimized = state.isMinimized || false;
        }
    } catch (e) {
        console.error('Error loading chat state:', e);
    }
}

// Chat widget initialization is called from main DOMContentLoaded handler

