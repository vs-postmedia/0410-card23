(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(58);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(84);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(94);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(95);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(96);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(85);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/d3/d3.js
var d3 = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/d3-scale/src/index.js + 56 modules
var src = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/d3-scale-chromatic/src/index.js + 48 modules
var d3_scale_chromatic_src = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/d3-time/src/index.js
var d3_time_src = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/d3-time-format/src/index.js + 2 modules
var d3_time_format_src = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/d3-collection/src/index.js + 6 modules
var d3_collection_src = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/@flourish/popup/src/index.js + 5 modules
var popup_src = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(126);

// EXTERNAL MODULE: ./src/js/TooltipTemplate/tooltip-template.css
var tooltip_template = __webpack_require__(127);

// CONCATENATED MODULE: ./src/js/TooltipTemplate/tooltip-template.js



function tooltip(date, value) {
  return "\n\t\t<div class=\"tooltip-content\">\n\t\t\t<h4>".concat(date, "</h4>\n\t\t\t<p><span class=\"blue\">").concat(value, "</span> suspected overdose calls.</p>\n\t\t</div>\n\t");
}

;
/* harmony default export */ var TooltipTemplate_tooltip_template = (tooltip);
// EXTERNAL MODULE: ./src/js/calendar-heatmap/calendar-heatmap.css
var calendar_heatmap = __webpack_require__(128);

// CONCATENATED MODULE: ./src/js/calendar-heatmap/calendar-heatmap.js











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// based on code from: https://bl.ocks.org/danbjoseph/3f42bb3f0ab6133cfc192e878c9030ed
// JS







 // CSS

 // prep

var lookup, dateParser, displayFormat;
var popup = Object(popup_src["a" /* default */])();

var calendar_heatmap_d3 = _objectSpread({}, d3, {}, d3_time_src, {}, d3_time_format_src, {}, d3_collection_src, {}, src, {}, d3_scale_chromatic_src);

var calendarRows = function calendarRows(month) {
  var m = calendar_heatmap_d3.timeMonth.floor(month);
  return calendar_heatmap_d3.timeWeeks(calendar_heatmap_d3.timeWeek.floor(m), calendar_heatmap_d3.timeMonth.offset(m, 1)).length;
};

function handleMouseenter(d) {
  calendar_heatmap_d3.select(this).classed('hover', true);
  var date = dateParser(d);
  popup.point(event.pageX, event.pageY - 5).html(TooltipTemplate_tooltip_template(displayFormat(date), lookup[d])).draw();
}

function handleMouseout(d) {
  calendar_heatmap_d3.select(this).classed('hover', false);
  popup.hide();
}

var drawCalendar = function drawCalendar(data, highlights) {
  // d3 date parsing handles timezones (yay!)
  dateParser = calendar_heatmap_d3.timeParse('%Y-%m-%d');
  var minDate = calendar_heatmap_d3.min(data, function (d) {
    return dateParser(d.date);
  });
  var maxDate = calendar_heatmap_d3.max(data, function (d) {
    return dateParser(d.date);
  });
  var cellMargin = 2;
  var cellSize = 20;
  var monthLabelHeight = 20;
  displayFormat = calendar_heatmap_d3.timeFormat('%b. %d');
  var day = calendar_heatmap_d3.timeFormat('%w');
  var week = calendar_heatmap_d3.timeFormat('%U');
  var format = calendar_heatmap_d3.timeFormat('%Y-%m-%d');
  var monthName = calendar_heatmap_d3.timeFormat('%B');
  var months = calendar_heatmap_d3.timeMonth.range(calendar_heatmap_d3.timeMonth.floor(minDate), maxDate); // create lookup table & scale

  lookup = calendar_heatmap_d3.nest().key(function (d) {
    return d.date;
  }).rollup(function (leaves) {
    return leaves[0].value;
  }).object(data);
  var scale = calendar_heatmap_d3.scaleLinear().domain(calendar_heatmap_d3.extent(data, function (d) {
    return d.value;
  })).range([0.2, 1]); // the interpolate used for color expects a number in the range [0,1] but i don't want the lightest part of the color scheme
  // draw the calendar

  var svg = calendar_heatmap_d3.select('#calendar').selectAll('svg').data(months).enter().append('svg').attr('class', 'month').attr('width', cellSize * 7 + cellMargin * 8).attr('height', function (d) {
    var rows = calendarRows(d);
    return cellSize * rows + cellMargin * (rows + 1) + monthLabelHeight;
  }).append('g');
  svg.append('text').attr('class', 'month-name').attr('x', (cellSize * 7 + cellMargin * 8) / 2).attr('y', 15).attr('text-anchor', 'middle').text(function (d) {
    return monthName(d);
  });
  var rect = svg.selectAll('rect.day').data(function (d, i) {
    return calendar_heatmap_d3.timeDays(d, new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }).enter().append('rect').attr('class', 'day').attr('width', cellSize).attr('height', cellSize).attr('rx', 3).attr('ry', 3) // rounded corners
  .attr('fill', function (d) {
    return '#eaeaea';
  }) // default light grey fill
  .attr('x', function (d) {
    return day(d) * cellSize + day(d) * cellMargin + cellMargin;
  }).attr('y', function (d) {
    return (week(d) - week(new Date(d.getFullYear(), d.getMonth(), 1))) * cellSize + (week(d) - week(new Date(d.getFullYear(), d.getMonth(), 1))) * cellMargin + cellMargin + 20;
  }).on('mouseover', handleMouseenter).on('mouseout', handleMouseout).datum(format);
  rect.style('fill', function (d) {
    return calendar_heatmap_d3.interpolatePuBu(scale(lookup[d]));
  }).attr('class', function (d) {
    return highlights.includes(d) ? 'day anno' : 'day';
  }).classed('clickable', true).on('click', function (d) {
    if (calendar_heatmap_d3.select(this).classed('focus')) {
      calendar_heatmap_d3.select(this).classed('focus', false);
    } else {
      calendar_heatmap_d3.select(this).classed('focus', true);
    } // doSomething();

  });
};

/* harmony default export */ var calendar_heatmap_calendar_heatmap = ({
  drawCalendar: drawCalendar
});
// EXTERNAL MODULE: ./src/data/card23-data.json
var card23_data = __webpack_require__(87);

// EXTERNAL MODULE: ./src/data/card23-highlights.json
var card23_highlights = __webpack_require__(88);

// CONCATENATED MODULE: ./src/index.js



// CSS



 // JS





var init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            calendar_heatmap_calendar_heatmap.drawCalendar(card23_data, card23_highlights);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

init();

/***/ }),

/***/ 87:
/***/ (function(module) {

module.exports = JSON.parse("[{\"date\":\"2020-01-01\",\"value\":68},{\"date\":\"2020-01-02\",\"value\":44},{\"date\":\"2020-01-03\",\"value\":53},{\"date\":\"2020-01-04\",\"value\":50},{\"date\":\"2020-01-05\",\"value\":38},{\"date\":\"2020-01-06\",\"value\":56},{\"date\":\"2020-01-07\",\"value\":49},{\"date\":\"2020-01-08\",\"value\":57},{\"date\":\"2020-01-09\",\"value\":34},{\"date\":\"2020-01-10\",\"value\":56},{\"date\":\"2020-01-11\",\"value\":51},{\"date\":\"2020-01-12\",\"value\":52},{\"date\":\"2020-01-13\",\"value\":39},{\"date\":\"2020-01-14\",\"value\":49},{\"date\":\"2020-01-15\",\"value\":43},{\"date\":\"2020-01-16\",\"value\":57},{\"date\":\"2020-01-17\",\"value\":52},{\"date\":\"2020-01-18\",\"value\":66},{\"date\":\"2020-01-19\",\"value\":70},{\"date\":\"2020-01-20\",\"value\":67},{\"date\":\"2020-01-21\",\"value\":68},{\"date\":\"2020-01-22\",\"value\":86},{\"date\":\"2020-01-23\",\"value\":99},{\"date\":\"2020-01-24\",\"value\":81},{\"date\":\"2020-01-25\",\"value\":72},{\"date\":\"2020-01-26\",\"value\":75},{\"date\":\"2020-01-27\",\"value\":73},{\"date\":\"2020-01-28\",\"value\":62},{\"date\":\"2020-01-29\",\"value\":58},{\"date\":\"2020-01-30\",\"value\":52},{\"date\":\"2020-01-31\",\"value\":61},{\"date\":\"2020-02-01\",\"value\":53},{\"date\":\"2020-02-02\",\"value\":49},{\"date\":\"2020-02-03\",\"value\":41},{\"date\":\"2020-02-04\",\"value\":56},{\"date\":\"2020-02-05\",\"value\":48},{\"date\":\"2020-02-06\",\"value\":53},{\"date\":\"2020-02-07\",\"value\":62},{\"date\":\"2020-02-08\",\"value\":60},{\"date\":\"2020-02-09\",\"value\":54},{\"date\":\"2020-02-10\",\"value\":48},{\"date\":\"2020-02-11\",\"value\":38},{\"date\":\"2020-02-12\",\"value\":49},{\"date\":\"2020-02-13\",\"value\":36},{\"date\":\"2020-02-14\",\"value\":60},{\"date\":\"2020-02-15\",\"value\":67},{\"date\":\"2020-02-16\",\"value\":53},{\"date\":\"2020-02-17\",\"value\":46},{\"date\":\"2020-02-18\",\"value\":61},{\"date\":\"2020-02-19\",\"value\":110},{\"date\":\"2020-02-20\",\"value\":106},{\"date\":\"2020-02-21\",\"value\":83},{\"date\":\"2020-02-22\",\"value\":82},{\"date\":\"2020-02-23\",\"value\":67},{\"date\":\"2020-02-24\",\"value\":60},{\"date\":\"2020-02-25\",\"value\":50},{\"date\":\"2020-02-26\",\"value\":51},{\"date\":\"2020-02-27\",\"value\":54},{\"date\":\"2020-02-28\",\"value\":61},{\"date\":\"2020-02-29\",\"value\":60},{\"date\":\"2020-03-01\",\"value\":50},{\"date\":\"2020-03-02\",\"value\":50},{\"date\":\"2020-03-03\",\"value\":48},{\"date\":\"2020-03-04\",\"value\":52},{\"date\":\"2020-03-05\",\"value\":40},{\"date\":\"2020-03-06\",\"value\":47},{\"date\":\"2020-03-07\",\"value\":54},{\"date\":\"2020-03-08\",\"value\":56},{\"date\":\"2020-03-09\",\"value\":67},{\"date\":\"2020-03-10\",\"value\":50},{\"date\":\"2020-03-11\",\"value\":54},{\"date\":\"2020-03-12\",\"value\":62},{\"date\":\"2020-03-13\",\"value\":58},{\"date\":\"2020-03-14\",\"value\":71},{\"date\":\"2020-03-15\",\"value\":70},{\"date\":\"2020-03-16\",\"value\":62},{\"date\":\"2020-03-17\",\"value\":85},{\"date\":\"2020-03-18\",\"value\":61},{\"date\":\"2020-03-19\",\"value\":73},{\"date\":\"2020-03-20\",\"value\":66},{\"date\":\"2020-03-21\",\"value\":61},{\"date\":\"2020-03-22\",\"value\":50},{\"date\":\"2020-03-23\",\"value\":68},{\"date\":\"2020-03-24\",\"value\":68},{\"date\":\"2020-03-25\",\"value\":111},{\"date\":\"2020-03-26\",\"value\":99},{\"date\":\"2020-03-27\",\"value\":71},{\"date\":\"2020-03-28\",\"value\":64},{\"date\":\"2020-03-29\",\"value\":68},{\"date\":\"2020-03-30\",\"value\":58},{\"date\":\"2020-03-31\",\"value\":61},{\"date\":\"2020-04-01\",\"value\":67},{\"date\":\"2020-04-02\",\"value\":55},{\"date\":\"2020-04-03\",\"value\":57},{\"date\":\"2020-04-04\",\"value\":62},{\"date\":\"2020-04-05\",\"value\":49},{\"date\":\"2020-04-06\",\"value\":56},{\"date\":\"2020-04-07\",\"value\":62},{\"date\":\"2020-04-08\",\"value\":57},{\"date\":\"2020-04-09\",\"value\":65},{\"date\":\"2020-04-10\",\"value\":72},{\"date\":\"2020-04-11\",\"value\":53},{\"date\":\"2020-04-12\",\"value\":63},{\"date\":\"2020-04-13\",\"value\":56},{\"date\":\"2020-04-14\",\"value\":58},{\"date\":\"2020-04-15\",\"value\":73},{\"date\":\"2020-04-16\",\"value\":77},{\"date\":\"2020-04-17\",\"value\":64},{\"date\":\"2020-04-18\",\"value\":89},{\"date\":\"2020-04-19\",\"value\":56},{\"date\":\"2020-04-20\",\"value\":65},{\"date\":\"2020-04-21\",\"value\":84},{\"date\":\"2020-04-22\",\"value\":108},{\"date\":\"2020-04-23\",\"value\":95},{\"date\":\"2020-04-24\",\"value\":112},{\"date\":\"2020-04-25\",\"value\":99},{\"date\":\"2020-04-26\",\"value\":86},{\"date\":\"2020-04-27\",\"value\":75},{\"date\":\"2020-04-28\",\"value\":82},{\"date\":\"2020-04-29\",\"value\":80},{\"date\":\"2020-04-30\",\"value\":79},{\"date\":\"2020-05-01\",\"value\":62},{\"date\":\"2020-05-02\",\"value\":54},{\"date\":\"2020-05-03\",\"value\":73},{\"date\":\"2020-05-04\",\"value\":60},{\"date\":\"2020-05-05\",\"value\":73},{\"date\":\"2020-05-06\",\"value\":62},{\"date\":\"2020-05-07\",\"value\":79},{\"date\":\"2020-05-08\",\"value\":76},{\"date\":\"2020-05-09\",\"value\":68},{\"date\":\"2020-05-10\",\"value\":76},{\"date\":\"2020-05-11\",\"value\":76},{\"date\":\"2020-05-12\",\"value\":78},{\"date\":\"2020-05-13\",\"value\":72},{\"date\":\"2020-05-14\",\"value\":82},{\"date\":\"2020-05-15\",\"value\":92},{\"date\":\"2020-05-16\",\"value\":97},{\"date\":\"2020-05-17\",\"value\":55},{\"date\":\"2020-05-18\",\"value\":90},{\"date\":\"2020-05-19\",\"value\":64},{\"date\":\"2020-05-20\",\"value\":74},{\"date\":\"2020-05-21\",\"value\":61},{\"date\":\"2020-05-22\",\"value\":74},{\"date\":\"2020-05-23\",\"value\":78},{\"date\":\"2020-05-24\",\"value\":67},{\"date\":\"2020-05-25\",\"value\":67},{\"date\":\"2020-05-26\",\"value\":58},{\"date\":\"2020-05-27\",\"value\":76},{\"date\":\"2020-05-28\",\"value\":115},{\"date\":\"2020-05-29\",\"value\":96},{\"date\":\"2020-05-30\",\"value\":94},{\"date\":\"2020-05-31\",\"value\":73},{\"date\":\"2020-06-01\",\"value\":86},{\"date\":\"2020-06-02\",\"value\":61},{\"date\":\"2020-06-03\",\"value\":71},{\"date\":\"2020-06-04\",\"value\":64},{\"date\":\"2020-06-05\",\"value\":85},{\"date\":\"2020-06-06\",\"value\":68},{\"date\":\"2020-06-07\",\"value\":66},{\"date\":\"2020-06-08\",\"value\":65},{\"date\":\"2020-06-09\",\"value\":71},{\"date\":\"2020-06-10\",\"value\":73},{\"date\":\"2020-06-11\",\"value\":82},{\"date\":\"2020-06-12\",\"value\":76},{\"date\":\"2020-06-13\",\"value\":79},{\"date\":\"2020-06-14\",\"value\":70},{\"date\":\"2020-06-15\",\"value\":58},{\"date\":\"2020-06-16\",\"value\":77},{\"date\":\"2020-06-17\",\"value\":73},{\"date\":\"2020-06-18\",\"value\":86},{\"date\":\"2020-06-19\",\"value\":85},{\"date\":\"2020-06-20\",\"value\":82},{\"date\":\"2020-06-21\",\"value\":82},{\"date\":\"2020-06-22\",\"value\":77},{\"date\":\"2020-06-23\",\"value\":89},{\"date\":\"2020-06-24\",\"value\":86},{\"date\":\"2020-06-25\",\"value\":106},{\"date\":\"2020-06-26\",\"value\":131},{\"date\":\"2020-06-27\",\"value\":91},{\"date\":\"2020-06-28\",\"value\":84},{\"date\":\"2020-06-29\",\"value\":84},{\"date\":\"2020-06-30\",\"value\":61},{\"date\":\"2020-07-01\",\"value\":70},{\"date\":\"2020-07-02\",\"value\":77},{\"date\":\"2020-07-03\",\"value\":91},{\"date\":\"2020-07-04\",\"value\":84},{\"date\":\"2020-07-05\",\"value\":81},{\"date\":\"2020-07-06\",\"value\":79},{\"date\":\"2020-07-07\",\"value\":84},{\"date\":\"2020-07-08\",\"value\":90},{\"date\":\"2020-07-09\",\"value\":97},{\"date\":\"2020-07-10\",\"value\":91},{\"date\":\"2020-07-11\",\"value\":86},{\"date\":\"2020-07-12\",\"value\":88},{\"date\":\"2020-07-13\",\"value\":78},{\"date\":\"2020-07-14\",\"value\":82},{\"date\":\"2020-07-15\",\"value\":88},{\"date\":\"2020-07-16\",\"value\":91},{\"date\":\"2020-07-17\",\"value\":82},{\"date\":\"2020-07-18\",\"value\":85},{\"date\":\"2020-07-19\",\"value\":75},{\"date\":\"2020-07-20\",\"value\":78},{\"date\":\"2020-07-21\",\"value\":90},{\"date\":\"2020-07-22\",\"value\":106},{\"date\":\"2020-07-23\",\"value\":111},{\"date\":\"2020-07-24\",\"value\":87},{\"date\":\"2020-07-25\",\"value\":121},{\"date\":\"2020-07-26\",\"value\":79},{\"date\":\"2020-07-27\",\"value\":86},{\"date\":\"2020-07-28\",\"value\":87},{\"date\":\"2020-07-29\",\"value\":96},{\"date\":\"2020-07-30\",\"value\":75},{\"date\":\"2020-07-31\",\"value\":91},{\"date\":\"2020-08-01\",\"value\":86},{\"date\":\"2020-08-02\",\"value\":65},{\"date\":\"2020-08-03\",\"value\":68},{\"date\":\"2020-08-04\",\"value\":58},{\"date\":\"2020-08-05\",\"value\":81},{\"date\":\"2020-08-06\",\"value\":75},{\"date\":\"2020-08-07\",\"value\":74},{\"date\":\"2020-08-08\",\"value\":76},{\"date\":\"2020-08-09\",\"value\":76},{\"date\":\"2020-08-10\",\"value\":70},{\"date\":\"2020-08-11\",\"value\":57},{\"date\":\"2020-08-12\",\"value\":77},{\"date\":\"2020-08-13\",\"value\":77},{\"date\":\"2020-08-14\",\"value\":74},{\"date\":\"2020-08-15\",\"value\":81},{\"date\":\"2020-08-16\",\"value\":103},{\"date\":\"2020-08-17\",\"value\":80},{\"date\":\"2020-08-18\",\"value\":67},{\"date\":\"2020-08-19\",\"value\":71},{\"date\":\"2020-08-20\",\"value\":79},{\"date\":\"2020-08-21\",\"value\":70},{\"date\":\"2020-08-22\",\"value\":80},{\"date\":\"2020-08-23\",\"value\":72},{\"date\":\"2020-08-24\",\"value\":61},{\"date\":\"2020-08-25\",\"value\":78},{\"date\":\"2020-08-26\",\"value\":108},{\"date\":\"2020-08-27\",\"value\":83},{\"date\":\"2020-08-28\",\"value\":100},{\"date\":\"2020-08-29\",\"value\":80},{\"date\":\"2020-08-30\",\"value\":77},{\"date\":\"2020-08-31\",\"value\":66},{\"date\":\"2020-09-01\",\"value\":88},{\"date\":\"2020-09-02\",\"value\":86},{\"date\":\"2020-09-03\",\"value\":85},{\"date\":\"2020-09-04\",\"value\":74},{\"date\":\"2020-09-05\",\"value\":103},{\"date\":\"2020-09-06\",\"value\":75},{\"date\":\"2020-09-07\",\"value\":57},{\"date\":\"2020-09-08\",\"value\":83},{\"date\":\"2020-09-09\",\"value\":80},{\"date\":\"2020-09-10\",\"value\":85},{\"date\":\"2020-09-11\",\"value\":77},{\"date\":\"2020-09-12\",\"value\":81},{\"date\":\"2020-09-13\",\"value\":72},{\"date\":\"2020-09-14\",\"value\":81},{\"date\":\"2020-09-15\",\"value\":70},{\"date\":\"2020-09-16\",\"value\":79},{\"date\":\"2020-09-17\",\"value\":90},{\"date\":\"2020-09-18\",\"value\":67},{\"date\":\"2020-09-19\",\"value\":74},{\"date\":\"2020-09-20\",\"value\":68},{\"date\":\"2020-09-21\",\"value\":63},{\"date\":\"2020-09-22\",\"value\":85},{\"date\":\"2020-09-23\",\"value\":108},{\"date\":\"2020-09-24\",\"value\":110},{\"date\":\"2020-09-25\",\"value\":101},{\"date\":\"2020-09-26\",\"value\":71},{\"date\":\"2020-09-27\",\"value\":64},{\"date\":\"2020-09-28\",\"value\":83},{\"date\":\"2020-09-29\",\"value\":82},{\"date\":\"2020-09-30\",\"value\":87},{\"date\":\"2020-10-01\",\"value\":80},{\"date\":\"2020-10-02\",\"value\":74},{\"date\":\"2020-10-03\",\"value\":101},{\"date\":\"2020-10-04\",\"value\":86},{\"date\":\"2020-10-05\",\"value\":81},{\"date\":\"2020-10-06\",\"value\":87},{\"date\":\"2020-10-07\",\"value\":114},{\"date\":\"2020-10-08\",\"value\":87},{\"date\":\"2020-10-09\",\"value\":79},{\"date\":\"2020-10-10\",\"value\":91},{\"date\":\"2020-10-11\",\"value\":78},{\"date\":\"2020-10-12\",\"value\":61},{\"date\":\"2020-10-13\",\"value\":68},{\"date\":\"2020-10-14\",\"value\":69},{\"date\":\"2020-10-15\",\"value\":72},{\"date\":\"2020-10-16\",\"value\":91},{\"date\":\"2020-10-17\",\"value\":95},{\"date\":\"2020-10-18\",\"value\":72},{\"date\":\"2020-10-19\",\"value\":79},{\"date\":\"2020-10-20\",\"value\":91},{\"date\":\"2020-10-21\",\"value\":105},{\"date\":\"2020-10-22\",\"value\":96},{\"date\":\"2020-10-23\",\"value\":99},{\"date\":\"2020-10-24\",\"value\":90},{\"date\":\"2020-10-25\",\"value\":73},{\"date\":\"2020-10-26\",\"value\":66},{\"date\":\"2020-10-27\",\"value\":68},{\"date\":\"2020-10-28\",\"value\":90},{\"date\":\"2020-10-29\",\"value\":72},{\"date\":\"2020-10-30\",\"value\":84},{\"date\":\"2020-10-31\",\"value\":83},{\"date\":\"2020-11-01\",\"value\":100},{\"date\":\"2020-11-02\",\"value\":79},{\"date\":\"2020-11-03\",\"value\":78},{\"date\":\"2020-11-04\",\"value\":72},{\"date\":\"2020-11-05\",\"value\":68},{\"date\":\"2020-11-06\",\"value\":60},{\"date\":\"2020-11-07\",\"value\":61},{\"date\":\"2020-11-08\",\"value\":66},{\"date\":\"2020-11-09\",\"value\":69},{\"date\":\"2020-11-10\",\"value\":68},{\"date\":\"2020-11-11\",\"value\":59},{\"date\":\"2020-11-12\",\"value\":52},{\"date\":\"2020-11-13\",\"value\":88},{\"date\":\"2020-11-14\",\"value\":75},{\"date\":\"2020-11-15\",\"value\":52},{\"date\":\"2020-11-16\",\"value\":70},{\"date\":\"2020-11-17\",\"value\":86},{\"date\":\"2020-11-18\",\"value\":108},{\"date\":\"2020-11-19\",\"value\":122},{\"date\":\"2020-11-20\",\"value\":101},{\"date\":\"2020-11-21\",\"value\":81},{\"date\":\"2020-11-22\",\"value\":78},{\"date\":\"2020-11-23\",\"value\":73},{\"date\":\"2020-11-24\",\"value\":83},{\"date\":\"2020-11-25\",\"value\":83},{\"date\":\"2020-11-26\",\"value\":89},{\"date\":\"2020-11-27\",\"value\":71},{\"date\":\"2020-11-28\",\"value\":79},{\"date\":\"2020-11-29\",\"value\":63},{\"date\":\"2020-11-30\",\"value\":66},{\"date\":\"2020-12-01\",\"value\":74},{\"date\":\"2020-12-02\",\"value\":68},{\"date\":\"2020-12-03\",\"value\":65},{\"date\":\"2020-12-04\",\"value\":68},{\"date\":\"2020-12-05\",\"value\":78},{\"date\":\"2020-12-06\",\"value\":69},{\"date\":\"2020-12-07\",\"value\":60},{\"date\":\"2020-12-08\",\"value\":67},{\"date\":\"2020-12-09\",\"value\":64},{\"date\":\"2020-12-10\",\"value\":65},{\"date\":\"2020-12-11\",\"value\":67},{\"date\":\"2020-12-12\",\"value\":80},{\"date\":\"2020-12-13\",\"value\":62},{\"date\":\"2020-12-14\",\"value\":72},{\"date\":\"2020-12-15\",\"value\":81},{\"date\":\"2020-12-16\",\"value\":107},{\"date\":\"2020-12-17\",\"value\":104},{\"date\":\"2020-12-18\",\"value\":95},{\"date\":\"2020-12-19\",\"value\":85},{\"date\":\"2020-12-20\",\"value\":91},{\"date\":\"2020-12-21\",\"value\":73},{\"date\":\"2020-12-22\",\"value\":63},{\"date\":\"2020-12-23\",\"value\":78},{\"date\":\"2020-12-24\",\"value\":75},{\"date\":\"2020-12-25\",\"value\":80},{\"date\":\"2020-12-26\",\"value\":63},{\"date\":\"2020-12-27\",\"value\":65},{\"date\":\"2020-12-28\",\"value\":53},{\"date\":\"2020-12-29\",\"value\":78},{\"date\":\"2020-12-30\",\"value\":63},{\"date\":\"2020-12-31\",\"value\":110}]");

/***/ }),

/***/ 88:
/***/ (function(module) {

module.exports = JSON.parse("[\"2020-01-22\",\"2020-02-19\",\"2020-03-25\",\"2020-04-22\",\"2020-05-27\",\"2020-06-24\",\"2020-07-22\",\"2020-08-26\",\"2020-09-23\",\"2020-10-21\",\"2020-11-18\",\"2020-12-16\"]");

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[129,1,2]]]);