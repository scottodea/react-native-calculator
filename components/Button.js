import React from "react";
import styled from "styled-components/native";

const ButtonBox = styled.TouchableHighlight.attrs({
  underlayColor: "#193441"
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {

    if (/\w/g.test(props.text)) {
      return 'rgb(39, 41, 43)'
    }
    return 'orange'
  }
  }
  border-radius: 10px;
  margin: 5px;
`;

const ButtonText = styled.Text`
  font-size: 30;
  font-family: Orbitron-Bold;
  color: ${(props) => {
    if (props.text == 'Go') {
      return 'green';
    }
    else if (props.text == 'Clear') {
      return 'red';
    }
    else if (/\w/g.test(props.text)) {
      return 'orange';
    }
    return 'black';
  }
  }`

export default (Button = ({ func, text }) => (
  <ButtonBox text={text} onPress={() => func(text)}>
    <ButtonText text={text}>{text}</ButtonText>
  </ButtonBox>
));
