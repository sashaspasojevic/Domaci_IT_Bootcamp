/* 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz*/

{
  console.log("---prvi zadatak ---");

  let a = [1, 2, 5, 2, 1, 8];
  let zbir = 0;
  let proizvod = 1;

  function noviNiz(a) {
    for (let i = 0; i < a.length; i++) {
      const element = a[i];
      zbir += element;
      proizvod *= element;
    }
    a.push(zbir, proizvod);

    return a;
  }

  console.log(noviNiz(a));
}

/* 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...*/
{
  console.log("---drugi zadatak ---");

  let a = [1, null, 2, undefined, NaN, 5, "", 2, 1, 8];

  function ciscenje(a) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
      const element = a[i];
      if (element) {
        b.push(element);
      }
    }
    a = [...b];
    return a;
  }

  console.log(ciscenje(a));
}

{
  // 4

  console.log("---cetvrti zadatak ---");

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("FizzBuzz");
        if (i % 7 === 0) {
          console.log("FizzBuzzZazz");
        }
      } else {
        console.log("Fizz");
      }

      if (i % 7 === 0) {
        console.log("FizzZazz");
      }
      continue;
    }
    if (i % 5 === 0) {
      if (i % 7 === 0) {
        console.log("BuzzZazz");
      } else {
        console.log("Buzz");
      }
    }

    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
    }
  }
}
{
  console.log("---peti zadatak ---");

  let x = 5;
  let y = 9;

  y = x + y;

  x = y - x;

  y = y - x;

  console.log(x, y);
}
