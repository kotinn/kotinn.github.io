var obrazek; //obrazek dla apki
//Siatkowka 3D
console.log("zmienna");
//************************************************************************wybor obrazka new
setTimeout(
  $(".form-check-button").click(function() {
    console.log("zmienna");
    //console.log(this.value, this.alt, this.name);
  }),
  2000
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
