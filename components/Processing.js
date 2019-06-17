import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Button } from ".";

const List = styled.FlatList`
  flex: 5;
`;

const ProcessingBox = styled.View`
  flex: 6;
  background-color: rgb(29, 31, 33);
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Header = styled.Text`
  font-size: 30;
  text-align: center;
  text-align-vertical: center;
  font-family: Orbitron-Bold;
  color: red;
  padding-top: 10px;
`;

const Item = styled.Text`
  font-size: 20;
  text-align: center;
  text-align-vertical: center;
  font-family: Audiowide-Regular;
  color: firebrick;
`;

export default ({ running, factors, press }) => (
  <ProcessingBox>
    {running ? <Header>Processing</Header> : <Header>Finished</Header>}
    <List data={factors} renderItem={({ item }) => <Item>{item.key}</Item>} />
    {!running && <Button func={() => press("Back")} text="Back" />}
  </ProcessingBox>
);
