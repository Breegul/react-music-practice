import React, {useState} from 'react'


const Artist = () => {

    const [loveArtist, setLoveArtist] = useState(false) 

    return (
        <>
            <h1>Smash Mouth</h1>
            <img src="https://www.udiscovermusic.com/wp-content/uploads/2019/08/Smash-Mouth-2003-press-shot-01-CREDIT-Jay-Blakesberg-1000.jpg" alt="Smash Mouth"/>
            <p>Smash Mouth is an American rock band from San Jose, California, formed in 1994. The band currently consists of Steve Harwell (lead vocals), Greg Camp (guitar), Paul De Lisle (bass guitar), and Kevin Coleman (drums). The band is best known for their 1999 hit single "All Star", which was featured in the film Shrek. The band's other hits include "Walkin' on the Sun", "Then the Morning Comes", "Can't Get Enough of You Baby", and "I'm a Believer".</p>
            <button onClick={() => setLoveArtist(!loveArtist)}>{loveArtist ? "I don't love this artist" : "I love this artist"}</button>
        </>
    )
}

export default Artist
