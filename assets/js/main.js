$(document).ready(function () {

  $("#tel").mask("(00) 00000-0000", {
    placeholder: "(xx) xxxxx-xxxx",
  });
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      tel: {
        required: true,
      },
      veiculoDeInterrese: {
        required: false,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, informe o seu nome",
      email: "Por favor, informe o seu e-mail.",
      tel: "Por favor, informe o seu telefone.",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existe ${camposIncorretos} campos incorretos`);
      }
    },
  });
  
});
