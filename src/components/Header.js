import React from "react";

import "./Header.css";
import Avatar from './Avatar'

function Header(props) {
  // const switchUser = () = {
  //   props.currentUser = props.participant
  //   return
  // }
  return <header className='headerBox'>{
    props.participants
    .filter(participant=> participant !==props.currentUser)
    .map(participant => {
      return (
        <div className='participantBox'>
          {/* onClick='switchUser()' */}
          <a href='/' ><Avatar src={participant.avatar} classname='headerImg'/></a>
          {/* <img className='headerImg' src={participant.avatar} alt=''/> */}
          <div>{participant.username}</div>
        </div>
      )
    })}</header>;
}

export default Header;
