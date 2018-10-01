'use strict';

const TextInput = props => {
  // console.log({props}, '=TextInput')
 
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required}/>
    </div>
  )
};



TextInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
}