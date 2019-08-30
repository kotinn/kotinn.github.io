import React from "react";

let divObrazki = []; //src do obrazkow
let iloscObrazkow = 0;
let wszystkieObrazki = [
  <div class="form-check-inline">
    <label class="form-check-label" for="radio1">
      <input
        type="radio"
        class="form-check-input"
        id="radio1"
        name="canvasprawywybor"
        value="img/1.jpg"
        alt="canvaslewewybor"
        onClick="okokrok(this.value,this.alt,this.name)"
      />
      <img src="img/1s.jpg" alt="Obrazek" />
    </label>
  </div>
];
//divs obrazki male

//-----------------sprawdza ilosc obrazkow o numeracji 1,2,3,4 .. 11,12,13 .. max 50 ! ----

function doesFileExist(urlToFile) {
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", urlToFile, false);
  xhr.send();

  if (xhr.status == "404") {
    console.log("Obrazki do=  " + urlToFile);
    return false;
  } else {
    // console.log("File exists " + urlToFile);
    return true;
  }
}

for (let i = 1; i < 50; i++) {
  if (doesFileExist("img/" + i + ".jpg")) {
    i--;
    divObrazki[i] = toString("img/" + i + ".jpg");
    i++;
  } else {
    iloscObrazkow = i - 1;
    console.log(iloscObrazkow);
    i = 50;
  }
}

console.log("ku" + wszystkieObrazki[0]);

//----------------- JSX tworzymi objekty radiobox dla kazdego obrazka mini img ma byc 1s.jpg, 2.jpg .. ----

function handleClick(imag) {
  //let imag =this.value;
  let idcan = "canvasprawywybor";
  let idcan2 = "canvaslewewybor";
  let obrazek = imag;
  let example = document.getElementById(idcan),
    ctx = example.getContext("2d"), // Контекст
    pic = new Image(); // "Создаём" изображение
  pic.src = imag; // Источник изображения, позаимствовано на хабре
  pic.onload = function() {
    // Событие onLoad, ждём момента пока загрузится изображение
    ctx.drawImage(pic, 0, 0); // Рисуем изображение от точки с координатами 0, 0
    let example2 = document.getElementById(idcan2),
      ctx2 = example2.getContext("2d"), // Контекст
      pic2 = new Image(); // "Создаём" изображение
    pic2.src = imag; // Источник изображения, позаимствовано на хабре
    pic2.onload = function() {
      // Событие onLoad, ждём момента пока загрузится изображение
      ctx2.drawImage(pic2, -170, 0); // Рисуем изображение от точки с координатами 0, 0
    };

    console.log("Krok 1. Wybrano obrazek: " + obrazek);
  };
}
/*

for (let i = 1; i < iloscObrazkow + 2; i++) {
  wszystkieObrazki[1] = (
    <div class="form-check-inline">
      <label class="form-check-label" for="radio{i/}">
        <input
          type="radio"
          class="form-check-input"
          id="radio{i}"
          name="canvasprawywybor"
          value="img/{i}.jpg"
          alt="canvaslewewybor"
          onClick={this.handleClick()}
        />
        <img src="img/{i}s.jpg" alt="Obrazek" />
      </label>
    </div>
  );
} */
//wszystkieObrazki = wszystkieObrazki.toHtmlObject;
console.log("ka" + wszystkieObrazki[0]);

function createDiv() {
  let obrazki = [];

  // Outer loop to create parent
  //let children = [];
  //Inner loop to create children
  for (var j = 1; j <= iloscObrazkow; j++) {
    obrazki.push(
      <div class="form-check-inline ">
        <label class="form-check-label form-check-button" for={`radio${j}`}>
          <input
            type="radio"
            class="form-check-input"
            id={`radio${j}`}
            name="canvasprawywybor"
            value={`img/${j}.jpg`}
            alt="canvaslewewybor"
            onClick={handleClick}
          />
          <img class="form-check-button" src={`img/${j}s.jpg`} alt="Obrazek" />
        </label>
      </div>
    );
    //Create the parent and add the children
    //obrazki.push(<tr>{children}</tr>);
  }
  return obrazki;
}

//-----------------gotowy div z obrazkami ----

class SetObrazek extends React.Component {
  render() {
    return <div>{createDiv()}</div>;
    //return <div>{wszystkieObrazki} <div/>;
  }
}

export default SetObrazek;
