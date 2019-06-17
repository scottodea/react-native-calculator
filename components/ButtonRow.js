import React from "react";
import styled from "styled-components/native";
import { Button } from ".";

const RowBox = styled.View`
  flex: 1;
  flex-direction: row;
`;

export default (ButtonRow = ({ func, keys }) => (
  <RowBox>
    {keys.map(key => (
      <Button func={func} text={key} key={key} />
    ))}
  </RowBox>
));
