import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    const formattedUserName = <span>@midudev</span>
    return (
        <section className="App">
            <TwitterFollowCard 
            formattedUserName={formattedUserName}
            isFollowing={true} 
            userName="midudev" 
            name="Miguel Angel Duran" />
            <TwitterFollowCard 
            formattedUserName={formattedUserName}
            isFollowing={false} 
            userName="omidnikrah" 
            name="Miguel Angel Duran" />
            <TwitterFollowCard 
            formattedUserName={formattedUserName}
            isFollowing 
            userName="pheralb" 
            name="Miguel Angel Duran" />
            <TwitterFollowCard 
            formattedUserName={formattedUserName}
            isFollowing 
            userName="ChemJimGar" 
            name="Jose Maria Jimenez" />
        </section>
        
    )
}
