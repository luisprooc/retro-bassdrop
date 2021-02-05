import React from 'react';
import '../styles/footer.css';

const Footer = ({children}) => {
    return(
        <footer>
            <h5>By: {children}</h5>
        </footer>
    );
};

export default Footer;
