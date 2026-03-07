import { BasicButton, SecondButton } from "@/components/common/Button";

import * as S from "./HomeForm.style";

export default function HomeForm() {
  return (
    <S.FormContainer>
      <BasicButton type="submit">질문하러 가기</BasicButton>
      <SecondButton>피드 만들기</SecondButton>
    </S.FormContainer>
  );
}
