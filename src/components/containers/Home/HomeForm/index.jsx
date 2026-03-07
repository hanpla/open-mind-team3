import { useState } from "react";

import * as S from "./HomeForm.style";
import { BasicButton } from "@/components/common/Button";
import {
  DefaultDropdownButton,
  DropdownForm,
} from "@/components/containers/Home/HomeDropdown";

export default function HomeForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownButtonClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <S.FormContainer>
      <BasicButton type="submit">질문하러 가기</BasicButton>

      {isDropdownOpen ? (
        <DropdownForm />
      ) : (
        <DefaultDropdownButton onClick={handleDropdownButtonClick} />
      )}
    </S.FormContainer>
  );
}
