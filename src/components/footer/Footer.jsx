// src/components/footer/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Vaibhav Mahajan. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#111111', // Dark theme background
    color: '#f1f1f1',           // Light text
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
  },
  text: {
    margin: 0,
    fontSize: '1rem',
  },
};

export default Footer;

