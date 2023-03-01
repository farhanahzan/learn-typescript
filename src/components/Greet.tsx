
import { GreetProps } from "./types/Greet.types"

export const Greet = ({name, messageCount, unread} : GreetProps)=>{
    return(
        <div>
            <h2>Hello {name} you have {messageCount} messages to read! </h2>
            {!unread?<p>Unreded messages {messageCount}</p>:null}
        </div>
    )
}