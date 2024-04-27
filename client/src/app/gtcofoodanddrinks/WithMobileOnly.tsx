import React, { useState, useEffect } from 'react';

const MobileOnlyWrapper = ({ children }: {children:any}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? children : null;
};

export default MobileOnlyWrapper;
