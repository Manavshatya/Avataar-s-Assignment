import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import myImage from "./abc.jpeg";
import Search from "./search.png";

import Carousal from "./components/Carousal";

const allMenuItems = [
  { id: 1, label: "Home" },
  { id: 2, label: "Electronics" },
  { id: 3, label: "Books" },
  { id: 4, label: "Music" },
  { id: 5, label: "Movies" },
  { id: 6, label: "Clothing" },
  { id: 7, label: "Games" },
];

function App() {
  const [visibleItems, setVisibleItems] = useState(allMenuItems);
  const [hiddenItems, setHiddenItems] = useState([]);
  const navRef = useRef();

  const adjustMenu = () => {
    const navWidth = navRef.current.offsetWidth;
    const moreWidth = 60;
    let currentWidth = moreWidth;
    const tempVisibleItems = [];
    const tempHiddenItems = [];

    allMenuItems.forEach((item) => {
      const itemWidth = 100;
      if (currentWidth + itemWidth < navWidth) {
        tempVisibleItems.push(item);
        currentWidth += itemWidth;
      } else {
        tempHiddenItems.push(item);
      }
    });

    setVisibleItems(tempVisibleItems);
    setHiddenItems(tempHiddenItems);
  };

  useEffect(() => {
    adjustMenu();
    window.addEventListener("resize", adjustMenu);
    return () => window.removeEventListener("resize", adjustMenu);
  }, []);

  // ];
  const carouselItems = [
    "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
    "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
    "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  ];

  return (
    <div className="App">
      <nav ref={navRef}>
        <ul>
          <img src={myImage} className="custom-image" />
          {visibleItems.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
          <li>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search something"
                className="search-input"
              />
            </div>
          </li>
          {hiddenItems.length > 0 && (
            <li>
              More
              <ul className="dropdown">
                {hiddenItems.map((item) => (
                  <li key={item.id}>{item.label}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </nav>
      <div className="container" style={{ marginBottom: "10px" }}>
        <h1 className="title">Featured Products</h1>
        <h3 className="subtitle">Explore and Discover a Variety of Products</h3>
      </div>
      <div>
        <Carousal items={carouselItems} />
      </div>

      <footer>© ManavShatya</footer>
    </div>
  );
}

export default App;
