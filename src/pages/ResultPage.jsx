import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAudio } from '../components/AudioContext.jsx'
import BoxContainer from '../components/BoxContainer.jsx'
import PixelCharacter from '../components/PixelCharacter.jsx'
import { characters, restoreCharactersStats } from '../characters.js'

import audioIcon from '../assets/audio-ico.svg'
import mutedIcon from '../assets/pause-ico.svg'
import githubIcon from '../assets/github-ico.svg'
import '../styles/index.css'
import '../styles/ResultPage.css'

export default function ResultPage () {
  const { playSong, audioInstance } = useAudio()
  const [songIsPlaying, setSongIsPlaying] = useState(!audioInstance.paused)

  const handlePlaySong = () => {
    playSong()
    setSongIsPlaying(!audioInstance.paused)
  }

  const maxAffinity = Math.max.apply(Math, characters.map((character) => { return character.affinity }))
  const characterMoreAffine = characters.find(character => character.affinity === maxAffinity)
  const wikiPage = 'https://theoffice.fandom.com/wiki/' + characterMoreAffine.name.replace(/\s/, '_')

  function handleOnClick () {
    restoreCharactersStats()
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
        <Link to='https://github.com/miguellrp' target='_blank'>
          <input className='hover-buzz-out' type='image' src={githubIcon} alt='Logo de GitHub' />
        </Link>
      </div>
      <BoxContainer
        minWidth='45vw'
        max-width='150vw'
        padding='0 0.6em'
        backgroundColor='var(--rosaPastel)'
      >
        <h2>El personaje más afín a ti es...</h2>
        <Link to={wikiPage} target='_blank'><PixelCharacter className='character-pixel' name={characterMoreAffine.name} height='210px' /></Link>
        <h1>{characterMoreAffine.name}</h1>
        <Link to='/'>
          <input type='button' className='home-ico' onClick={handleOnClick} />
        </Link>
      </BoxContainer>
    </>
  )
}
