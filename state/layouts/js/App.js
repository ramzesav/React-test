'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      typeMarkup: VIEW_MODULE,
      showProducts: true
    }
    this.changesType = this.changesType.bind(this);
  }

  changesType() {
    const {typeMarkup, showProducts} = this.state;

    if(typeMarkup === VIEW_MODULE) {
      this.setState(state => {
        typeMarkup: state.typeMarkup = VIEW_LIST
      })
      this.setState(state => {
        showProducts: state.showProducts = false
      })
    }else {
      this.setState(state => {
        typeMarkup: state.typeMarkup = VIEW_MODULE
      })
      this.setState(state => {
        showProducts: state.showProducts = true
      })
    }
  }

  render() {
    const {typeMarkup, showProducts} = this.state;
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={typeMarkup}
            onSwitch={this.changesType} />
        </div>
        {this.renderLayout(showProducts)}
      </div>
    );
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
