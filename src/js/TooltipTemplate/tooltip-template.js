import css from './tooltip-template.css';

function tooltip(date, value) {
	return `
		<div class="tooltip-content">
			<h4>${date}</h4>
			<p><span class="blue">${value}</span> suspected overdose calls.</p>
		</div>
	`;
};

export default tooltip;

