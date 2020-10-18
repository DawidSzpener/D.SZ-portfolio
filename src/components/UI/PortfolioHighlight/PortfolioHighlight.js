import React, { Component } from 'react';

class SplitText extends Component {

  render(){
    return(
      <span aria-label={this.props.copy} role={this.props.role}>
      {this.props.copy.split("").map(function(char, index){
        const style = {"animationDelay": (1.9 + index / 10) + "s"};
        return <span
          aria-hidden="true"
          key={index}
          style={style}>
          {char}
        </span>;
      })}
      </span>
    );
  }
}

export default SplitText
