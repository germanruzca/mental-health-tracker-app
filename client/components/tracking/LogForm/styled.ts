import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StepTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

const StepSubtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 16px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
`;

const ValueBadge = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const Slider = styled.input`
  width: 100%;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

const TextInput = styled.input`
  padding: 10px 14px;
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

const StepIndicator = styled.div`
  display: flex;
  gap: 6px;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.textMuted};
  transition: background 0.2s;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button<{ $variant?: "primary" | "ghost" }>`
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === "primary"
        ? theme.colors.primary
        : theme.colors.primaryLight};
  background: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.primary : "transparent"};
  color: ${({ theme, $variant }) =>
    $variant === "primary"
      ? theme.colors.primaryLight
      : theme.colors.textMuted};

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 24px;
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 32px;
  width: 100%;
  max-width: 480px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export {
  Form,
  StepTitle,
  StepSubtitle,
  FieldGroup,
  Field,
  Label,
  ValueBadge,
  Slider,
  CheckboxRow,
  TextInput,
  Footer,
  StepIndicator,
  Dot,
  ButtonRow,
  Button,
  Overlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
};
