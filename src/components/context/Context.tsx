import React from 'react'
import { Box } from './Box'
import { ThemeContextProvider } from './ThemeContext'
import { User } from './User'
import { UserContextProvider } from './UserContext'


export const Context = () => {
  return (
    <div>
        <ThemeContextProvider>
            <Box/>
        </ThemeContextProvider>
        <UserContextProvider>
            <User/>
        </UserContextProvider>
    </div>
  )
}
