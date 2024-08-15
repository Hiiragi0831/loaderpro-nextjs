import Category from "../../../components/Category";

export const Categories = () => {
  return (
    <section className="battery__category">
      <div className="container">
        <div className="row">
          <Category
            title="Свинцово-кислотные аккумуляторы"
            image={`/assets/images/battery/lead-acid_batteries.png`}
            link="lead-acid"
          />
          <Category
            title="Литий-ионные аккумуляторы"
            image={`/assets/images/battery/lithium-ion_batteries.png`}
            link="lithium-ion"
          />
          <Category
            title="Зарядное устройство тяговых аккумуляторов"
            image={`/assets/images/battery/traction_battery_charger.png`}
          />
          <Category
            title="Разъемы для тяговых аккумуляторов"
            image={`/assets/images/battery/connectors_for_traction_batteries.png`}
          />
        </div>
      </div>
    </section>
  );
};
