import React, { Component } from 'react';

class SplitText extends Component {

  render(){
    return(
        <span aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function(char, index){
            return <span aria-hidden="true" key={index}>{char}</span>;
        })}
        </span>
    );
  }
}

export default SplitText