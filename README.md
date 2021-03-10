# test-responsive-slider

> Responsive slider for react

[![NPM](https://img.shields.io/npm/v/test-responsive-slider.svg)](https://www.npmjs.com/package/test-responsive-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save test-responsive-slider
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactResponsiveSlider from 'test-responsive-slider'
import 'test-responsive-slider/dist/index.css'

class Example extends Component {
  render() {
    return <ReactResponsiveSlider />
  }
}
```

## Props

| Name | Type | Description | Default |
| ----------- | ----------- | ----------- | ----------- |
| controls | `bool` | Activate / Deactivate slider controls | `false` |
| gallery | `Array` | An array of images paths (['some_path/some_img.jpg',...]), if no gallery is provided, the slider will show a set of placeholder images | `Array of placeholder images` |
| timing | `string` | Value for the transition-timing property of the slider, it can be in *s* or *ms* units | `1s` |
| timingFunction | `string` | Value for the transition-timing-function property of the slider, it can be any valid value for the css property *"transtion-timing-function"* | `linear` |
| width | `string` | Defines slider width, the value can be any valid CSS width value | `100%` |
| height | `string` | Defines slider height, the value can be any valid CSS height value | `300px` |


## License

MIT © [Israel2709](https://github.com/Israel2709)
