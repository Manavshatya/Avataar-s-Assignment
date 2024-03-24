// Menu.js
import React, { useEffect, useState } from 'react';

import Item from './Item';
import MoreSection from './MoreSection';

const Menu = ({ items }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleItems = items.filter(item => {
    return windowWidth > 600 || item.alwaysVisible;
  });

  const hiddenItems = items.filter(item => !visibleItems.includes(item));

  return (
    <nav className="menu">
      {visibleItems.map(item => (
        <Item key={item.id} label={item.label} />
      ))}
      {windowWidth <= 600 && hiddenItems.length > 0 && <MoreSection />}
    </nav>
  );
};

export default Menu;
