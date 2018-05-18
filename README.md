# d3-axis-norender

This is the same [d3-axis](https://github.com/d3/d3-axis/releases/latest) by Mike Bostock but without rendering inside a selection, if you do not know about it we suggest you take a look there first, most likely it is what you are looking for.

No selection is needed to be passed, this lib returns the axis as a Javascript Object instead, the Object is in this format:
```Javascript
{
  anchor: 'middle', // anchor of the svg text element
  path: { d: 'M0.5,6V0.5H1.5V6' }, // svg path designing the line of the axis
  ticks: [ // list of ticks
    { transform: 'translate(0,0.5)',
      line: { y2: 6 },
      text: { dy: '0.32em', text: '0.00', y: 9 }
    },
    ...
    ...
    { transform: 'translate(0,1.5)',
      line: { y2: 6 },
      text: { dy: '0.32em', text: '1.00', y: 9 }
    }
  ]
}
```

## Installing

If you use NPM, `npm install d3-axis-norender`. Otherwise, download the [latest release](https://github.com/Hexastack/d3-axis-norender). You can also load directly from [jsdelivr.net](https://cdn.jsdelivr.net/npm/d3-axis-norender).

```html
<script src="https://cdn.jsdelivr.net/npm/d3-axis-norender"></script>
<script>

var axis = d3.axisLeft(scale);
console.log(axis)
</script>
```

[Try d3-axis-norender in your browser.](https://tonicdev.com/npm/d3-axis-norender)
