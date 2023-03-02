type HeadingProps={
    children:string
}

export const Heading = (props : HeadingProps)=>{
    return (
        <h2>{props.children} Placeholder Text</h2>
    )
}