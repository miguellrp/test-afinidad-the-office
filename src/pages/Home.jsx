import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAudio } from '../components/AudioContext.jsx'
import BoxContainer from '../components/BoxContainer.jsx'
import SceneRandomCouple from '../components/SceneRandomCouple.jsx'

import logoOffice from '../assets/the-office-logo.png'
import audioIcon from '../assets/audio-ico.svg'
import mutedIcon from '../assets/pause-ico.svg'
import githubIcon from '../assets/github-ico.svg'
import '../styles/index.css'
import '../styles/Home.css'

export default function Home () {
  const { playSong, audioInstance } = useAudio()
  const [songIsPlaying, setSongIsPlaying] = useState(!audioInstance.paused)

  const handlePlaySong = () => {
    playSong()
    setSongIsPlaying(!audioInstance.paused)
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
      <BoxContainer
        minWidth='330px'
        max-width='160vw'
        margin='1.6em 0 0 0'
        padding='0.6em'
        backgroundColor='var(--amarilloPastel)'
      >
        <input id='logo-office' type='image' src={logoOffice} alt='Logo de la serie The Office' />
        <SceneRandomCouple />
        <h2>¿A qué personaje eres más afín?</h2>
        <Link to='quizz'><input id='play-button' type='button' alt='Icono de empezar partida' /></Link>
      </BoxContainer>
      <footer>
        <p>Pixel characters by 👾<a href='https://pixelfigures.tumblr.com' target='_blank' rel='noreferrer'>Pixel Figures</a>👾</p>
        <p>Lofi-song by 🎵<a href='https://soundcloud.com/catacombie' target='_blank' rel='noreferrer'>catacombie</a>🎵</p>
      </footer>
    </>
  )
}
