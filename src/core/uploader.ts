const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const storage = cloudinaryStorage({
    cloudinary,
    folder: 'image',
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'ogg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
});

const uploader = multer({ storage });

export default uploader;