import "./form-input.styles.scss";

const FormInput = ({ label, name, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} name={name || null} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : null
          } form-input-label`}
          htmlFor={name || null}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
