import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MobileBar } from "../../components/MobileBar";

export const AccountTemplate = () => {
  return (
    <div className="site">
      <ScrollRestoration />
      <Header />
      <main>
        <section className="account">
          <div className="container">
            <div className="row">
              <div className="account__panel">
                <picture>
                  <source srcSet="/assets/images/basket.jpg" />
                  <img src="/assets/images/basket.jpg" alt="" decoding="async" />
                </picture>
                <p>Имя Фамилия</p>
                <nav>
                  <NavLink activeClassName="is-active" to="/account/user">
                    Личная информация
                  </NavLink>
                  <NavLink activeClassName="is-active" to="/account/history">
                    История заказов
                  </NavLink>
                  <NavLink activeClassName="is-active" to="/account/favorites">
                    Избранное
                  </NavLink>
                  <button>Выйти</button>
                </nav>
              </div>
              <Outlet />
            </div>
          </div>
        </section>
      </main>
      <MobileBar />
      <Footer />
    </div>
  );
};
