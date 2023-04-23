import * as React from "react";
const SvgSnapchatSocial = ({ title, titleId, ...props }) => (
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
      d="M21.976 17.15c-.088-.293-.505-.5-.505-.5l-.104-.055a8.04 8.04 0 0 1-1.83-1.219 6.28 6.28 0 0 1-1.061-1.227 4.667 4.667 0 0 1-.586-1.225c-.039-.159-.033-.222 0-.304.027-.07.108-.135.146-.167.234-.168.612-.417.845-.569.2-.133.373-.247.475-.318.326-.232.55-.469.68-.724.171-.329.192-.691.059-1.048-.179-.48-.62-.767-1.183-.767-.125 0-.253.014-.382.042a5.895 5.895 0 0 0-.883.289.027.027 0 0 1-.037-.028c.027-.643.058-1.508-.012-2.328-.063-.742-.214-1.369-.459-1.915a5.13 5.13 0 0 0-.82-1.246 5.06 5.06 0 0 0-1.295-1.059C14.13 2.264 13.114 2 12 2c-1.11 0-2.125.264-3.02.782-.673.39-1.102.831-1.297 1.059a5.132 5.132 0 0 0-.82 1.246c-.247.546-.397 1.17-.459 1.915-.07.825-.042 1.62-.012 2.328 0 .021-.02.036-.04.028a5.894 5.894 0 0 0-.882-.29 1.811 1.811 0 0 0-.382-.041c-.56 0-1.003.286-1.183.767-.133.357-.112.72.058 1.048.133.255.355.492.68.724.1.071.275.185.476.318.226.15.594.392.83.559.03.02.13.097.16.177.033.084.04.148-.004.316a4.68 4.68 0 0 1-.581 1.213c-.287.44-.644.852-1.06 1.227a8.039 8.039 0 0 1-1.832 1.22c-.033.016-.072.035-.114.06 0 0-.415.215-.494.494-.116.41.193.797.507 1.004.514.337 1.141.518 1.504.617.102.028.194.053.277.078.051.017.182.068.238.142.07.093.08.206.104.335.04.217.129.485.392.67.291.203.658.218 1.125.237.488.019 1.094.042 1.79.276.322.108.614.291.95.502.706.44 1.584.989 3.083.989 1.5 0 2.385-.55 3.095-.993.336-.209.625-.39.94-.496.696-.234 1.302-.257 1.79-.276.467-.02.834-.032 1.125-.236.282-.198.363-.494.4-.715.021-.11.034-.209.096-.29.054-.069.174-.117.23-.136.086-.027.181-.053.287-.082.363-.1.82-.215 1.374-.534.668-.386.714-.858.644-1.092Z"
    />
  </svg>
);
export default SvgSnapchatSocial;
