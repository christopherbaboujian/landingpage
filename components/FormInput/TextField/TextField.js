import PropTypes from "prop-types";

const TextField = (props) => {
  const { type, className, value, placeholder, onChange } = props;
  return (
    <input type={type} className={`form-input block ${className}`} placeholder={placeholder || ''} value={value} onChange={(e) => onChange && onChange(e)} />
  );
}

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

TextField.defaultProps = {
  className: '',
  value: '',
  placeholder: '',
  onChange: () => { }
}

export default TextField;
