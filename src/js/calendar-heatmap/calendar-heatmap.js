// based on code from: https://bl.ocks.org/danbjoseph/3f42bb3f0ab6133cfc192e878c9030ed

// JS
import * as d3_all from 'd3';
import * as d3_scale from 'd3-scale';
import * as d3_scale_chromatic from 'd3-scale-chromatic';
import * as d3_time from 'd3-time';
import * as d3_format from 'd3-time-format';
import * as d3_collection from 'd3-collection';
import Popup from '@flourish/popup';
import TooltipTemplate from '../TooltipTemplate/tooltip-template';
 


// CSS
import calendar from './calendar-heatmap.css';

// prep
let lookup, dateParser, displayFormat;
const popup = Popup();
const d3 = {
	...d3_all,
	...d3_time,
	...d3_format,
	...d3_collection,
	...d3_scale,
	...d3_scale_chromatic
};

const calendarRows = function(month) {
	const m = d3.timeMonth.floor(month);
	return d3.timeWeeks(d3.timeWeek.floor(m), d3.timeMonth.offset(m,1)).length;
}


function handleMouseenter(d) {
	d3.select(this).classed('hover', true);

	const date = dateParser(d);

	popup.point(event.pageX, event.pageY - 5).html(TooltipTemplate(displayFormat(date), lookup[d])).draw();
}

function handleMouseout(d) {
	d3.select(this).classed('hover', false);
	popup.hide();
}

const drawCalendar = (data, highlights) => {
	// d3 date parsing handles timezones (yay!)
	dateParser = d3.timeParse('%Y-%m-%d')
	const minDate = d3.min(data, d => dateParser(d.date));
	const maxDate = d3.max(data, d => dateParser(d.date));

	const cellMargin = 2;
	const cellSize = 20;
	const monthLabelHeight = 20;

	displayFormat = d3.timeFormat('%b. %d');
	const day = d3.timeFormat('%w');
	const week = d3.timeFormat('%U');
	const format = d3.timeFormat('%Y-%m-%d');
	const monthName = d3.timeFormat('%B');
	const months = d3.timeMonth.range(d3.timeMonth.floor(minDate), maxDate);


	// create lookup table & scale
	lookup = d3.nest()
		.key(d => d.date)
		.rollup(leaves => leaves[0].value)
		.object(data);

	const scale = d3.scaleLinear()
		.domain(d3.extent(data, d => d.value))
		.range([0.4,1]); // the interpolate used for color expects a number in the range [0,1] but i don't want the lightest part of the color scheme

	// draw the calendar
	const svg = d3.select('#calendar').selectAll('svg')
		.data(months)
		.enter().append('svg')
		  .attr('class', 'month')
		  .attr('width', (cellSize * 7) + (cellMargin * 8) )
		  .attr('height', d => {
			const rows = calendarRows(d);
			return (cellSize * rows) + (cellMargin * (rows + 1)) + monthLabelHeight;
		  })
		.append('g')

	svg.append('text')
		.attr('class', 'month-name')
		.attr('x', ((cellSize * 7) + (cellMargin * 8)) / 2 )
		.attr('y', 15)
		.attr('text-anchor', 'middle')
		.text(d => monthName(d))

	const rect = svg.selectAll('rect.day')
		.data((d, i) => d3.timeDays(d, new Date(d.getFullYear(), d.getMonth() + 1, 1)))
		.enter().append('rect')
			.attr('class', 'day')
			.attr('width', cellSize)
			.attr('height', cellSize)
			.attr('rx', 3).attr('ry', 3) // rounded corners
			.attr('fill', d => '#eaeaea') // default light grey fill
			.attr('x', d => (day(d) * cellSize) + (day(d) * cellMargin) + cellMargin)
			.attr('y', d => ((week(d) - week(new Date(d.getFullYear(),d.getMonth(),1))) * cellSize) +
				   ((week(d) - week(new Date(d.getFullYear(),d.getMonth(),1))) * cellMargin) +
				   cellMargin + 20)
			.on('mouseover', handleMouseenter)
			.on('mouseout', handleMouseout)
			.datum(format);

	rect.style('fill', d => d3.interpolatePuBu(scale(lookup[d])))
		.attr('class', d => {
			return highlights.includes(d) ? 'day anno' : 'day';
		})
		.classed('clickable', true)
		.on('click', function(d){
			if(d3.select(this).classed('focus')){
				d3.select(this).classed('focus', false);
			} else {
				d3.select(this).classed('focus', true)
			}
				// doSomething();
		})
}

export default { drawCalendar };