import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton: FC<Props> = ({ className, onClickSignIn }) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {!session ? (
        <button onClick={onClickSignIn}>Войти в профиль</button>
      ) : (
        <Link href="/account">Личный кабинет</Link>
      )}
    </div>
  );
};
