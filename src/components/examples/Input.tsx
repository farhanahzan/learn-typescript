type InputProp ={
    value:string
    handleChange : (event:React.ChangeEvent<HTMLInputElement>)=>void
}

export const Input = (props:InputProp) => {
  return <input type="text" value={props.value} onChange={props.handleChange} />;
};
