import { useEffect } from 'react';

const Favicon = () => {
  useEffect(() => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll('link[rel*="icon"]');
    existingLinks.forEach(link => link.remove());

    const version = 'v2';
    
    // Create new favicon link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = `/logo.png?${version}`;
    document.head.appendChild(link);

    // Also add shortcut icon
    const shortcutLink = document.createElement('link');
    shortcutLink.rel = 'shortcut icon';
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

