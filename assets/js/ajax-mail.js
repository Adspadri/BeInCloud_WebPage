
/*window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("dreamit-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thank you message sent.!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}*/

window.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos del formulario
  var form = document.getElementById("dreamit-form");
  var status = document.getElementById("status");

  // Funciones de éxito y error después de enviar el formulario
  function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thank you message sent!";
  }

  function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
  }

  // Manejar el evento de envío del formulario
  form.addEventListener("submit", function (ev) {
      ev.preventDefault(); // Prevenir el comportamiento por defecto
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error); // Enviar datos mediante AJAX
  });
});

// Función auxiliar para enviar una solicitud AJAX
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
          success(xhr.response, xhr.responseType);
      } else {
          error(xhr.status, xhr.response, xhr.responseType);
      }
  };
  xhr.send(data);
}
