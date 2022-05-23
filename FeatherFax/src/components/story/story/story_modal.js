import React, { Component } from 'react'
import Stories from 'react-insta-stories'


const StoryModal = (props) => {
  return(
    <div className="story-modal">
      <Stories stories={props.stories} defaultDuration={1200} loader={<div>Loading..</div>}/>
    </div>
  )
}

export default StoryModal;
