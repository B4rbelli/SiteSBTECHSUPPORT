import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showManager, setShowManager] = useState(false);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('cookieConsent');
    if (!saved) {
      setShowBanner(true);
    } else {
      setConsent(saved);
      if (saved === 'accepted') loadGoogleAnalytics();
    }
  }, []);

  const handleConsent = (choice) => {
    localStorage.setItem('cookieConsent', choice);
    setConsent(choice);
    setShowBanner(false);
    setShowManager(false);
    if (choice === 'accepted') loadGoogleAnalytics();
  };

  const loadGoogleAnalytics = () => {
    if (window.gtag) return;
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y2YL4YK4Z6';
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-Y2YL4YK4Z6');
    };
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-gray-200 p-4 z-50 shadow-lg rounded-t-lg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm md:flex-1">
              Usamos cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdos. Saiba mais em nossa{' '}
              <a
                href="/politica&privacidade_sbtech.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-purple-400 hover:text-purple-300"
              >
                Política de Privacidade
              </a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => handleConsent('accepted')}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm text-white transition"
              >
                Aceitar Todos
              </button>
              <button
                onClick={() => handleConsent('declined')}
                className="px-4 py-2 border border-gray-500 rounded text-sm hover:bg-gray-700 transition"
              >
                Rejeitar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setShowManager(true)}
          className="px-3 py-2 bg-gray-700 text-gray-200 rounded shadow hover:bg-gray-600 transition text-xs"
        >
          Gerenciar Cookies
        </button>
      </div>

      {showManager && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-slate-800 text-gray-200 p-6 rounded-lg max-w-md w-full shadow-xl transform transition-all">
            <h2 className="text-xl font-semibold mb-4 text-white">Preferências de Cookies</h2>
            <p className="text-sm mb-6">
              Configure suas preferências para uso de cookies no site da SB Tech&Support. Você pode escolher manter ou revogar suas escolhas a qualquer momento. Detalhes na{' '}
              <a
                href="/politica&privacidade_sbtech.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-purple-400 hover:text-purple-300"
              >
                Política de Privacidade
              </a>.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleConsent('accepted')}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm text-white transition"
              >
                Aceitar Todos
              </button>
              <button
                onClick={() => handleConsent('declined')}
                className="px-4 py-2 border border-gray-500 rounded text-sm hover:bg-gray-700 transition"
              >
                Rejeitar
              </button>
              <button
                onClick={() => setShowManager(false)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-gray-300 transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
