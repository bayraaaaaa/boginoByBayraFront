import React from 'react'
import '../App.css'
import Logo from '../assets/boginooLogo.png'
import {Link} from 'react-router-dom'
function signup() {
  return (
    <>
    <div className='header'>
        <div className='topHeader'>
              <p className='topHeaderShit'>Хэрхэн ажилладаг вэ?</p> 
        </div>
        <div className='bottomHeader'>
            <Link to={"/"}>
                <img src={Logo} alt="" className="logo"/>
            </Link>
        </div>
        <div>
            <p className='headerShit'>Бүртгүүлэх</p>
           
        </div>
    </div>
    <div className='main'>
        <div className='input'>
            <p className='holder'>Цахим хаяг</p><input type="text" className='inputs' placeholder='name@mail.domain'/>
            <p className='holder'>Нууц үг</p><input type="text" className='inputs' placeholder='··········' style={{fontWeight:"bolder"}}/>
            <p className='holder'>Нууц үгээ давтна уу?</p><input type="text" className='inputs' placeholder='··········' style={{fontWeight:"bolder"}}/>
        </div>
    </div>
    <div className='thridMain'>
        <div className='help'>
            <button className='button'>Бүртгүүлэх</button>
        </div>
    </div>
    <div className='footer'>
        <div className='texts'>
                <p className='secondMainShit' style={{color:'black'}}>Made with ❤️ by Nest Academy</p>
                <p className='secondMainShit' style={{color:"gray", fontSize:"13px", marginLeft:"60px"}}>©boginoo.io 2023</p>
        </div>
    </div>
   
    
    </>
  )
}

export default signup