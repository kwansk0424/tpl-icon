import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsPsychology = (
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
        d="M6 22v-4.3a9.2 9.2 0 0 1-2.212-3.037A8.8 8.8 0 0 1 3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838 2.412 1.837 3.137 4.787l1.3 5.125a.95.95 0 0 1-.175.863.96.96 0 0 1-.8.387h-2v3q0 .824-.587 1.413A1.93 1.93 0 0 1 17 20h-2v2h-2v-4h4v-5h2.7l-.95-3.875a6.53 6.53 0 0 0-2.45-3.7Q14.425 4 12 4 9.1 4 7.05 6.025T5 10.95q0 1.5.612 2.85a7.5 7.5 0 0 0 1.738 2.4l.65.6V22zm5-7h2l.15-1.25q.2-.075.362-.175.163-.1.288-.225l1.15.5 1-1.7-1-.75a1.65 1.65 0 0 0 0-.8l1-.75-1-1.7-1.15.5a1.6 1.6 0 0 0-.288-.225 2 2 0 0 0-.362-.175L13 7h-2l-.15 1.25a2 2 0 0 0-.362.175 1.6 1.6 0 0 0-.288.225l-1.15-.5-1 1.7 1 .75a1.64 1.64 0 0 0 0 .8l-1 .75 1 1.7 1.15-.5q.125.124.288.225.162.1.362.175zm1-2.5q-.625 0-1.062-.437A1.45 1.45 0 0 1 10.5 11q0-.625.438-1.062A1.45 1.45 0 0 1 12 9.5q.624 0 1.063.438.437.436.437 1.062 0 .624-.437 1.063A1.45 1.45 0 0 1 12 12.5"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsPsychology);
export default ForwardRef;
