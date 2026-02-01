import React, { useEffect, useRef, useState } from 'react';

const ParagraphLineWrapper = ({ text, text2 = "", trigger = false }) => {
    const containerRef = useRef(null);
    const [lines, setLines] = useState([]);
    const [lines2, setLines2] = useState([]);
    const animated = useRef(false)

    useEffect(() => {
        const wordSpans = containerRef.current.querySelectorAll('.word');
        const wordSpans2 = containerRef.current.querySelectorAll('.word2');
        const lineMap = [];
        const lineMap2 = [];

        wordSpans.forEach((span) => {
            const top = span.getBoundingClientRect().top;
            const existingLine = lineMap.find((line) => Math.abs(line.top - top) < 2);
            if (existingLine) {
                existingLine.words.push(span.innerText);
            } else {
                lineMap.push({ top, words: [span.innerText] });
            }
        });
        setLines(lineMap.map((line) => line.words));

        if (text2) {
            wordSpans2.forEach((span) => {
                const top = span.getBoundingClientRect().top;
                const existingLine = lineMap2.find((line) => Math.abs(line.top - top) < 2);
                if (existingLine) {
                    existingLine.words.push(span.innerText);
                } else {
                    lineMap2.push({ top, words: [span.innerText] });
                }
            });
            setLines2(lineMap2.map((line) => line.words));
        }

        // setTimeout(() => {
        // const temp = document.querySelector('.paragraph')
        // const spans = temp.querySelectorAll(':scope > span.line');
        // spans.forEach((span, index) => span.style.animation = `reveal 0.5s forwards ${index * 0.1}s`);
        // }, 1000)
    }, [text]);

    useEffect(() => {
        if (trigger && !animated.current) {
            const temp = containerRef.current
            const spans = temp.querySelectorAll(':scope > span');
            spans.forEach((span, index) => span.style.animation = `reveal 0.5s forwards ${index * 0.1}s`);

            // if(text2) {
            //     const spans2 = temp.querySelectorAll(':scope > span.line2');
            //     spans2.forEach((span, index) => span.style.animation = `reveal 0.5s forwards ${(spans.length + index) * 0.1}s`);
            // }
            animated.current = true
        }
    }, [trigger])

    return (
        <div className="w-full paragraph" ref={containerRef}>

            {lines.length > 0 ? (
                lines.map((lineWords, idx) => (
                    <span key={idx} className="line opacity-0 text-gray-300">
                        {lineWords.join(' ')}{' '}
                    </span>
                ))
            ) : (
                // Initial render — wrap each word in spans so we can measure
                (text).split(' ').map((word, idx) => (
                    <span key={idx} className="word opacity-0">
                        {word}{' '}
                    </span>
                ))
            )}
            {text2 && <><br /><br /></>}
            {text2 && lines2.length > 0 ? (
                lines2.map((lineWords, idx) => (
                    <span key={idx} className={`line opacity-0 ${idx === 0 && 'mt-7'} text-gray-300`}>
                        {lineWords.join(' ')}{' '}
                    </span>
                ))
            ) : (
                (text2).split(' ').map((word, idx) => (
                    <span key={idx} className="word2 opacity-0">
                        {word}{' '}
                    </span>
                ))
            )}
        </div>
    );
};

export default ParagraphLineWrapper;
