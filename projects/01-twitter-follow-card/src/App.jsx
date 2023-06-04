import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
     userName: 'midudev',
     name: 'Miguel Angel Duran',
     isFollowing: true
    },
    {
     userName: 'pheralb',
     name: 'Pablo H.',
     isFollowing: false
    },
    {
     userName: 'PacoHdezs',
     name: 'Paco Hdez',
     isFollowing: true
    },
    {
     userName: 'ChemJimGar',
     name: 'Jose Maria Jimenez Garcia',
     isFollowing: true
    },
]
export function App(){
    const [name, setName] = useState('midudev')
    return (
        <section className="App">
            {/* <TwitterFollowCard 
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
            name="Jose Maria Jimenez" /> */}
            {
                users.map(user => {
                    const { userName, name, isFollowing} = user
                    return (
                      <TwitterFollowCard
                         key={userName}
                         userName={userName}
                         name={name}
                         initialIsFollowing={isFollowing} />
                    )
                })
            }

            <button onClick={()=> setName('pedromichel')}>
                Cambio nombre
            </button>
        </section>
        
    )
}
