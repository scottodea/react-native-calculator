import React from "react";
import {
  Container,
  Header,
  Input,
  Keypad,
  ButtonRow,
  Processing
} from "./components";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { number: 23, processing: false };
  press = value => {
    let { number } = this.state;
    if (value === "Clear") {
      number = Math.floor(number / 10);
      this.setState({ number });
    } else if (value != "Go" && number < 1000000) {
      number += value;
      this.setState({ number });
    } else if (value === "Go") {
      this.setState({ processing: true });
    }
  };

  render() {
    const { number, processing } = this.state;
    return (
      <Container>
        <Header>Prime Components</Header>
        <Input>{number}</Input>
        {processing ? (
          <Processing />
        ) : (
          <Keypad>
            <ButtonRow func={this.press} keys={["1", "2", "3"]} />
            <ButtonRow func={this.press} keys={["4", "5", "6"]} />
            <ButtonRow func={this.press} keys={["7", "8", "9"]} />
            <ButtonRow func={this.press} keys={["0", "Clear", "Go"]} />
          </Keypad>
        )}
      </Container>
    );
  }
}

export default App;
