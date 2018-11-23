export default ({ value = 0 }) => {
  let numberQualityDescriptorColor = (num) => {
    if (num < 0) { return 'lightcoral' }
    if (num === 0) { return 'deepskyblue' }
    if (num > 0) { return 'palegreen' }
  }

  return {
    text: 'magenta',
    number: numberQualityDescriptorColor(parseInt(value)),
    increment: 'mediumspringgreen',
    decrement: 'pink',

    button: {
      text: 'white',
      hover: 'gold',
      hoverText: 'red',
      border: '0.1ch solid white',
      active: 'teal',
      activeBorder: '0.1ch solid red',
      activeText: 'white'
    }
  }
}
