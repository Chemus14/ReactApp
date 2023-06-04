import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    const [name, setName] = useState('midudev')
    return (
        <section className="App">
            <TwitterFollowCard 
            userName={name} 
            name="Miguel Angel Duran"
            initialIsFollowing={true} />
            <TwitterFollowCard 
            userName="omidnikrah" 
            name="Miguel Angel Duran" />
            <TwitterFollowCard 
            userName="pheralb" 
            name="Miguel Angel Duran" />
            <TwitterFollowCard 
            userName="ChemJimGar" 
            name="Jose Maria Jimenez" />

            <button onClick={()=> setName('pedromichel')}>
                Cambio nombre
            </button>
        </section>
        
    )
}
