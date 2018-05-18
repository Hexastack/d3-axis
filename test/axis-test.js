var tape = require("tape"),
    d3 = Object.assign({}, require("d3-scale"), require("d3-selection"), require("../"));

tape("axisLeft(scale) has the expected defaults", function(test) {
  var s = d3.scaleLinear(),
      a = d3.axisLeft(s);
  test.equal(a.scale(), s);
  test.deepEqual(a.tickArguments(), []);
  test.equal(a.tickValues(), null);
  test.equal(a.tickFormat(), null);
  test.equal(a.tickSize(), 6);
  test.equal(a.tickSizeInner(), 6);
  test.equal(a.tickSizeOuter(), 6);
  test.equal(a.tickPadding(), 3);
  test.end();
});

tape("axis.ticks(arguments…) sets the tick arguments", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).ticks(20);
  test.deepEqual(a.tickArguments(), [20]);
  a.ticks();
  test.deepEqual(a.tickArguments(), []);
  test.end();
});

tape("axis.tickArguments(null) sets the tick arguments to the empty array", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).tickArguments(null);
  test.deepEqual(a.tickArguments(), []);
  test.end();
});

tape("axis.tickArguments() makes a defensive copy of the tick arguments", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).tickArguments([20]),
      v = a.tickArguments();
  v.push(10);
  test.deepEqual(a.tickArguments(), [20]);
  test.end();
});

tape("axis.tickValues(null) clears any explicitly-set tick values", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).tickValues([1, 2, 3]);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  a.tickValues([]);
  test.deepEqual(a.tickValues(), []);
  a.tickValues(null);
  test.equal(a.tickValues(), null);
  test.end();
});

tape("axis.tickValues(values) sets the tick values explicitly", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).tickValues([1, 2, 3]);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  test.end();
});

tape("axis.tickValues(values) makes a defensive copy of the specified tick values", function(test) {
  var v = [1, 2, 3],
      a = d3.axisLeft(d3.scaleLinear()).tickValues(v);
  v.push(4);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  test.end();
});

tape("axis.tickValues() makes a defensive copy of the tick values", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).tickValues([1, 2, 3]),
      v = a.tickValues();
  v.push(4);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  test.end();
});

tape("axis(orientation, scale) 20 ticks produces the expected result", function(test) {
  var axisExpected = {
    anchor: 'middle',
    path: { d: 'M0.5,6V0.5H1.5V6' },
    ticks: [ 
      { transform: 'translate(0,0.5)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.00', y: 9 }
      },
      { transform: 'translate(0,0.55)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.05', y: 9 }
      },
      { transform: 'translate(0,0.6)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.10', y: 9 }
      },
      { transform: 'translate(0,0.65)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.15', y: 9 }
      },
      { transform: 'translate(0,0.7)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.20', y: 9 }
      },
      { transform: 'translate(0,0.75)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.25', y: 9 }
      },
      { transform: 'translate(0,0.8)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.30', y: 9 }
      },
      { transform: 'translate(0,0.85)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.35', y: 9 }
      },
      { transform: 'translate(0,0.9)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.40', y: 9 }
      },
      { transform: 'translate(0,0.95)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.45', y: 9 }
      },
      { transform: 'translate(0,1)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.50', y: 9 }
      },
      { transform: 'translate(0,1.05)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.55', y: 9 }
      },
      { transform: 'translate(0,1.1)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.60', y: 9 }
      },
      { transform: 'translate(0,1.15)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.65', y: 9 }
      },
      { transform: 'translate(0,1.2)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.70', y: 9 }
      },
      { transform: 'translate(0,1.25)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.75', y: 9 }
      },
      { transform: 'translate(0,1.3)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.80', y: 9 }
      },
      { transform: 'translate(0,1.35)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.85', y: 9 }
      },
      { transform: 'translate(0,1.4)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.90', y: 9 }
      },
      { transform: 'translate(0,1.45)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '0.95', y: 9 }
      },
      { transform: 'translate(0,1.5)',
        line: { y2: 6 },
        text: { dy: '0.32em', text: '1.00', y: 9 }
      }
    ]
  }
  test.deepEqual(d3.axis('left', d3.scaleLinear()).ticks(20)(), axisExpected);
  test.end();
});

tape("axisLeft.scale(nonNumericRangeScale)() produces the expected result", function(test) {
  var axisExpected = { 
    anchor: 'end',
    path: { d: 'M-6,0.5H0.5V500.5H-6' },
    ticks: [
      { transform: 'translate(0,0.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '0.0', x: -9 }
      },
      { transform: 'translate(0,50.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '0.1', x: -9 }
      },
      { transform: 'translate(0,100.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '0.2', x: -9 }
      },
      { transform: 'translate(0,150.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '0.3', x: -9 }
      },
      { transform: 'translate(0,200.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '0.4', x: -9 }
      },
      { transform: 'translate(0,250.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '0.5', x: -9 }
      },
      { transform: 'translate(0,300.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '0.6', x: -9 }
      },
      { transform: 'translate(0,350.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '0.7', x: -9 }
      },
      { transform: 'translate(0,400.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '0.8', x: -9 }
      },
      { transform: 'translate(0,450.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '0.9', x: -9 }
      },
      { transform: 'translate(0,500.5)',
        line: { x2: 6 },
        text: { dy: '0.32em', text: '1.0', x: -9 }
      }
    ]
  }
  test.deepEqual(d3.axisLeft(d3.scaleLinear().range([0, "500"]))(), axisExpected);
  test.end();
});
