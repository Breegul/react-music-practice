import React, {useState} from 'react'

const Like = () => {
    const [loveAlbum, setLoveAlbum] = useState(false);

  return (
    <button onClick={() => setLoveAlbum(!loveAlbum)}>{loveAlbum ? "I don't love this album" : "I love this album"}</button>
  )
}

export default Like