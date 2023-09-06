import { useRouteError, Link } from 'react-router-dom'
import BoxContainer from '../components/BoxContainer'

import tacita from '../assets/tacita.gif'
import '../styles/index.css'
import '../styles/ErrorPage.css'

export default function ErrorPage () {
  const error = useRouteError()
  console.error(error)

  return (
    <BoxContainer
      id='container-error'
      minWidth='40vw'
      maxWidth='140vw'
      height='72vh'
      padding='0.6em'
      backgroundColor='#f9c35f'
    >
      <Link to='/'><input id='tacita-icon' type='image' src={tacita} /></Link>
      <h1>Ups 👀</h1>
      <h3>Parece que ocurrió un error.</h3>
      <p><i>{error.statusText || error.message}</i></p>
    </BoxContainer>
  )
}
