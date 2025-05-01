import axios from 'axios';

const CLOUD_NAME = 'dnznxevrn';
const UPLOAD_PRESET = 'olx-clone-react';

export const uploadImageToCloudinary = async (image) => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', UPLOAD_PRESET);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
