export const Hero = () => {
  return (
    <section className="battery__hero">
      <div className="container">
        <picture className="for-desktop">
          <source srcSet="/images/slider/8.jpeg" />
          <img src="/images/slider/8.jpeg" alt="5" />
        </picture>
        <picture className="for-devices">
          <source srcSet="/images/slider/8m.jpeg" />
          <img src="/images/slider/8m.jpeg" alt="5m" />
        </picture>
      </div>
    </section>
  );
};
