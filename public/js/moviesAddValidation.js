function selector(element) {
  return document.getElementById(element);
}

window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//

  //Id de cada campo y del formulario
  let title = selector("title"),
    rating = selector("rating"),
    awards = selector("awards"),
    release_date = selector("release_date"),
    length = selector("length"),
    genre_id = selector("genre_id"),
    form = selector("form"),
    //Errores
    title_error = selector("title_error"),
    rating_error = selector("rating_error"),
    awards_error = selector("awards_error"),
    release_date_error = selector("release_date_error"),
    length_error = selector("length_error"),
    genre_id_error = selector("genre_id_error"),
    form_error = selector("form_error"),
    //botón
    btn = selector("btn")
    

  //manejo de errores
  function trueError(error_field, msg, field) {
    error_field.innerHTML = msg;
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
    field.classList.add('is-invalid')
    field.classList.remove('is-valid')
  }
  function falseError(error_field, field) {
    error_field.innerHTML = "";
    btn.disabled = false;
    btn.style.cursor = "pointer";
    field.classList.add('is-valid')
    field.classList.remove('is-invalid')
    
  }

  //Foco a title
  // title.focus();

  //Validaciones por campos

  //title
  title.addEventListener("blur", function () {
    switch (true) {
      case !title.value.trim():
        trueError(title_error, "El titulo es obligatorio", title);
        break;

      default:
        falseError(title_error, title);

        break;
    }
  });

  //rating
  rating.addEventListener("blur", function () {
    switch (true) {
      case !rating.value.trim():
        trueError(rating_error, "El rating es obligatorio", rating);
        break;
      case rating.value < 0 || rating.value > 10.0:
        trueError(rating_error, "Solo números del 0 al 10", rating);
        break;
      default:
        falseError(rating_error, rating);

        break;
    }
  });
  //awards
  awards.addEventListener("blur", function () {
    switch (true) {
      case !awards.value.trim():
        trueError(awards_error, "Los premios son obligatorios", awards);
        break;
      case awards.value < 0 || awards.value > 10.0:
        trueError(awards_error, "Solo números del 0 al 10", awards);
        break;
      default:
        falseError(awards_error, awards);

        break;
    }
  });

  //release_date
  release_date.addEventListener("blur", function () {
    switch (true) {
      case !release_date.value.trim():
        trueError(release_date_error, "La fecha de creación es obligatoria", release_date);
        break;

      default:
        falseError(release_date_error, release_date);

        break;
    }
  });

  //length
  length.addEventListener("blur", function () {
    switch (true) {
      case !length.value.trim():
        trueError(length_error, "La duración es obligatoria", length);
        break;

      case length.value < 60 || length.value > 360:
        trueError(length_error, "Solo números del 60 al 360", length);
        break;

      default:
        falseError(length_error, length);

        break;
    }
  });
  genre_id.addEventListener("blur", function () {
    switch (true) {
      case !genre_id.value.trim():
        trueError(genre_id_error, "El genero es obligatorio", genre_id);
        break;

      default:
        falseError(genre_id_error, genre_id);

        break;
    }
  });

  form.addEventListener("submit", function (e) {
    let error = false;
    e.preventDefault();
    let inputs = form.elements;

    for (let i = 0; i < inputs.length - 1; i++) {
      if (inputs[i].value == "" && inputs[i].name !== "archivo") {
        form_error.innerHTML = "Debes completar todos los campos";
        error = true;
      }
    }
    setTimeout(() => {
      form_error.innerHTML = "";
    }, "5000");

    if (!error) {
      alert('La película se guardó satisfactoriamente')
      form.submit();
    }
  });
};
