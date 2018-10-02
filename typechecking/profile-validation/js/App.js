'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        {
          first_name: 'Alexey',
          last_name: 'Korzhov',
          url: 'https://vk.com/anonimizer_me',
          birthday: '1990-12-02'
        },
        {
          first_name: 'Pavel',
          last_name: 'Durov',
          img: 'https://pp.userapi.com/c836333/v836333001/31189/8To0r3d-6iQ.jpg',
          url: 'https://vk.com/id1',
          birthday: '1995-02-15'
        },
        {
          first_name: 'Super',
          last_name: 'User',
          url: 'https://vk.com/superuser',
          birthday: '1988-03-21'
        },
        {
          first_name: 'Unknown',
          last_name: 'User',
          url: 'https://vk.com/id2',
          birthday: '1997-10-21'
        },
        {
          first_name: 'Igor',
          last_name: 'Popov',
          url: 'https://vk.com/id17',
          birthday: '1992-01-25'
        },
        {
          first_name: 'Oleg',
          last_name: 'Konev',
          url: 'https://vk.com/id62',
          birthday: '1978-04-12'
        }
      ]
    };
  }

  render() {
    return (
      <div className="row">
        {this.state.profiles.map((profile, i) => (
          <Profile key={`profile_${i}`} {...profile}/>
        ))}
      </div>
    );
  }
};
