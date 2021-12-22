import React from 'react'
import recipeLogo from './images/my-recipes.svg'

const App = () => {
    return <>
        <h1>This environment is - {process.env.NODE_ENV} - {process.env.name}</h1>
        <h1>This is a new react app, go to code fast</h1>
        <img src={recipeLogo} alt="recipe app" width="200" height="100" />
    </>
}

export default App