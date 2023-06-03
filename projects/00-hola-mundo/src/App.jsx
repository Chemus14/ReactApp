import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    return (
        <section className="App">
            <TwitterFollowCard 
            userName="midudev" 
            name="Miguel Angel Duran" />
            <TwitterFollowCard 
            userName="omidnikrah" 
            name="Miguel Angel Duran" />
            <TwitterFollowCard 
            userName="pheralb" 
            name="Miguel Angel Duran" />
            <TwitterFollowCard 
            userName="ChemJimGar" 
            name="Jose Maria Jimenez" />
        </section>
        
    )
}
