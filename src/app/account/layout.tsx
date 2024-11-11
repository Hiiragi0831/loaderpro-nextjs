"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <main>
      <section className="account">
        <div className="container">
          <div className="row">
            <div className="account__panel">
              <picture>
                <source srcSet="/images/basket.jpg" />
                <img src="/images/basket.jpg" alt="" />
              </picture>
              <p>Имя Фамилия</p>
              <nav>
                <Link
                  href="/account"
                  className={pathname == "/account" ? "active" : ""}
                >
                  Личная информация
                </Link>
                <Link
                  href="/account/history"
                  className={pathname == "/account/history" ? "active" : ""}
                >
                  История заказов
                </Link>
                <Link
                  href="/account/favorites"
                  className={pathname == "/account/favorites" ? "active" : ""}
                >
                  Избранное
                </Link>
                <button>Выйти</button>
              </nav>
            </div>
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
