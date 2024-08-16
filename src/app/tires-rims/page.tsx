import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Шины для вилочных погрузчиков",
  description:
    "Купить шины для вилочных погрузчиков с доставкой по России вы можете на маркетплейсе СПЕЦМАШИНА. В ассортименте шинокомплекты и цельнолитые шины различного исполнения. Наши специалисты проходят регулярные обучения по продукту и помогут подобрать шины подходящие именно для ваших условий эксплуатации.",
};

export default function TiresRims() {
  return (
    <main>
      <section>
        <div className="container">
          <h1>Шины и диски</h1>
        </div>
      </section>
    </main>
  );
}
