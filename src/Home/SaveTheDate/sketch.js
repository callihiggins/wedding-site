import textFile from '../../images/saveTheDateText.png';
import planeFile from '../../images/saveTheDatePlane.png';
import downArrowFile from '../../images/downArrow.png';
import innerHeight from 'ios-inner-height';

export default function sketch (p) {
    let plane, textImage, planeX, planeY, downArrow, arrowY;
    let textX, textY;
    let originalPlaneX, originalPlaneY;
    let planeImageLoaded, textImageLoaded, downArrowLoaded, notFirst;
    let textAlpha = 255;
    let distX, distY;
    const exponent = 2;
    const step = .001;
    let pct = 0;
  
    p.setup = function () {
      p.createCanvas(p.windowWidth, innerHeight());
      p.imageMode(p.CENTER);
      
      textY = p.height/2;

      textImage = p.loadImage(textFile, img => {
        textImageLoaded = true;
        p.resetDimensions();

      });
      plane = p.loadImage(planeFile, img => {
        planeImageLoaded = true;
      });

      downArrow = p.loadImage(downArrowFile, img => {
        downArrowLoaded = true;
      });

    };

    p.resetDimensions = () => {
      p.resizeCanvas(p.windowWidth, innerHeight());
      textX = p.width/2  - p.width/16;
      textY = innerHeight()/2;
      planeX = originalPlaneX = p.width/2 +  p.getDimensions(textImage).width/4;
      planeY = originalPlaneY = textY;
      distX = p.windowWidth - planeX;
      distY = p.windowHeight - planeY;
      arrowY = innerHeight() - 80;
      if (p.windowWidth < 500) {
        arrowY = innerHeight() - 150;
      } 
    };
  
    p.draw = function () {
      p.background(184, 201, 204);
      p.noStroke();
      if (textImageLoaded) {
        p.tint(255, textAlpha)
        p.image(
          textImage,
          textX,
          textY,
          p.getDimensions(textImage).width,
          p.getDimensions(textImage).height  
        );
        p.tint(255, 255)
      }

      if (planeImageLoaded) {
        p.image(
          plane,
          planeX,
          planeY,
          p.getDimensions(plane).width,
          p.getDimensions(plane).height  
        );
      }

      if (downArrowLoaded) {
        p.image(
          downArrow,
          p.windowWidth/2,
          arrowY,
          p.getDimensions(downArrow).width,
          p.getDimensions(downArrow).height  
        );
      }
    };

    // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    //   if (props.scrollComponent) {
    //     scrollFunction = props.scrollComponent;
    //   }
    // };

    // p.mousePressed = event => {
    //   // if arrow is cicked
    //     const { clientX, clientY } = event || event.touches[0];
    //     if (
    //       clientX > p.windowWidth/2 - p.getDimensions(downArrow).width/2 && 
    //       clientX < p.windowWidth/2 + p.getDimensions(downArrow).width/2 && 
    //       clientY > p.windowHeight - 80 - p.getDimensions(downArrow).height/2  && 
    //       clientY < p.windowHeight - 80 + p.getDimensions(downArrow).height/2
    //     ) {
    //       console.log('click');
    //       scrollFunction();
    //     }

    // };

    p.mouseWheel = event => {
      if (p.windowWidth > 850) p.animatePlane(event.deltaY);
      notFirst = true;
      if ((p.windowWidth - planeX) > 10 && event.deltaY > 0) {
        return false;
      }
    };

    p.animatePlane = y => {
      if (notFirst && (planeY <= originalPlaneY)) {
        pct += (y * step);
        pct = p.constrain(pct, 0,1);
        planeX = originalPlaneX + (pct * distX);
        planeY = originalPlaneY - (p.pow(pct, exponent) * distY);
      }
    }

    p.getDimensions = image => {
      const dimensions = {};
      dimensions.width = image.width * .5;
      dimensions.height = image.height * .5;

      if ((textImage.width /2+ 40) > p.windowWidth) {
        dimensions.width = dimensions.width * .6;
        dimensions.height = dimensions.height * .6;
      }
      return dimensions;
    };

    p.windowResized = function () {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      p.resetDimensions();
    }
  };