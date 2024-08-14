import {FC} from "react";

type Props = {
  count: number,
  text: string,
}

export const Step: FC<Props> = ({ count, text }) => {
  return (
    <div className="step">
      <div className="step__count">
        <span className="h1">{count}</span>
      </div>
      <div className="step__text">{text}</div>
    </div>
  );
};
