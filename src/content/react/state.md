# State
Only classes can have state

## State example
```js
import React from 'react';

class StateClass extends React.Component {

  state = {
    name: 'John Smith',
    age: 32,
  }

  render() {
    const { name, age } = this.state;

    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}

export default StateClass;
```

## setState method
```js
import React from 'react';

class StateClass extends React.Component {

  state = {
    name: 'John Smith',
    age: 32,
  }

  someClassMethod = () => {
    this.setState({ name: 'New Name' });
  };

  render() {

    const { name, age } = this.state;

    return (
      <div onClick={this.someClassMethod}>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}

export default StateClass;
```