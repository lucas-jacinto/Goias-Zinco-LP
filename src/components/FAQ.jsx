import { useState } from "react"

import { AiOutlinePlus} from "react-icons/ai"
import { AiOutlineMinus} from "react-icons/ai"

const FAQ = ({question, answer}) => {
  const [isAnswerOn, setIsAnswerOn] = useState(false);


  return (
    <article className="faq" onClick={()=> setIsAnswerOn(prev => !prev)}>
        <div>
          <h4>{question}</h4>
          <button className="faq_icon">
           {
            isAnswerOn ? <AiOutlineMinus/> : <AiOutlinePlus/>
            }
          </button>
        </div>
        {isAnswerOn && <p>{answer}</p>}
    </article>
  )
}

export default FAQ