"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

const STORAGE_KEY = "vaibhav_portfolio_custom_avatar";

export function useProfileImage() {
  const [profileImage, setProfileImage] = useState<string>(portfolioData.personalInfo.profileImage);
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setProfileImage(saved);
        setIsCustom(true);
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const updateImage = (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        try {
          localStorage.setItem(STORAGE_KEY, result);
          setProfileImage(result);
          setIsCustom(true);
          // Broadcast to other components
          window.dispatchEvent(new Event("avatar_updated"));
          resolve();
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const resetToDefault = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setProfileImage(portfolioData.personalInfo.profileImage);
      setIsCustom(false);
      window.dispatchEvent(new Event("avatar_updated"));
    } catch {
      // Fallback
    }
  };

  useEffect(() => {
    const handleAvatarUpdate = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          setProfileImage(saved);
          setIsCustom(true);
        } else {
          setProfileImage(portfolioData.personalInfo.profileImage);
          setIsCustom(false);
        }
      } catch {
        // Fallback
      }
    };

    window.addEventListener("avatar_updated", handleAvatarUpdate);
    return () => window.removeEventListener("avatar_updated", handleAvatarUpdate);
  }, []);

  return {
    profileImage,
    isCustom,
    updateImage,
    resetToDefault,
  };
}
