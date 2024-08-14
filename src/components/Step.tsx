export const Step = ({ count, text }) => {
  return (
    <div className="step">
      <div class="step__count">
        <span class="h1">{count}</span>
      </div>
      <div class="step__text">{text}</div>
    </div>
  );
};
