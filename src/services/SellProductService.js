import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { uploadImageToCloudinary } from '../utils/uploadImages';

export const uploadProduct = async (formData, images) => {
  try {
    const imageUrls = await Promise.all(
      images.map((image) => uploadImageToCloudinary(image))
    );

    await addDoc(collection(db, 'products'), {
      ...formData,
      imageUrls,
      createdAt: serverTimestamp(),
    });

    return { success: true, message: 'Product uploaded successfully.' };
  } catch (error) {
    console.error('Error uploading product:', error);
    return { success: false, message: error.message };
  }
};