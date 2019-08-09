import React, { Component, Fragment } from 'react';
import q from '../images/q.png';
import a from '../images/a.png';
import palm from '../images/qaPalm.png';
import FAQText from '../images/faqText';

import './style.scss';

class FAQ extends Component {
  faqs = [ 
    {
      question: 'What should I wear?',
      answer: 'Cocktail attire that’s comfortable for warm temperatues. But keep an eye on the forecast- while October temperatures are often in the 80s, they can vary.'
    },
    {
      question: 'Will the wedding be outside?',
      answer: 'Yes. The ceremony and reception will take place in an open air courtyard, but tents will be put up in the event of rain. There are also temperature-controlled lounge spaces throughout the property.'
    },
    {
      question: 'How do I get to the weekend events?',
      answer: `We suggest taking an Uber, Lyft, or taxi to and from Friday’s and Saturday’s events. While the route will seem walkable, you'll be more comfortable in a car. If you wish to drive yourself, limited street parking is available at Race + Religious. The Tchoup Yard has its own parking lot with ample space.`
    },
    {
      question: 'What time should I get to Race + Religious?',
      answer: `Please arrive at 4:30pm to grab a cocktail and a seat before the ceremony starts at 5pm.`
    },
    {
      question: 'Are you doing a second line?',
      answer: `Yes! There will be a <a href="https://www.frenchquarter.com/secondline/" target="_blank">second line processional</a> immediately following the ceremony. We'll take a walk around the block and then celebrate in a park across the street for 15 minutes of free dancing. Wear shoes you can move in!`
    },
    {
      question: 'Can I jump in the pool?',
      answer: `You sure can. There are spaces to change into a bathing suit if you don't want to ruin your fancy clothes (but the pictures will be better if you).`
    },
    {
      question: 'Is there an after party?',
      answer: 'If you want to keep the party going past 11pm, head to <a href="http://www.thesaintneworleans.com/" target="_blank">The Saint</a>, a lovely dive bar with dancing.',
    },
    {
      question: 'Is anyone changing their name after all this?',
      answer: 'Nope. But we lovingly refer to oursevles as the Hafeliggins, even though it sounds like a sneeze.'
    },
    {
      question: 'I have more quesitons. How do I get in touch with you?',
      answer: 'Drop us a line at <a href="mailto:callihiggins@gmail.com">callihiggins@gmaill.com</a> or <a href="mailto:lucashafeli@hotmail.com">lucashafeli@hotmail.com</a>.'
    },
  ];

  render() {
    const faqs = this.faqs.map(obj => (
      <div className="questionContainer">
      <div className="block">
        <div className="blockLetter"><img src={q} /></div>
        <div className="question">{obj.question}</div>
      </div>
      <div className="block">
        <div className="blockLetter"><img src={a} /></div>
        <div className="answer" dangerouslySetInnerHTML={{__html: obj.answer}} />
      </div>
      </div>
    ));

    return (
      <>
      <div className="faqContainer">
       <div className="faq-pageTitle"><FAQText /></div>
       <img src={palm} class="palm" />
        <div className="qaContainer">
          {faqs}
        </div>
        </div>
      </>
    );
  }
}

export default FAQ;
