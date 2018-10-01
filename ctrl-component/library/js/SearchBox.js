class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        valueSearch: 'React'
    }

    validateSearch() {
        const results = this.props.value === 'React' ? '' : this.props.value
        return results;
    }

    onSearch(event) {
        const {filterBooks, valueSearch} = this.props;
        
        if(event.currentTarget.value === '') {
            filterBooks(valueSearch)
        }else {
            filterBooks(event.currentTarget.value)
        }

    }
    
    render() { 
        return (
            <input value={this.validateSearch()} onChange={this.onSearch.bind(this)} type="text" placeholder="Поиск по названию или автору"/>    
        );
    }
}

