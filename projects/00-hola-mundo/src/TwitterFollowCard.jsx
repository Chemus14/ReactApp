export function TwitterFollowCard({formattedUserName,userName, name, isFollowing}){
    const imageSrc =`https://unavatar.io/twitter/${userName}`;
    return(
<article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="Avatar" src={imageSrc}/>
        <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>{formattedUserName}</span>
        </div>   
    </header>

    <aside>
        <button className='tw-followCard-button'>
            Seguir
        </button>
    </aside>
</article>)
} 