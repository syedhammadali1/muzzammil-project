# Google Maps API Setup Instructions

## Step-by-Step Guide

### 1. Create a Google Cloud Project
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Click on the project dropdown and select "New Project"
- Enter a project name (e.g., "SchoolsInfo")
- Click "Create"

### 2. Enable Maps JavaScript API
- In the Google Cloud Console, go to "APIs & Services" > "Library"
- Search for "Maps JavaScript API"
- Click on it and then click "Enable"

### 3. Create API Key
- Go to "APIs & Services" > "Credentials"
- Click "Create Credentials" > "API Key"
- Copy the generated API key

### 4. Restrict API Key (Optional but Recommended)
- Click on the API key you just created
- Under "API restrictions", select "Restrict key"
- Choose "Maps JavaScript API"
- Save the changes

### 5. Add API Key to the Project
- Open `index.html` in a text editor
- Find line 146 which contains:
  ```html
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
  ```
- Replace `YOUR_API_KEY` with your actual API key
- Save the file

### 6. Test the Application
- Open `index.html` in a web browser
- Navigate to the "Site Map" section
- You should see a map with school markers

## Important Notes

- **Free Tier**: Google Maps API offers a free tier with $200 credit per month, which is sufficient for most development and testing purposes.
- **Billing**: You may need to set up billing in Google Cloud Console, but the free tier should cover normal usage.
- **Security**: For production, consider restricting your API key to specific domains.

## Alternative: Using Without API Key (Limited Functionality)

If you don't want to set up an API key immediately, the website will still work but the map section will show an error message. All other features (school listing, search, etc.) will work normally.

