import { ICollaborator } from "../../shared/interfaces/ICollaborator";
import Collaborator from "../Collaborator";
import "./Team.css";

interface TeamProps {
  teamName: string
  collaborators: ICollaborator []
  primaryColor: string
  secondaryColor: string
}

const Team = ({ teamName, collaborators, primaryColor, secondaryColor } : TeamProps) => {
  return (
    (collaborators.length > 0) ?
      <section className="team" style={{ backgroundColor: secondaryColor }}>
        <h3 style={{ borderColor: primaryColor, color: primaryColor }}>
          {teamName}
        </h3>
        <div className="collaborators">
          {collaborators.map((collaborator) => (
            <Collaborator
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              key={collaborator.name}
              image={collaborator.image}
              name={collaborator.name}
              role={collaborator.role}
              date={collaborator.date}
            />
          ))}
        </div>
      </section>
      : <></>
  );
};

export default Team;
