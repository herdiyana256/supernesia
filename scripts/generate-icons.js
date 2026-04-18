const sharp = require('sharp');
const fs = require('fs');

const sizes = [72, 96, 128, 192, 512];
const inputFile = 'public/SUPERNESIA_LOGOS_MODE_DARK.png'; // Will use this as fallback if logo-original doesn't exist
const targetFile = fs.existsSync('public/logo-original.png') ? 'public/logo-original.png' : inputFile;

if (!fs.existsSync('public/icons')) {
  fs.mkdirSync('public/icons', { recursive: true });
}

console.log(`Generating icons using ${targetFile}...`);

sizes.forEach(size => {
  sharp(targetFile)
    .resize(size, size, { fit: 'contain', background: { r: 13, g: 17, b: 23, alpha: 0 } })
    .toFile(`public/icons/icon-${size}x${size}.png`)
    .then(() => console.log(`Generated icon-${size}x${size}.png`))
    .catch(err => console.error(`Error generating ${size}x${size}:`, err));
});
