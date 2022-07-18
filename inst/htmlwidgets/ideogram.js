HTMLWidgets.widget({

  name: 'ideogram',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
    var ideogram;
    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        var annots = HTMLWidgets.dataframeToD3(x.data);
        var rows = HTMLWidgets.dataframeToD3(x.samples)
        var legend = [{
          name: "Shared IBD regions",
          rows: rows
        }];
        var ideogram = new Ideogram({
          organism: 'human',
          annotations: annots,
          chrHeight: 500,
          chrMargin: 2,
          annotationsLayout: 'overlay',
          legend: legend
        });
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size
        igram.refresh();
      }
    };
  }
});
