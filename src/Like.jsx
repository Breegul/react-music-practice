import React, {useState} from 'react'

import empty from "./assets/heart-empty.svg"
import filled from "./assets/heart-filled.svg"

const Like = () => {
    const [loveAlbum, setLoveAlbum] = useState(false);

  return (
    <button onClick={() => setLoveAlbum(!loveAlbum)}>{loveAlbum ? <img src={filled}/> : <img src={empty}/>}</button>
  )
}

export default Like
