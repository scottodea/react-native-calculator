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
    number: 0,
    numbers: [],
    processing: false,
    running: false,
    operator: '',
    screen: 0,
    answer: null
  };

  calculate = (operator, numbers) => {
    numbers_to_i = numbers.map(num => +num)
    let answer = numbers_to_i.reduce((acc, cv) => acc + cv);
    return answer
  }

  press = (value) => {
    let { numbers, screen, operator, answer } = this.state;
    if (value === 'Clear') {
      screen = 0;
      this.setState({ screen });
    } else if (value === 'Go' && operator !== '') {
      numbers.push(screen);
      this.setState({ running: false, processing: true, answer: this.calculate(operator, numbers) });
    } else if (value === 'Back') {
      this.setState({ screen: 0, numbers: [], answer: null, operator: '', processing: false });
    }
    else if (value === '+') {
      numbers.push(screen);
      this.setState({ numbers, screen: 0, operator: '+' });
    }
    else {
      if (screen === 0) screen = value;
      else screen += value;
      this.setState({ screen });
    }
  };

  render() {
    const { processing, running, operator, screen, answer } = this.state;
    return (
      <Container>
        <Header>Calculator</Header>
        <Input>{screen}</Input>
        {processing ? (
          <Processing running={running} answer={answer} press={this.press} />
        ) : (
            <Keypad>
              <ButtonRow func={this.press} keys={['1', '2', '3']} />
              <ButtonRow func={this.press} keys={['4', '5', '6']} />
              <ButtonRow func={this.press} keys={['7', '8', '9']} />
              <ButtonRow func={this.press} keys={['0', 'Clear', 'Go']} />
              <ButtonRow func={this.press} keys={['*', '+', '-']} />
            </Keypad>
          )}
      </Container>
    );
  }
}

export default App;
