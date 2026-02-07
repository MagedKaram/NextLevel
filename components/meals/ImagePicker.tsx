"use client";
import { useRef, useState } from "react";
import styles from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({
  lable,
  name,
}: {
  lable: string;
  name: string;
}) {
  const imageRef = useRef<HTMLInputElement>(null);
  const [imagePicked, setImagePicked] = useState<string | null>(null);
  const pickImage = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };
  const pickImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePicked(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{lable}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {imagePicked ? (
            <Image src={imagePicked} alt="Picked Image" fill />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          type="file"
          name={name}
          ref={imageRef}
          className={styles.input}
          onChange={pickImageHandler}
        />
        <button onClick={pickImage} type="button" className={styles.button}>
          Pick Image
        </button>
      </div>
    </div>
  );
}
