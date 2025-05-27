import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  // Container styling
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)', // Soft pink gradient
    backgroundImage: "url('one.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'litepink',
  };

  // Card styling
  const cardStyle = {
    width: '22rem',
    boxShadow: '0 6px 20px rgba(255, 105, 180, 0.3)',
    borderRadius: '15px',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#fff0f6', // Light pink background
    padding: '20px',
    transition: 'transform 0.3s ease-in-out',
  };

  // Image styling
  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    width: '100%',
    height: '280px', // Increased size for better visibility
    objectFit: 'cover', // Ensures it looks nice
    borderRadius: '10px',
    boxShadow: '0 5px 10px rgba(255, 182, 193, 0.4)',
    transition: 'transform 0.3s ease-in-out',
  };

  // Button styling
  const buttonStyle = {
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #ff758c, #ff7eb3)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '15px',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img 
          src="woman.png" 
          alt="Shopping Fun" 
          style={imageStyle} 
        />
        <div className="card-body">
          <h3 style={{ margin: '10px 0', fontSize: '1.5rem', color: '#d63384' }}>
            Bandi Poorna Sri Sailaja ✨
          </h3>
          <p style={{ color: '#704264', fontSize: '1rem', fontStyle: 'italic' }}>
            Welcome to my shopping world! 💕
          
          </p>
         
          <Link to="products" style={{ textDecoration: 'none', padding: '10px 20px', background: '#ff758c', color: 'white', borderRadius: '25px', display: 'inline-block' }}>Enjoy Shopping</Link>
        
        </div>
      </div>
    </div>
  );
}
