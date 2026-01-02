# SchoolsInfo - eProject Report

## Table of Contents
1. [Acknowledgements](#acknowledgements)
2. [eProject Synopsis](#eproject-synopsis)
3. [eProject Analysis](#eproject-analysis)
4. [eProject Design](#eproject-design)
5. [DFDs (Data Flow Diagrams)](#dfds-data-flow-diagrams)
6. [Flowcharts](#flowcharts)
7. [Process Diagrams](#process-diagrams)
8. [Database Design / Structure](#database-design--structure)
9. [Screenshots List](#screenshots-list)
10. [Source Code with Comments](#source-code-with-comments)
11. [User Guide](#user-guide)
12. [Developer's Guide](#developers-guide)
13. [Module Descriptions](#module-descriptions)

---

## Acknowledgements

I would like to express my sincere gratitude to all those who have contributed to the completion of this eProject.

**Faculty Members:** I am deeply thankful to my faculty advisor and the eProjects Team for their guidance, support, and valuable feedback throughout the development of this project. Their expertise and encouragement have been instrumental in shaping this application.

**Technology Providers:** I acknowledge the use of open-source technologies including HTML5, CSS3, JavaScript, Google Maps API, Leaflet.js, and Font Awesome icons that made this project possible.

**Educational Resources:** Various online tutorials, documentation, and educational resources helped in understanding and implementing various features.

**Peer Support:** Special thanks to my classmates and peers who provided feedback during the development and testing phases.

This project represents a significant learning experience and would not have been possible without the collective support mentioned above.

---

## eProject Synopsis

### Project Title
**SchoolsInfo - Comprehensive School Information Portal**

### Project Type
Single Page Web Application (SPA) using HTML5, CSS3, and JavaScript

### Project Duration
Academic Project - [Insert Duration]

### Problem Statement
Finding the right school for children has become increasingly challenging due to the growing number of educational institutions in cities. Parents and guardians face difficulties in:
- Physically visiting multiple schools to gather information
- Comparing schools based on various criteria
- Understanding admission availability and procedures
- Accessing detailed information about facilities and infrastructure
- Locating schools geographically

### Solution Proposed
SchoolsInfo is a comprehensive web application that addresses these challenges by providing:
- Centralized information about all schools in the city
- Advanced search and filter capabilities
- Interactive maps showing school locations
- Side-by-side comparison of schools
- Favorite schools functionality
- Admission status indicators
- Downloadable detailed information documents
- User feedback and rating system

### Objectives
1. Create a user-friendly platform for school discovery
2. Provide comprehensive information about schools including facilities, capacity, and admission status
3. Enable efficient search and filtering based on multiple criteria
4. Facilitate school comparison for informed decision-making
5. Integrate geolocation services for map-based navigation
6. Implement local storage for user preferences
7. Provide downloadable detailed documents for each school

### Technology Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Maps:** Google Maps API with Leaflet.js fallback
- **Storage:** Browser LocalStorage API
- **Icons:** Font Awesome
- **Platform:** Cross-platform web browser application

### Key Features
1. Home page with hero slider and quick statistics
2. Complete school listings with cards
3. Advanced search with multiple filters
4. Interactive site map with markers
5. Favorite schools management (LocalStorage)
6. School comparison (maximum 2 schools)
7. Admission status indicators
8. Feedback and rating system
9. Detailed school information modals
10. Downloadable Word documents

---

## eProject Analysis

### System Requirements

#### Functional Requirements
1. **School Information Display**
   - Display list of all schools
   - Show school details including name, location, capacity, facilities, sports, and admission status
   - Display multiple images per school
   - Show brief summary and detailed information

2. **Search and Filter Functionality**
   - Filter schools by location/area
   - Filter by facilities (library, canteen, boarding)
   - Filter by sports availability
   - Filter by admission status
   - Display filtered results dynamically

3. **Interactive Map**
   - Display all schools on map with markers
   - Show school information on marker click
   - Provide list view with "Locate on Map" functionality
   - Option to show user's current location

4. **Favorites Management**
   - Add/remove schools from favorites
   - Persist favorites using LocalStorage
   - Display favorite schools in dedicated section
   - Show favorite status on school cards

5. **School Comparison**
   - Select up to 2 schools for comparison
   - Display side-by-side comparison table
   - Show key features for comparison
   - Clear comparison option

6. **Admission Status**
   - Display current admission status for each school
   - Status categories: Available, Limited, Full
   - Visual indicators with badges

7. **Feedback System**
   - Star rating (1-5 stars)
   - Comment submission
   - Display sample and user feedback
   - Store feedback in LocalStorage (demo)

#### Non-Functional Requirements
1. **Performance**
   - Fast page load times
   - Smooth navigation between sections
   - Efficient search and filter operations
   - Responsive map rendering

2. **Usability**
   - Intuitive user interface
   - Easy navigation
   - Clear visual feedback
   - Mobile-responsive design

3. **Compatibility**
   - Works on major browsers (Chrome, Firefox, Edge, Safari, IE11+)
   - Responsive design for desktop, tablet, and mobile
   - Fallback map solution if Google Maps API unavailable

4. **Maintainability**
   - Well-commented code
   - Modular structure
   - Clear separation of concerns

### User Requirements

#### Primary Users
1. **Parents/Guardians**
   - Need to find suitable schools for their children
   - Want to compare multiple schools
   - Require detailed information about facilities and admission
   - Need location-based search

2. **Students (Older)**
   - May search for high schools or colleges
   - Need information about facilities and programs

#### User Tasks
1. Browse all available schools
2. Search schools by specific criteria
3. View detailed school information
4. Compare schools side by side
5. Save favorite schools
6. View schools on map
7. Download detailed school documents
8. Submit feedback and ratings

### System Constraints
1. Single-page application - no server-side processing
2. All data stored statically or in browser LocalStorage
3. Maps require internet connection
4. Google Maps API key needed for full map functionality
5. Word documents must be manually created and placed in `/docs` folder

---

## eProject Design

### Architecture Overview
SchoolsInfo is built as a Single Page Application (SPA) using:
- **Presentation Layer:** HTML5 with semantic sections
- **Styling Layer:** CSS3 with responsive design
- **Logic Layer:** Vanilla JavaScript for all functionality
- **Data Layer:** Static JavaScript arrays and LocalStorage

### Design Principles
1. **Single Page Application:** All content loaded in one HTML file with section-based navigation
2. **Progressive Enhancement:** Works without JavaScript for basic viewing, enhanced with JS
3. **Responsive Design:** Mobile-first approach with breakpoints for different screen sizes
4. **Separation of Concerns:** HTML (structure), CSS (presentation), JS (behavior)
5. **Accessibility:** Semantic HTML, proper labels, keyboard navigation support

### User Interface Design

#### Layout Structure
```
┌─────────────────────────────────────┐
│         Header (Sticky)             │
│  Logo | Navigation Menu             │
├─────────────────────────────────────┤
│                                     │
│         Content Sections            │
│  - Home                             │
│  - Schools List                     │
│  - Search                           │
│  - Site Map                         │
│  - Favourites                       │
│  - Compare                          │
│  - Feedback                         │
│  - About                            │
│                                     │
├─────────────────────────────────────┤
│            Footer                   │
└─────────────────────────────────────┘
```

#### Color Scheme
- **Primary Color:** #2c3e50 (Dark Blue-Gray) - Headers, titles
- **Secondary Color:** #3498db (Blue) - Buttons, links, accents
- **Accent Color:** #e74c3c (Red) - Important alerts
- **Success Color:** #27ae60 (Green) - Positive indicators
- **Warning Color:** #f39c12 (Orange) - Warnings
- **Text:** #333 (Dark Gray) - Body text
- **Background:** #f8f9fa (Light Gray) - Page background

#### Typography
- **Font Family:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings:** Bold, various sizes (2.5rem for section titles)
- **Body:** Regular weight, 1.6 line height for readability

#### Component Design
1. **School Cards:** Image, title, location, key info, action buttons, status badge
2. **Modals:** Full-screen overlay with centered content, close button
3. **Forms:** Clean input fields with labels, validation feedback
4. **Buttons:** Rounded corners, hover effects, icons
5. **Navigation:** Horizontal menu, active state indicators

### Technical Design

#### File Structure
```
SchoolsInfo/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # All JavaScript functionality
├── docs/               # Word documents folder
│   ├── [school_name].docx
│   └── ...
├── img/                # Images folder (if using local images)
└── README.md           # Project documentation
```

#### Module Organization

**HTML Structure:**
- Header with navigation
- Multiple sections (one per feature)
- Footer
- Modal container

**CSS Organization:**
- CSS Variables (colors, spacing)
- Reset and base styles
- Component styles (cards, buttons, forms)
- Section-specific styles
- Responsive media queries

**JavaScript Organization:**
- Global variables and constants
- Initialization functions
- Navigation functions
- School display functions
- Search and filter functions
- Favorites management
- Comparison functions
- Map functions
- Feedback functions

---

## DFDs (Data Flow Diagrams)

### Level 0 DFD (Context Diagram)

```
                    ┌──────────────────┐
                    │                  │
    Search Criteria │                  │
    ───────────────>│   SchoolsInfo    │
                    │   Application    │
    User Actions    │                  │
    ───────────────>│                  │
                    │                  │
                    └──────────────────┘
                            │
                            │
                            ▼
                    ┌──────────────────┐
                    │   Browser        │
                    │   LocalStorage   │
                    │   & Maps API     │
                    └──────────────────┘
                            │
                            │
                            ▼
                    ┌──────────────────┐
                    │   School Data    │
                    │   (Static JSON)  │
                    └──────────────────┘
```

**Description:**
- **External Entities:** User
- **Process:** SchoolsInfo Application
- **Data Stores:** Browser LocalStorage, Maps API, Static School Data
- **Data Flows:** Search criteria, user actions, school information, favorites data, map data

### Level 1 DFD (Top-Level Decomposition)

```
┌─────────────┐
│    User     │
└──────┬──────┘
       │
       │ Search Criteria, Actions
       │
       ▼
┌─────────────────────────────────────────────────────────┐
│                  SchoolsInfo Application                │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Search &   │  │   Display    │  │   Favorites  │ │
│  │   Filter     │  │   Schools    │  │   Manager    │ │
│  │   Process    │  │   Process    │  │              │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
│         │                  │                  │         │
│  ┌──────▼──────────────────▼──────────────────▼──────┐ │
│  │         Data Management & Storage                  │ │
│  └──────┬──────────────────┬──────────────────┬──────┘ │
│         │                  │                  │         │
│  ┌──────▼──────┐  ┌────────▼───────┐  ┌──────▼──────┐ │
│  │  Compare    │  │      Map       │  │  Feedback   │ │
│  │  Process    │  │    Process     │  │  Process    │ │
│  └─────────────┘  └────────────────┘  └─────────────┘ │
│                                                          │
└────────────────────────┬─────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   School     │  │   Maps API   │  │  LocalStorage│
│   Data       │  │   / Leaflet  │  │              │
│   (JSON)     │  │              │  │              │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Processes:**
1. **Search & Filter Process:** Receives search criteria, filters school data, returns results
2. **Display Schools Process:** Renders school cards, handles user interactions
3. **Favorites Manager:** Manages add/remove favorites, stores in LocalStorage
4. **Compare Process:** Handles school selection, generates comparison table
5. **Map Process:** Initializes map, places markers, handles user location
6. **Feedback Process:** Collects ratings and comments, stores in LocalStorage

**Data Stores:**
- **School Data:** Static JSON array in JavaScript
- **LocalStorage:** Browser storage for favorites and feedback
- **Maps API:** External service for map rendering

---

## Flowcharts

### Flowchart 1: Search Module

```
START
  │
  ▼
[Display Search Form]
  │
  ▼
[User Selects Filters]
  │
  ▼
[Click Search Button]
  │
  ▼
[Get Filter Values]
  │
  ├─ Location Filter
  ├─ Library Checkbox
  ├─ Canteen Checkbox
  ├─ Boarding Checkbox
  ├─ Sports Dropdown
  └─ Admission Status
  │
  ▼
[Filter School Data Array]
  │
  ▼
{For each school}
  │
  ├─ Match Location? ──NO──> Skip School
  │          │
  │         YES
  │          │
  ├─ Match Library? ──NO──> Skip School
  │          │
  │         YES
  │          │
  ├─ Match Canteen? ──NO──> Skip School
  │          │
  │         YES
  │          │
  ├─ Match Boarding? ──NO──> Skip School
  │          │
  │         YES
  │          │
  ├─ Match Sports? ──NO──> Skip School
  │          │
  │         YES
  │          │
  ├─ Match Admission? ──NO──> Skip School
  │          │
  │         YES
  │          │
  └─ Add to Results
  │
  ▼
[Display Filtered Results]
  │
  ▼
[Update Results Count]
  │
  ▼
END
```

### Flowchart 2: Favorites Module (LocalStorage)

```
START (Toggle Favorite)
  │
  ▼
[Get School ID]
  │
  ▼
[Retrieve Favorites from LocalStorage]
  │
  ├─ Favorites exists?
  │     │
  │    NO ──> [Initialize Empty Array]
  │     │
  │    YES
  │     │
  └───> [Parse JSON Array]
  │
  ▼
{Is School in Favorites?}
  │
  ├─ YES ──> [Remove from Array]
  │          [Update Star Icon: Unfilled]
  │
  └─ NO ──> [Add to Array]
            [Update Star Icon: Filled]
  │
  ▼
[Save to LocalStorage]
  │
  ▼
[Update UI]
  │
  ├─ Refresh School Cards
  ├─ Update Favorites Section
  └─ Show Visual Feedback
  │
  ▼
END
```

### Flowchart 3: Compare Module

```
START (Add to Compare)
  │
  ▼
[Get Selected School ID]
  │
  ▼
[Check Compare Array Length]
  │
  ├─ Length >= 2?
  │     │
  │    YES ──> [Show Alert: "Maximum 2 schools"]
  │     │       [Prevent Addition]
  │     │       END
  │     │
  │    NO
  │     │
  └───> [Check if Already Selected]
  │
  ├─ Already in Array?
  │     │
  │    YES ──> END (No action)
  │     │
  │    NO
  │     │
  └───> [Add School ID to Compare Array]
  │
  ▼
[Update Compare Selection UI]
  │
  ├─ Display School 1 Name
  └─ Display School 2 Name
  │
  ▼
[Check if 2 Schools Selected]
  │
  ├─ Yes (2 schools)
  │   │
  │   └─> [Generate Comparison Table]
  │       [Display Comparison Table]
  │       [Hide Selection Message]
  │
  └─ No (< 2 schools)
      │
      └─> [Show Selection Message]
  │
  ▼
[Update Checkboxes on School Cards]
  │
  ▼
END
```

### Flowchart 4: Site Map Module

```
START (Initialize Map)
  │
  ▼
[Check Map Container Exists]
  │
  ├─ Not Found ──> END
  │
  └─ Found
  │
  ▼
[Check Google Maps API Available]
  │
  ├─ Available?
  │     │
  │    YES ──> [Initialize Google Map]
  │     │       [Set Center & Zoom]
  │     │       [Create Map Object]
  │     │
  │    NO
  │     │
  └───> [Initialize Leaflet Map]
        [Load OpenStreetMap Tiles]
        [Create Leaflet Map Object]
  │
  ▼
[Loop Through School Data]
  │
  ├─ For Each School:
  │     │
  │     ├─ [Get Coordinates (lat, lng)]
  │     ├─ [Create Marker]
  │     ├─ [Add Marker to Map]
  │     ├─ [Create Info Window/Popup]
  │     ├─ [Attach Click Event]
  │     └─ [Add to Markers Array]
  │
  ▼
[Fit Map Bounds to Show All Markers]
  │
  ▼
[Create Map Legend List]
  │
  ├─ For Each School:
  │     │
  │     ├─ [Create List Item]
  │     ├─ [Add Click Event]
  │     └─ [Add to Legend]
  │
  ▼
[Display Map and Legend]
  │
  ▼
END
```

### Flowchart 5: Admission Status Module

```
START (Display School Card)
  │
  ▼
[Get School Data]
  │
  ▼
[Read Admission Status]
  │
  ├─ "Available"
  │   │
  │   └─> [Set Status Badge: Green]
  │       [Icon: Check Circle]
  │       [Text: "Seats Available"]
  │
  ├─ "Limited"
  │   │
  │   └─> [Set Status Badge: Yellow/Orange]
  │       [Icon: Exclamation Circle]
  │       [Text: "Limited Seats"]
  │
  └─ "Full"
      │
      └─> [Set Status Badge: Red]
          [Icon: Times Circle]
          [Text: "Fully Booked"]
  │
  ▼
[Render Status Badge on Card]
  │
  ▼
[Apply CSS Classes]
  │
  ├─ status-available (Green background)
  ├─ status-limited (Yellow background)
  └─ status-full (Red background)
  │
  ▼
[Display in UI]
  │
  ▼
END
```

---

## Process Diagrams

### Process 1: User Search Flow

**Process Name:** School Search and Display

**Steps:**
1. User navigates to Search section
2. User selects filters (location, facilities, sports, admission status)
3. User clicks "Search" button
4. System captures all filter values
5. System iterates through school data array
6. For each school, system checks:
   - Does location match filter?
   - Does library status match filter?
   - Does canteen status match filter?
   - Does boarding status match filter?
   - Does sports array include selected sport?
   - Does admission status match filter?
7. Schools passing all filters are added to results array
8. System displays results in grid layout
9. System updates results count
10. User can click on any result to view details

**Inputs:** Filter selections (location, facilities, sports, admission)
**Outputs:** Filtered school list, result count
**Processing:** Array filtering, conditional matching

### Process 2: Favorites Management Flow

**Process Name:** Add/Remove Favorites with LocalStorage

**Steps:**
1. User clicks favorite star icon on school card
2. System retrieves school ID
3. System reads favorites from LocalStorage
4. If LocalStorage empty, initialize empty array
5. Check if school ID exists in favorites array
6. If exists:
   - Remove school ID from array
   - Change star icon to unfilled
   - Show "Removed from favorites" feedback
7. If not exists:
   - Add school ID to array
   - Change star icon to filled (gold)
   - Show "Added to favorites" feedback
8. Convert array to JSON string
9. Save to LocalStorage with key "schoolsInfoFavourites"
10. Update all school cards to reflect favorite status
11. Refresh favorites section if visible

**Inputs:** School ID, click event
**Outputs:** Updated favorites array, UI feedback, LocalStorage update
**Processing:** Array manipulation, LocalStorage read/write

### Process 3: School Comparison Flow

**Process Name:** Compare Two Schools

**Steps:**
1. User selects first school via checkbox or "Compare" button
2. System checks current compare array length
3. If length >= 2, show alert and prevent addition
4. If length < 2, add school ID to compare array
5. Update compare selection UI:
   - Display first school name in first box
   - If second school selected, display in second box
6. When 2 schools selected:
   - Retrieve full data for both schools
   - Generate comparison table HTML
   - Display side-by-side comparison
   - Hide selection message
7. Table includes: location, address, capacity, library, canteen, boarding, sports, admission status
8. User can remove schools from comparison
9. User can clear entire comparison

**Inputs:** School IDs (maximum 2)
**Outputs:** Comparison table, selection UI update
**Processing:** Array management, table generation, data retrieval

### Process 4: Map Initialization Flow

**Process Name:** Initialize Interactive Map

**Steps:**
1. User navigates to Site Map section
2. System checks if map container exists
3. System attempts to load Google Maps API
4. If Google Maps available:
   - Initialize Google Maps object
   - Set default center coordinates
   - Set initial zoom level
5. If Google Maps unavailable:
   - Load Leaflet.js library
   - Initialize Leaflet map
   - Add OpenStreetMap tile layer
6. For each school in data array:
   - Extract latitude and longitude
   - Create marker at coordinates
   - Add marker to map
   - Create info window/popup with school details
   - Attach click event to show info window
7. Calculate bounds to include all markers
8. Fit map view to show all markers
9. Generate list of schools in legend
10. Attach click events to legend items
11. Display map and legend to user

**Inputs:** School data with coordinates
**Outputs:** Interactive map with markers, legend list
**Processing:** Map API initialization, marker placement, bounds calculation

### Process 5: Feedback Submission Flow

**Process Name:** Submit User Feedback

**Steps:**
1. User navigates to Feedback section
2. User hovers over stars to see rating preview
3. User clicks on a star (1-5 rating)
4. System stores rating value
5. System highlights selected stars
6. User types comment in textarea
7. User clicks "Submit Feedback" button
8. System validates:
   - Rating must be > 0
   - Comment must not be empty
9. If validation fails, show alert
10. If validation passes:
    - Create feedback object with: id, author, rating, comment, date
    - Retrieve existing feedback from LocalStorage
    - Append new feedback to array
    - Save updated array to LocalStorage
    - Add feedback to display list
    - Reset form (clear rating and comment)
    - Show success message
11. Display all feedback (sorted by date, newest first)

**Inputs:** Star rating (1-5), comment text
**Outputs:** Feedback object, LocalStorage update, UI update
**Processing:** Validation, object creation, LocalStorage management

---

## Database Design / Structure

### Data Structure Overview

Since this is a client-side application, there is no traditional database. Data is stored in two ways:
1. **Static Data:** JavaScript arrays in the code
2. **Dynamic Data:** Browser LocalStorage

### Static Data Structure: Schools Array

```javascript
schoolsData = [
    {
        id: Number,              // Unique identifier
        name: String,            // School name
        area: String,            // Area/location name
        location: String,        // Location description
        address: String,         // Full address
        coordinates: {
            lat: Number,         // Latitude
            lng: Number          // Longitude
        },
        images: Array[String],   // Array of image URLs
        capacity: Number,        // Maximum student intake
        facilities: {
            library: Boolean,    // Library availability
            canteen: Boolean,    // Canteen availability
            boarding: Boolean    // Boarding availability
        },
        sports: Array[String],   // Available sports
        summary: String,         // Brief description
        admissionStatus: String, // "Available" | "Limited" | "Full"
        detailedDocLink: String  // Path to Word document
    },
    // ... more schools
]
```

### Entity Relationship Model (Conceptual)

```
SCHOOL
├── id (PK)
├── name
├── area
├── location
├── address
├── coordinates (lat, lng)
├── images (1:N)
├── capacity
├── facilities (1:1)
│   ├── library
│   ├── canteen
│   └── boarding
├── sports (1:N)
├── summary
├── admissionStatus
└── detailedDocLink

FAVORITES (LocalStorage)
├── userId (implicit - browser-based)
└── schoolIds (Array)

FEEDBACK (LocalStorage)
├── id
├── author
├── rating
├── comment
└── date

COMPARE (In-Memory)
└── schoolIds (Array, max 2)
```

### Data Dictionary

#### School Table (Conceptual)

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| id | Integer | Unique identifier | Primary Key, Auto-increment |
| name | String(100) | School name | Not Null |
| area | String(50) | Area/location | Not Null |
| location | String(100) | Location description | Not Null |
| address | String(200) | Full address | Not Null |
| latitude | Decimal(10,8) | Latitude coordinate | Not Null |
| longitude | Decimal(11,8) | Longitude coordinate | Not Null |
| capacity | Integer | Maximum students | Not Null, > 0 |
| library | Boolean | Library available | Default: false |
| canteen | Boolean | Canteen available | Default: false |
| boarding | Boolean | Boarding available | Default: false |
| admissionStatus | Enum | Status | Values: Available, Limited, Full |
| summary | Text | Brief description | Not Null |
| docLink | String(255) | Document path | Not Null |

#### Favorites Table (LocalStorage)

| Key | Value | Description |
|-----|-------|-------------|
| schoolsInfoFavourites | JSON Array | Array of school IDs [1, 3, 5] |

#### Feedback Table (LocalStorage)

| Key | Value | Description |
|-----|-------|-------------|
| schoolsInfoFeedback | JSON Array | Array of feedback objects |

### Indexes (Conceptual)

If this were a real database, indexes would be created on:
- `schools.id` (Primary Key)
- `schools.area` (For location filtering)
- `schools.admissionStatus` (For status filtering)
- `schools.facilities.*` (For facility filtering)

### Data Validation Rules

1. **School ID:** Must be unique, positive integer
2. **Capacity:** Must be positive integer
3. **Coordinates:** Latitude must be between -90 and 90, Longitude between -180 and 180
4. **Admission Status:** Must be one of: "Available", "Limited", "Full"
5. **Rating:** Must be between 1 and 5
6. **Compare Array:** Maximum 2 elements

---

## Screenshots List

To complete the project report, capture screenshots of the following screens:

### 1. Home Page
- **Screenshot 1.1:** Home section with hero image and welcome message
- **Screenshot 1.2:** Quick statistics cards showing total schools, locations, and capacity
- **Screenshot 1.3:** Feature cards (Location Based, Advanced Search, Detailed Information)

### 2. Schools List Section
- **Screenshot 2.1:** Full schools list with grid of school cards
- **Screenshot 2.2:** Admission status legend showing Available, Limited, Full badges
- **Screenshot 2.3:** Single school card showing all details (name, location, facilities, status, buttons)

### 3. Search Section
- **Screenshot 3.1:** Search filters panel (location, facilities, sports, admission status)
- **Screenshot 3.2:** Search results with filtered schools
- **Screenshot 3.3:** Empty search results message (when no matches found)

### 4. School Details Modal
- **Screenshot 4.1:** Modal with school image, title, and basic information
- **Screenshot 4.2:** Detailed information grid (capacity, facilities, sports, admission)
- **Screenshot 4.3:** Image gallery within modal
- **Screenshot 4.4:** Download button for Word document

### 5. Site Map Section
- **Screenshot 5.1:** Interactive map with all school markers
- **Screenshot 5.2:** Map legend/list showing all schools
- **Screenshot 5.3:** Info window/popup when clicking a marker
- **Screenshot 5.4:** Map with user location marker (if geolocation used)

### 6. Favourites Section
- **Screenshot 6.1:** Favourites section with favourite schools displayed
- **Screenshot 6.2:** Empty favourites state (when no favourites)
- **Screenshot 6.3:** School card with filled star (favourite indicator)

### 7. Compare Section
- **Screenshot 7.1:** Compare selection UI with no schools selected
- **Screenshot 7.2:** Compare selection with 1 school selected
- **Screenshot 7.3:** Compare selection with 2 schools selected
- **Screenshot 7.4:** Side-by-side comparison table with all features
- **Screenshot 7.5:** Alert message when trying to select more than 2 schools

### 8. Feedback Section
- **Screenshot 8.1:** Feedback form with star rating
- **Screenshot 8.2:** Star rating with stars highlighted
- **Screenshot 8.3:** Comment textarea
- **Screenshot 8.4:** Community feedback list with sample comments
- **Screenshot 8.5:** Submitted feedback displayed in list

### 9. About Section
- **Screenshot 9.1:** About section with mission and features
- **Screenshot 9.2:** Features list with checkmarks

### 10. Responsive Design
- **Screenshot 10.1:** Desktop view (full width)
- **Screenshot 10.2:** Tablet view (medium screen)
- **Screenshot 10.3:** Mobile view (small screen)
- **Screenshot 10.4:** Mobile navigation menu

### 11. Browser Compatibility
- **Screenshot 11.1:** Application in Chrome browser
- **Screenshot 11.2:** Application in Firefox browser
- **Screenshot 11.3:** Application in Safari browser
- **Screenshot 11.4:** Application in Edge browser

### 12. Special Features
- **Screenshot 12.1:** LocalStorage data in browser DevTools (favourites)
- **Screenshot 12.2:** Admission status badges on multiple school cards
- **Screenshot 12.3:** Leaflet map fallback (if Google Maps not available)

**Note:** All screenshots should be captured at appropriate screen resolutions (1920x1080 for desktop, 768x1024 for tablet, 375x667 for mobile) and include relevant UI elements.

---

## Source Code with Comments

### File Structure and Roles

#### 1. index.html
**Role:** Main HTML structure for the single-page application

**Key Sections:**
- Header with logo and navigation menu
- Home section with hero slider and statistics
- Schools list section with grid layout
- Search section with filters
- Site map section with map container
- Favourites section
- Compare section
- Feedback section
- About section
- Modal for school details
- Footer

**Comments in Code:**
- Section headers explain purpose of each section
- HTML5 semantic tags used for better structure
- Data attributes used for JavaScript targeting
- Accessibility attributes included

#### 2. css/style.css
**Role:** All styling and layout rules

**Key Sections:**
- CSS Variables for theme colors and spacing
- Reset and base styles
- Header and navigation styles
- Section styles (home, schools, search, etc.)
- Component styles (cards, buttons, modals, forms)
- Responsive media queries
- Animations and transitions

**Comments in Code:**
- Section comments organize CSS by feature
- Inline comments explain complex layouts
- Media query breakpoints documented

#### 3. js/script.js
**Role:** All JavaScript functionality

**Key Modules:**
1. **Global Variables:** School data array, state variables
2. **Initialization:** DOM ready handlers
3. **Navigation:** Section switching, smooth scrolling
4. **School Display:** Card creation, grid rendering
5. **Search & Filter:** Filter logic, results display
6. **Favourites:** LocalStorage management
7. **Comparison:** Two-school comparison logic
8. **Map:** Google Maps/Leaflet initialization
9. **Feedback:** Rating system, comment submission
10. **Modal:** School details display

**Comments in Code:**
- Function headers explain purpose and parameters
- Inline comments explain complex logic
- Section comments separate modules
- Algorithm explanations where needed

**Sample Commented Code Structure:**
```javascript
/**
 * Function: toggleFavourite
 * Purpose: Add or remove school from favourites
 * Parameters: schoolId (number) - ID of school to toggle
 * Returns: void
 * Side Effects: Updates LocalStorage and UI
 */
function toggleFavourite(schoolId) {
    // Implementation with comments
}
```

### Code Organization Principles

1. **Modularity:** Functions grouped by feature
2. **Reusability:** Common functions used across features
3. **Maintainability:** Clear naming, consistent structure
4. **Documentation:** JSDoc-style comments for functions
5. **Error Handling:** Try-catch blocks where appropriate

### Key Functions Documentation

See the actual `js/script.js` file for fully commented code. Key functions include:

- `initializeNavigation()` - Sets up menu event handlers
- `showSection()` - Switches between sections
- `createSchoolCard()` - Generates school card HTML
- `filterSchools()` - Filters based on criteria
- `toggleFavourite()` - Manages favourites
- `addToCompare()` - Handles comparison selection
- `initGoogleMap()` / `initLeafletMap()` - Map initialization
- `showSchoolDetails()` - Modal display
- `submitFeedback()` - Feedback submission

---

## User Guide

### Getting Started

1. **Opening the Application**
   - Open `index.html` in any modern web browser
   - No installation or server setup required
   - Works offline (except for maps and images)

2. **Navigation**
   - Use the top navigation menu to switch between sections
   - Click on any menu item to jump to that section
   - Navigation is smooth and sections load instantly

### Section-by-Section Guide

#### Home Section
- **Purpose:** Welcome screen with overview
- **Features:**
  - Hero image slider (auto-rotates)
  - Quick statistics (total schools, locations, capacity)
  - Feature cards explaining main capabilities
- **Actions:** Click "Explore Schools" or "Search Now" buttons

#### Schools List Section
- **Purpose:** Browse all available schools
- **Features:**
  - Grid of school cards
  - Each card shows: name, location, capacity, facilities, admission status
  - Legend explaining admission status badges
- **Actions:**
  - Click on a card to view details
  - Click star icon to add/remove from favourites
  - Click "Compare" button or checkbox to add to comparison
  - Click "View Details" for full information

#### Search Section
- **Purpose:** Find schools matching specific criteria
- **Using Search:**
  1. Select location from dropdown (optional)
  2. Check facility boxes (library, canteen, boarding) if needed
  3. Select sport from dropdown (optional)
  4. Select admission status (optional)
  5. Click "Search" button
  6. View filtered results below
  7. Click "Reset" to clear all filters
- **Tips:**
  - Use multiple filters for precise results
  - Empty results show a helpful message
  - Search is instant (no page reload)

#### School Details Modal
- **Purpose:** View comprehensive school information
- **Opening:** Click on any school card or "View Details" button
- **Contents:**
  - Large school image
  - Complete information grid
  - Image gallery
  - Download link for detailed Word document
- **Closing:** Click X button or outside the modal

#### Site Map Section
- **Purpose:** View schools on interactive map
- **Features:**
  - Map with markers for all schools
  - Click markers for quick info
  - List of schools below map
  - "Show My Location" button (requires permission)
- **Usage:**
  - Click on a marker to see school info popup
  - Click "View Details" in popup for full information
  - Click school name in legend to locate on map
  - Click "Show My Location" to see your current position

#### Favourites Section
- **Purpose:** Access your saved favourite schools
- **Adding Favourites:**
  - Click star icon on any school card
  - Star turns gold when favourited
  - Favourites are saved automatically
- **Viewing Favourites:**
  - Navigate to "Favourites" section
  - See all your favourite schools
  - Click star again to remove from favourites
- **Persistence:** Favourites persist after browser refresh

#### Compare Section
- **Purpose:** Compare up to 2 schools side by side
- **Adding Schools to Compare:**
  - Method 1: Click "Compare" button on school card
  - Method 2: Check "Add to comparison" checkbox
  - Maximum 2 schools can be compared
- **Viewing Comparison:**
  - When 2 schools selected, comparison table appears
  - Table shows: location, address, capacity, facilities, sports, admission status
  - Side-by-side comparison for easy decision-making
- **Removing Schools:**
  - Click X button on selected school
  - Or click "Clear Comparison" button
- **Limits:** Alert appears if trying to add more than 2 schools

#### Feedback Section
- **Purpose:** Rate and comment on the application
- **Rating:**
  - Hover over stars to see preview
  - Click on a star to select rating (1-5)
  - Selected stars turn gold
- **Commenting:**
  - Type your feedback in the textarea
  - Click "Submit Feedback" button
  - Your feedback appears in the list below
- **Viewing Feedback:**
  - See sample community feedback
  - All feedback sorted by date (newest first)
  - Shows author, rating (stars), comment, and date

#### About Section
- **Purpose:** Learn about SchoolsInfo
- **Contents:**
  - Mission statement
  - Feature list
  - School information overview
  - Technology information

### Tips and Best Practices

1. **Search Efficiency:** Use specific filters to narrow down results quickly
2. **Comparison:** Compare schools before making final decision
3. **Favourites:** Save interesting schools for later review
4. **Map Usage:** Use map to understand geographic proximity
5. **Documents:** Download detailed Word documents for in-depth information
6. **Browser:** Use modern browsers for best experience
7. **Internet:** Maps require internet connection (or uses Leaflet fallback)

### Troubleshooting

**Problem:** Map not showing
- **Solution:** Check internet connection. If Google Maps unavailable, Leaflet fallback should work.

**Problem:** Favourites not saving
- **Solution:** Ensure cookies/local storage enabled in browser settings.

**Problem:** Comparison not working
- **Solution:** Remember, only 2 schools can be compared at a time.

**Problem:** Search showing no results
- **Solution:** Clear filters and try again, or use fewer filter criteria.

**Problem:** Images not loading
- **Solution:** Check internet connection (images loaded from external source).

---

## Developer's Guide

### Project Setup

1. **File Structure:**
   ```
   SchoolsInfo/
   ├── index.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── script.js
   ├── docs/
   │   ├── greenfield_international_school.docx
   │   ├── sunshine_public_school.docx
   │   ├── riverside_academy.docx
   │   ├── maplewood_elementary.docx
   │   ├── oakridge_high_school.docx
   │   └── meadowbrook_school.docx
   └── README.md
   ```

2. **Prerequisites:**
   - Modern web browser
   - Text editor (VS Code, Sublime Text, etc.)
   - Google Maps API key (optional, for full map functionality)

3. **Getting Started:**
   - Open `index.html` in browser
   - For development, use a local server (optional but recommended)
   - Open browser DevTools for debugging

### Code Architecture

#### HTML Structure
- Single page with multiple sections
- Each section has unique ID
- Semantic HTML5 elements used
- Data attributes for JavaScript hooks

#### CSS Organization
- CSS Variables for theme management
- Component-based styling
- Mobile-first responsive design
- Clear naming conventions (BEM-inspired)

#### JavaScript Organization
- Module pattern (functional approach)
- Global state variables at top
- Functions organized by feature
- Event-driven architecture

### Adding New Schools

To add a new school, modify the `schoolsData` array in `js/script.js`:

```javascript
{
    id: 7,  // Next sequential ID
    name: "New School Name",
    area: "Area Name",
    location: "Area Name",
    address: "Full Address",
    coordinates: { lat: 40.1234, lng: -73.5678 },
    images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
    ],
    capacity: 1000,
    facilities: {
        library: true,
        canteen: true,
        boarding: false
    },
    sports: ["Football", "Basketball", "Cricket"],
    summary: "School description here...",
    admissionStatus: "Available",  // or "Limited" or "Full"
    detailedDocLink: "docs/new_school.docx"
}
```

Then create corresponding Word document in `docs/` folder.

### Modifying Styles

1. **Colors:** Change CSS variables at top of `css/style.css`:
   ```css
   :root {
       --primary-color: #your-color;
       --secondary-color: #your-color;
   }
   ```

2. **Layout:** Modify grid/flex properties in component styles

3. **Responsive:** Adjust breakpoints in media queries

### Extending Functionality

#### Adding New Filter
1. Add filter UI element in HTML (search section)
2. Get filter value in `filterSchools()` function
3. Add filter condition in school filtering loop
4. Update `resetFilters()` function

#### Adding New Section
1. Add new section in HTML with unique ID
2. Add navigation link in header
3. Add section styles in CSS
4. Add section initialization in JavaScript

#### Modifying Map
1. Google Maps: Modify `initGoogleMap()` function
2. Leaflet: Modify `initLeafletMap()` function
3. For custom markers, change icon URLs
4. For custom popups, modify info window content

### Debugging

1. **Browser Console:** Check for JavaScript errors
2. **DevTools:** Inspect elements, check LocalStorage
3. **Network Tab:** Check API calls, image loading
4. **Console Logging:** Use `console.log()` for debugging

### Testing Checklist

- [ ] All sections load correctly
- [ ] Navigation works smoothly
- [ ] Search filters return correct results
- [ ] Favourites save and persist
- [ ] Comparison works (max 2 schools)
- [ ] Map displays with markers
- [ ] Modal opens and closes properly
- [ ] Responsive design works on mobile
- [ ] All browsers tested (Chrome, Firefox, Safari, Edge)
- [ ] LocalStorage functionality verified
- [ ] Form validation works
- [ ] Error handling for edge cases

### Performance Optimization

1. **Images:** Use optimized image sizes
2. **Code:** Minify CSS and JS for production
3. **Caching:** Set appropriate cache headers if using server
4. **Lazy Loading:** Consider lazy loading for images (future enhancement)

### Best Practices

1. **Code Comments:** Comment complex logic
2. **Variable Naming:** Use descriptive names
3. **Function Size:** Keep functions focused and small
4. **Error Handling:** Handle edge cases gracefully
5. **Accessibility:** Use semantic HTML, ARIA labels
6. **SEO:** Add meta tags if needed (though SPA has limitations)

### Future Enhancements

Potential improvements:
1. Server-side backend for data management
2. User authentication and profiles
3. Advanced search with multiple sports selection
4. School reviews and ratings from users
5. Virtual tours integration
6. Online admission application
7. Notification system
8. Export comparison to PDF
9. Social media sharing
10. Multi-language support

---

## Module Descriptions

### Module 1: Home Module

**Purpose:** Welcome users and provide overview of the application

**Components:**
- Hero slider with images
- Welcome message
- Quick statistics display
- Feature cards

**Functions:**
- `initializeHeroSlider()` - Auto-rotates hero images
- `updateStats()` - Updates statistics from school data

**Features:**
- Visual appeal with rotating images
- Quick information about total schools
- Call-to-action buttons

**Dependencies:** None

**User Interactions:**
- Click buttons to navigate to other sections
- View statistics

---

### Module 2: Schools List Module

**Purpose:** Display all schools in a grid layout

**Components:**
- Schools grid container
- School cards (dynamically generated)
- Admission status legend

**Functions:**
- `displayAllSchools()` - Renders all school cards
- `createSchoolCard(school)` - Creates HTML for single card

**Features:**
- Responsive grid layout
- School information preview
- Favorite toggle on each card
- Compare checkbox on each card
- Admission status badges
- Click to view details

**Dependencies:** 
- School data array
- Favorites system
- Comparison system

**User Interactions:**
- Click card to view details
- Click star to toggle favorite
- Click "Compare" or checkbox
- Click "View Details" button

---

### Module 3: Search Module

**Purpose:** Filter schools based on user criteria

**Components:**
- Filter form (location, facilities, sports, admission)
- Search and reset buttons
- Results grid
- Results count display

**Functions:**
- `populateLocationFilter()` - Fills location dropdown
- `filterSchools()` - Applies filters and displays results
- `displaySearchResults(schools)` - Renders filtered schools
- `resetFilters()` - Clears all filters

**Features:**
- Multiple filter options
- Dynamic result updates
- Result count display
- Empty state handling

**Dependencies:**
- School data array
- School card creation function

**User Interactions:**
- Select filters
- Click "Search"
- Click "Reset"
- View and interact with results

---

### Module 4: School Details Module

**Purpose:** Show comprehensive information about a school

**Components:**
- Modal overlay
- School image
- Information grid
- Image gallery
- Download button

**Functions:**
- `showSchoolDetails(schoolId)` - Opens modal with school info
- `closeSchoolModal()` - Closes the modal

**Features:**
- Full-screen modal
- Complete school information
- Multiple images
- Downloadable document link
- Close on outside click

**Dependencies:**
- School data array
- Modal HTML structure

**User Interactions:**
- Open modal (from card click)
- Close modal (X button or outside click)
- View images
- Download document

---

### Module 5: Site Map Module

**Purpose:** Display schools on interactive map

**Components:**
- Map container
- Map markers
- Info windows/popups
- School legend/list
- "Show My Location" button

**Functions:**
- `initGoogleMap()` - Initializes Google Maps
- `initLeafletMap()` - Initializes Leaflet (fallback)
- `updateMapLegend()` - Creates legend list
- `getUserLocation()` - Gets and displays user location

**Features:**
- Interactive map with markers
- Click markers for info
- Legend with clickable items
- Geolocation support
- Fallback to Leaflet if Google Maps unavailable
- Auto-fit bounds to show all schools

**Dependencies:**
- Google Maps API or Leaflet library
- School coordinates
- Browser geolocation API

**User Interactions:**
- Click markers
- Click legend items
- Click "Show My Location"
- Navigate map

---

### Module 6: Favourites Module

**Purpose:** Manage user's favorite schools

**Components:**
- Favorites section
- Favorites grid
- Empty state message
- Star icons on cards

**Functions:**
- `toggleFavourite(schoolId)` - Adds/removes from favorites
- `getFavourites()` - Retrieves from LocalStorage
- `saveFavourites(favourites)` - Saves to LocalStorage
- `displayFavourites()` - Renders favorite schools
- `isSchoolFavourite(schoolId)` - Checks favorite status
- `removeFromFavourites(schoolId)` - Removes from favorites

**Features:**
- LocalStorage persistence
- Visual feedback (filled/unfilled stars)
- Dedicated favorites section
- Empty state handling
- Automatic UI updates

**Dependencies:**
- Browser LocalStorage API
- School data array
- School card creation

**User Interactions:**
- Click star icon to toggle
- View favorites section
- Remove from favorites

---

### Module 7: Compare Module

**Purpose:** Compare up to 2 schools side by side

**Components:**
- Compare selection UI
- Selected school boxes
- Comparison table
- Selection message
- Clear button

**Functions:**
- `addToCompare(schoolId)` - Adds school to comparison
- `handleCompareCheckbox(schoolId, checked)` - Handles checkbox
- `removeFromCompare(index)` - Removes school from comparison
- `clearComparison()` - Clears all selections
- `updateCompareUI()` - Updates selection display
- `updateCompareTable()` - Generates comparison table

**Features:**
- Maximum 2 schools limit
- Validation and alerts
- Side-by-side comparison table
- Clear comparison option
- Visual selection indicators

**Dependencies:**
- School data array
- Compare array (in-memory)

**User Interactions:**
- Select schools (button or checkbox)
- View comparison table
- Remove schools
- Clear comparison

---

### Module 8: Feedback Module

**Purpose:** Collect and display user feedback

**Components:**
- Star rating system
- Comment textarea
- Submit button
- Feedback list
- Sample comments

**Functions:**
- `initializeStarRating()` - Sets up star rating
- `highlightStars(rating)` - Highlights stars
- `getRatingText(rating)` - Gets rating description
- `submitFeedback()` - Processes feedback submission
- `loadFeedback()` - Loads from LocalStorage
- `displayFeedback()` - Renders feedback list
- `formatDate(dateString)` - Formats dates

**Features:**
- Interactive star rating (1-5)
- Comment submission
- LocalStorage persistence
- Sample feedback display
- Date formatting
- Validation

**Dependencies:**
- Browser LocalStorage API
- Sample feedback data

**User Interactions:**
- Hover/click stars for rating
- Type comment
- Submit feedback
- View feedback list

---

### Module 9: Admission Status Module

**Purpose:** Display and indicate admission availability

**Components:**
- Status badges on cards
- Status legend
- Status indicators in details

**Functions:**
- Integrated in `createSchoolCard()`
- Status badge rendering in multiple places

**Features:**
- Visual badges (Available/Limited/Full)
- Color coding (Green/Yellow/Red)
- Icons for clarity
- Legend explanation
- Consistent across all views

**Status Types:**
- **Available:** Green badge, check icon - "Seats Available"
- **Limited:** Yellow badge, exclamation icon - "Limited Seats"
- **Full:** Red badge, X icon - "Fully Booked"

**Dependencies:**
- School data (admissionStatus field)
- CSS classes for styling

**User Interactions:**
- View status on cards
- Understand from legend
- Filter by status

---

### Module 10: Navigation Module

**Purpose:** Handle section navigation and menu

**Components:**
- Header navigation menu
- Section containers
- Mobile menu toggle

**Functions:**
- `initializeNavigation()` - Sets up menu event handlers
- `showSection(sectionId)` - Switches active section
- `scrollToSection(sectionId)` - Scrolls and shows section

**Features:**
- Smooth section switching
- Active link highlighting
- Mobile-responsive menu
- No page reload
- Smooth scrolling

**Dependencies:**
- HTML structure
- Section IDs

**User Interactions:**
- Click menu items
- Navigate between sections
- Mobile menu toggle

---

## Conclusion

The SchoolsInfo project successfully implements a comprehensive single-page web application for school information management. The application provides:

- **Complete functionality** as per requirements
- **User-friendly interface** with modern design
- **Responsive layout** for all devices
- **Advanced features** including search, comparison, favorites
- **Interactive mapping** with fallback options
- **Local storage** for user preferences
- **Clean, maintainable code** with proper documentation

The project demonstrates proficiency in HTML5, CSS3, JavaScript, API integration, and user interface design. All requirements have been met, and the application is ready for deployment and use.

---

**Project Completion Date:** [Insert Date]
**Developer:** [Your Name]
**Version:** 1.0

---

*End of eProject Report*

