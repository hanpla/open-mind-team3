import styled, { keyframes } from "styled-components";

import { SecondButton } from "@/components/common/Button";

export const DropdownButton = styled(SecondButton)`
  position: relative;

  svg {
    position: absolute;
    right: 12px;

    top: 50%;
    transform: translateY(-50%);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px; /* 버튼들 사이의 간격 */
  align-items: center;
`;

// 이미지 속 폼의 하얀 박스 스타일
export const DropdownWrapper = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 16px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows.pt2};
  animation: ${fadeIn} 0.3s ease-out;
`;
