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
      answer: `We suggest taking an Uber, Lyft, or taxi to and from Friday’s and Saturday’s events. While the route may look walkable on a map, our events will take place in areas that aren't built for strolling. If you wish to drive yourself, limited street parking is available at Race + Religious. The Tchoup Yard has its own parking lot with ample space.`
    },
    {
      question: 'What time should I arrive at Race + Religious?',
      answer: `Please arrive at 4:30pm to grab a cocktail and a seat before the ceremony starts at 5pm.`
    },
    {
      question: 'Are you doing a second line?',
      answer: `Yes! There will be a <a href="https://www.frenchquarter.com/secondline/" target="_blank">second line</a> immediately following the ceremony. We'll take a walk around the block and then celebrate in a park across the street. Wear your dancing shoes!`
    },
    {
      question: 'Can I jump in the pool?',
      answer: `You sure can. There are spaces to change into a bathing suit if you don't want to ruin your fancy clothes (but the pictures will be better if you do). BYO towel!`
    },
    {
      question: 'Is there an after party?',
      answer: 'If you want to keep the party going past 11pm, head to <a href="http://www.thesaintneworleans.com/" target="_blank">The Saint</a>, a lovely dive bar with dancing.',
    },
    {
      question: 'Why does my printed invitation say that the Day After party starts at 3, when it really starts at 4?',
      answer: `Because we're both bad proofreaders.`,
    },
    {
      question: 'Is anyone changing their name after all this?',
      answer: `Nope. But we lovingly refer to oursevles as the Hafeliggins, even though it sounds like a sneeze. It's also our hashtag! #hafeliggins`
    },
    {
      question: `I can't wait! How do I RSVP?`,
      answer: `Head over to our <a href="/rsvp">RSVP form</a> to let us know if you can make it. If you are part of a couple, please RSVP individually so we can get a proper headcount.`
    },
    {
      question: 'I have more questions. How do I get in touch with you?',
      answer: 'Drop us a line at <a href="mailto:callihiggins@gmail.com">callihiggins@gmail.com</a> or <a href="mailto:lucashafeli@hotmail.com">lucashafeli@hotmail.com</a>.'
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
       <img src={palm} rel="preload" class="palm" />
        <div className="qaContainer">
          {faqs}
        </div>
        </div>
      </>
    );
  }
}

export default FAQ;
