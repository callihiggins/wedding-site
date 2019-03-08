import React from 'react';

const moon = ({ styleObj }) => {
    const { fill } = styleObj;
    return (
        <path id="moon" fill={fill} stroke={fill} d="M32.7,80.2c10.7,0.5,20.4-4.7,27.2-13.3c0.3-0.4-0.1-1-0.5-0.7c-4,2.6-8.7,3.9-13.7,3.4
        C33.5,68.4,24,56.4,23.8,42.1c-0.1-16.2,11.4-29.2,25-28.7c5.3,0.2,10.2,2.3,14,5.8c0.4,0.4,1-0.2,0.7-0.8C57.7,7.7,47.5,0.4,35.7,0
        C16-0.6-0.3,18.1,0,41.2C0.2,62.2,14.7,79.3,32.7,80.2z"/>
    );
};

export default moon