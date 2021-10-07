import PropTypes from "prop-types";

const Radio = (props) => {
  const { label, onChange, value, name, checked, className, colors, siteName } = props;

  return (
    <div className={className}>
      <label className="inline-flex items-start my-1">
        <input type="radio" className={`form-radio mt-1 ${colors.txtMain} text-${siteName}_txtMain`} checked={checked} name={name || ''} value={value || ''} onChange={(e) => onChange && onChange(e)} />
        <span className="ml-2">{label || ''}</span>
      </label>
    </div>
  )
}

Radio.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  colors: PropTypes.object
}

Radio.defaultProps = {
  className: '',
  label: '',
  value: '',
  name: '',
  checked: false,
  onChange: null,
  colors: null
}

export default Radio;