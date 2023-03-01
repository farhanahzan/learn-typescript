type ButtonProps ={
    handleClick?:()=>void

    handleClickEvent?:(event:React.MouseEvent<HTMLButtonElement>)=>void

    handleClickEventParameter?:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
    
}

export const Button = (props:ButtonProps)=>{
    return (
      <>
        <button onClick={props.handleClick}>Click-HandleClick</button>
        <button onClick={ props.handleClickEvent}>Click- event</button>
       
        <button onClick={(event)=>props.handleClickEventParameter?.(event, 1)}>Click- event, Parameter</button>
        {/*in last button you need to optional syntex ?. to prevent the error  */}
      </>
    );
}