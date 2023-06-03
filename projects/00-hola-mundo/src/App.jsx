import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    return (
        <section className="App">
            <TwitterFollowCard isFollowing={true} userName="midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard isFollowing={false} userName="omidnikrah" name="Miguel Angel Duran" />
            <TwitterFollowCard isFollowing userName="pheralb" name="Miguel Angel Duran" />
            <TwitterFollowCard isFollowing userName="ChemJimGar" name="Jose Maria Jimenez" />
        </section>
        
    )
}
