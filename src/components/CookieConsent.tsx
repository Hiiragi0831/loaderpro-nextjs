import React, { useState, useEffect } from "react";
import Link from "next/link";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={"cookie"}>
      <div className="cookie__content">
        <span className="cookie__title">Используем куки</span>
        <div className="cookie__text">
          <p>Это чтобы сайт работал лучше.</p>
          <p>
            Оставаясь с нами, вы соглашаетесь на использование{" "}
            <Link href={"/privacy-policy"}>файлов куки</Link>.
          </p>
        </div>
        <button className="button button__primary" onClick={handleConsent}>
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
