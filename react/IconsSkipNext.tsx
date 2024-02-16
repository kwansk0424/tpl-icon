import * as React from 'react';
const IconsSkipNext = (props) => (
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
        d="M16.5 17V7q0-.424.288-.713A.97.97 0 0 1 17.5 6q.424 0 .712.287.288.288.288.713v10q0 .424-.288.712A.97.97 0 0 1 17.5 18a.97.97 0 0 1-.712-.288A.97.97 0 0 1 16.5 17m-11-.875v-8.25q0-.45.3-.725t.7-.275q.125 0 .275.025a.6.6 0 0 1 .275.125l6.2 4.15q.225.15.338.362A1 1 0 0 1 13.7 12q0 .25-.112.463a1 1 0 0 1-.338.362l-6.2 4.15a.6.6 0 0 1-.275.125 2 2 0 0 1-.275.025q-.4 0-.7-.275t-.3-.725m2-1.875L10.9 12 7.5 9.75z"
      />
    </g>
  </svg>
);
export default IconsSkipNext;