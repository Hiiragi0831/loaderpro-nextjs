import Articles from "../../components/Articles";
import { Cta } from "../../components/Cta";
import { VacancyItem } from "./components/VacancyItem";

export const Vacancy = () => {
  return (
    <main>
      <section className="vacancy">
        <div className="container">
          <div class="row">
            <VacancyItem />
            <VacancyItem />
            <VacancyItem />
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
};
