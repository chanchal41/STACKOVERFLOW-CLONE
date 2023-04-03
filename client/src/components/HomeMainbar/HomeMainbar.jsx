import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Questions from './Questions'
import {useNavigate} from 'react-router-dom'
import './HomeMainbar.css'

import QuestionsList from './QuestionsList'
import { useSelector } from 'react-redux'

function HomeMainbar() {

    const location = useLocation()
    const user=1;
    const navigate = useNavigate()

    const questionsList = useSelector(state => state.questionsReducer)
    // console.log(questionsList);


    // var questionsList = [{

    //     _id: 1,
    //     Votes: 3,
    //    noOfAnswers: 2,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    // },
    // {
    //     _id: 2,
    //     Votes: 3,
    //    noOfAnswers: 2,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R"," Python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    // },
    // {
    //     _id: 3,
    //     Votes: 3,
    //    noOfAnswers: 2,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",

    // }]

   
    const checkAuth = () => {
        if(user === null) {
        alert("login or signup to ask a question")
        navigate('/Auth')
    }else {
        navigate('/AskQuestion')
    }
    }

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
{ 
location.pathname === '/' ? <h1>Top Question</h1>:<h1>All Question</h1>
}
<Link to='/AskQuestion' onClick={checkAuth} className="ask-btn">Ask Question</Link>
        </div>
<div>
    {
        questionsList.data === null ?
        <h1>Loading...</h1>:
        <>
        <p>{questionsList.data.length} questions</p>
     <QuestionsList questionsList={questionsList.data} />
        </>
    }
</div>

    </div>
  )
}

export default HomeMainbar