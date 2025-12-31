import { useEffect } from 'react';

const Favicon = () => {
  useEffect(() => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll('link[rel*="icon"], link[rel="shortcut icon"]');
    existingLinks.forEach(link => link.remove());

    const version = 'v2';
    
    // Explicitly set favicon.ico first (browsers look for this by default)
    const icoLink = document.createElement('link');
    icoLink.rel = 'icon';
    icoLink.href = `/favicon.ico?${version}`;
    icoLink.type = 'image/x-icon';
    document.head.insertBefore(icoLink, document.head.firstChild);

    // Primary favicon PNG
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = `/logo.png?${version}`;
    document.head.appendChild(link);

    // Shortcut icon (for older browsers)
    const shortcutLink = document.createElement('link');
    shortcutLink.rel = 'shortcut icon';
    shortcutLink.type = 'image/png';
    shortcutLink.href = `/logo.png?${version}`;
    document.head.appendChild(shortcutLink);

    // Apple touch icon
    const appleLink = document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = `/logo.png?${version}`;
    document.head.appendChild(appleLink);
  }, []);

  return null;
};

export default Favicon;

