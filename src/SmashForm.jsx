import React from 'react'

const SmashForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.smash.value)
        if(e.target.smash.value == "?"){
            window.location.href = "https://www.youtube.com/watch?v=HLQ1cK9Edhc"
        }
    }
  return (
    <>
    <h2>Did you know about Smash Mouth before Shrek?</h2>
    <form onSubmit={handleSubmit}>   
        <input type="radio" name="smash" id="yes" value="yes"/>
        <label htmlFor="yes">Yes</label>
    <br/>
        <input type="radio" name="smash" id="no" value="no"/>
        <label htmlFor="yes">No</label>
    <br/>
        <input type="radio" name="smash" id="?" value="?"/>
        <label htmlFor="yes">Whats a shrek?</label>   
    <br/>
        <input type="submit" htmlFor="shrekSubmit"/>
    </form>  
    </>  
    )
}

export default SmashForm
