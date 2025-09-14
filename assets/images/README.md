# Images Folder Structure

This folder contains all the images used in the portfolio website.

## Folder Structure

```
assets/images/
├── profile/           # Profile pictures and personal images
│   ├── profile.jpg    # Main profile picture for About section
│   └── avatar.png     # Avatar for header/navigation
├── projects/          # Project screenshots and thumbnails
│   ├── voice-assistant.jpg
│   ├── queue-management.jpg
│   ├── farm-system.jpg
│   ├── blog-portal.jpg
│   ├── employee-management.jpg
│   └── medical-chatbot.jpg
├── certificates/      # Certificates and achievements
│   ├── rtech-certificate.jpg
│   └── other-certificates.jpg
└── README.md         # This file
```

## Image Guidelines

### Profile Images
- **profile.jpg**: Main profile picture (recommended: 400x400px, square format)
- **avatar.png**: Small avatar for header (recommended: 64x64px)

### Project Images
- **Format**: JPG or PNG
- **Size**: 800x600px or similar aspect ratio
- **Quality**: High resolution for better display
- **Naming**: Use descriptive names matching project titles

### Certificates
- **Format**: JPG or PNG
- **Size**: 600x400px or similar
- **Quality**: Clear, readable text

## How to Add Images

1. **Upload your images** to the appropriate subfolder
2. **Update the HTML** to reference the new image paths
3. **Optimize images** for web (compress if needed)
4. **Test** that all images load correctly

## Example Usage in HTML

```html
<!-- Profile Image -->
<img src="assets/images/profile/profile.jpg" alt="Balasuriya Periyasamy" />

<!-- Project Image -->
<img src="assets/images/projects/voice-assistant.jpg" alt="Voice Assistant Project" />

<!-- Certificate Image -->
<img src="assets/images/certificates/rtech-certificate.jpg" alt="RTech Certificate" />
```

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim to compress images
- Keep file sizes under 500KB for faster loading
- Use WebP format for better compression (with JPG fallback)
- Consider using responsive images for different screen sizes
