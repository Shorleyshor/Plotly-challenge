// populating from down
function init(){
    var selector = d3.select("#selDataset");
    d3.json("./samples.json").then((data) => {
        var subjectIds = data.names;

        console.log(data);

        subjectIds.forEach((id) => {
          selector
          .append("option")
          .text(id)
          .property("value", id);
        });
        const newSample = subjectIds[0];
      updateCharts(newSample);
      updateMetadata(newSample);
    });
}

function updateMetadata(sample) {
    d3.json("./samples.json").then((data) => {
        var metadata = data.metadata;

        console.log(data);

        var resultArray = metadata.filter(sampleObject => sampleObject.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
            PANEL.html("");

            //  this populates the lower part of the drop down
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`)
        })

  