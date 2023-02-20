import React, {useState} from 'react'

const Like = () => {
    const [loveAlbum, setLoveAlbum] = useState(false);

  return (
    <img src="https://placekitten.com/200/300" onClick={() => setLoveAlbum(!loveAlbum)}>{loveAlbum ? "I don't love this album" : "I love this album"}></img>
  )
}

export default Like
