'use strict';

const lists = (data) => {
    if (data.status >= 200 && data.status < 300) {
        data.json().then(resolve => {
            ReactDOM.render(<Listing items={resolve} />, document.getElementById('root'))
        });
    } else {
        return;
    }

}

fetch('https://neto-api.herokuapp.com/etsy')
    .then((lists))
    .catch((error) => {
        console.log(`Ошибка: ${error}`)
    })


const Listing = ({ items }) => {
    let texts = [];

    // Количество символов в строке
    items.forEach(item => {
        if (item.title.length > 50) {
            let text = item.title;

            while(text.length > 50){
                text = text.substr(0, text.length - 1)
            }
            
            text = text.split(' ');
            text.push('...');
            text = text.join(' ');
            texts.push(text);
        }else {
            texts.push(item.title);
        } 
    });

    const Product = items.map((item, i) => (
        <div key={item.listing_id} className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{texts[i]}</p>
                <p className="item-price">
                    {(item.currency_code) === 'USD' ? '$' + item.price : (item.currency_code === 'EUR') ? '€' + item.price : item.price + 'GBP'}
                </p>
                <p className={(item.quantity <= 10) ? 'item-quantity level-low' : (item.quantity <= 20) ? 'item-quantity level-medium'  : 'item-quantity level-high'}>{item.quantity} left</p>
            </div>
        </div>
    ));

    return <div className="item-list">{Product}</div>
}

Listing.defaultProps = {
    items: []
}






