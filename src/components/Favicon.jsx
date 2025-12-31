import { useEffect } from 'react';

const Favicon = () => {
  useEffect(() => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll('link[rel*="icon"], link[rel="shortcut icon"]');
    existingLinks.forEach(link => link.remove());

    const version = 'v2';
    
    // Primary favicon (browsers will use this instead of favicon.ico)
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

    // Prevent browser from looking for favicon.ico by adding it as a data URI
    const icoLink = document.createElement('link');
    icoLink.rel = 'icon';
    icoLink.href = `/logo.png?${version}`;
    document.head.appendChild(icoLink);
  }, []);

  return null;
};

export default Favicon;

