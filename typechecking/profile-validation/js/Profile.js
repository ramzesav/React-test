'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{ marginBottom: '10px' }}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle} />
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

const validateUrlProfile = (props, propName, componentName) => {
  // console.log(props, propName, componentName)
  let url = props[propName];

  const isUrl = (typeof url === 'string') && /id[0-9]+|[A-Za-z0-9_-]+/.test(url.split('/')[url.split('/').length - 1]);

  if (!isUrl) {
    return new Error(`Неверный параметр ${propName} в компоненте
    ${componentName}: параметр должен быть адресом профиля!`);
  }

  return null;
}

const validateDateBirthday = (props, propName, componentName) => {
  const date = props[propName]
  const patternDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/

  const isBirthday = (typeof date === 'string') && patternDate.test(date);

  if (!isBirthday) {
    return new Error(`Неверный параметр ${propName} в компоненте
    ${componentName}: параметр должен быть датой рождения у каждого профиля!`);
  }

  return null;
}



Profile.defaultProps = {
  img: './images/profile.jpg'
}

Profile.propTypes = {
  url: validateUrlProfile,
  birthday: validateDateBirthday
}
