import Content from "./Content";
import { Suspense } from "react";

export default function SelectionParts() {
  return (
    <main>
      <Suspense>
        <Content />
      </Suspense>
    </main>
  );
}
