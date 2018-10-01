'use strict';

class AccordianSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.toggleAccordian = this.toggleAccordian.bind(this);
    }

    get sectionActive() {
        const {show} = this.state;
        return show ? "section open" : "section"
    }

    toggleAccordian() {
        this.setState((state) => {
            show : state.show = !state.show
        });
    }

    render() {
        const {name, children} = this.props;
        
        return (
            <section className={this.sectionActive}>
                <button>toggle</button>
                <h3 className="sectionhead" onClick={this.toggleAccordian}>{name}</h3>
                <div className="articlewrap">
                    {children}
                </div>
            </section>
        )
    }
}


class Accordian extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main className="main">
                <h2 className="title">React</h2>
                <AccordianSection  name='Компоненты'>
                    <div className="article">
                        Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.
                    </div>
                </AccordianSection>
                <AccordianSection name='Выучил раз, используй везде!'>
                    <div className="article">
                        После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.
                    </div>
                </AccordianSection>
                <AccordianSection name='Использование JSX'>
                    <div className="article">
                        JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.
                    </div>
                </AccordianSection>
            </main>
        );
    }
}


ReactDOM.render(<Accordian />, document.getElementById('accordian'))

