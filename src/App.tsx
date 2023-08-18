import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import { ICollaborator } from "./shared/interfaces/ICollaborator";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];
  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);

  const handleAddCollaborator = (collaborator: ICollaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div>
      <Banner imageSrc='/images/banner.png' />
      <Form
        registeredCollaborator={(collaborator) =>
          handleAddCollaborator(collaborator)
        }
        teams={teams.map((team) => team.name)}
      />
      {teams.map((team) => <Team
          key={team.name}
          teamName={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
        />
      )}
    </div>
  );
}

export default App;