import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAudio } from '../components/AudioContext.jsx'
import Quizz from '../components/Quizz.jsx'
import { quizzTest } from '../test.js'
import { characters } from '../characters.js'

import audioIcon from '../assets/audio-ico.svg'
import mutedIcon from '../assets/pause-ico.svg'
import githubIcon from '../assets/github-ico.svg'
import '../styles/index.css'

export default function QuizzPage () {
  const { playSong, audioInstance } = useAudio()
  const [songIsPlaying, setSongIsPlaying] = useState(!audioInstance.paused)

  const handlePlaySong = () => {
    playSong()
    setSongIsPlaying(!songIsPlaying)
  }

  return (
    <>
      <div id='icon-group'>
        <input
          className='hover-buzz-out'
          type='image'
          src={songIsPlaying ? mutedIcon : audioIcon}
          alt={songIsPlaying ? 'Icono del símbolo de pausa' : 'Icono de una nota musical'}
          onClick={handlePlaySong}
        />
        <Link to='https://github.com/miguellrp' target='_blank' rel='noreferrer'>
          <input className='hover-buzz-out' type='image' src={githubIcon} alt='Logo de GitHub' />
        </Link>
      </div>
      <Quizz questions={quizzTest.questions} characters={characters} />
    </>
  )
}
