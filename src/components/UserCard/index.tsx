import React from "react";
import { IUserCard } from "./interface";
import { CardContainer } from "./styles.module";
import { useRouter } from "next/router";

// import { Container } from './styles';

const UserCard: React.FC<IUserCard> = ({ user }: IUserCard) => {
  const router = useRouter();
  return (
    <CardContainer
      onClick={() =>
        router.push(`/Users/Edition?id=${user._id}`)
      }
    >
      {user.name}
    </CardContainer>
  );
};

export default UserCard;
