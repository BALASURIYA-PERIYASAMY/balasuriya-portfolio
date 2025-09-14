# Certificates Section Setup Guide

## How to Add Your Real Certificates

### 1. Upload Certificates to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Create a folder called "Portfolio Certificates"
3. Upload your certificate images/PDFs to this folder
4. For each certificate, right-click and select "Get link"
5. Make sure the link sharing is set to "Anyone with the link can view"

### 2. Update the Certificate Links
In the `index.html` file, find the certificates section and replace the placeholder links:

**Current placeholder format:**
```html
<a href="https://drive.google.com/file/d/YOUR_CERTIFICATE_ID_1/view" target="_blank" class="certificate-btn">
```

**Replace with your actual Google Drive links:**
```html
<a href="https://drive.google.com/file/d/1ABC123DEF456GHI789JKL/view" target="_blank" class="certificate-btn">
```

### 3. Update Certificate Information
For each certificate card, update:
- **Certificate Title**: The name of the certificate/course
- **Event Name**: The competition/event name and result (Winner/Participation)
- **Date**: The date you received the certificate
- **Description**: Brief description of what you achieved

### 4. Example Certificate Data
```html
<div class="certificate-card" data-aos="zoom-in" data-aos-delay="100">
  <div class="certificate-icon">
    <i class="fa-solid fa-trophy text-4xl text-yellow-500"></i>
  </div>
  <div class="certificate-content">
    <h3 class="certificate-title">Web Development Bootcamp</h3>
    <p class="certificate-event">TechFest 2024 - Winner</p>
    <p class="certificate-date">March 15, 2024</p>
    <p class="certificate-desc">First place in web development competition showcasing full-stack skills</p>
  </div>
  <div class="certificate-link">
    <a href="YOUR_GOOGLE_DRIVE_LINK_HERE" target="_blank" class="certificate-btn">
      <i class="fa-solid fa-eye"></i> View Certificate
    </a>
  </div>
</div>
```

### 5. Available Icons
You can change the certificate icons by replacing the FontAwesome classes:
- `fa-trophy` - For winners/achievements
- `fa-medal` - For competitions
- `fa-award` - For recognitions
- `fa-certificate` - For course completions
- `fa-star` - For special achievements
- `fa-graduation-cap` - For educational certificates

### 6. Adding More Certificates
To add more certificates:
1. Copy an existing certificate card
2. Update the content and links
3. Adjust the `data-aos-delay` value for staggered animations
4. Make sure the Google Drive link is publicly accessible

### 7. Testing
- Test all certificate links to ensure they open correctly
- Verify the certificates are publicly viewable
- Check the responsive design on mobile devices

## Notes
- The certificates section appears between Projects and Experience sections
- All certificates have hover effects and smooth animations
- The section is fully responsive for mobile devices
- Google Drive links should be set to "Anyone with the link can view" for public access
