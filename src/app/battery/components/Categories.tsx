import Category from "../../../components/Category";

export const Categories = () => {
  return (
    <section className="battery__category">
      <div className="container">
        <div className="row">
          <Category
            title="Свинцово-кислотные аккумуляторы"
            image={`/images/battery/lead-acid_batteries.png`}
            // link="lead-acid"
          />
          <Category
            title="Литий-ионные аккумуляторы"
            image={`/images/battery/lithium-ion_batteries.png`}
            // link="lithium-ion"
          />
          <Category
            title="Зарядные устройства"
            image={`/images/battery/traction_battery_charger.png`}
          />
          <Category
            title="Разъемы"
            image={`/images/battery/connectors_for_traction_batteries.png`}
          />
        </div>
      </div>
    </section>
  );
};
