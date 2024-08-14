export const Achievement = ({ icon, title, text }) => {
  return (
    <div className="achievement">
      <picture className="achievement__icon">
        <source srcSet={icon} />
        <img src={icon} alt={title} decoding="async" />
      </picture>
      <div class="achievement__title">{title}</div>
      <div class="achievement__text">
        <p>{text}</p>
      </div>
    </div>
  );
};
