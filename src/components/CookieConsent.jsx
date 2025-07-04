import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{' '}
          <a
            href="/politica&privacidade_sbtech.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-400"
          >
            Política de Privacidade
          </a>.
        </p>
        <button
          onClick={acceptCookies}
          className="mt-2 md:mt-0 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 text-sm transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
