import "./FeatureCard.scss";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature">
      <img src={icon} alt="" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
