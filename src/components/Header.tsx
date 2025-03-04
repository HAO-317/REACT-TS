import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className='top-banner'>
        <div className="logo">HL:.</div>
        <div className='nav-helldark'>
            <nav className="nav">
            <a href="#projects">projects</a>
            <a href="#skills">skills</a>
            <a href="#contact">contact</a>
          </nav>
          <div className="theme-toggle">🔆/🌙</div>
        </div>

      </div>

      <div className="header-content">
        <h1>Hi, I am OPTUMUS PRIME.</h1>
        <h2>An Autobot from the distant planet Cybertron.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipiscing elit. Quia, quis quo totam aliquam iure veniam dolor atque asperiores autem. Similique laudantium vero nesciunt tenetur perferendis iste odio ipsum quos officiis.</p>
        <button className="resume-button">resume</button>
      </div>
    </header>
  );
};

export default Header;