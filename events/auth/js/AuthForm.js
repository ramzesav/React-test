'use strict';

const AuthForm = props => {
    const DATA = {
        name: '',
        email: '',
        password: ''
    };

    const Submit = (event) => {
        event.preventDefault();

        if('onAuth' in props && typeof props.onAuth === 'function') {
            props.onAuth(DATA);      
        }
        
    }
    const validateEmail = (event) => {
        let pattern = /[а-яё\!\#\$\%\"\^\&\*\()\№\;\:\?\_\+\=\,\/\>\<\~\`]/iu
        event.currentTarget.value = event.currentTarget.value.replace(pattern, '');
        DATA.email = event.currentTarget.value;
    }

    const validatePassword = (event) => {
        let pattern = /[а-яё\!\#\$\%\"\^\&\*\()\№\;\:\?\+\=\,\/\>\<\~\@]/iu
        event.currentTarget.value = event.currentTarget.value.replace(pattern, '');
        DATA.password = event.currentTarget.value;
    }
 

    return (
        <form onSubmit = {Submit} className="ModalForm" action="/404/auth/" method="POST">
            <div className="Input">
                <input onChange={(event) => DATA.name = event.currentTarget.value} required type="text" placeholder="Имя"/>
                <label></label>
            </div>
            <div className="Input">
                <input onChange = {validateEmail} type="email" placeholder="Электронная почта"/>
                <label></label>
            </div>
            <div className="Input">
                <input onChange = {validatePassword} required type="password" placeholder="Пароль"/>
                <label></label>
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"></i>
            </button>
        </form>
    )
}
