import "./Banner.css";
import React from "react";

interface BannerProps {
  imageSrc: string;
  altText?: string;
  //torna o texto alternativo opcional
}

const Banner = ({ imageSrc, altText }: BannerProps) => {
  return (
    <header className="banner">
      <img src={imageSrc} alt={altText} />
      {/* <img src="/images/banner.png" alt="Banner do Organo" /> */}
    </header>
  );
};

export default Banner;
