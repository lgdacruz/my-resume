import { useState } from "react";
import { Button, Foot, Form } from "./style";
import { Puff } from "react-loader-spinner";

export default function Footer() {
  const [show, setshow] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const Send = async () => {
    setSending(true);
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        body: message,
      });
      const data = await res.json();
      alert(data);
    } catch (error) {
      console.log(error);
    } finally {
      setMessage("");
      setshow(false);
      setSending(false);
    }
  };
  return (
    <Foot>
      <p>
        Obrigado pelo interesse no meu trabalho, clique no botão abaixo e mande
        uma msg pra mim, vai chegar direto no meu email!
      </p>

      <Button onClick={() => setshow(true)} disabled={show}>
        Escrever
      </Button>

      <Form show={show}>
        <textarea
          cols={30}
          rows={5}
          maxLength={100}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button onClick={Send} disabled={!message || sending}>
          Enviar
        </Button>
      </Form>
    </Foot>
  );
}
