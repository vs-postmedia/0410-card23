// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// JS
import CalHeatMap from 'cal-heatmap';
import data from './data/card23-data.json';


const init = async () => {
	// console.log(data[0])
	const cal = new CalHeatMap();
	cal.init({
		// afterLoadData: parseData,\
		cellPadding: 5,
		cellRadius: 5,
		cellSize: 30,
		data: data,
		dataType: 'json',
		domain: 'month',
		// income assistance cheque days
		highlight: [
			new Date(2020, 0, 22),
			new Date(2020, 1, 19),
			new Date(2020, 2, 25),
			new Date(2020, 3, 22),
			new Date(2020, 4, 27),
			new Date(2020, 5, 24),
			new Date(2020, 6, 22),
			new Date(2020, 7, 26),
			new Date(2020, 8, 23),
			new Date(2020, 9, 21),
			new Date(2020, 10, 18),
			new Date(2020, 11, 16)
		],
		itemName: 'calls for suspected overdoses',
		label: {
			position: 'top'
		},
		legend: [25, 50, 75, 100],
		legendColors: {
			empty: '#D1D2D4',
			min: '#e5e9f5',
			max: '#0062A3',
			overflow: '#F58745'
		},
		legendHorizontalPosition: 'right',
		legendMargin: [0, 0, 0, 20],
		legendOrientation: 'vertical',
		legendVerticalPosition: 'center',
		start: new Date(2020, 0, 1),
		subDomain: 'x_day',
		subDomainTitleFormat: {
		},
		tooltip: true,
		verticalOrientation: true
	});
};


init();