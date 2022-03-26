import React from 'react'
import { GetStartedButton } from '../GetStartedButton'
import QuestionData from '../SignUp-Sections/questionData'
import { Questions } from './Questions'

function QuestionSections() {





  return (
    <div  className="flex bg-black   text-white  flex-col   items-center" >
    <div className="flex flex-col items-center text-center mb-16">

 <span className="text-5xl  font-bold pb-10 pt-16">Frequently Asked Questions</span>
 
 {
   QuestionData.map(data=>
   <Questions key={data.id} data={data}/>)
 }

 
    </div>
    <div className="mb-16">
 <GetStartedButton />

    </div>

    </div>
  )
}

export default QuestionSections