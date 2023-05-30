import React from 'react'

const quiz = ({question, answers, incorrectAnswer}) => {
  return ( 
    <>
    

<div>
    {question}

</div>

<div>
    {answers}
</div>

<div>
    {incorrectAnswer}
   
</div>
</>
)
}

export default quiz
