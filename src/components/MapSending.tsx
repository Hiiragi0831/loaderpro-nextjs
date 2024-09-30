export const MapSending = () => {
  return (
    <section className="map">
      <div className="container">
        <div className="section-title">
          <span className="h1">Ежедневные отправки</span>
        </div>
        <picture>
          <source srcSet="/images/map.gif" />
          <img src="/images/map.gif" alt="" decoding="async" />
        </picture>
      </div>
    </section>
  );
};
