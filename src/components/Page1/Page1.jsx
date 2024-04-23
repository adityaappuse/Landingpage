import React from 'react'
import './page1.css'
import computerlab from './computerlab.jpg'
 function Page1 () {
  return (
    <div className='main1'>
      <div className='sub1'>
       Builiding minds one byte,at a  time
        <br/>
        <span className='links'>
            <a href='https://sourceforge.net/projects/norm-os/files/'>Download</a>&nbsp;
            <a href='https://github.com/adith-ts/norm-os'>Github</a>
        </span>
        <br />
        </div>
        <div className='sideimage'>
          <img src={computerlab} alt='computerlab'/>
        </div>
          
    </div>
  )
}
export default Page1;