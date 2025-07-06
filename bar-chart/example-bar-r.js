// in example-bar-r.js
var barHeight = Math.floor(height / data.length);
var barPadding = 2;
console.log(data)
console.log(height)

svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("height", function(d) {
    return barHeight - barPadding;
  })
  .attr("width", function(d){
    return d * 10;
  })
  .attr("y", function(d, i) {
    return i * barHeight;
  });

svg.selectAll("text")
   .data(data)
   .enter()
   .append("text")
   .attr("class", "label")
   .text(function(d) {
     return d;
   })
   .attr("y", function(d, i) {
     return i * barHeight + (barHeight / 2);
   })
   .attr("x", function(d) {
     return d * 10 + 10
   });
