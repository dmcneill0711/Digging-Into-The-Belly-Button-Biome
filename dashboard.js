// Get Data Set
const data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


d3.json(data).then(function(data) {
    dataSet = data;

        console.log(dataSet);

// Get Names

    let names = Object.values(dataSet.names);

        console.log(names);

// Get MetaData

    let metadata = Object.values(dataSet.metadata[0]);

        console.log(metadata);

// Get Samples

    let samples = Object.values(dataSet.samples);

        console.log(samples)

// Get OTU-IDs

    let otu_ids = Object.values(dataSet.samples[0].otu_ids);
    
        console.log(otu_ids)

// Get Sample Values

    let sample_values = Object.values(dataSet.samples[0].sample_values);

        console.log(sample_values)

// Get OTU-Labels

    let otu_labels = Object.values(dataSet.samples[0].otu_labels);

        console.log(otu_labels)

// In Dropdown Menu, Display Names

    let menu = d3.select("#selDataset");

    names.forEach(function(names) {
        menu.append("option").text(names);
    });

// In Demographic Info, Display MetaData From Each Person

    demoInfo = d3.select("sample-metadata");


    // metadata.forEach(function(metadata) {
    //     metadata.append("panel-body").text(metadata);
    // })

    console.log(demoInfo)
// In The Bar Chart, Display Top 10 Bacteria Found
let x = sample_values.slice(0,10).reverse();
let y = otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();

console.log(x)
console.log(y)

let barGraph = [{
    x: x,
    y: y,
    type: "bar",
    orientation: "h",
    marker: {
        color: 'a262a9'
      }
}];

let barLayout = [{
    title: "Top 10 Belly Bacts",
    margin: { t: 30, l: 150 },
}];

Plotly.newPlot("bar", barGraph, barLayout);

// In Gauge Chart, Display Washing Frequency
let value = metadata[0].wfreq

console.log(value)

let gaugeChart = [{
    domain: { x: [0, 1], y: [0, 1] },
    value: value,
    type: "indicator",
    axis: { range: [null, 7] },
	title: { text: "Washing Frequency" },
	mode: "gauge+number",
    gauge: {
        axis: { range: [null, 7], tickwidth: 1 },
        bar: { color: "000000", thickness: 0.1 },
        steps: [
            { range: [0, 2], color: "6f4d96" },
            { range: [2, 4], color: "cd7eaf" },
            { range: [4, 7], color: "f3cec9"}]
	}
}];

let gaugeLayout = { 
    width: 600, 
    height: 500, 
    margin: 
        { t: 0, b: 0 }
};

Plotly.newPlot("gauge", gaugeChart, gaugeLayout);

// In Bubble Chart, Display All Of The Bacteria Found In Bellybutton

let a = otu_ids;
let b = sample_values;
let text = otu_labels;
let marker_size = sample_values;
let marker_color = otu_ids  // .map(otuID => `OTU ${otuID}`);

console.log(text)

let bubbleChart = [{
    x: a,
    y: b,
    text: text,
    mode: "markers",
    marker: {
        size: marker_size,
        color: marker_color,
        colorscale: 'Electric', 
    }
}];

let bubbleLayout = [{
    title: "Top 10 Belly Bacts",
    xaxis:{
        title: "OTU-IDs"
    },
    showlegend: true,
    height: 600,
    width: 1200,
}];

Plotly.newPlot("bubble", bubbleChart, bubbleLayout);


});


// function buildCharts(sample) {
//     d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
//       let samples = data.samples;
//       let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
//       let result = resultArray[0];
  
//       let otu_ids = result.otu_ids;
//       let otu_labels = result.otu_labels;
//       let sample_values = result.sample_values;
  
  
//       let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
//       let barData = [
//         {
//           y: yticks,
//           x: sample_values.slice(0, 10).reverse(),
//           text: otu_labels.slice(0, 10).reverse(),
//           type: "bar",
//           orientation: "h",
//         }
//       ];
  
//       let barLayout = {
//         title: "Top 10 Bacteria Cultures Found",
//         margin: { t: 30, l: 150 }
//       };
  
//       Plotly.newPlot("bar", barData, barLayout);
//     });
//   }
// init()  buildCharts(data);
