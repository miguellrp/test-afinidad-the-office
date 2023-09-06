import { useEffect, useState } from 'react'
import { characters } from '../characters.js'
import PixelCharacter from './PixelCharacter.jsx'

import '../styles/SceneRandomCouple.css'

export default function SceneRandomCouple () {
  const [characterOne, setCharacterOne] = useState(null)
  const [characterTwo, setCharacterTwo] = useState(null)

  useEffect(() => {
    const randomCharacterOne = getRandomCharacter()
    let randomCharacterTwo
    do { randomCharacterTwo = getRandomCharacter() } while (randomCharacterOne === randomCharacterTwo)

    setCharacterOne(randomCharacterOne)
    setCharacterTwo(randomCharacterTwo)
  }, [])

  if (!characterOne || !characterTwo) return null

  return (
    <div id='scene'>
      <div id='couple-avatars'>
        <PixelCharacter className='random-avatar' name={characterOne.name} height='100px' />
        <PixelCharacter className='random-avatar-reversed' name={characterTwo.name} height='100px' />
      </div>
    </div>
  )
}

function getRandomCharacter () {
  const getRandomIndex = () => Math.floor(Math.random() * characters.length)
  return characters[getRandomIndex()]
}
