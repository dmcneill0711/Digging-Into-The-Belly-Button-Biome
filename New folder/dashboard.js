// Get Data Set
const data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(data).then(function(data) {
    console.log(data);
});

// Create An Array of Each 
let names = Object.values(data.id);

    console.log(names)