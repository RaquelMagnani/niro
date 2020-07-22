import React, { useState } from "react";
import axios from "axios";
import "./myForm.css"

function MyForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xeqrpvgk",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className="myForm--container text-center ">
      <h2>Tem alguma sugestão? </h2>
        <h2>Colabore!</h2>
      <form className="mt-4 text-center" onSubmit={handleOnSubmit}>
        <label htmlFor="email">Seu e-mail :</label>
        <input id="email" type="email" name="email" required /><br/>
        <label htmlFor="message">Indicações :</label>
        <textarea id="message" name="message"></textarea><br/>
        <button className="button--colabore" type="submit" disabled={serverState.submitting}>
          Enviar
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
}

export default MyForm;
