'use strict';

const DateInput = props => {
  console.log({props}, '=DateInput')
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.defaultProps = {
  value: new Date().toLocaleString('ru')
}

// RadioGroup.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   label: PropTypes.string,
//   name: PropTypes.string,
// }
