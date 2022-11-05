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

