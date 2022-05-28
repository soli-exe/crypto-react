import React from 'react';

// Styles
import styles from '../assets/css/loader.module.css';


const Loader = () => {
    return (
        <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
    );
};

export default Loader;