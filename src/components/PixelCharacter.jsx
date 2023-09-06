import andyAvatar from '../assets/characters/AndyBernard.png'
import angelaAvatar from '../assets/characters/AngelaMartin.png'
import creedAvatar from '../assets/characters/CreedBratton.png'
import darrylAvatar from '../assets/characters/DarrylPhilbin.png'
import dwightAvatar from '../assets/characters/DwightSchrute.png'
import erinAvatar from '../assets/characters/ErinHannon.png'
import gabeAvatar from '../assets/characters/GabeLewis.png'
import janAvatar from '../assets/characters/JanLevinson.png'
import jimAvatar from '../assets/characters/JimHalpert.png'
import kellyAvatar from '../assets/characters/KellyKapoor.png'
import kevinAvatar from '../assets/characters/KevinMalone.png'
import meredithAvatar from '../assets/characters/MeredithPalmer.png'
import michaelAvatar from '../assets/characters/MichaelScott.png'
import oscarAvatar from '../assets/characters/OscarMartínez.png'
import pamAvatar from '../assets/characters/PamBeesley.png'
import phyllisAvatar from '../assets/characters/PhyllisVance.png'
import royAvatar from '../assets/characters/RoyAnderson.png'
import ryanAvatar from '../assets/characters/RyanHoward.png'
import stanleyAvatar from '../assets/characters/StanleyHudson.png'
import tobyAvatar from '../assets/characters/TobyFlenderson.png'

const charactersAvatars = {
  'Andy Bernard': andyAvatar,
  'Angela Martin': angelaAvatar,
  'Creed Bratton': creedAvatar,
  'Darryl Philbin': darrylAvatar,
  'Dwight Schrute': dwightAvatar,
  'Erin Hannon': erinAvatar,
  'Gabe Lewis': gabeAvatar,
  'Jan Levinson': janAvatar,
  'Jim Halpert': jimAvatar,
  'Kelly Kapoor': kellyAvatar,
  'Kevin Malone': kevinAvatar,
  'Meredith Palmer': meredithAvatar,
  'Michael Scott': michaelAvatar,
  'Oscar Martínez': oscarAvatar,
  'Pam Beesley': pamAvatar,
  'Phyllis Vance': phyllisAvatar,
  'Roy Anderson': royAvatar,
  'Ryan Howard': ryanAvatar,
  'Stanley Hudson': stanleyAvatar,
  'Toby Flenderson': tobyAvatar
}

export default function PixelCharacter ({ className, name, height }) {
  const avatar = charactersAvatars[name]
  const textAlt = 'Personaje píxel de ' + name

  return <input type='image' className={className} src={avatar} alt={textAlt} height={height} />
}
