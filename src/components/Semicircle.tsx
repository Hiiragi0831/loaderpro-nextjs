export default function Semicircle({
  circle,
  title,
  text,
}: {
  circle: string;
  title: string;
  text: string;
}) {
  return (
    <div className="semicircle">
      <div className="semicircle__circle">
        <p>{circle}</p>
      </div>
      <div className="semicircle__content">
        <p className="semicircle__title">{title}</p>
        <p className="semicircle__text">{text}</p>
      </div>
    </div>
  );
}
