import React from 'react';
import Logo from './Logo';

const Laptop = props => {
  const { className, logo } = props;
  return (
    <>
      <svg id="Layer_1" className={className} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 71 41">
        <defs>
          <linearGradient id="linear-gradient" x1="-159.78" y1="5.29" x2="-159.78" y2="4.29" gradientTransform="translate(11060.33 -166.34) scale(69 39)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c8c8c8" />
            <stop offset="1" stopColor="#979797" />
          </linearGradient>
        </defs>
        <g id="Page-1-3">
          <g id="Desktop-HD-Copy-3">
            <g id="Group-6-2">
              <g id="Rectangle-136">
                <rect id="path-2-2" className="laptop1-1" x="1" y="1" width="69" height="39" />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <Logo type={logo} />
    </>
  )
}

export default Laptop;