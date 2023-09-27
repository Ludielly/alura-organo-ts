import "./Collaborator.css";
// import defaultUser from "./default-image.svg";

interface CollaboratorProps {
  primaryColor: string
  secondaryColor: string
  name: string
  image: string
  role: string
  date: string
}

const Collaborator = ({ primaryColor, image, name, role, date }: CollaboratorProps) => {
  return (
    <div className="collaborator">
      <div className="header" style={{backgroundColor: primaryColor}}>
        <img src={image} 
          alt={name} 
        />
      </div>
      <div className="footer">
        <h4 style={{ color: primaryColor }}>{name}</h4>
        <h5>{role}</h5>
        <h5>{new Date(date).toLocaleDateString()}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
