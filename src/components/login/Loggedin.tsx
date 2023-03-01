import React,{useState} from 'react';
type AuthUser={
    name:string
    email:string
}

export const Loggedin = () => {
    const [isLoggedIn, setIsLoggedin] = useState(false) //in here this is single initial value so we dont need to define anything TS automatically get the initial value as  boolean
    
    const [user, setUser] = useState<AuthUser| null>(null)
   // const [user, setUser] = useState<AuthUser>({} as AuthUser); //lying to compiler or TS is everthying fine so dont need to use chaining operator ?.

    const handleLogin =()=>{
        setIsLoggedin(prev=>true)
        setUser({name:'michal', email:'michal@gmail.com'})
    }
    const handleLogout = ()=>{
        setIsLoggedin(prev=>false)
        setUser(null)

    }
  return <div>
        <button onClick={handleLogin}>Login</button>
        <p></p>
        <button onClick={handleLogout}>Logout</button>
        <div style={{color:'red',padding:'2em'}}>User is {isLoggedIn?'logged in': 'logout'}</div>
        <div>
            {
                isLoggedIn?<p> hello, {user?.name} & email{user?.email}</p>:null
            }
        </div>
    </div>;
};
