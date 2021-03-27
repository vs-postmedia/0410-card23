// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// JS
import CalendarHeatmap from './js/calendar-heatmap/calendar-heatmap';
import data from './data/card23-data.json';



const init = async () => {
	CalendarHeatmap.drawCalendar(data);
};

init();