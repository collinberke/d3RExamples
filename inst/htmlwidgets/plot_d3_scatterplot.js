HTMLWidgets.widget({

  name: 'plot_d3_scatterplot',
  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {
        var dataset = [
          [24.7407 , 40.013  ],
          [316.3764, 234.9726],
          [185.4722, 224.4867],
          [282.9775, 399.2485],
          [230.906 , 52.3965 ],
          [464.6347, 314.2303],
          [430.62  , 119.9725],
          [247.8598, 14.1642 ],
          [261.4066, 353.1354],
          [275.8762, 333.8036]
        ];
        console.log(x)
        console.log(x.dataset)
        console.log(dataset)
      },
      
      resize: function(width, height) {

      }

    };
  }
});
