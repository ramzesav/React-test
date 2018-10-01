'use strict';


class ChoiceColor extends React.Component {

  filterColor() {
    const { items } = this.props;
    return (
      items.map(item => {
        switch (item.type) {
          case 'unisex':
            return <Item color="black" item={item} />;
          case 'male':
            return <Item color="blue" item={item} />;
          case 'female':
            return <Item color="orange" item={item} />;
        }
      })
    )
  }

  render() {
    const { items } = this.props;
    return (
      <main>
        {this.filterColor()}
      </main>
    )
  }
}


const App = ({ items }) => <ChoiceColor items={items} />;

