import styles from "./Button.module.css";

const Button = ({ children, onClick, className, style, disabled }) => {
  return (
    <>
      <button
        disabled={disabled}
        styles={style}
        className={className || styles.btn}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
