HTMLWidgets.widget({

  name: 'plot_d3_scatterplot',
  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {
        h = 500
        w = 500
        var padding = 10;

        var svg = d3.select(el)
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);

        var xScale = d3.scaleLinear()
                      .domain([0, d3.max(x.dataset, function(d) { return d[0]; })])
                      .range([0, w - padding * 2]);

        var yScale = d3.scaleLinear()
                       .domain([0, d3.max(x.dataset, function(d) { return d[1]; })])
                       .range([h - padding, padding]);

        svg.selectAll("circle")
           .data(x.dataset)
           .enter()
           .append("circle")
           .attr("cx", function(d) {
             return xScale(d[0]);
           })
           .attr("cy", function(d) {
             return yScale(d[1]);
           })
           .attr("r", function(d){
             return Math.sqrt(h - d[1])
           })
           .attr("fill", "rgba(230, 160, 100, .7)")
           .attr("stroke", "gray")
           .attr("stroke-width", "2");

        svg.selectAll("text")
           .data(x.dataset)
           .enter()
           .append("text")
           .text(function(d) {
             return d[0] + "," + d[1];
           })
           .attr("x", function(d) {
             return xScale(d[0]);
           })
           .attr("y", function(d) {
             return yScale(d[1]);
           })
           .attr("font-family", "sans-serif")
           .attr("font-size", "10px")
           .attr("fill", "rgb(100, 160, 230)");
      },
      
      resize: function(width, height) {

      }

    };
  }
});
