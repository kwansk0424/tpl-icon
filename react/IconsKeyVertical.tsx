import * as React from 'react';
const IconsKeyVertical = (props) => (
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
        d="M10.5 7q0-.824.588-1.412A1.93 1.93 0 0 1 12.5 5q.825 0 1.412.588.588.587.588 1.412 0 .824-.588 1.412A1.93 1.93 0 0 1 12.5 9q-.825 0-1.412-.588A1.93 1.93 0 0 1 10.5 7m2 17L8 19.5l1.5-2-1.5-2 1.5-2.125V12.2a6.2 6.2 0 0 1-2.175-2.162Q6.5 8.675 6.5 7q0-2.5 1.75-4.25T12.5 1t4.25 1.75T18.5 7q0 1.676-.825 3.037A6.2 6.2 0 0 1 15.5 12.2V21zm-4-17q0 1.4.85 2.463a4.03 4.03 0 0 0 2.15 1.412V14l-1.025 1.45L12 17.5l-1.375 1.775L12.5 21.15l1-1v-9.275a4.03 4.03 0 0 0 2.15-1.412Q16.5 8.4 16.5 7q0-1.65-1.175-2.825T12.5 3 9.675 4.175 8.5 7"
      />
    </g>
  </svg>
);
export default IconsKeyVertical;