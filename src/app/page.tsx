import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (


    <div>
      <h1 className="container">HomePage</h1>
    <h2 className="header">This is HomePage</h2> 

    <ul>
      <li>
        <Link href="/">Home</Link>
        </li>
       <li><Link href="/about" target="blank">About</Link></li> 
        <li><Link href="/contact" target= "blank">Contact</Link> </li>
        <li><Link href= "/service" target= "blank">Service</Link></li>
      </ul>
    </div>    
  )
}

export default HomePage
