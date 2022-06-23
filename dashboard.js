// Get Data Set
const data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


d3.json(data).then(function(data) {
    dataSet = data;

        console.log(dataSet);

// Get Names

    let names = Object.values(dataSet.names);

        console.log(names);

// Get MetaData

    let metadata = Object.values(dataSet.metadata);

        console.log(metadata);

// In Dropdown Menu, Display Names

    let menu = d3.select("#selDataset");

    names.forEach(function(names) {
        menu.append("option").text(names);
    });

    // function updateID() {
    //     let dropdownMenu = d3.select(this);
    //     let dataset = dropdownMenu.property("value");
    //     let data = [];

    //     if (dataset == names) {
    //         data = names;
    //     }

})

// In Demographic Info, Display MetaData From Each Person



// In The Bar Chart, Display Demographic Information

// In Bubble Chart, Display Top 10 Bacterias Found In Bellybutton

