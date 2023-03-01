import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Counter } from './components/counter/Counter';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Loggedin } from './components/login/Loggedin';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const [count, setCount] = useState(0);
  const personName = {
    first: 'John',
    last: 'Boklor',
  };

  const nameList = [
    {
      first: 'John',
      last: 'Michal',
    },
    {
      first: 'Perera',
      last: 'Polasthy',
    },
    {
      first: 'Tiya',
      last: 'Lisha',
    },
  ];
  // const style = {
  //   border: '1px solid red',
  //   padding: '1rem',
  // };
  //if we defined like this TS does not find error on CSS ex paddinghh:'1rem'

  return (
    <div className="App">
      {/* <Greet name="React" messageCount={12} unread={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <hr />
      <Status status="error" />
      <hr />
      <Heading>Hello </Heading>
      <hr />
      <Oscar>
        <Heading> Oscar goest to calibrio decabrion</Heading>
      </Oscar>
      <hr />
      <Button
        handleClick={() => {
          console.log('Button Clicked');
        }}
        handleClickEvent={(event) => {
          console.log('event button click', event);
        }}
        handleClickEventParameter={(event, id) => {
          console.log(event, id);
        }}
      />
      <hr />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <hr />
      <Container
        styles={{
          border: '1px solid red',
          padding: '1rem',
        }}
      /> */}
      <Loggedin/>
      <Counter/>
    </div>
  );
}

export default App;
