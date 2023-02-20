import React, {useState} from 'react'
import Like from "./Like"

const Albums = () => {

    const [showAlbums, setShowAlbums] = useState(false)


    const albums = [
        {
            name: "Fush Yu Mang",
            release: "July 8, 1997",
            cover: "https://upload.wikimedia.org/wikipedia/en/d/da/FushYuMang.jpg"
        },
        {
            name: "Astro Lounge",
            release: "June 8 1999",
            cover: "https://upload.wikimedia.org/wikipedia/en/3/30/Astro_lounge.png"
        },
        {
            name: "Smash Mouth",
            release: "November 27, 2001",
            cover: "https://upload.wikimedia.org/wikipedia/en/8/87/SmashMouthAlbum.jpg"
        },
        {
            name: "Get the Picture?",
            release: "August 5, 2003",
            cover: "https://upload.wikimedia.org/wikipedia/en/2/2c/Get_the_picture.jpg"
        },
        {
            name: "The Gift of Rock",
            release: "December 1, 2005",
            cover: "https://upload.wikimedia.org/wikipedia/en/7/75/Giftcover2.jpg"
        },
        {
            name: "Summer Girl",
            release: "September 19, 2006",
            cover: "https://upload.wikimedia.org/wikipedia/en/0/00/Summergirl.gif"
        },
        {
            name: "Magic",
            release: "September 4, 2012",
            cover: "https://upload.wikimedia.org/wikipedia/en/d/d6/Smash_Mouth_-_Magic_album_cover.jpg"
        },
    ]

    const albumList = albums.map(album => 
        <li>
            <h2>{album.name}</h2>
            <p>{album.release}</p>
            <img src={album.cover} alt={album.name + "'s cover art"} />
            <Like/>
        </li>
    )

    return (
        <>

        <button onClick={() => setShowAlbums(!showAlbums)}>{showAlbums ? "Hide Albums" : "Show Albums"}</button>
        {showAlbums ? <ul>{albumList}</ul> : null  }
        </>
    )
}

export default Albums
