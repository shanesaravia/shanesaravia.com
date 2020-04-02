import React from 'react';

const Head = props => {
  const { headAnimation, className, skin, hair, face } = props;
  return (
    <div className={className}>
      <div id={face}>
        <div id="leftEye"></div>
        <div id="rightEye"></div>
      </div>
      <svg id="Layer_1" id={headAnimation} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.02 51.03">
        <defs></defs>
        <title>head</title>
        <g id="Page-1">
          <g id="Desktop-HD-Copy">
            <g id="Group-3">
              <path className={`${skin}-1`} d="M37.08,25.92h0a3.44,3.44,0,0,0-2.93.82c0-.33.07-.66.1-1A4.72,4.72,0,0,1,32,27.38c-.58-1.65,0-4.14,0-5.89s0-4-.78-5.62c-1.35-3-3.46-2-6-1.31a30.51,30.51,0,0,1-6,1h-.16a29,29,0,0,1-3.84,0V51.21a10.9,10.9,0,0,0,3,.35h1.8c4.36,0,5.24-1.49,6.36-2.89.75-1,5.66-6.82,5.85-8,.23-1.41.78-4.49,1-6.22.42,1.07,1.33,1.37,3.11-.15S39.14,27.5,37.08,25.92ZM19.26,39.41h0l-.16-.14-1.83-1.64,1.09.37.74.25.16.06h0l.91-.31,1.09-.37Z" transform="translate(-0.22 -0.54)" />
              <polygon className={`${skin}-1`} points="21.04 37.09 19.04 38.88 19.03 38.87 18.87 38.73 18.87 37.71 19.03 37.77 19.04 37.77 19.95 37.46 21.04 37.09" />
              <path className={`${skin}-1`} d="M34.57,22.27c-.09,1.07-.19,2.26-.32,3.5A4.72,4.72,0,0,1,32,27.38c-.58-1.65,0-4.14,0-5.89s0-4-.78-5.62c-1.35-3-3.46-2-6-1.31a30.51,30.51,0,0,1-6,1h-.16v-13h.25c7.51,0,12.78,1.73,14.57,9.05A29.11,29.11,0,0,1,34.57,22.27Z" transform="translate(-0.22 -0.54)" />
              <polygon className={`${skin}-1`} points="19.03 37.77 19.03 38.87 18.87 38.73 17.04 37.09 18.13 37.46 18.87 37.71 19.03 37.77" />
              <path className={`${skin}-1`} d="M19.25,2.62v13h-.16a29,29,0,0,1-3.84,0V51.21A5.78,5.78,0,0,1,12,48.67c-.75-1-5.6-6.82-5.8-8-.23-1.41-.78-4.49-1-6.22-.42,1.07-1.32,1.37-3.09-.15s-2.73-6.8-.69-8.38h0a3.38,3.38,0,0,1,2.9.82c0-.45-.09-.89-.13-1.33-.11-1.11-.2-2.18-.28-3.15a29.33,29.33,0,0,1,.65-10.6C6,5.65,9.81,3.41,15.25,2.81A31.88,31.88,0,0,1,19,2.62Z" transform="translate(-0.22 -0.54)" />
              <path className={`${skin}-2`} d="M19.25,2.62V51.56h-1c-4.31,0-5.19-1.49-6.3-2.89-.75-1-5.6-6.82-5.8-8-.23-1.41-.78-4.49-1-6.22-.42,1.07-1.32,1.37-3.09-.15s-2.73-6.8-.69-8.38h0a3.38,3.38,0,0,1,2.9.82c-.16-1.6-.3-3.13-.41-4.48a29.33,29.33,0,0,1,.65-10.6c1-4,3-6.39,5.91-7.66A21,21,0,0,1,19,2.62Z" transform="translate(-0.22 -0.54)" />
              <polygon className={`${skin}-3`} points="21.04 37.09 19.04 38.88 19.03 38.87 18.87 38.73 17.04 37.09 18.13 37.46 18.87 37.71 19.03 37.77 19.04 37.77 19.95 37.46 21.04 37.09" />
              <path className={`${hair}-1`} d="M34.25,25.77A4.72,4.72,0,0,1,32,27.38c-.58-1.65,0-4.14,0-5.89s0-4-.78-5.62c-1.35-3-3.46-2-6-1.31a30.51,30.51,0,0,1-6,1h-.16a29,29,0,0,1-3.84,0c-.61,0-1.21-.09-1.82-.17-2.12-.32-5.35-2-6.32.79C6.47,18.07,7,20.61,7,22.56c0,.86.14,4.84.14,4.84l-.06,0s-2.1-.17-2.66-1.51c-.07-.16-.13-.32-.19-.49a29.41,29.41,0,0,1-.93-8.13c0-4.29-.19-9.74,2.91-13A3.84,3.84,0,0,1,6.47,4C10.31.36,16.58.57,21.65.57a12.73,12.73,0,0,1,6,1A13,13,0,0,1,33.54,7.2c2.14,3.62,1.48,7.67,1.66,11.69C35.32,21.41,35.56,24,34.25,25.77Z" transform="translate(-0.22 -0.54)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Head;