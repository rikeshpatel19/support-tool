import Badge from '../components/Badge';
import Button from './Button';

export default function TopicCard({ name, status, onClick }) {
  return (
    <Button variant="card_topic" onClick={onClick}>
      {/* The Topic Name */}
      <span>{name}</span>

      {/* The Badge */}
      <div className="absolute bottom-3 right-3">
        <Badge tier={status} size={40} />
      </div>
    </Button>
  );
}