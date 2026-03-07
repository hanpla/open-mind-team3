import { CountInput } from "@/components/common/Input/Input";
import * as S from "./HomeDropdown.style";
import { ArrowDownIcon, PersonIcon } from "@/assets/icons/Icons";
import styled from "styled-components";

export const DefaultDropdownButton = ({ onClick }) => (
  <>
    <S.DropdownButton onClick={onClick}>
      <span>피드 만들기</span>
      <ArrowDownIcon />
    </S.DropdownButton>
  </>
);

export const Dropdown = ({ onClose }) => (
  <form>
    <div>피드 만들기</div>
    <CountInput
      leftIcon={PersonIcon}
      placeholder="이름을 입력하세요"
      current={1}
      limit={12}
    />
  </form>
);

const Div = styled.div`
  display: flex;
  
`;
