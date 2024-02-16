import * as React from 'react';
const IconsEmptyBox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="prefix__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g fill="#000" fillRule="evenodd" clipRule="evenodd" mask="url(#prefix__a)">
      <path d="m4.382 12 1.238 2h4.598L8.98 12zm6.632 4H6.062v4h4.952zm-7.013-.713-1.773-2.992c-.618-1 .093-2.295 1.26-2.295h5.766c.512 0 .989.266 1.26.705l2.482 4.008V22H4.922s-.921 0-.921-1z" />
      <path d="m19.618 12-1.238 2h-4.598l1.239-2zm-6.632 4h4.952v4h-4.952zm7.013-.713 1.773-2.992c.618-1-.093-2.295-1.26-2.295h-5.766c-.512 0-.989.266-1.26.705l-2.482 4.008V22h8.074s.921 0 .921-1zM9.323 2.293a.984.984 0 0 1 1.401 0l3.963 4c.386.39.386 1.024 0 1.414a.984.984 0 0 1-1.401 0l-3.963-4a1.007 1.007 0 0 1 0-1.414" />
      <path d="M14.686 2.293a.984.984 0 0 0-1.4 0l-3.963 4a1.007 1.007 0 0 0 0 1.414.984.984 0 0 0 1.401 0l3.962-4a1.007 1.007 0 0 0 0-1.414" />
    </g>
  </svg>
);
export default IconsEmptyBox;