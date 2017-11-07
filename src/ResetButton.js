import React from 'react';
import styled from 'styled-components';
export default class ResetButton extends React.Component {
  render() {
    return (
      <Button onClick={this.props.reset}>
        Reset
      </Button>
    )
  }
}
const Button = styled.button`
  padding:1.3% 2%;
  border-radius:10px;
  outline:none;
  cursor:pointer;
`