HTMLWidgets.widget({

  name: 'plot_d3_barchart',
  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {
        var dataset = [ 5, 10, 15, 20, 25 ]
        console.log(dataset)
        d3.select(el)
          .selectAll("div")
          .data(dataset)
          .enter()
          .append("div")
          .attr("class", "bar");
      },

      resize: function(width, height) {

      }

    };
  }
});
