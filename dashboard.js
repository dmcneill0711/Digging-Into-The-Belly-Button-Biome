// init function is the function called when the webpage/dashboard is initialized and what information will be on display when started. This dashboard is going to 
// start with patient 940 (or the first patient's number listed on the dataset in numerical order), which happens to be index [0].

function init() {

// Get Data Set

    const data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

    d3.json(data).then(function(data) {
        dataSet = data;

        console.log(dataSet);

// Define i For Index

    var index = [];

    for (var i in dataSet.names) {
        index.push(i);
    }

    console.log(index)

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

            d3.select("#sample-metadata").html(displayMeta(metadata));

// Call The Function To Display Top 10 Bacteria Found In The Bar Chart

displayBar(sample_values, otu_ids)

// Call The Function To Display Washing Frequency Of Each Person In The Gauge 

displayWashing(metadata)

// Call The Function To Display All Of The Bacteria Found In Bellybutton In The Bubble Chart

displayBubble(otu_ids, sample_values, otu_labels)

// Call The Function To Display MetaData In Panel

displayMeta(metadata)

    });

}

// This function is called when a new patient number is selected in the dropdown menu. With 'this.selectedIndex' on the <select>, when a new patient number is
// selected, the function updatePlots is triggered. This swaps out all the of information pertaining to patient 940 (index [0]), for the newly selected patient's 
// number and that person's corresponding information. Then, like the function says, it updates all of the plots on the dashboard. 

// This is where the list of indexes created in the init function is assigned to the 'selectedIndex' and is used to map and pull the corresponding information with 
// the patient to be displayed.

function updatePlots(selectedIndex) {

// Use D3 to select the dropdown menu

  let dropdownMenu = d3.select("#selDataset");

// Assign the value of the dropdown menu option to a variable
  
  let index = selectedIndex;

// Get Data Set

  const data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

  d3.json(data).then(function(data) {
      dataSet = data;

      console.log(dataSet);

// Get Names

  let names = Object.values(dataSet.names);

      console.log(names);

// Get MetaData

  let metadata = Object.values(dataSet.metadata[index]);

      console.log(metadata);

// Get Samples

  let samples = Object.values(dataSet.samples);

      console.log(samples)

// Get OTU-IDs

  let otu_ids = Object.values(dataSet.samples[index].otu_ids);
  
      console.log(otu_ids)

// Get Sample Values

  let sample_values = Object.values(dataSet.samples[index].sample_values);

      console.log(sample_values)

// Get OTU-Labels

  let otu_labels = Object.values(dataSet.samples[index].otu_labels);

      console.log(otu_labels)

// In Demographic Info, Display MetaData From Each Person

        d3.select("#sample-metadata").html(displayMeta(metadata));

// Call The Function To Display Top 10 Bacteria Found In The Bar Chart (Again)

displayBar(sample_values, otu_ids)

// Call The Function To Display Washing Frequency Of Each Person In The Gauge (Again)

displayWashing(metadata)

// Call The Function To Display All Of The Bacteria Found In Bellybutton In The Bubble Chart (Again)

displayBubble(otu_ids, sample_values, otu_labels)

// Call The Function To Display MetaData In Panel (Again)

displayMeta(metadata)

  });

}

// Create All Of The Functions For All Of The Charts On The Dashboard:

// Bar Chart Function:
// 

function displayBar(sample_values, otu_ids) {
    console.log("displaybar")

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

  }

function displayWashing(metadata) {

    let value = metadata[6];

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
                { range: [4, 7], color: "f3cec9" }
            ],
        }
    }];

    let gaugeLayout = { 
        width: 600, 
        height: 500, 
        margin: 
            { t: 0, b: 0 }
    };

    Plotly.newPlot("gauge", gaugeChart, gaugeLayout);

}

function displayBubble(otu_ids, sample_values, otu_labels) {

    let a = otu_ids;
    let b = sample_values;
    let text = otu_labels;
    let marker_size = sample_values;
    let marker_color = otu_ids 

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
}

function displayMeta(metadata) {
        
    var str = "";

    Object.entries(metadata).forEach(([key,value]) =>
        str += `<br>${key}: ${value}<br>`)
    return str;
}

init();
