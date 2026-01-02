# SchoolsInfo - School Information Website

A comprehensive single-page website for finding and exploring schools in your city. Built with HTML5, JavaScript, and Google Maps Geolocation API.

## Features

- **Home Page**: Welcome section with hero image and feature cards
- **Schools Listing**: View all available schools with their basic information
- **Advanced Search**: Filter schools by location, library, canteen, boarding, and sports facilities
- **Interactive Site Map**: View all schools on Google Maps with clickable markers
- **Detailed School Information**: 
  - Maximum intake capacity
  - Library availability
  - Canteen facility
  - Boarding availability
  - Sports options available
  - Brief summary with images
  - Downloadable detailed Word documents

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Google Maps API key (for map functionality)

### Installation

1. Clone or download this project
2. Open `index.html` in a web browser

### Google Maps API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Maps JavaScript API
4. Create credentials (API Key)
5. Open `index.html` and replace `YOUR_API_KEY` with your actual API key on line 146:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
```

Replace `YOUR_API_KEY` with your actual Google Maps API key.

### Document Files

The detailed school information documents should be placed in the `documents/` folder. The expected files are:

- `greenfield_international_school.docx`
- `sunshine_public_school.docx`
- `riverside_academy.docx`
- `maplewood_elementary.docx`
- `oakridge_high_school.docx`
- `meadowbrook_school.docx`

**Note**: These Word documents can be created using Microsoft Word or any word processing software. They should contain detailed information about each school including history, curriculum, faculty, admission procedures, fees, etc.

## File Structure

```
SchoolsInfo/
│
├── index.html          # Main HTML file (Single Page Application)
├── styles.css          # All styling and CSS
├── script.js           # JavaScript functionality and school data
├── README.md           # This file
└── documents/          # Folder for detailed school information Word documents
    ├── greenfield_international_school.docx
    ├── sunshine_public_school.docx
    ├── riverside_academy.docx
    ├── maplewood_elementary.docx
    ├── oakridge_high_school.docx
    └── meadowbrook_school.docx
```

## Usage

### Navigation

Use the navigation menu at the top to switch between sections:
- **Home**: Welcome page with overview
- **Schools**: Browse all schools
- **Search**: Filter schools by various criteria
- **Site Map**: View schools on interactive map
- **About**: Information about SchoolsInfo

### Searching Schools

1. Navigate to the "Search" section
2. Use the filters to narrow down your search:
   - Select a location from the dropdown
   - Check facilities (Library, Canteen, Boarding)
   - Select a sport option
3. Click "Search" to see results
4. Click "Reset" to clear all filters

### Viewing School Details

- Click on any school card to see detailed information
- On the map, click on a marker and then "View Details"
- Download detailed Word documents from the school detail modal

### Site Map

- View all schools on an interactive Google Map
- Click on markers to see school information
- Click on items in the legend to navigate to that school on the map

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Internet Explorer 11+

## Technologies Used

- **HTML5**: Structure and semantics
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Functionality and interactivity
- **Google Maps JavaScript API**: Geolocation and mapping
- **Font Awesome**: Icons

## School Data Structure

Each school in the system contains:

```javascript
{
    id: number,
    name: string,
    location: string,
    address: string,
    latitude: number,
    longitude: number,
    image: string (URL),
    capacity: number,
    library: boolean,
    canteen: boolean,
    boarding: boolean,
    sports: array of strings,
    description: string,
    document: string (filename)
}
```

## Customization

### Adding New Schools

Edit the `schoolsData` array in `script.js` to add new schools. Follow the data structure shown above.

### Changing Styling

Modify `styles.css` to change colors, fonts, layouts, etc. CSS variables are defined at the top for easy customization:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... */
}
```

### Modifying Map Center

In `script.js`, change the `defaultCenter` coordinates in the `initMap()` function to center the map on your city.

## Notes

- This is a single-page application (SPA) - all content loads in one HTML file
- No server-side processing required - runs entirely in the browser
- Images are loaded from Unsplash (ensure internet connection for images)
- Map functionality requires Google Maps API key and internet connection

## Support

For issues or questions, please refer to the project documentation or contact the development team.

## License

This project is created for educational purposes.

