import { useEffect } from 'react';

const Favicon = () => {
  useEffect(() => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll('link[rel*="icon"]');
    existingLinks.forEach(link => link.remove());

    // Create new favicon link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = '/logo.png?v=2';
    
    // Force reload by appending timestamp
    const timestamp = new Date().getTime();
    link.href = `/logo.png?v=${timestamp}`;
    
    document.head.appendChild(link);

    // Also add shortcut icon
    const shortcutLink = document.createElement('link');
    shortcutLink.rel = 'shortcut icon';
    shortcutLink.href = `/logo.png?v=${timestamp}`;
    document.head.appendChild(shortcutLink);

    // Apple touch icon
    const appleLink = document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = `/logo.png?v=${timestamp}`;
    document.head.appendChild(appleLink);
  }, []);

  return null;
};

export default Favicon;

