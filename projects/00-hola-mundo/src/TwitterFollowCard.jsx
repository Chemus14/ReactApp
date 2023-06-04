import { useState } from "react";

export function TwitterFollowCard({userName, name, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const imageSrc =`https://unavatar.io/${userName}`
    const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = 
    isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = ()=> {
        setIsFollowing(!isFollowing)
    }
    return(
<article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="Avatar" src={imageSrc}/>
        <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>{addAt(userName)}</span>
        </div>   
    </header>

    <aside>
        <button className={buttonClassName} onClick={handleClick}>
            {text}
        </button>
    </aside>
</article>)
} 