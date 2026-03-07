import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray10};
  gap: 8px;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.brown40};
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  ${({ theme }) => theme.typography.body3};
  color: ${({ theme }) => theme.colors.gray50};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray40};
  flex-shrink: 0;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;

export const CharCount = styled.span`
  ${({ theme }) => theme.typography.caption1Regular};
  color: ${({ theme }) => theme.colors.gray40};
  flex-shrink: 0;
  white-space: nowrap;
  margin-left: auto;
  padding-left: 8px;
`;

export const TextArea = styled.textarea`
  ${({ theme }) => theme.typography.body3}
  color: ${({ theme }) => theme.colors.gray60};
  background-color: ${({ theme }) => theme.colors.gray20};

  width: 100%;
  min-height: 140px;
  padding: 20px;

  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.brown40};
  }
`;
