import React from 'react'

const ShownData = ({question,feedback, confidence, knowledge, clarity}) => {
  return (
    <div>
        <h1>Question: {question}</h1>
        <h1>Feedback: {feedback}</h1>
        <h1>Confidence: {confidence}</h1>
        <h1>Knowledge: {knowledge}</h1>
        <h1>Clarity: {clarity}</h1>
    </div>
  )
}

export default ShownData