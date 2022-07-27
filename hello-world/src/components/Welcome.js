import React, { Component } from "react";

// Class Component Example

class Welcome extends Component {
  render() {
    return <h2>Welcome Mr{this.props.gender=="F"?"s":""}. {this.props.name} -&gt; Hero: {this.props.badge}</h2>;
  }
}

export default Welcome;