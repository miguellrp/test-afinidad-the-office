import paintingOne from './assets/paintings/ElCaballeroDeLaManoEnElPecho.jpg'
import paintingTwo from './assets/paintings/RetratoAdeleBloch.jpg'
import paintingThree from './assets/paintings/ArtistinMarcella.jpg'
import paintingFour from './assets/paintings/ToKnowHimIsToLoveHim.jpg'

import paletteOne from './assets/palette-options/palette-opt0.jpg'
import paletteTwo from './assets/palette-options/palette-opt1.jpg'
import paletteThree from './assets/palette-options/palette-opt2.jpg'
import paletteFour from './assets/palette-options/palette-opt3.jpg'

export const quizzTest = {
  questions: [
    {
      question: // 0
        '¿Qué sería lo primero que se te vendría a la mente a la hora de dibujar frente a una hoja en blanco?',
      choices:
        [
          'Un árbol con una casita para un ruiseñor.',
          'Un caramelo muy vistoso encima de una tortuga no tan vistosa.',
          'Un gato callejero compungido y con sombrero de cantante de jazz.',
          'Un ramo de azaleas dispuesto en una jarra victoriana.'
        ],
      charactersAffine:
        [
          'Michael Scott',
          'Creed Bratton',
          'Angela Martin',
          'Pam Beesley'
        ]
    },
    {
      question: // 1
        '¿Cuál de estos géneros musicales sueles escuchar más a menudo?',
      choices:
        [
          'Pop',
          'Funk/Soul',
          'House/Electrónica',
          'Indie',
          'Clásica/Orquestal',
          'Techno/Trance',
          'LoFi',
          'Rap/Trap'
        ],
      charactersAffine:
        [
          ['Michael Scott', 'Kelly Kapoor', 'Andy Bernard'],
          ['Darryl Philbin', 'Phyllis Vance', 'Stanley Hudson'],
          'Ryan Howard',
          'Pam Beesley',
          ['Dwight Schrute', 'Angela Martin'],
          ['Meredith Palmer', 'Erin Hannon'],
          ['Gabe Lewis', 'Oscar Martínez'],
          'Roy Anderson'
        ]
    },
    {
      question: // 2
        'Conseguiste ahorrar una pequeña cantidad para invertirla en la renovación de uno de tus viejos electrodomésticos. ¿Cuál será el elegido?',
      choices:
        [
          'La vieja cafetera que deja los cafés muy aguados.',
          'La vieja lavadora que, por alguna razón, siempre deja la costura de alguna prenda deshilachada.',
          'La vieja nevera que enfría, pero no tanto.',
          'El viejo horno que tiene una pequeña grieta en la puerta, ¿y si mañana explota?'
        ],
      charactersAffine:
        [
          ['Roy Anderson', 'Ryan Howard'],
          'Angela Martin',
          'Phyllis Vance',
          'Gabe Lewis'
        ]
    },
    {
      question: // 3
        'Metes las monedas para coger una cosa que te apetecía bastante de una máquina dispensadora, pero parece que se las tragó sin devolverte nada a cambio...',
      choices:
        [
          'Sigo con mi vida, peores cosas me han pasado.',
          'Doy unos golpecillos a ver si escupe algo...',
          'Acudes a alguien cercano con el fin de informarte de quien es la persona responsable de la máquina. Los conflictos han de resolverse a través del diálogo.',
          'Apalizas a la máquina hasta recuperar lo que es tuyo.'
        ],
      charactersAffine:
        [
          ['Toby Flenderson', 'Kevin Malone'],
          ['Oscar Martínez', 'Phyllis Vance'],
          'Jan Levinson',
          ['Erin Hannon', 'Meredith Palmer', 'Dwight Schrute']
        ]
    },
    {
      question: // 4
        '¿Cuál es tu estación favorita del año?',
      choices:
        [
          'Primavera',
          'Verano',
          'Otoño',
          'Invierno'
        ],
      charactersAffine:
        [
          ['Kelly Kapoor', 'Andy Bernard', 'Erin Hannon', 'Oscar Martínez'],
          ['Roy Anderson', 'Darryl Philbin', 'Ryan Howard', 'Stanley Hudson', 'Jim Halpert', 'Jan Levinson'],
          ['Pam Beesley', 'Gabe Lewis', 'Toby Flenderson'],
          ['Michael Scott', 'Phyllis Vance']
        ]
    },
    {
      question: // 5
        '¿Cuál de los siguientes instrumentos te gustaría dominar?',
      choices:
        [
          'Batería',
          'Theremín',
          'Piano',
          'Guitarra española'
        ],
      charactersAffine:
        [
          'Kevin Malone',
          'Gabe Lewis',
          ['Darryl Philbin', 'Roy Anderson'],
          ['Andy Bernard', 'Creed Bratton', 'Jim Halpert']
        ]
    },
    {
      question: // 6
        '¿Y en cuál de las siguientes ramas artísticas te gustaría especializarte?',
      choices:
        [
          'Artes escénicas',
          'Pintura',
          'Música',
          'Literatura'
        ],
      charactersAffine:
        [
          ['Michael Scott', 'Andy Bernard', 'Erin Hannon', 'Meredith Palmer'],
          ['Pam Beesley', 'Jan Levinson'],
          ['Creed Bratton', 'Darryl Philbin'],
          ['Toby Flenderson', 'Ryan Howard', 'Angela Martin', 'Oscar Martínez', 'Kelly Kapoor']
        ]
    },
    {
      question: // 7
        'De las siguientes pinturas, escoge aquella que estea más impregnada de ti:',
      choices:
        [
          paintingOne,
          paintingTwo,
          paintingThree,
          paintingFour
        ],
      charactersAffine:
        [
          'Toby Flenderson',
          'Kelly Kapoor',
          'Stanley Hudson',
          'Meredith Palmer'
        ]
    },
    {
      question: // 8
        'Te disponías a volver a casa cuando te enteras que se organizó una reunión para esta misma tarde sin hora de cierre...',
      choices:
        [
          'Aunque no te agrade este cambio a última hora, decides asistir a la reunión y te aseguras de expresar tus opiniones y pensamientos de manera directa y concisa, con la esperanza de hacerla más productiva y, quizás así, terminarla antes de lo esperado.',
          'Muestras indiferencia y, aunque asistes, mantienes un perfil bajo, esperando que termine pronto para continuar con tus planes.',
          'La comida del descanso de hoy puede esperar. Te preparas con el poco tiempo que te queda, llevas una carpeta llena de ideas y te sientas al frente, list@ para participar y mostrar tu gran responsabilidad (y ya de paso ganar algunos puntos) para con la empresa.',
          'Te quejas sobre la reunión, pero esperas con cierta picardía que alguien traiga algún aperitivo/postrecillo para hacer la tarde más salada/dulce.'
        ],
      charactersAffine:
        [
          ['Darryl Philbin', 'Jim Halpert'],
          'Dwight Schrute',
          ['Stanley Hudson', 'Roy Anderson'],
          ['Kevin Malone', 'Meredith Palmer']
        ]
    },
    {
      question: // 9
        'De entre las parejas de colores disponibles, ¿cuál sería a la que más uso darías para vestir de oficina?',
      choices:
        [
          paletteOne,
          paletteTwo,
          paletteThree,
          paletteFour
        ],
      charactersAffine:
        [
          'Toby Flenderson',
          'Erin Hannon',
          'Oscar Martínez',
          'Jim Halpert'
        ]
    },
    {
      question: // 10
        '¿Qué campo te atrae más?',
      choices:
        [
          'Astrología',
          'Ludología',
          'Psicología',
          'Filosofía',
          'Biología',
          'Economía',
          'Musicología',
          'Gastronomía',
          'Historia del Arte',
          'Enología'
        ],
      charactersAffine:
        [
          ['Kelly Kapoor', 'Jan Levinson'],
          ['Michael Scott', 'Erin Hannon'],
          'Dwight Schrute',
          'Creed Bratton',
          'Angela Martin',
          'Ryan Howard',
          'Andy Bernard',
          'Kevin Malone',
          'Pam Beesley',
          'Meredith Palmer'
        ]
    },
    {
      question: // 11
        'De los siguientes deportes, ¿cuál te atrae más para practicar?',
      choices:
        [
          'Softball',
          'Marcha rápida',
          'Yoga/Pilates',
          'Baloncesto'
        ],
      charactersAffine:
        [
          'Darryl Philbin',
          'Phyllis Vance',
          'Jan Levinson',
          'Jim Halpert'
        ]
    },
    {
      question: // 12
        'Si formases parte de un mobiliario de oficina, ¿cuál de estos muebles serías?',
      choices:
        [
          'Un tablero de corcho lleno de notas coloridas, fotos y recordatorios.',
          'Un escritorio de madera con separadores etiquetados y cajones ordenados.',
          'Una silla de escritorio reclinable.',
          'Una estantería industrial.'
        ],
      charactersAffine:
        [
          'Kelly Kapoor',
          'Oscar Martínez',
          'Stanley Hudson',
          'Roy Anderson'
        ]
    },
    {
      question: // 13
        'Y, ya para finalizar, ¿qué tipo de personaje serías en una obra de teatro infantil?',
      choices:
        [
          'La reina torpe pero bienintencionada de un reino lejano, que siempre busca el bienestar de sus habitantes.',
          'El guardián serio y rígido de un bosque mágico, que tiene sus reglas estrictas para proteger la tierra y los animales.',
          'El amable y despistado posadero del pueblo que siempre tiene una sonrisa en su rostro y una jarra de su "famosa sopa" lista para cualquiera que entre por su puerta.',
          'La bibliotecaria de la torre encantada, que conoce todos los hechizos y cuentos del reino, pero a menudo es demasiado tímida para compartirlos.'
        ],
      charactersAffine:
        [
          'Michael Scott',
          'Dwight Schrute',
          'Kevin Malone',
          'Gabe Lewis'
        ]
    }
  ]
}
