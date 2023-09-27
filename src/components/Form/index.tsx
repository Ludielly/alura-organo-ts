import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import InputText from "../InputText";
import "./Form.css";
import { ICollaborator } from "../../shared/interfaces/ICollaborator";

interface FormProps {
  registeredCollaborator: (collaborator: ICollaborator) => void
  teams: string[]
}

const Form = ({ registeredCollaborator, teams }: FormProps) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registeredCollaborator({
      name,
      role,
      image,
      team,
      date
    });
    setName("");
    setRole("");
    setImage("");
    setTeam("");
    setDate("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText
          label="Nome"
          placeholder="Digite o seu name"
          required={true}
          value={name}
          onHandleChange={(value) => setName(value)}
        />
        <InputText
          label="Cargo"
          placeholder="Digite o seu cargo"
          required={true}
          value={role}
          onHandleChange={(value) => setRole(value)}
        />
        <InputText
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onHandleChange={(value) => setImage(value)}
        />
        <InputText
          label="Data de ingresso"
          placeholder=""
          value={date}
          type='date'
          onHandleChange={(value) => setDate(value)}
        />
        <DropdownList
          label="Time"
          items={teams}
          required={true}
          value={team}
          onHandleChange={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
