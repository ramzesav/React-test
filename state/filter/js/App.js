'use strict'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stateFilters: 'All'
    }
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState(state => {
      stateFilters: state.stateFilters = filter
    })
  }

  categoryFilters() {
    const {projects} = this.props;
    const {stateFilters} = this.state;

    if(stateFilters === 'All') {
      return projects;
    }

    const filters = projects.filter(el => {
      return stateFilters === el.category;
    })

    return filters;
  }

  render() {
    const {stateFilters} = this.state;
    const {filters, projects} =  this.props;    
    return (
      <div>
        <Toolbar
          filters={filters}
          selected={stateFilters}
          onSelectFilter={(filter) => this.handleFilter(filter)} />
        <Portfolio projects={this.categoryFilters()} />
      </div>
    )
  }
}

