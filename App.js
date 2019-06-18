import React from 'react';
import {
  Container,
  Header,
  Input,
  Keypad,
  ButtonRow,
  Processing
} from './components';

class App extends React.Component {
  state = {
    processing: false,
    running: false,
    screen: 0,
    answer: null,
    string: ""
  };

  press = (value) => {
    let { screen, answer } = this.state;
    const { string, numbers } = this.state;
    if (value === 'Clear') {
      screen = 0;
      this.setState({ screen, string: "" });
    } else if (value === 'Go') {
      answer = eval(string);
      this.setState({ numbers, running: false, processing: true, answer });
    } else if (value === 'Back') {
      this.setState({ screen: 0, numbers: [], string: '', processing: false, answer: null });
    } else if (value.includes('+') || value.includes('-') || value.includes('*') || value.includes('/')) {
      if (string) {
        return this.setState({ string: `${string} ${value}`, screen: 0 })
      }
      this.setState({ string: `${value} ${string}`, screen: 0 });
    }
    else {
      if (screen === 0) screen = value;
      else screen += value;
      this.setState({ screen, string: string + value });
    }
  };

  render() {
    const { processing, running, screen, answer } = this.state;
    return (
      <Container>
        <Header>Calculator</Header>

        {answer ? <Input>{answer}</Input> : <Input>{screen}</Input>}
        {processing ? (
          <Processing running={running} answer={answer} press={this.press} />
        ) : (
            <Keypad>
              {/* <ButtonRow func={this.press} keys={['1', '2', '3']} />
              <ButtonRow func={this.press} keys={['4', '5', '6']} />
              <ButtonRow func={this.press} keys={['7', '8', '9']} />
              <ButtonRow func={this.press} keys={['0', '+', '-']} />
              <ButtonRow func={this.press} keys={['*', '/', '%']} />
              <ButtonRow func={this.press} keys={['Clear', 'Go']} /> */}
              <ButtonRow func={this.press} keys={['Clear', '1', '2']} />
              <ButtonRow func={this.press} keys={['-', '3', '4']} />
              <ButtonRow func={this.press} keys={['*', '5', '6']} />
              <ButtonRow func={this.press} keys={['/', '7', '8']} />
              <ButtonRow func={this.press} keys={['+', '9', '0']} />
              <ButtonRow func={this.press} keys={['Go']} />
            </Keypad>
          )}
      </Container>
    );
  }
}

export default App;
