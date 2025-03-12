import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const TypingAnimation = () => {
  useEffect(() => {
    const sentences = [
      "listening to Laufey",
      "petting a cat",
      "playing Valorant",
      "re-watching Arcane",
      "programming"
    ];
    let sentenceIndex = 0;
    let characterIndex = 0;
    let typing = true;
    const typingDelay = 34;
    const erasingDelay = 20;
    const newSentenceDelay = 900;
    
    const typingElement = document.getElementById('typing');
    const cursorElement = document.querySelector('.typing-cursor');
    
    function type() {
      if (typing) {
        if (characterIndex < sentences[sentenceIndex].length) {
          typingElement.textContent += sentences[sentenceIndex].charAt(characterIndex);
          characterIndex++;
          setTimeout(type, typingDelay);
        } else {
          typing = false;
          if(cursorElement) cursorElement.style.opacity = '1';
          setTimeout(type, newSentenceDelay);
        }
      } else {
        if (characterIndex > 0) {
          typingElement.textContent = sentences[sentenceIndex].substring(0, characterIndex - 1);
          characterIndex--;
          setTimeout(type, erasingDelay);
        } else {
          typing = true;
          sentenceIndex = (sentenceIndex + 1) % sentences.length;
          if(cursorElement) cursorElement.style.opacity = '0';
          setTimeout(type, typingDelay + 1100);
        }
      }
    }
    
    setTimeout(type, newSentenceDelay);
  }, []);
  
  return (
    <>
      <Helmet>
        <style>{`
          /* Excluding the custom font styling */
          #static-text, .typing {
            font-size: 1em;
            color: #000000;
          }
          .typing {
            display: inline;
            margin-left: 5px;
            vertical-align: bottom;
          }
          .typing-cursor {
            display: inline-block;
            width: 2px;
            height: 1em;
            background-color: #333;
            margin-left: 2px;
            vertical-align: bottom;
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            from, to { background-color: transparent; }
            50% { background-color: #333; }
          }
          #move-notice {
            margin-top: 20px;
            font-size: 0.9em;
            color: #333;
            text-align: center;
          }
        `}</style>
      </Helmet>
      <div id="static-text">
        Hey, I'm Kaylee.<br/><br/>
        I'm likely <span id="typing"></span>
        <span className="typing-cursor"></span>.
      </div>
    </>
  );
};

export default TypingAnimation;
