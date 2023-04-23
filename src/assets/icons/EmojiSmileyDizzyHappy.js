import * as React from "react";
const SvgEmojiSmileyDizzyHappy = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 15s1 2 4 2 4-2 4-2m0-6-1 1m0 0-1 1m1-1 1 1m-1-1-1-1m-4 0-1 1m0 0-1 1m1-1 1 1m-1-1L8 9m4 13C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"
    />
  </svg>
);
export default SvgEmojiSmileyDizzyHappy;
