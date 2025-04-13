import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({ 
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET
});

const uploadImage = async (imagePath) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: 'portfolio',
      use_filename: true,
      unique_filename: false,
      overwrite: true
    });
    console.log(result.secure_url);
    return result;
  } catch (error) {
    console.error(error);
  }
};

// Ejemplo de uso (reemplaza con tus rutas)
uploadImage('https://res.cloudinary.com/dy1t4y5wc/image/upload/v1744081880/ai-devguide-Home_gnuneo.png');
uploadImage('https://res.cloudinary.com/dy1t4y5wc/image/upload/v1744081826/la-rana-Home_tyetwl.png');
uploadImage('https://res.cloudinary.com/dy1t4y5wc/image/upload/v1744329393/AI_DevGuide_lrzoyd.gif');
uploadImage('https://res.cloudinary.com/dy1t4y5wc/image/upload/v1744330626/La_Rana_Pintada_sy5oah.gif');