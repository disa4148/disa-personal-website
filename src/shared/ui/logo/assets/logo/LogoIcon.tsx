import css from './logoIcon.module.scss';

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={css.svgElem}
    >
      <circle
        cx="14"
        cy="14"
        r="13.5"
        stroke="black"
        className={css.svgElem1}
      ></circle>
      <circle
        cx="14"
        cy="14"
        r="11.5"
        fill="black"
        stroke="#ABB2BF"
        className={css.svgElem2}
      ></circle>
      <path
        d="M10 10H16C17.1046 10 18 10.8954 18 12V17C18 18.1046 17.1046 19 16 19H10"
        stroke="white"
        className={css.svgElem3}
      ></path>
    </svg>
  );
};

export default LogoIcon;
