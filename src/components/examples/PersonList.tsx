
import { FullName } from './types/Person.types';

// type PersonListProps ={
//     names:{
//         first:string,
//         last:string,
//     }[]

// }
type PersonListProps = {
  names:FullName[];
};


export const PersonList =(props: PersonListProps)=>{
    return (
      <div style={{textAlign:'left'}}>
        <h4>Group Members</h4>
        {props.names.map((person, id)=>(
            <p key={id} >{id+1}. {person.first} {person.last}  </p>
        ))}
      </div>
    );
}