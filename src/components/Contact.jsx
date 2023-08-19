import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
    <main>
      
    <h1>Contact us</h1>
      <form>
      
        <div>
            <label>Name</label>
            <input type="text" placeholder='ABC'></input>
        </div>
        <div>
            <label>Email</label>
            <input type="email" placeholder='abc@xyz.com'></input>
        </div>
        <div>
            <label>Message</label>
            <input type="text" placeholder='Tell us about your query'></input>
        </div>
        <button type="submit">Send</button>
      </form>
      </main>
    </div>
  )
}

export default Contact
