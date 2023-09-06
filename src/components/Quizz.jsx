import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flip, ToastContainer, toast } from 'react-toastify'
import BoxContainer from './BoxContainer.jsx'

import '../styles/Quizz.css'
import '../styles/index.css'
import 'react-toastify/dist/ReactToastify.css'

const Quizz = ({ questions, characters }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answerIndex, setAnswerIndex] = useState(null)

  const { question, choices, charactersAffine } = questions[currentQuestion]
  const navigate = useNavigate()

  /* Para establecer por defecto la elección de la primera opción cuando se trate de un <select> con varias <option>: */
  useEffect(() => {
    if (choices.length > 4) {
      setAnswerIndex(0)
    }
  }, [choices])

  const onAnswerClick = (answer, index) => {
    setAnswerIndex(index)
  }

  const onButtonNextClick = () => {
    if (currentQuestion >= questions.length - 1) {
      navigate('/result')
    } else {
      if (answerIndex != null) {
        if (typeof charactersAffine[answerIndex] === 'object') {
          charactersAffine[answerIndex].forEach((currCharacter) => {
            const characterAffine = characters.find(character => character.name === currCharacter)
            characterAffine.increaseAffinity(1)
          })
        } else {
          const characterAffine = characters.find(character => character.name === charactersAffine[answerIndex])
          characterAffine.increaseAffinity(2)
        }
        setCurrentQuestion(currentQuestion + 1)
        setAnswerIndex(null)
      } else toast('Elige una opción 🥸')
    }
  }
  return (
    <>
      <ToastContainer
        position='top-center'
        transition={Flip}
        limit={3}
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        toastStyle={{
          cursor: 'url(src/assets/cursor.png), auto',
          background: 'var(--violetaOscuro)',
          userSelect: 'none',
          color: 'white',
          fontFamily: 'WebpixelBitmapBold',
          fontSize: '33px'
        }}
      />
      <BoxContainer
        minWidth='80vw'
        max-width='150vw'
        padding='0 0.6em'
        backgroundColor='var(--amarilloPastel)'
      >
        <div id='counter-question'>
          <span id='counter-current-question'>{currentQuestion + 1}</span>
          <span> / {questions.length}</span>
        </div>
        <div id='question-area'>
          <h3 className='current-question'>{question}</h3>
          {choices.length > 4
            ? (
              <div id='select-box'>
                <select
                  onChange={e => {
                    onAnswerClick(e.target.value, e.target.selectedIndex)
                  }}
                >
                  {choices.map((answer, index) => (
                    <option
                      className={answerIndex === index ? 'selected-answer' : null}
                      key={index} value={answer}
                    >
                      {answer}
                    </option>
                  ))}
                </select>
              </div>)
            : (
              <ul id='choices-area'>
                {choices.map((answer, index) => (answer.includes('assets') || answer.includes('image')
                  ? (
                    <input
                      key={index}
                      className={answerIndex === index ? 'painting-selected' : 'painting'}
                      type='image'
                      src={answer}
                      onClick={() => onAnswerClick(answer, index)}
                    />)
                  : (
                    <li
                      key={answer}
                      onClick={() => onAnswerClick(answer, index)}
                      className={answerIndex === index ? 'selected-answer' : null}
                    > {answer}
                    </li>)
                ))}
              </ul>)}
        </div>
        <input type='button' id='button-next' onClick={() => onButtonNextClick()} />
      </BoxContainer>
    </>
  )
}

export default Quizz
