import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsAudioChecked = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    ref={ref}
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
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6.425V12.5l-.5.5-1.5-1.5V8.85l-1.325 1.325L8.5 10A2.121 2.121 0 0 0 5 12.209V13h.5l4.5 4.5q.193.192.417.325c.446.265.97.352 1.466.262a.97.97 0 0 1-.495.425q-.613.263-1.088-.212L7 15H4a.97.97 0 0 1-.712-.287A.97.97 0 0 1 3 14v-4q0-.424.288-.713A.97.97 0 0 1 4 9h3l3.3-3.3q.476-.475 1.087-.213.613.263.613.938M19 13h-1.5l1.917-1.917a1 1 0 0 1 .295.204Q20 11.576 20 12q0 .424-.288.713A.97.97 0 0 1 19 13m-3.75 3.4a.91.91 0 0 0-.65.4 1.03 1.03 0 0 0-.2.75.91.91 0 0 0 .4.65l1.6 1.2q.35.25.75.2a.91.91 0 0 0 .65-.4q.25-.35.2-.75a.91.91 0 0 0-.4-.65L16 16.6a1.03 1.03 0 0 0-.75-.2m.75-9 1.6-1.2a.91.91 0 0 0 .4-.65 1.03 1.03 0 0 0-.2-.75.91.91 0 0 0-.65-.4 1.03 1.03 0 0 0-.75.2l-1.6 1.2a.91.91 0 0 0-.4.65q-.05.4.2.75a.91.91 0 0 0 .65.4q.4.05.75-.2m3.854-1.07-8.247 8.247-3.795-3.846a.95.95 0 0 0-.693-.292.95.95 0 0 0-.694.292 1 1 0 0 0-.304.694.9.9 0 0 0 .28.693l4.525 4.552a.93.93 0 0 0 .681.291q.39 0 .681-.291l8.929-8.953a.95.95 0 0 0 .292-.693.95.95 0 0 0-.292-.694.93.93 0 0 0-.682-.292.93.93 0 0 0-.68.292"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsAudioChecked);
export default ForwardRef;
