import React from 'react';

const trumpetPlayer = ({ styleObj }) => {
  const { fill } = styleObj;
  return (
    <path id="trumpetPlayer" stroke={fill} fill={fill} d="M89.5,366.5c-10.4,7-17.6,18.7-19.3,30.1c13.7-22.2,56.3-34.2,80.8-37.3c-4.9,5.4-10.8,10.1-16.2,15.3
    c18.2-10,34.5-18.7,55.5-21.4c-5.1,2.6-8.5,5.5-11.4,9.1c-10.6,2.9-20.7,7-28.5,13.9c9.5-2.6,19.7-4,29.4-4.1
    c-28.6,5.7-63.9,42.4-77.1,67.8c7.9-8.9,21.8-18.1,34.2-18.6c-14.6,14-32.3,38.4-35.4,58.5c16-18.5,42.5-34.2,64.8-43.7
    c-9.8,6.5-17.8,15.4-23,25.8c14.5-12.1,37.6-25.6,55.9-29.2c-6.1,5.1-11.5,10.9-15.9,17.5c20.1-9.9,37.2-30.8,59.9-39.1
    c-8.6,6-12.9,15.5-18.2,24.6c17.4-7,32.9-30.2,52.4-39.6c4.3-2.1,14.4-5.2,22.5-7.4c0.2,0.5,0.4,1,0.6,1.5c0.3,0.7,0.5,1.5,0.8,2.1
    c0.4,0.8,0.9,1.6,1.4,2.3l-8.8,7.2c2.9-0.9,5.8-1.3,8.7-1.9c-30.6,189.8-26.3,485.1-22.3,619.3h62.7
    c-47.1-244.5-34.1-466.1-19.2-590.9c3.1-6,6.4-11.8,9.9-17.4c3.2-2.8,6.5-5.5,9.8-8.1c7,7,15.2,11.5,24.4,11.4
    c3.6-0.1,6.6-0.7,9.2-1.7c0.8-0.3,1.4-0.8,2.2-1.2c1-0.5,2.1-1,3-1.7c5.7,1.7,11.5,3.3,17.4,4.8c-4.2-3.3-8.7-6.5-13.6-9
    c0.4-0.5,0.9-1,1.2-1.5c35.1,7.7,69.8,12.7,97.4,40.5c-9.7-16-26.1-20.9-40.5-32.1c42.3,10.8,72.7,38.5,111.4,56.1
    c-11.6-12.7-29.8-20.8-41.2-34.5c13.9,8.1,30.4,10.8,43.6,19.5c13.7,14,26.5,25.2,36.1,44.3c-4.8-14.3-6.4-29.1-15.6-42.1
    c18.7,26.3,54.7,23.1,62.5,61.5c9.4-50.1-20-84-51.2-117.3c16.1,5.2,26.9,21.4,41.6,28.6c-24.8-49.1-83.7-69-134.6-82.8
    c26.9-12.5,50.7-6.2,77.8-13.6c-8.3-1.9-16.9-2.7-25.4-3.5c25.6,0,47.8,3.5,72.2,7.7c-8.5-5.3-19.1-11-29.6-13.1
    c25.2-6.4,83.2,19,100.2,37.8c-0.4-19.4-23.6-36.1-36.8-47.7c6.6,2.5,14,4.7,21,6.4c-11.7-11.6-30.6-15-45.4-24.3
    c11-0.6,22.6,1.4,32.2,6.6c-14.9-8.6-29.3-17.8-46-23c-13.4-4.2-44.8-2.7-51.5-13.5c6.9,2,13.2,0.7,20,0.4
    c-18.8-5.2-42.7,0.2-60-6.1c8.5-3.4,16.6-7.4,25.6-8.8c-20.8-5.1-43.7-1.1-65.4,6.3c-5.8-1.3-11.9-1.7-17.7-1.3
    c12.1-3.3,23.4-8.9,36-10.7c-6.9-0.3-14-2.3-20.2-5.6c12.1-0.8,25-0.2,36.1-5.7c-3-1.2-6.5-3.3-9.4-4.2c16.7-0.1,33.7,1.3,50.5,2.4
    c-3-1.2-7.6-3.4-9.8-4.3c18.8,0.8,32.8,15,50.2,21.3c-7.5-2.9-13.2-8.2-15.7-15.6c15.8,4,27.8,15.3,41,23.8c-4-4.3-6.2-10-9.9-14.5
    c9.8,3.4,18.9,10,28.6,12.2c-12.2-27-29-58.3-54.4-74.9c6.1,4.1,12.8,7.2,19.9,9.2c-5.5-9.3-14.9-16.7-21.4-24.9
    c4.9,2.1,12.2,2.5,17,4.5c-15.8-17.7-36-25-58.4-27.3c-19-5.2-34.4-13.7-52.7-0.3c4.9-4,9.6-8.2,14-12.8
    c-14.2,10.2-33.2,11-43.9,25.8c3.8-4.1,6.6-8.5,9.9-12.9c-15.2,11.3-32.6,18.1-42.6,35.3c4.6-8.1,9.7-16,12.3-24.7
    c-16.6,4.1-33.5,33.4-35.5,49.9c0.2-0.6,2.2-13.6,2.4-18.3c-2.1,0.6-4,1.6-5.9,2.7c0.1-0.1,0.2-0.2,0.3-0.4
    c-4.2,3.5-10,5.6-14.7,7.7c0.8-2.1,1.7-4.3,2.4-6.5c-1.5,1.7-2.7,3.4-3.9,5.2c6.4-15.3,17.6-31.3,31.9-39.7
    c-10.2,1.4-18.9,7-26,14.5c13.2-28.8,35.4-40.1,56.8-59.4c-9.2,1.1-18.1,4.5-27.1,7c8.5-9.4,19.3-15.6,30.3-21.6
    c-13.1,0.6-25.8,3.5-36.9,10.3c16-18,42-32.7,55.7-51.7c-9.3,0.3-18.6,5.1-28.2,6.4c6.3-6.5,14.2-11.7,21.7-17
    c-28.5,3.5-43,20.7-67.8,31.8c2.9-4.3,4.1-9.8,6.9-14c-14.3,9-24.8,21-36.5,33.3c2.5-4.8,4-13.8,5-17.3
    c-4.6,11.3-17.3,17.7-24.7,27.7c-8.3,11.1-15.2,26.9-22,37.3c2.9-6.2,5.1-13.6,5.6-20.2c-23.7,36.5-28.4,76.6-23.8,116.8
    c-0.8-2-1.5-4.1-2.3-5.9c-11.8-26.6-30.9-55-54.7-72.3c-26.3-19.2-61.2-15.3-92.2-17.1c11.2-0.1,21.2,4.2,31.6,8.1
    c-34-9.2-61.4,8.1-92,19.2c10.4-2.7,21.3-3.9,31.8-6c-12,5.3-25.5,8.2-34.6,18.2c3.1-0.7,6.7-0.8,10-1.4
    c-15.2,9.3-43.6,22.2-50.3,39.9c16.3-18,44.9-22.1,67-26.9c-18.3,4.7-33.6,14-43.8,30.2c21.4-13.6,52.6-26.8,77.9-25.7
    c-13.9,4.3-26.8,9.4-38.2,18.5c-7.7-0.4-15.5-0.6-23.2-1c7.6,1.2,15.3,1.3,23.1,1.1c-1.7,1.3-3.4,2.5-5.1,4.1
    c5.4,0.1,11.4-1.3,17.6-3.1c4.2,0.3,8.4,0.5,12.5,1.1c-35.1,5.1-66.6,14.8-99.5,33.2c31.6-5.7,60.5-10.7,93.9-7
    c-15.8,9.8-40.1,11-58.1,18.8c40.8-2.4,78-3.8,115,10.9c-31.2-0.5-62.3,5.5-88.9,23.1c10.7-6.2,24.3-7.5,35.3-3
    c-28.4-1.8-68,29.5-81.6,50.6c6.9-3.3,13.9-6.6,20.8-9.8c-19.6,15.4-32.8,46.4-40.9,70.3C53.8,386.4,72.8,377.6,89.5,366.5z
    M548.5,141.5c3.4,0.4,6.7,1,9.1,2C554.5,143,551.5,142.3,548.5,141.5z M535.3,140.6c2.3,0,7,0.2,11.7,0.7
    C543.1,140.9,539.2,140.7,535.3,140.6z M489.1,343.4c6-1.2,12-2.6,17.6-4.7c-3.5,2-6.8,4.3-10.1,6.7
    C494.2,344.8,491.6,344.1,489.1,343.4z M434.7,280C434.7,280,434.8,279.9,434.7,280c0.2-0.1,0.3-0.2,0.4-0.2
    C435,279.8,434.9,279.9,434.7,280z M382.4,219.3c1.2-3.8,2.7-7.5,4.2-11.2c1.9-2.4,3.8-4.9,5.8-7.2
    C388.4,206.9,385.1,213.5,382.4,219.3z M361.6,257.7c0.9-5,1.8-9.9,2.5-14.9c3.3-6.6,7.1-13.1,11.1-19.3
    C371.3,235.2,367.9,246.9,361.6,257.7z M326.9,306c0.8,2.5,1.6,4.9,2.3,7.4c-0.6-0.3-1.3-0.6-1.9-0.8
    C327.2,310.4,327.1,308.2,326.9,306z M270.7,265c15.9,10.3,25.2,28.4,32.7,47c-0.1,0-0.2,0-0.2,0c-5.5-14.1-12.7-28.4-22.7-37.3
    c-0.3,1.6-0.2,3.1-0.1,4.6C277.4,274.4,274.1,269.6,270.7,265z M256,247.7c6.5,3.3,12.9,7.9,19.4,15.5c-2.3-0.6-4.8-1.3-7.3-1.9
    C264.4,256.5,260.4,252,256,247.7z M242.4,242.5c0.7,0.2,1.3,0.4,2,0.6c0.7,1.4,1.7,2.7,2.5,4C245.4,245.5,244,243.9,242.4,242.5z
    M229.4,231c-3.3-2.6-6.7-5.1-10.2-7.4c8,1.1,15.8,2.7,22.8,7C237.8,230.3,233.6,230.6,229.4,231z M200.3,357.7
    c7.7-2,15.5-3.4,23.8-3.9c-7.5,1.1-15,2.4-22,3.5C201.6,357.5,200.9,357.6,200.3,357.7z M183.5,208.2c13.1,1,25.5,3.5,39.1,5.5
    c-6.1,0.5-12.4,1-18.6,1.7C197.5,212.2,190.7,209.9,183.5,208.2z M198.6,223.5c-19-11-39-10.5-59-9.5c8.6-2.7,17.5-5.5,26-6.1
    c1.5-0.1,2.8,0,4.3,0c6.2,3.6,13.2,5.9,19.7,9.3c-0.5,0.1-1,0.1-1.5,0.2c1.4,0.7,2.9,1.1,4.4,1.6
    C194.6,220.3,196.7,221.6,198.6,223.5z"/>
  );
}

export default trumpetPlayer;