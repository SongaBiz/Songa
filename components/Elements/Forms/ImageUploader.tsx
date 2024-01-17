import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';


function ImageUploader({name, require, onImageUpload }: { onImageUpload: (imageData: File) => void , require: boolean, name?: string }) {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result as string; // Cast the result to string
        setSelectedImages((prevImages) => [...prevImages, imageData]);
        onImageUpload(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='w-full flex flex-col gap-1'>
      <div className='w-full'>
        <input type="file" accept="image/*" required={require} onChange={handleImageUpload} />
        {selectedImages.length > 0 && (
          <div>
            <h3>Selected Images:</h3>
            <ul>
              {selectedImages.map((imageData, index) => (
                <li key={index}>
                  <Image src={imageData} alt={`Selected ${index + 1}`} width={100} height={300} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {errors[name||""] && (
          <span className='text-red-500 text-xs pt-1 block'>
          {errors[name||""]?.message as string}
          </span>
      )}
    </div>
  );
}

export default ImageUploader;
