import { useState } from "react";

import * as S from "./HomeForm.style";

import { BasicButton } from "@/components/common/Button/Button.style";
import { Link } from "react-router-dom";
import {
  DefaultDropdownButton,
  Dropdown,
} from "@/components/containers/Home/HomeDropdown/HomeDropdown";

export default function HomeForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownButtonClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <S.FormContainer>
      <BasicButton as={Link} to="/list">
        질문하러 가기
      </BasicButton>

      {isDropdownOpen ? (
        <Dropdown onClick={handleDropdownButtonClick} />
      ) : (
        <DefaultDropdownButton onClick={handleDropdownButtonClick} />
      )}
    </S.FormContainer>
  );
}
