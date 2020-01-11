/* Variables */
const titleProportion = .2;
const dataURl = "data.csv";


/* Dynamic Functions */
function getBoxWidth(idSelector) {
  // Returns WIDTH of box in pixels

  let element = d3.select(idSelector).node();
  return element.getBoundingClientRect().width;
};

// Defines SVG Area in Pixels
function createDimensions() {
  // Returns object with area specifications

  const aspect = 4/3;
  const title = 20;
  const axis = 30;

  let boxSize = getBoxWidth("#scatter");
  var margin = {
    left: 10,
    right: 10,
    top: 20,
    bottom: 20
  };

  let width = boxSize - margin.left - margin.right;

  var dim = {
    width: width,
    height: Math.round(width/aspect),
    margin: margin,
    title: title,
    axis: axis
  };

  return dim;
};

// Axis Function
function createAxis(data, axis, translation) {
  // Creates Linear Axis with "neat" dimensions

  var axis = d3.scaleLinear();

  if (axis == "x") {

  } else if (axis == "y") {

  }

  return axis;
};

function getData(filter) {
  // Uses d3 to read "data.csv"
};

function createMarkers() {
  // Creates Circle Markers to plot
};

/* Main */
function makeGraph() {
  /* 1. Define SVG Area */

  // Define SVG Space
  // Use: "#scatter", "#scatter-parent"
  var dim = createDimensions();
  var svg = d3.select("#scatter").append("svg")
    .attr("width", dim.width + dim.margin.left + dim.margin.right)
    .attr("height", dim.height + dim.margin.top + dim.margin.bottom)
    .append("g")
      .attr("transform", "translate(" + dim.margin.left + ","
        + dim.margin.top + ")");

  /* Create Titles */
  // X titles: "poverty", "age", "income",
  // Y titles: "obesity", "smokes", "healthcare"
  var yTitles = ["Obesity (%)", "Smoking (%)", "Lacks Healthcare (%)"];
  var xTitles = ["In Poverty (%)", "Age (Median)", "Household Income (Median)"];

  let medY = (dim.height - 3*dim.title)/2;
  yTitles.forEach( function(item, i) {
    svg.append("text")
      .attr("x", "" + (i*dim.title+20))
      .attr("y", "" + medY)
      .attr("transform", "rotate(270," + (i*dim.title+20) + "," +
        medY + ")")
      .classed("unselected", true)
      .text(item);
  });

  let medX = (dim.width - 4*dim.title)/2;
  xTitles.forEach( function(item, i) {
    svg.append("text")
      .attr("x", "" + medX)
      .attr("y", (dim.height - i*dim.title))
      .classed("unselected", true)
      .text(item);
  });


  /* Create Axes */
  // Filtering Data Occurs Per Click
  // Must "fill" graph with data

};

makeGraph();

/* 5. Listeners */
function onDataChange(event) {};
