import { Input } from "@/components/common/Input";
import * as S from "./HomeDropdown.style";
import { ArrowDownIcon } from "@/assets/icons/Icons";

export const DefaultDropdownButton = ({ onClick }) => (
  <>
    <S.DropdownButton onClick={onClick}>
      <span>피드 만들기</span>
      <ArrowDownIcon />
    </S.DropdownButton>
  </>
);

export const DropdownForm = ({ onClose }) => (
  <form>
    <Input placeholder="이름을 입력하세요" />
  </form>
);
