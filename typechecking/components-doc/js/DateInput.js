'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder={props.valueDefault}/>
    </div>
  )
};


const nowDate = () => {
  let now = new Date().toLocaleString('ru');
  now = now.split(' ,.')[0].split(',')[0].split('.').reverse().join('.');
  return now;
}

DateInput.defaultProps = {
  valueDefault: nowDate()
}

DateInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string
}
