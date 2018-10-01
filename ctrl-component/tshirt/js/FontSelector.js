


class FontSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    fontSelect = (event) => {
        const {fonts, onSelect} = this.props;
 
        fonts.forEach(el => {
            if(el.name === event.currentTarget.value) {
                onSelect(el);
            }
        })
        
    }

    loadingFonts = () => {
        const { fonts } = this.props;
        return fonts.map((el, index) => {
            return (
                <div key={index} className="grid center font-item">
                    <input onChange={this.fontSelect.bind(this)} type="radio" name="font" value={el.name} id={el.name} />
                    <label htmlFor={el.name} className="grid-1">
                        <PictureFont text={'abc'} path={el.path}></PictureFont>
                    </label>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="font-picker">
                {this.loadingFonts()}
            </div>
        );
    }
}
