import Button from './Button';

const SubjectCard = ({ name, icon, onClick }) => {
  return (
    <Button variant="card_subject" onClick={onClick}>
      {/* Icon Container */}
      <div>{icon}</div>
      
      {/* Title */}
      <span className="text-lg leading-tight">{name}</span>
    </Button>
  );
};

export default SubjectCard;