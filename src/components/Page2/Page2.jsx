import React from 'react'
import './page2.css'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
function Page2() {
  return (
    <div className='main3'>
    <div className='scrollmenu' >
        <img src={image1}/>
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
    </div>
    </div>
  )
}
export default Page2;