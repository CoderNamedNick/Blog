import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <a href="https://codernamednick.github.io/New-Portfolio/" style={styles.link}>Portfolio</a>
        <a href="https://github.com/CoderNamedNick" style={styles.link}>GitHub progress</a>
        <a href="mailto:nclloyd422@hotmail.com" style={styles.link}>Email Me Ideas</a>
      </div>
    </footer>
  );
};
const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '5px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    opacity: '.85',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  },
};

export default Footer;