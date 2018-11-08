import React from 'react';

class Example extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    console.log(this)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click</button>
    )
  }
}

export default Example
