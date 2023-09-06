/* global Audio */
import React, { useContext } from 'react'

// eslint-disable-next-line import/no-absolute-path
import lofiSound from '/lofi-the-office.ogg' // autorship: catacombie -> https://soundcloud.com/catacombie/office-lofi-1-mixed

const AudioContext = React.createContext()

export function useAudio () {
  return useContext(AudioContext)
}

export function AudioProvider ({ children }) {
  const audioInstance = new Audio(lofiSound)
  audioInstance.loop = true

  const playSong = async () => {
    if (audioInstance.paused) {
      audioInstance.play().catch(error => {
        console.error('Error al intentar reproducir el audio:', error)
      })
    } else {
      audioInstance.pause()
    }
  }

  return (
    <AudioContext.Provider value={{ playSong, audioInstance }}>
      {children}
    </AudioContext.Provider>
  )
}
