import React from "react";
import InputMask from "react-input-mask";
export default class Contact extends React.Component {
  render() {
    return (
      <div className="formulario">
        <h1> Fale Conosco</h1>
        <form
          name="form1"
          id="form1"
          method="post"
          action="/controllers/controllerForm.php"
        >
          <input type="text" name="nome" id="nome" placeholder="Nome:" />
          <InputMask
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Telefone:"
            mask="(999) 999999999"
          />
          <input type="email" name="email" id="email" placeholder="Email:" />
          <textarea
            name="mensagem"
            id="mensagem"
            placeholder="mensagem"
          ></textarea>
          <input type="submit" value="Enviar"></input>
        </form>
      </div>
    );
  }
}
