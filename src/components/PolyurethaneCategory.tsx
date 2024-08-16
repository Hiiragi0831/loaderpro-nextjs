export const PolyurethaneCategory = () => {
  const data = [
    "Колеса для ричтраков",
    "Колеса и\u00A0ролики для штабелеров",
    "Колеса и ролики\u00A0для электротележек",
    "Колеса и\u00A0ролики для штабелеров",
  ];
  return (
    <section className="polyurethane__category">
      <div className="container">
        <div className="row">
          {data.map((cat, key) => (
            <div className="polyurethane__cat" key={key}>
              <picture>
                <source srcSet={`/images/polyurethane/c-0${key + 1}.png`} />
                <img src={`/images/polyurethane/c-0${key + 1}.png`} alt="" decoding="async" />
              </picture>
              <p>{cat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
