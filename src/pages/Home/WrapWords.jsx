import React from 'react';

function WrapWords({ text }) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <span key={index}>
          {word}
          {index !== words.length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </>
  );
}

export default WrapWords