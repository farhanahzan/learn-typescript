import React from 'react';
import { Button } from './Button';
import { Container } from './Container';
import { Counter } from '../counter/Counter';
import { Greet } from './Greet';
import { Heading } from './Heading';
import { Input } from './Input';
import { Loggedin } from '../login/Loggedin';
import { Oscar } from './Oscar';
import { Person } from './Person';
import { PersonList } from './PersonList';
import { Status } from './Status';

export const Examples = () => {
  const [count, setCount] = React.useState(0);
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
    <div>
      <Greet name="React" messageCount={12} unread={false} />
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
      />
      <Loggedin />
      <Counter />
    </div>
  );
};
