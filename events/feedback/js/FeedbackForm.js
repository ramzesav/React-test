'use strict';


const FeedbackForm = ({data, onSubmit}) => {
    const DATA = {};
    let keys = Object.keys(data);
    
    keys.forEach(key => {
        if(key === 'snacks'){
            DATA[key] = [];       
        }else {
            DATA[key] = '';       
        }
        
    });

     const formSubmit = (event) => {
        event.preventDefault();    
        onSubmit(JSON.stringify(DATA));
    };
    
    const checkedRadio = (el) => {
        if(el.value === data.salutation) {
            el.setAttribute('checked', '');
            DATA.salutation = el.value;
        }
    };

    const Checked = (el) => {
        data.snacks.forEach((item, i) => {
            if(el.value === item) {
                el.setAttribute('checked', '');
                DATA.snacks.push(el.value);
            }
        })
    };
    
    return (
        <form onSubmit={formSubmit} className="content__form contact-form">
            <div className="testing">
                <p>Чем мы можем помочь?</p>
            </div>
            <div className="contact-form__input-group">
                <input className="contact-form__input contact-form__input--radio" ref = {checkedRadio} id="salutation-mr" name="salutation" type="radio" value="Мистер" />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
                <input className="contact-form__input contact-form__input--radio" ref = {checkedRadio} id="salutation-mrs" name="salutation" type="radio" value="Мисис" />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
                <input className="contact-form__input contact-form__input--radio" ref = {checkedRadio} id="salutation-ms" name="salutation" type="radio" value="Мис" />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="name">Имя</label>
                <input value={data.name} ref = {el => DATA.name = el.value} className="contact-form__input contact-form__input--text"  id="name" name="name" type="text" />
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
                <input value={data.email} ref = {el => DATA.email = el.value} className="contact-form__input contact-form__input--email" id="email" name="email" type="email" />
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
                <select defaultValue={data.subject} ref= {el => DATA.subject = el.value} className="contact-form__input contact-form__input--select" id="checkedRadioject" name="checkedRadioject">
                    <option>У меня проблема</option>
                    <option>У меня важный вопрос</option>
                </select>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" for="message">Ваше сообщение</label>
                <textarea value={data.message} ref= {el => DATA.message = el.value} className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65"></textarea>
            </div>
            <div className="contact-form__input-group">
                <p className="contact-form__label--checkbox-group">Хочу получить:</p>
                <input className="contact-form__input contact-form__input--checkbox" ref={Checked} id="snacks-pizza" name="snacks" type="checkbox" value="пицца" />
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
                <input className="contact-form__input contact-form__input--checkbox" ref={Checked} id="snacks-cake" name="snacks" type="checkbox" value="пирог" />
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
            </div>
            <button className="contact-form__button" type="submit">Отправить сообщение!</button>
            <output id="result" />
        </form>
    )
}