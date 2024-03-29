HTMLWidgets.widget({

  name: 'ideogram',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
    var ideogram;

    return {

      renderValue: function(x) {

        // Code to render the widget
        var container = "#" + el.id
        var annots = HTMLWidgets.dataframeToD3(x.data);
        var rows = HTMLWidgets.dataframeToD3(x.samples);
        var legend = [{
          name: "Shared IBD regions",
          rows: rows
        }];

        var config= {
          organism: 'human',
          annotations: annots,
          annotationsLayout: 'overlay',
          legend: legend,
          container: container,
          filterable: true,
          rotatable: false,
          onDrawAnnots: function() {
          var polygons = document.getElementsByClassName("annot");
          for (var i = 0; i < polygons.length; i++) {
            polygons[i].onclick = function(event){
              Shiny.onInputChange("chosenRegion", this.__data__);
            }
          }
          }
        };
        if (ideogram != null){
          ideogram.config.clear();
        }

        ideogram = new Ideogram(config);
        el.ideogram = ideogram;
      },

      getIdeogram: function(){
        return ideogram;
      },

      getIdeoObj: function(id) {
        // get HTMLwidget
        var htmlWidgObj = HTMLWidgets.find("#" + id);
        // access the ideogram object from the HTMLwidget
        var igram = htmlWidgObj.getIdeogram();
        return igram;
      },

      resize: function(width, height) {
      }
    };
  }
});
