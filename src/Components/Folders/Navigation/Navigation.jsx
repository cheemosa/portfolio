import React from 'react'
import './Navigation.css'
import { navigation } from '../../../data'
import { useGlobalContext } from '../../../Context'

const Navigation = () => {
  const{setAbout,setContact,setSkills,setProject} =useGlobalContext();
  const handleClick = (value) =>{
    if (value == "About") {
      setAbout(true);
      setContact(false);
      setSkills(false)
      setProject(false);
    } else if (value == "Skills") {
      setSkills(true);
      setProject(false);
      setAbout(false);
      setContact(false);
    } else if (value == "Project") {
      setProject(true);
      setSkills(false);
      setAbout(false);
      setContact(false);
    } else if (value == "Contact") {
      setContact(true);
      setProject(false);
      setSkills(false);
      setAbout(false);
    }
  }
  return (
    <div className='navigation'>
      <h3>Places</h3>
      {navigation.map((nav)=>{
        return (
          <div className="navi" onClick={() => handleClick(`${nav.name}`)}>
            <img src={nav.img} alt="" />
            <p>{nav.name}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Navigation
