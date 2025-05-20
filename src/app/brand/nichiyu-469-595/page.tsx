import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

export async function generateMetadata() {
  const id = "595";
  const brand = await api.getPageBrand(id);

  return metaGen(brand.title, brand.description);
}

export default async function SpareParts() {
  const id = "595";
  const brand = await api.getPageBrand(id);

  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">{brand.h1 ? brand.h1 : brand.title}</h1>
          </div>
          <div className="row row-1">
            <div className="catalog__products">
              <CatalogProducts url={id} brand={true} />
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="brand__header">
            <div className="text">
              <h2 className={"h1"}>
                Купить запчасти для погрузчиков NICHIYU в Санкт-Петербурге
              </h2>
              <p>
                Nichiyu — японская компания, занимающаяся производством вилочных
                электропогрузчиков. Главный офис расположен в городе Киото,
                Япония. Под данной торговой маркой выпускается разнообразное
                складское оснащение. Компанию можно смело назвать «пионером» и
                ведущим всемирным производителем погрузочно-разгрузочного
                оборудования.
              </p>
              <p>
                Электропогрузчик Nichiyu — это один из родоначальников складской
                техники с электродвигателем. Первая модель была создана
                компанией в 1937 году и до сегодняшнего дня товары бренда
                пользуются высоким спросом, особенно на внутреннем японском
                рынке. Nichiyu первой среди производителей начала оснащать
                электропогрузчики моторами переменного тока — это произошло в
                2001 году.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/nichiyu-469-595.jpg"} />
              <img src={"/images/brand/nichiyu-469-595.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Разновидности запчастей для погрузчиков NICHIYU</h2>
            <p>
              Ассортимент техники Nichiyu включает вилочные погрузчики с 3 или 4
              опорами грузоподъёмностью от 0,5 до 8 тонн, штабелеры, ричтраки,
              электротягачи, комплектовщики заказов, тележки и другое
              оборудование. Для поддержания их работоспособности требуется
              широкий спектр оригинальных и аналоговых запчастей.
            </p>
            <p>
              Среди востребованных деталей для вилочных погрузчиков Nichiyu:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Батареи <sup>01</sup>"}
              text={
                "Аккумуляторные батареи и зарядные устройства — обеспечивают работу электрических погрузчиков."
              }
            />
            <Box
              title={"Ключевые компоненты <sup>02</sup>"}
              text={
                "Электродвигатели и элементы управления (инверторы, контроллеры) — ключевые компоненты привода."
              }
            />
            <Box
              title={"Безопасность <sup>03</sup>"}
              text={
                "Редукторы, тормозные системы и рулевое управление — отвечают за безопасность и маневренность."
              }
            />
            <Box
              title={"Подъёмные механизмы <sup>04</sup>"}
              text={
                "Гидравлические насосы и цилиндры — необходимы для работы подъёмных механизмов."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Компания «СПЕЦМАШИНА» предлагает оригинальные и совместимые
              запчасти для всех типов техники погрузчиков Nichiyu. На складе
              имеется широкий выбор комплектующих, а при необходимости можно
              заказать детали по каталогам производителя.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как выбрать запчасти для погрузчиков NICHIYU</h2>
            <p>
              Выбор комплектующих для техники Nichiyu требует внимательного
              подхода. Эксперты компании «СПЕЦМАШИНА» помогут с выбором
              запчастей для погрузчиков Nichiyu, подскажут совместимые аналоги и
              дадут рекомендации по установке. Вот несколько рекомендаций,
              которые помогут подобрать оптимальные детали:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Идентификация модели"}
              text={
                "Перед покупкой запчастей необходимо точно определить модель и серийный номер погрузчика. Это позволит избежать ошибки при подборе."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Оригинальные каталоги"}
              text={
                "Каталоги от производителя содержат схемы и артикулы, что упрощает подбор нужной детали и снижает риск несовместимости."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              «СПЕЦМАШИНА» — только лучшие комплектующие для ремонта и
              обслуживания
            </h2>
            <p>
              Мы поставляем качественные запчасти для устранения любых видов
              неисправностей и проведения регулярного технического обслуживания.
              Большинство позиций находится в наличии, а также мы предлагаем
              удобный доступ к оригинальным каталогам. С нами вы получите
              надежность, оперативную поставку и квалифицированную поддержку.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
