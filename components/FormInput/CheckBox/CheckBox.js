import PropTypes from "prop-types";
import { Fragment } from "react";

const CheckBox = (props) => {
  const { onChange, label, value, className, colors, siteName } = props;

  return (
    <Fragment>
      <label className={`inline-flex ${className || ''}`}>
        <input type="checkbox" className={`form-checkbox mt-1 ${colors.txtMain} text-${siteName}_txtMain`} value={value} onChange={(e) => onChange && onChange(e)} />
        <span className="ml-2">{label || ''}</span>
      </label>
    </Fragment>
  )
}

CheckBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  colors: PropTypes.object,
}

CheckBox.defaultProps = {
  className: '',
  label: '',
  value: false,
}

export default CheckBox;
