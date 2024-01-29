//Creador de Nombres de Bandas Aleatorios:
// Instrucciones: Escribe una función que genere nombres de bandas aleatorios y únicos cada vez que se llama. Puedes combinar palabras inusuales,
//colores extravagantes y animales exóticos para hacerlos sonar realmente interesantes.

function palabrasInusuales() {
    let numberPalabras = Math.floor(Math.random() * 4) + 1

    if (numberPalabras === 1) {
        return 'Nebulosa'
    } else if (numberPalabras === 2) {
        return 'Paradoja'
    } else if (numberPalabras === 3) {
        return 'Luminiscencia'
    } else {
        return 'Helio'
    }
}

function adjetivos() {
    let numberAdjetivos = Math.floor(Math.random() * 4) + 1

    if (numberAdjetivos === 1) {
        return 'Intensa'
    } else if (numberAdjetivos === 2) {
        return 'Rabiosa'
    } else if (numberAdjetivos === 3) {
        return 'Melódico'
    } else {
        return 'Cósmico'
    }
}

function randomBandName() {
    return palabrasInusuales() + ' ' + adjetivos()
}


console.log(randomBandName())

//Conversor de Emociones a Emoji:
//● Instrucciones: Crea una función que tome una cadena de texto que exprese emociones(como "feliz", "triste", "sorprendido") y la convierta en un emoji
//correspondiente. ¡Añade una dosis de humor a tus emociones!

function conversorDeEmociones(emociones) {
    emociones = emociones.toLowerCase();

    if (emociones === 'feliz' || emociones === 'alegre' || emociones === 'contento') {
        return '😀🙂😎'
    }
    else if (emociones === 'triste' || emociones === 'melancolico' || emociones === 'abatido') {
        return '😿😭🥹'
    }
    else if (emociones === 'enamorado' || emociones === 'flechado' || emociones === 'embelesado') {
        return '😻🥰'
    }
    else if (emociones === 'enojado' || emociones === 'irritado' || emociones === 'furioso') {
        return '😠😡🤬'
    } else { return 'lo siento no conozco esa emoción 😢¡Prueba con feliz, alegre, contento, triste, melancolico, abatido, enamorado, flechado, embelesado, enojado, irritado o furioso !🙂' }
}

let emocionUsuario = 'enojado'
let emocionEmoji = conversorDeEmociones(emocionUsuario);
console.log(emocionEmoji);

//Generador de Historias Absurdas:
//● Instrucciones: Desarrolla una función que genere historias absurdas combinando elementos inesperados, como pingüinos que hablan francés, robots enamorados
//de plantas y astronautas perdidos en el espacio con una mascota alienígena.

function nombrePueblo() {
    let numberPueblo = Math.floor(Math.random() * 4)
    if (numberPueblo === 0) {
        return 'Alegrocia'
    } else if (numberPueblo === 1) {
        return 'Raritópolis'
    } else if (numberPueblo === 2) {
        return 'Disparatopia'
    } else {
        return 'Extravaganciaville'
    }
}

function animalesPlural() {
    let numberAnimales = Math.floor(Math.random() * 4)
    if (numberAnimales === 0) {
        return 'Hipopótamos'
    } else if (numberAnimales === 1) {
        return 'Gorilas'
    } else if (numberAnimales === 2) {
        return 'castores'
    } else {
        return 'Canguros'
    }
}

function adjetivos() {
    let numberAdjetivos = Math.floor(Math.random() * 4)

    if (numberAdjetivos === 0) {
        return 'Bailarines'
    } else if (numberAdjetivos === 1) {
        return 'Fisicocultutistas'
    } else if (numberAdjetivos === 2) {
        return 'Raperos'
    } else {
        return 'Drogadictos'
    }
}

function animalPluralAdjetivos() {
    return animalesPlural() + ' ' + adjetivos()
}

function nombreGranjero() {
    let numberGranjero = Math.floor(Math.random() * 4)
    if (numberGranjero === 0) {
        return 'Carlos'
    } else if (numberGranjero === 1) {
        return 'Roberto'
    } else if (numberGranjero === 2) {
        return 'Pepito'
    } else {
        return 'Ruperto'
    }
}

function objetoEstrafalario() {
    let numberObjeto = Math.floor(Math.random() * 4)
    if (numberObjeto === 0) {
        return 'Zapatos Saltarines	'
    } else if (numberObjeto === 1) {
        return 'Peluca de Colores Cambiantes'
    } else if (numberObjeto === 2) {
        return 'Falta de higiene'
    } else {
        return 'Falta de desodorante'
    }
}



function animalPluralCeloso() {
    let numberAnimales = Math.floor(Math.random() * 4)
    if (numberAnimales === 0) {
        return 'Rinocerontes'
    } else if (numberAnimales === 1) {
        return 'Gorilas'
    } else if (numberAnimales === 2) {
        return 'Lagartijas'
    } else {
        return 'Tigres'
    }
}

function adjetivosAnimalesCelosos() {
    let numberAdjetivos = Math.floor(Math.random() * 4)

    if (numberAdjetivos === 0) {
        return 'Bailarines'
    } else if (numberAdjetivos === 1) {
        return 'Fisicocultutistas'
    } else if (numberAdjetivos === 2) {
        return 'Raperos'
    } else {
        return 'Drogadictos'
    }
}

function animalPluralCelosoAdjetivo() {
    return animalPluralCeloso() + ' ' + adjetivosAnimalesCelosos()
}

function animalIndividual() {
    let numberAnimalIndividual = Math.floor(Math.random() * 4)
    if (numberAnimalIndividual === 0) {
        return 'tigre de bengala'
    } else if (numberAnimalIndividual === 1) {
        return 'gato'
    } else if (numberAnimalIndividual === 2) {
        return 'perro'
    } else {
        return 'rinoceronte albino'
    }
}


function nombreGranja() {
    let numberGranja = Math.floor(Math.random() * 4)
    if (numberGranja === 0) {
        return 'Rancho Horizonte'
    } else if (numberGranja === 1) {
        return 'Huerto Chispeante'
    } else if (numberGranja === 2) {
        return 'Finca La Sierra'
    } else {
        return 'Rancho de la Paz eterna'
    }
}


function historiasAbsurdas() {
    return 'En el pequeño pueblo de ' + nombrePueblo() + ', algo increíble sucedió. Un grupo de ' + animalPluralAdjetivos() + ' del granjero ' + nombreGranjero() + ', conocido por su ' + objetoEstrafalario() + ', se volvieron repentinamente expertos bailarines. Las noticias de este sorprendente suceso se extendieron rápidamente, convirtiendo a ' + nombrePueblo() + ' en un destino turístico. Organizaron un festival para celebrar, y todos querían ser parte de la acción. El grupo de Animales demostraron sus sorprendentes habilidades de baile, pero pronto, los ' + animalPluralCelosoAdjetivo() + ' del pueblo vecino intentaron robar el espectáculo. En medio de la competencia, un ' + animalIndividual() + ' llamado Jack realizó un truco tan impresionante que los ' + animalPluralAdjetivos() + ' decidieron unirse a él. La celebración alcanzó su punto máximo cuando las Gallinas del rancho cercano formaron una banda de música country.El granjero, asombrado, decidió convertir su granja en un lugar de celebración llamado ' + nombreGranja() + ' de las Maravillas. ' +'El pueblo se convirtió en un fenómeno mundial, demostrando que las cosas más extraordinarias surgen de la combinación más inesperada de elementos.'

}

console.log(historiasAbsurdas())

//Simulador de Viaje en el Tiempo Musical:
//● Instrucciones: Escribe una función que, dado un año, devuelva una recomendación de canciones populares de esa época.Puedes mezclar diferentes géneros
//y hacer recomendaciones basadas en eventos históricos de ese año.

function mejoresCanciones(userInput){
    let array1995=[
        'Stairway to Heaven - Led Zeppelin' ,
        'Bohemian Rhapsody - Queen' ,
        'Like a Rolling Stone - Bob Dylan' ,
        'Hotel California - Eagles',
        'Imagine - John Lennon' ,
        'Smells Like Teen Spirit - Nirvana',
        'Sweet Child o Mine - Guns N Roses',
    ]

    let array2000=[
        '"Toxic" - Britney Spears',
        '"Clocks" - Coldplay',
        '"Bad Romance" - Lady Gaga',
        '"Hips Dont Lie" - Shakira feat. Wyclef Jean',
        '"Crazy in Love" - Beyoncé feat. Jay-Z',
        '"Mr. Brightside" - The Killers',
        '"I Kissed a Girl" - Katy Perry',
        '"In the End" - Linkin Park',
    ]

    let newbies=[
        '"Stay" - The Kid LAROI & Justin Bieber',
        '"Good 4 U" - Olivia Rodrigo',
        '"Levitating" - Dua Lipa ft. DaBaby',
        '"Montero (Call Me By Your Name)" - Lil Nas X',
        '"Kiss Me More" - Doja Cat ft. SZA',
    ]
    if(userInput>1965 && userInput< 2000){
        return array1995
    } else if( userInput>=2000 && userInput<=2010){
        return array2000
    }else{
        return newbies
    }
}

let userChoice= 1995;
console.log(mejoresCanciones(userChoice))


//Creador de Recetas Culinarias del Futuro:
//● Instrucciones: Escribe una función que genere recetas culinarias futuristas combinando ingredientes inusuales y técnicas de cocina avanzadas. ¡Haz
//que la comida del futuro sea emocionante y deliciosa!

function seleccionarAleatoriamente(lista) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}

function generarRecetaFuturista() {

    const ingredientesInusuales = ["Algas lumínicas", "Polvo de estrellas", "Hidroelocidad líquida", "Cristales de fuego", "Nanofrutas"];

    const tecnicasAvanzadas = ["Desfragmentación molecular", "Impresión 3D culinaria", "Cocción con láser cuántico", "Fermentación antigravedad", "Criogenización instantánea"];

    const ingredientePrincipal = seleccionarAleatoriamente(ingredientesInusuales);
    const ingredienteSecundario = seleccionarAleatoriamente(ingredientesInusuales);
    const tecnicaCulinaria = seleccionarAleatoriamente(tecnicasAvanzadas);

    const recetaFuturista = `Plato del Futuro: ${ingredientePrincipal} con ${ingredienteSecundario} utilizando la técnica de ${tecnicaCulinaria}`;

    return recetaFuturista;
}

const recetaDelFuturo = generarRecetaFuturista();
console.log(recetaDelFuturo);



//Generador de Planetas Fantásticos:
//● Instrucciones: Escribe una función que genere nombres y características únicas para planetas imaginarios.Combina elementos como colores, elementos
//químicos y fenómenos cósmicos para crear mundos asombrosos.

function nombrePlaneta() {
    let numberPlaneta = Math.floor(Math.random() * 4)
    if (numberPlaneta === 0) {
        return 'Novasfera'
    } else if (numberPlaneta === 1) {
        return 'Galaxion'
    } else if (numberPlaneta === 2) {
        return 'Astrolyn'
    } else {
        return 'Lunaris Alpha'
    }
}

function caracteristicas(){
    let numberCaracterisitca = Math.floor(Math.random() * 4)
    if (numberCaracterisitca === 0) {
        return 'Un planeta cuya superficie cambia de color constantemente debido a cristales mágicos que reaccionan a la luz estelar'
    } else if (numberCaracterisitca === 1) {
        return 'Un mundo donde las auroras danzan perpetuamente en un cielo de tonos púrpuras y verdes, alimentadas por corrientes de partículas mágicas.'
    } else if (numberCaracterisitca === 2) {
        return 'Un mundo donde los océanos están formados por un líquido resplandeciente que contiene partículas de fuego, creando mares que arden con llamas eternas.'
    } else {
        return 'Un planeta donde los elementos químicos en la atmósfera crean efectos visuales hipnóticos, desde lluvias de destellos hasta arcoíris de neblina al amanecer.'
    }
}

function planetasFantasticos(){
    return nombrePlaneta()+':'+' '+caracteristicas();
}

console.log(planetasFantasticos())
