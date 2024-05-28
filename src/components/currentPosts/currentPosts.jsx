import { useParams } from "react-router";
import { useEffect, useState, useRef, useCallback } from "react";
import { Requests } from "../../api/apiRequests";
import * as S from "./style";
export const CurrentPost = () => {
  const [item, setItem] = useState(null);
  let { id } = useParams();
  const mount = useRef(true);

  const fetch = useCallback(async () => {
    setItem(await Requests.getPost(id));
  }, []);

  useEffect(() => {
    if (mount.current) {
      fetch();
      mount.current = true;
    }
  }, [mount]);

  return (
    <S.StyledCard>
      {item && (
        <section id={item[0].id}>
          <S.StyledHeader>{item[0].title}</S.StyledHeader>
          <S.StyledCardText>{item[0].content}</S.StyledCardText>
        </section>
      )}
    </S.StyledCard>
  );
};
