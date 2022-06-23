// Get Data Set
const data = "samples.json"

d3.json(data).then(function(data) {
    dataSet = data;

    console.log(data);
});
