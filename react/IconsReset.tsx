import * as React from 'react';
const IconsReset = (props) => (
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
    <g mask="url(#prefix__a)">
      <path
        fill="#000"
        d="M12 21q-3.45 0-6.012-2.288Q3.424 16.426 3.05 13H5.1q.35 2.6 2.313 4.3Q9.375 19 12 19q2.925 0 4.962-2.038T19 12t-2.038-4.962T12 5a6.75 6.75 0 0 0-3.225.8A7.4 7.4 0 0 0 6.25 8H9v2H3V4h2v2.35a8.7 8.7 0 0 1 3.113-2.475A8.9 8.9 0 0 1 12 3q1.874 0 3.512.712a9.2 9.2 0 0 1 2.85 1.926 9.2 9.2 0 0 1 1.926 2.85A8.7 8.7 0 0 1 21 12q0 1.874-.712 3.512a9.2 9.2 0 0 1-1.925 2.85 9.2 9.2 0 0 1-2.85 1.926A8.7 8.7 0 0 1 12 21"
      />
    </g>
  </svg>
);
export default IconsReset;
