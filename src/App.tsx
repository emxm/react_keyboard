import React from 'react';

type State = {
  pressedKey: string
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.pressedKey
              ? `The last pressed key is [${pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}