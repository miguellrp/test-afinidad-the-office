class Character {
  name
  avatar
  affinity

  constructor (name, avatar) {
    this.name = name
    this.avatar = avatar
    this.affinity = 0
  }

  increaseAffinity (points) {
    this.affinity += points
  }
}

export function restoreCharactersStats () {
  characters.forEach(function (character) { character.affinity = 0 })
}

const pathAvatar = (nameCharacter) => 'src/images/characters/' + nameCharacter + '.png'

export const characters = [
  new Character('Michael Scott', pathAvatar('MichaelScott')), // 0, 1a, 4d, 6a, 10b, 13 == 8(2)
  new Character('Pam Beesley', pathAvatar('PamBeesley')), // 0, 1, 4c, 6b, 10 == 8(3)
  new Character('Dwight Schrute', pathAvatar('DwightSchrute')), // 1e, 3g, 8, 10, 13 == 8(3)
  new Character('Jim Halpert', pathAvatar('JimHalpert')), // 4b, 5d, 8a, 9, 11 == 7(2)
  new Character('Ryan Howard', pathAvatar('RyanHoward')), // 1, 2a, 4b, 6d, 10 == 7(2)
  new Character('Kevin Malone', pathAvatar('KevinMalone')), // 3a, 5, 8d, 10, 13 == 8(3)
  new Character('Meredith Palmer', pathAvatar('MeredithPalmer')), // 1f, 3g, 6a, 7, 8d, 10 == 8(2)
  new Character('Darryl Philbin', pathAvatar('DarrylPhilbin')), // 1b, 4b, 5c, 6c, 8a, 11 == 7(1)
  new Character('Angela Martin', pathAvatar('AngelaMartin')), // 0, 1e, 2, 6d, 10 == 8(3)
  new Character('Oscar Martínez', pathAvatar('OscarMartínez')), // 1g, 3b, 4a, 6d, 9, 12 == 8(2)
  new Character('Kelly Kapoor', pathAvatar('KellyKapoor')), // 1a, 4a, 6d, 7, 10a, 12 == 8(2)
  new Character('Stanley Hudson', pathAvatar('StanleyHudson')), // 1b, 4b, 7, 8c, 12 == 7(2)
  new Character('Andy Bernard', pathAvatar('AndyBernard')), // 1a, 4a, 5d, 6a, 10 == 6(1)
  new Character('Creed Bratton', pathAvatar('CreedBratton')), // 0, 1h, 5d, 6c, 10 == 7(2)
  new Character('Phyllis Vance', pathAvatar('PhyllisVance')), // 1b, 2, 3b, 4d, 11 == 7(2)
  new Character('Toby Flenderson', pathAvatar('TobyFlenderson')), // 3a, 4c, 6d, 7, 9 == 7(2)
  new Character('Erin Hannon', pathAvatar('ErinHannon')), // 1f, 3g, 4a, 6a, 9, 10b == 7(1)
  new Character('Jan Levinson', pathAvatar('JanLevinson')), // 3, 4b, 6b, 10a, 11 == 7(2)
  new Character('Gabe Lewis', pathAvatar('GabeLewis')), // 1g, 2, 4c, 5, 13 == 8(3)
  new Character('Roy Anderson', pathAvatar('RoyAnderson')) // 1, 2a, 4b, 5c, 8c, 12 == 8(2)
]
