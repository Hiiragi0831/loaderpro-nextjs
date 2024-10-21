import { Suspense } from "react";
import Content from "./Content";

export default function Page() {
  return (
    <main>
      <section className="empty">
        <Suspense>
          <Content />
        </Suspense>
      </section>
    </main>
  );
}
