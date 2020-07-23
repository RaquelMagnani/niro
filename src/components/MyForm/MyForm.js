import React, { useState } from 'react';
import axios from 'axios';
import './myForm.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
      method: 'post',
      url: 'https://formspree.io/xeqrpvgk',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(
          true,
          'Sua mensagem foi enviada com sucesso',
          form
        );
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className="">
      <h2>Conhece mais alguém ? </h2>
      <h3 className="mb-5">Envie sua indicação</h3>
      <Form onSubmit={handleOnSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Seu Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            placeholder="email@email.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Indicações</Label>
          <Input id="message" name="message" type="textarea" />
        </FormGroup>
        <Button
          className="continent--buttons "
          type="submit"
          disabled={serverState.submitting}
        >
          Enviar!
        </Button>
        {serverState.status && (
          <p className={!serverState.status.ok ? 'errorMsg' : ''}>
            {serverState.status.msg}
          </p>
        )}
      </Form>
    </div>
  );
}

export default MyForm;
