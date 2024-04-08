function numberAge(number, name) {
  if (number > 18) {
    console.log("Hola" + name + ", eres mayor de edad");
  } else {
    console.log("Hola " + name + ", eres menor de edad");
  }
}

numberAge(9, "Olga");

function greaterNumber(numberA, numberB) {
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
}

function numberValue(number) {
  if (number > 0) {
    console.log(number + " es positivo");
  } else if (number === 0) {
    console.log(number + " es cero");
  } else {
    console.log(number + " es negativo");
  }
}

numberValue(0);

greaterNumber(1, 10);

function calificationAverage(numberA, numberB, numberC) {
  if ((numberA + numberB + numberC) / 3 < 5) {
    console.log("Suspenso");
  } else if (
    (numberA + numberB + numberC) / 3 > 5 &&
    (numberA + numberB + numberC) / 3 < 8
  ) {
    console.log("Aprobado");
  } else {
    console.log("Matrícula de Honor");
  }
}

calificationAverage(9, 9, 9);

function threeNumbers(numberA, numberB, numberC) {
  if (numberA > numberB && numberA > numberC) {
    console.log(numberA);
  } else if (numberB > numberA && numberB > numberC) {
    console.log(numberB);
  } else {
    console.log(numberC);
  }
}

threeNumbers(8, 24, 1);

function laLaLa(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(number + " es divisible por 3 y por 5");
  } else if (number % 3 === 0) {
    console.log(number + " es divisible por 3");
  } else if (number % 5 === 0) {
    console.log(number + " es divisible por 5");
  } else {
    console.log(number);
  }
}

laLaLa(11);

function pareNone(number) {
  if (number % 2 === 0) {
    console.log(number + " es un número par");
  } else {
    console.log(number + " es un número impar");
  }
}

pareNone(7);

function leapYear(number) {
  if ((number % 4 === 0 && number % 100 > 0) || number % 400 === 0) {
    console.log(number + " es un año bisiesto");
  } else {
    console.log(number + " no es un año bisisesto");
  }
}

leapYear(2003);
