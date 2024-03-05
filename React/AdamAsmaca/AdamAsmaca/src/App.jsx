
import { useEffect, useState } from 'react'
import './App.css'
import { DATA } from './Data/data';

const alphabet = ["A","B","C","Ç","D","E","F","G","Ğ","H","I","İ","J","K","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z"]

function App() {
  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState("")
  const [answer,setAnswer] = useState ("")
  const [answerArray, setAnswerArray] = useState([])
  const [keywords,setKeywords] = useState([])
  const [resultQuestion, setResultQuestion] = useState(false)
  const [wrong,setWrong] = useState(false)
  

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  const setKeyword = (keyword) => {
    if(keywords.length < answer.length) {
      keywords.push(keyword);
      setKeywords([...keywords])
    }

    if(keywords.length == answer.length) {
      if(answer == keywords.join("")) {
        setIndex(index +1)
        setKeywords([])
        setResultQuestion(true)
      }else{
        setWrong(true)
      }
    }
  }


  useEffect (() => {
    setWrong(false)
    setAnswer("")
    const currentQuestion = DATA[index];
    
    if(currentQuestion) {
      const answer = currentQuestion.answer.toLowerCase();
      setAnswer(answer);
      setQuestion(currentQuestion.question);
      const stringToArray = answer.split("")
      stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
      stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
      stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
      const alphabetLowerData = stringToArray.map((answer) => answer.toLocaleLowerCase());
      setAnswerArray(shuffle(alphabetLowerData))
    }
  }, [index]);

  const removeKeyword = (index) => {
    keywords.splice(index,1);
    setKeywords([...keywords])
  }

  return (
    <div className='App'>
      {answer != "" &&
      <div>
        <div>
          <span className={"question-name"}>{question}</span></div>
        <div className={"question-area"}>
          {keywords.map((item, index) => (
            <span style={{ 'border-bottom':(wrong) ? '3px solid red': '3px solid #ddd' }} className={"question"} onClick={() => removeKeyword(index)} key={index}>
              {item}
            </span>
          ))}
          </div>
        <div className={'button-area'}>
          {answerArray.map((item,index) => (
            <button className={'button'} key={index} onClick={() => setKeyword(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      }
      {answer == "" &&
      <div className={"empty-message"}> Sorular Bitti
      </div>
      }
  </div>

  )
 
}

export default App
