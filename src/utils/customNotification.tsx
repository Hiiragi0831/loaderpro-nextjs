import { ToastContentProps } from "react-toastify";
import Link from "next/link";

type CustomNotificationProps = ToastContentProps<{
  title: string;
  content: string;
}>;

export function CustomNotification({ data }: CustomNotificationProps) {
  return (
    <div className="notification">
      <p>{data.title}</p>
      <Link className={"button button__outline"} href={data.content}>
        Перейти
      </Link>
    </div>
  );
}
