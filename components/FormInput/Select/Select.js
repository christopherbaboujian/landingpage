import PropTypes from "prop-types";

const Select = (props) => {
  const { className, options, values, defaultValue, onChange } = props;

  return (
    <select className={`form-select block ${className}`} defaultValue={defaultValue} onChange={(e) => onChange && onChange(e.target.value)}>
      {(options || []).map((opt, index) => (
        options.length === values.length ?
          <option key={index} value={values[index]}>{opt}</option>
          :
          <option key={index} value={opt}>{opt}</option>
      ))}
    </select>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  values: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string)
  ]),
  onChange: PropTypes.func
}

Select.defaultProps = {
  className: '',
  defaultValue: '',
  options: [],
  values: [],
  onChange: null
}

export default Select;
