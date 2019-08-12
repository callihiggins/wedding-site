import React, { Component } from 'react';
import planesFile from '../images/planes.png';
import hotelFile from '../images/hotel.png';
import rentalFile from '../images/rental.png';
import childFile from '../images/child.png';
import emailFile from '../images/email.png';
import cableCarFile from '../images/cable_car.png';
import TravelInfoText from '../images/travelInfo';
import './style.scss';

class TravelInfo extends Component {
  render() {
    return (
      <div className="travelContainer">
        <div className="pageTitle"><TravelInfoText /></div>
        <div className="travelFlexContainer">
          <div className="travelItem">
            <div className="travelLogo">
              <img src={planesFile} />
            </div>
            <div className="travelInfo">
              <h3>Flight Info</h3>
              Flights should be booked to New Orleans Louis Armstrong International Airport (MSY). Because our ceremony will take place on Friday afternoon, we advise arriving no later than Thursday evening. We hope you can extend your stay to Sunday to give you time to enjoy New Orleans. (Monday flights are cheaper if you need an excuse to stay even longer!)
            </div>
          </div>
          <div className="travelItem">
            <div className="travelLogo">
              <img src={cableCarFile} />
            </div>
            <div className="travelInfo">
              <h3>Getting Around</h3>
              Generally, a rental car should not be neccessary. Uber and taxis are readily available to transport you to and from wedding events, and the Street Car system is great for exploring the city.
            </div>
          </div>
          <div className="travelItem">
            <div className="travelLogo">
              <img src={hotelFile} />
            </div>
            <div className="travelInfo">
              <h3>Hotel Recommendation</h3>
              <p>We recommend the <a href="https://old77hotel.com" target="_blank">Old No. 77 Hotel and Chandlery </a>. Use <a href="https://tinyurl.com/HafeliHigginsOld77" target="_blank">this link</a> to book and receive our group discount, or apply the promo code: <strong>HAFEHIGGWED</strong> </p>
              <p>Of course there is no shortage of great NOLA hotels. Feel free to stay anywhere that best suits your interests and budget. Some other excellent options are <a href="https://catahoulahotel.com/" target="_blank">Catahoula Hotel</a>, <a href="https://www.acehotel.com/neworleans/" target="_blank">Ace Hotel</a>, <a href="http://thepontchartrainhotel.com/" target="_blank">The Pontchartrain Hotel</a>, <a href="https://www.henryhowardhotel.com/" target="_blank">Henry Howard Hotel</a>, <a href="https://www.marriott.com/hotels/travel/msydt-renaissance-new-orleans-arts-warehouse-district-hotel/" target="_blank">Renaissance Hotel</a>, and <a href="https://hiltongardeninn3.hilton.com/en/index.html" target="_blank">The Hilton</a>.</p>
            </div>
          </div>
          <div className="travelItem">
            <div className="travelLogo">
              <img src={rentalFile} />
            </div>
            <div className="travelInfo">
              <h3>House Rentals</h3>
              <p>Rentals are another great lodging option, especially if you are planning to travel with a group. We like <a href="https://www.vrbo.com/results?petIncluded=false&q=Lower%20Garden%20District%2C%20New%20Orleans%2C%20LA%2C%20USA&from-date=2019-10-03&to-date=2019-10-06" target="_blank">VRBO</a> to search available listings. AirBnB is another option, however we found their prices to be higher than VRBO's.</p>
              <p>We recommend looking in the Lower Garden District if you want to be close to all wedding activities. However, with plenty of Ubers available, you can stay in any neighborhood you like.</p>
            </div>
          </div>
          <div className="travelItem">
            <div className="travelLogo">
              <img src={childFile} />
            </div>
            <div className="travelInfo">
              <h3>Childcare</h3>
              Wedding events will be for adults only. If you are interested in accommodations for childcare, please let us know!
            </div>
          </div>
          <div className="travelItem">
            <div className="travelLogo">
              <img src={emailFile} />
            </div>
            <div className="travelInfo">
              <h3>Contact Us</h3>
              <p>Please don't hesitate to reach out with any questions or concerns. Drop us a line at either <a href="mailto:callihiggins@gmail.com">callihiggins@gmail.com</a> or <a href="mailto:lucashafeli@hotmail.com">lucashafeli@hotmail.com</a> anytime.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelInfo;
