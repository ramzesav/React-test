

class SubscribeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validateClass: ''
        };
        this.validateEmail = this.validateEmail.bind(this)
    }

    validateEmail(event) {
        if(this.input.validity.valid === false) {
            this.setState((state) => ({
                validateClass: 'is-error'
            }))
        }else {
            this.setState((state) => ({
                validateClass: "is-valid"
            }))
        }
    }

    render() {
        const {validateClass} = this.state;
        return (
            <div className="subscribe__form">
                <form className={`form form--subscribe ${validateClass}`} >
                    <h4 className="form-title">Подписаться:</h4>
                    <div className="form-group">
                        <label htmlFor="input-email" className="sr-only">Email</label>
                        <input  type="email" id="input-email" placeholder="Email" className="form-control" 
                            ref={el => this.input = el} onChange={this.validateEmail}
                        />
                        <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                        <button type="submit" className="form-next">
                            <i className="material-icons">keyboard_arrow_right</i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

