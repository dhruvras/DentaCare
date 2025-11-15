import axios from 'axios';

const uploadBase64Image = async (base64Image) => {
  try {
    const response = await axios.post('http://192.168.6.232:3000/upload', {
      image: base64Image,
      filename: `image_${Date.now()}.jpg`,
    });

    console.log('Server response:', response.data);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};

export { uploadBase64Image };
