import React , {Component} from 'react'
import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import '../style/reinscription.css';

const Champ =({type, label})=>{
  // if type text
  if(type == "text"){
    return(
      <div className="Champ-form">
        <label>
          {label} :
        </label>
        <input type={type}  placeholder={label+"..."}/> <br/>
      </div>
    )
  }

}

//formulaire
const Formulaire = ()=>{
  const button_activate = document.getElementsByClassName('active-button')
  const Section = document.getElementsByClassName('Section')
      // deux foction pour le class active
  const sectionOneClick =()=>{
    Section[0].classList.add('active');
    Section[1].classList.remove('active');
    button_activate[0].classList.add('active');
    button_activate[1].classList.remove('active')
  }
  const sectionTwoClick =()=>{
    Section[1].classList.add('active');
    Section[0].classList.remove('active')
    button_activate[1].classList.add('active');
    button_activate[0].classList.remove('active')
  }
  return(

    <>
          <div className="main">
             <div >
                 <ul>
                   <li className="active-button active" onClick={ sectionOneClick}><a href="#">Classe</a>
                       <hr/>
                   </li>

                     <li className="active-button" onClick={ sectionTwoClick}><a href="#">Information</a>
                         <hr/>
                     </li>
                 </ul>
                 <hr/>
             </div>
             <div className="active-section">
                 <div className="Section active">

                    <Champ type="text" label="Nom"/>
                 </div>
                 <div className="Section">
                     <Champ type="text" label="first"/>
                     <Champ type="text" label="second"/>
                     <Champ type="text" label="third"/>
                     <Champ type="text" label="quad"/>

                    

                 </div>
             </div>
      </div>

    </>
  )
}

class Reinscription extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="reinscription-component">

          <Formulaire/>

      </div>
    )
  }
}
export default Reinscription;
