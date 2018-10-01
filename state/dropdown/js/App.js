
class App extends React.Component {
  static defaultProps = {
    options: []
  }

  constructor(props) {
    super(props);

    this.state = {
      active: this.props.options[0],
      open: false
    }
    
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  handleChange(option) {
    this.setState({
      active: option
    });
  }

  toggleOpen() {
    this.setState(state => {
      open: state.open === false ? state.open = true : state.open = false
    });
  }

  render() {
    const { active, open } = this.state;
    const { options } = this.props;
    return (
      <div className="container">
        <div className={`dropdown-wrapper ${open ? "open" : ""}`} >
          <button className={"btn"} onClick={this.toggleOpen} >
            <span>Account Settings</span>
            <i className="material-icons">public</i>
          </button>
          <ul className="dropdown">
            {options.map((option, i) => (
              <li
                className={option === active ? "active" : ""}
                onClick={() => this.handleChange(option)} >
                <a href="#">{option}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

