import React, { useState } from 'react';
import FeaturedProject from './FeaturedProject'; // Make sure the path is correct
import './App.css'; // Import your CSS file
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import MountainsofArizona from './images/MountainsofArizona.png'
import RusynFlag from './images/RusynFlag.png'
import DroneMap from './images/DrainageMap.png'

export default function App() { // Only one App component definition
  const [projectDescription, setProjectDescription] = useState('Hover over a project to view its description');

  const projects = [
    { id: 1, href: "leaflet.html", description: "Description for Project 1", imgSrc: RusynFlag },
    { id: 2, href: "#", description: "Description for Project 2", imgSrc: "https://cdn-icons-png.flaticon.com/512/75/75519.png" },
    { id: 3, href: "#", description: "Description for Project 3", imgSrc: DroneMap },
    { id: 4, href: "#", description: "Description for Project 4", imgSrc: MountainsofArizona },
    { id: 5, href: "#", description: "Description for Project 5", imgSrc: "https://cdn-icons-png.flaticon.com/512/75/75519.png" },
    { id: 6, href: "#", description: "Description for Project 6", imgSrc: "https://cdn-icons-png.flaticon.com/512/75/75519.png" }
  ];

  const handleProjectHover = (description) => {
    setProjectDescription(description);
  };

  return (
    <div className="container">
      <Header />
      <Nav />
      <div className="rectangles-wrapper">
        <div className="left-rectangle">
          <p>{projectDescription}</p>
        </div>
        <div className="right-rectangle">
          <FeaturedProject projects={projects} onProjectHover={handleProjectHover} />
        </div>
      </div>
      <Footer />
    </div>
  );
}