//*************************************************************************************************************   1  choose your image   (Wybierz obrazek do badan.)

setTimeout(
  $(".form-check-button").click(function() {
    console.log("zmienna");
    //console.log(this.value, this.alt, this.name);
  }),
  3000
);

console.log("zmienna");

function okokrok(imag) {
  obrazek = imag;
  let idcan1 = "canvasprawywybor";
  let idcan2 = "canvaslewewybor";
  let example = document.getElementById(idcan2),
    ctx = example.getContext("2d"), // Контекст
    pic = new Image(); // "Создаём" изображение
  pic.src = imag; // Источник изображения, позаимствовано на хабре
  pic.onload = function() {
    // Событие onLoad, ждём момента пока загрузится изображение
    ctx.drawImage(pic, 0, 0); // Рисуем изображение от точки с координатами 0, 0
  };
  //test=imag;

  let example2 = document.getElementById(idcan1),
    ctx2 = example2.getContext("2d"), // Контекст
    pic2 = new Image(); // "Создаём" изображение
  pic2.src = imag; // Источник изображения, позаимствовано на хабре
  pic2.onload = function() {
    // Событие onLoad, ждём момента пока загрузится изображение
    ctx2.drawImage(pic2, -170, 0); // Рисуем изображение от точки с координатами 0, 0
  };

  console.log("Krok 1. Wybrano obrazek: " + obrazek);
}

//ustaw wyjatek dla obrazkow localhost or web page !

for (let i = 1; i < 50; i++) {
  if (doesFileExist("img/" + i + ".jpg")) {
    i--;
    divObrazki[i] = toString("img/" + i + ".jpg");
    i++;
    addimage(i);
  } else {
    iloscObrazkow = i - 1;
    console.log(iloscObrazkow);
    i = 50;
  }
}

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

//console.log("ku" + wszystkieObrazki[0]);

function addimage(number) {
  $("#obrazki").append(
    "<div class='form-check-inline'><label class='form-check-label' for='radio" +
      number +
      "'><input type='radio' class='form-check-input' id='radio" +
      number +
      "' name='canvasprawywybor' value='img/" +
      number +
      ".jpg' alt='canvaslewewybor' onClick='okokrok(this.value,this.alt,this.name)'  /><img src='img/" +
      number +
      "s.jpg' alt='Kwiaty' /> </label></div>"
  );
}

//*************************************************************************************************************   2 image centered distance  (Siatkowka)

function step(divClass) {
  if (obrazek) {
    $("." + "step" + divClass).slideUp("slow");
    $("." + "step" + (divClass + 1)).slideDown("slow");
  }
}

function outputUpdate(vol) {
  document.querySelector("#volume").value = vol;
  vol = -vol;
  var canvasright = document.getElementById("canvasprawywybor"),
    ctx2 = canvasright.getContext("2d"), // Контекст
    pic2 = new Image(); // "Создаём" изображение
  pic2.src = obrazek; // Источник изображения, позаимствовано на хабре
  pic2.onload = function() {
    // Событие onLoad, ждём момента пока загрузится изображение
    ctx2.drawImage(pic2, vol, 0); // Рисуем изображение от точки с координатами 0, 0
    imagedata2 = ctx2.getImageData(0, 0, canvasright.width, canvasright.height); //copy data image
  };
}
