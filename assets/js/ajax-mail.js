
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const statusMessage = document.getElementById("status-message");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del formulario (sin redirigir)
      
      const formData = new FormData(form);

      // Usar fetch para enviar el formulario a Formspree
      fetch(form.action, {
          method: form.method,
          headers: {
              "Accept": "application/json"
          },
          body: formData
      })
      .then(response => {
          if (response.ok) {
              // Mostrar el mensaje de éxito
              statusMessage.style.display = "block";
              statusMessage.textContent = "Thank you! Your message has been sent.";
              statusMessage.style.color = "green";
              form.reset(); // Limpiar el formulario
          } else {
              // Mostrar el mensaje de error
              statusMessage.style.display = "block";
              statusMessage.textContent = "Oops! Something went wrong, please try again.";
              statusMessage.style.color = "red";
          }
      })
      .catch(error => {
          // Si hay un error en la conexión o el envío
          statusMessage.style.display = "block";
          statusMessage.textContent = "Oops! Something went wrong, please try again.";
          statusMessage.style.color = "red";
      });
  });
});