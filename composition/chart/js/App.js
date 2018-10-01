const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const compareNumbers = (a, b) => a - b;

class Legend extends React.Component {
	// Инициализируем константы
	constructor(props) {
		super(props);
		this.labels = props.labels;
		this.colors = props.colors;
	}
	render() {
		// Делаем функцию для создания всех элементов легенды
		GenerateLegend = this.labels.map(function (label, labelIndex) {
			return (
				<div>
					<span className="Legend--color" style={{ backgroundColor: this.colors[labelIndex % this.colors.length] }} />
					<span className="Legend--label">{label}</span>
				</div>
			)
		})
		return (
			<div className="Legend">
				{GenerateLegend}
			</div>
		);
	}
};

// Генерируем имя класса
const ClassNameGenerate = (classNameMain, classNameMore) => {
	return (!(classNameMore) || classNameMore === 'blocks' || classNameMore === 'blocksHorizontal') ? classNameMain : classNameMain + ' ' + classNameMore;
}
// Компонента для рисования полоски графика
GenerateChartItem = ({ style, itemIndex, item, color, type }) => {

	return (
		<div
			className={ClassNameGenerate("Charts--item", type)}
			style={style}
			key={itemIndex}
		>
			<b style={{ color: color }}>{item}</b>
		</div>);
};

const GenerateStyle = (type) => {
	return (type === 'blocksHorizontal') ? 'auto' : 250;
}
const GenerateSize = (type, item, max, sum) => {
	return item / ((type === 'stacked') ? sum : max) * 100;
}
const GenerateOpacity = (type, item, max) => {
	return (type === 'stacked') ? 1 : item / max;
}
const GenerateWidth = (type, size) => {
	return (type === 'blocksHorizontal') ? size + '%' : null;
}
const GenerateHeight = (type, size) => {
	return (type === 'blocksHorizontal') ? null : size + '%';
}
const GenerateRight = (type, item, sortedSerie, serie) => {
	return (type === 'layered') ? ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%' : null;
}


const ChartsSerie = ({ serie, serieIndex, max, sum, type, sortedSerie }) => {
	return (
		<div
			className={ClassNameGenerate("Charts--serie", type)}
			key={serieIndex}
			style={{
				height: GenerateStyle(type)
			}}
		>
			<label>{labels[serieIndex]}</label>
			{
				serie.map((item, itemIndex) => {
					var color = colors[itemIndex], style, size = GenerateSize(type, item, max, sum);
					style = {
						backgroundColor: color,
						opacity: GenerateOpacity(type, item, max),
						zIndex: item,
						height: GenerateHeight(type, size),
						width: GenerateWidth(type, size),
						right: GenerateRight(type, item, sortedSerie, serie),
					};
					return (<GenerateChartItem style={style} itemIndex={itemIndex} item={item} color={color} type={type} />);
				})
			}
		</div>
	);
}

class Chartis extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		const { data, max, colors, labels, type, turn } = this.props;

		GenerateChart = data.map((serie, serieIndex) => {
			var sortedSerie = serie.slice(0), sum;
			sum = serie.reduce((carry, current) => carry + current, 0);
			sortedSerie.sort(compareNumbers);
			return (<ChartsSerie serie={serie} serieIndex={serieIndex} max={max} sum={sum} type={type} sortedSerie={sortedSerie} />);
		})

		return (
			<div
				className={ClassNameGenerate("Charts", turn)}
			>
				{GenerateChart}
			</div>
		);
	}
};


const labels = ['cats', 'dogs', 'horses', 'ducks', 'cows'];
const series = ['France', 'Italy', 'England', 'Sweden', 'Germany'];
const colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const series = 5;
		const serieLength = 5;

		let data = new Array(series).fill(new Array(serieLength).fill(0));
		data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}


	render() {
		const { data } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
		return (
			<section>
				<Chartis labels={labels} colors={colors} data={data} max={max} type="blocks" />
				<Chartis labels={labels} colors={colors} data={data} max={max} type="stacked" />
				<Chartis labels={labels} colors={colors} data={data} max={max} type="layered" />
				<Chartis labels={labels} colors={colors} data={data} max={max} type="blocksHorizontal" turn="horizontal" />
				<Legend labels={labels} colors={colors} />
			</section>
		);
	}

}