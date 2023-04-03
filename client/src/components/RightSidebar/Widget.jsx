import React from 'react'
import'./RightSidebar.css'
import pen from '../../assets/pen-solid.svg'
import icon from '../../assets/icon.png'
import message from '../../assets/message-regular.svg'
const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
              <p><img src={pen} alt="pen" width='18'/></p>
              <p>How Intuit democratizes AI development across teams through reusability sponsored post</p>
           </div>
           <div className='right-sidebar-div-2'>
              <p><img src={pen} alt="pen" width='18'/></p>
              <p>The nature of simulating nature: A Q&A with IBM Quantum researcher Dr. Jamie...</p>
           </div>
       </div>
       <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
              <p><img src={message} alt="message" width='18'/></p>
              <p> We've added a "Necessary cookies only" option to the cookie consent popup</p>
           </div>
           <div className='right-sidebar-div-2'>
              <p><img src={icon} alt="icon" width='18'/></p>
              <p>Launching the CI/CD and R Collectives and community editing features for...</p>
           </div>
           <div className='right-sidebar-div-2'>
              <p><img src={icon} alt="icon" width='18'/></p>
              <p>Staging Ground Beta 1 Recap, and Reviewers needed for Beta 2</p>
           </div>
           <div className='right-sidebar-div-2'>
              <p><img src={icon} alt="icon" width='18'/></p>
              <p>The [amazon] tag is being burninated</p>
           </div>
       </div>
       <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
              <p>6</p>
              <p> All the [lint] and [linter]s need some [static-analysis]</p>
           </div>
       </div>
       </div>
  )
}

export default Widget