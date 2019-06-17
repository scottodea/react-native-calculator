import React from "react";
import styled from "styled-components/native";

const ButtonBox = styled.TouchableHighlight.attrs({
  underlayColor: "#193441"
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgb(39, 41, 43);
  border-radius: 10px;
  margin: 5px;
`;

const ButtonText = styled.Text`
  font-size: 30;
  font-family: Orbitron-Bold;
  color: ${props => (props.text == "Go" ? "green" : "orange")};
`;

export default (Button = ({ func, text }) => (
  <ButtonBox onPress={() => func(text)}>
    <ButtonText text={text}>{text}</ButtonText>
  </ButtonBox>
));
