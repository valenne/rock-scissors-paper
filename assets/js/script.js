/*
Cachipun:
0. Preguntar el nombre del jugador y dirigirse a el por nombre.
1. Preguntas, cuantas veces se quiere jugar.
2. Solicitar al usuario que eliga entre piedra, papel o tijera.
3. Entregar un mensaje de informacion, segun la eleccion del usuario y IA.
4. Entregar informacion, quien gano, perdio o empate la jugada.
5. Comenzar nuevamente desde el punto 2, cuantas veces el jugador eligio.
6. Al terminar, entregar informacion sobre victorias y derrotas, incluir %.
7. Guardar la informacion en memoria ( Storage)

*/

// solicita nombre y saluda
function nameSaludo() {
  const nombre = prompt(
    "Eres la ultima esperanza contra las maquinas, contamos contigo, \ncual es tu nombre heroe: "
  );
  // saludo al usuario
  alert(`Hola ${nombre}, nuestro salvador, vamos a jugar...`);
  return nombre;
}
// cantidad de intentos por jugar
function intentos() {
  let userTry = Number(
    prompt("El futuro depende de este juego, \ncuantas veces jugaremos: ")
  );
  return userTry;
}
// solicita jugada al usuario
function jugadaUser(nombre) {
  const userArray = ["piedra", "papel", "tijera"];
  // let userQuestion = Number(
  //   prompt(
  //     `${nombre} nuestro heroe, has tu eleccion con sabiduria entre: \n0: Piedra\n1: papel\n2: tijera`
  //   )
  // );

  let key = true;
  while (key) {
    let userQuestion = Number(
      prompt(
        `${nombre} nuestro heroe, has tu eleccion con sabiduria entre: \n0: Piedra\n1: papel\n2: tijera`
      )
    );
    if (userQuestion < 0) {
      alert(
        "Nuestro heroe, ingresaste un numero negativo, intentalo otra vez..."
      );
      continue;
    } else if (userQuestion > 2) {
      alert(
        "Nuestro heroe, ingresaste un numero sobre 2, intentalo otra vez ..."
      );
      continue;
    } else {
      alert("Tu eleccion es correcta...");
      return userArray[userQuestion];
      key = false;
    }
  }
  // let userChoice = userArray[userQuestion];
  // return userChoice;
}
// define jugada de la IA
function jugadaIa() {
  // jugada random de la ia
  const iaArray = ["piedra", "papel", "tijera"];
  let iaChoice = iaArray[Math.floor(Math.random() * iaArray.length)];
  return iaChoice;
}
// resumen de las jugadas user vs ia
function jugadasUserIa(nameSaludo, jugadaUser, jugadaIa) {
  // informa de las jugadas realizadas
  alert(`${nameSaludo} eligio ${jugadaUser}, la Maquina eligio ${jugadaIa}`);
}
// juego
function game(userChoice, iaChoice, nombre) {
  if (userChoice == iaChoice) {
    alert("Empataron!!!!!!!");
    return "tie";
  } else if (userChoice == "tijera" && iaChoice == "papel") {
    alert(
      `Felicidades ${nombre} gana!!!!!!, ${userChoice} le gana a ${iaChoice}`
    );
    return "win";
  } else if (userChoice == "papel" && iaChoice == "piedra") {
    alert(
      `Felicidades ${nombre} gana!!!!!!, ${userChoice} le gana a ${iaChoice}`
    );
    return "win";
  } else if (userChoice == "piedra" && iaChoice == "tijera") {
    alert(
      `Felicidades ${nombre} gana!!!!!!, ${userChoice} le gana a ${iaChoice}`
    );
    return "win";
  } else {
    alert(`Perdiste ${nombre} !!!!!!, ${iaChoice} le gana a ${userChoice}`);
    return "loss";
  }
}

function resFinales(win, loss, tie, nombre) {
  if (tie > win && tie > loss && win > loss) {
    let res = Math.round((win / (loss + tie + win)) * 100, 2);
    alert(
      `${nombre} nuestro salvador, con un ${res}% ha ganado la batalla, la humanidad tiene el futuro asegurado!!!!`
    );
  } else if (tie > win && tie > loss && loss > win) {
    let res = Math.round((loss / (win + tie + loss)) * 100, 2);

    alert(
      `La Maquina gana, el % de victoria es de ${res}%, los robots nos dominaran!!!!`
    );
  } else if (win > loss) {
    let res = Math.round((win / (loss + tie + win)) * 100);

    alert(
      `${nombre} nuestro salvador, con un ${res}% ha ganado la batalla, la humanidad tiene el futuro asegurado!!!!`
    );
  } else if (loss > win) {
    let res = Math.round((loss / (win + tie + loss)) * 100, 2);

    alert(
      `La Maquina gana, el % de victoria es de ${res}%, los robots nos dominaran!!!!`
    );
  } else {
    alert("Tenemos un empate..... que nos deparara el futuro....");
  }
}

// comenzar el juego

const btnClick = document.getElementById("boton");
btnClick.addEventListener("click", () => {
  let userNombre = nameSaludo();
  let userIntentos = intentos();

  // bucle
  let i = 0;
  let win = 0;
  let loss = 0;
  let tie = 0;

  while (i < userIntentos) {
    let userJugada = jugadaUser(userNombre);
    let iaJugada = jugadaIa();

    jugadasUserIa(userNombre, userJugada, iaJugada);

    let result = game(userJugada, iaJugada, userNombre);

    if (result == "win") {
      win = win + 1;
    } else if (result == "loss") {
      loss = loss + 1;
    } else {
      tie = tie + 1;
    }
    i++;
  }
  resFinales(win, loss, tie, userNombre);
});
