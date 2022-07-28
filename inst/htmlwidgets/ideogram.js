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
          filterable: true
        };

        ideogram = new Ideogram(config);
        ideogram: ideogram;
      },

      resize: function(width, height) {
      }

    };
  }
});
