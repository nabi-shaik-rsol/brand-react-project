import React from 'react';

function WrapParagraphWords({ text }) {
  const words = text.split('');

  return (
    <>
      {words.map((word, index) => (
        // <>
        // <span key={index} className='char'>
        //   {word === ' ' ? <>&nbsp;</> : word}
        // </span>
        // </>
        // <span key={index} className="char">
        //   {word === ' ' ? '\u00A0' : word}
        // </span>
        word === ' ' ? (
          ' '
        ) : (
          <span key={index} className="char">
            {word}
          </span>
        )
      ))}
    </>
  );
}

export default WrapParagraphWords