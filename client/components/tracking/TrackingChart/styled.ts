import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: center;
`;
const MetricSelector = styled.div`
  grid-column: 1 / 2;
  display: flex;
  gap: 8px;
  align-items: start;
`;

const MetricButton = styled.button<{ $active: boolean; $color: string }>`
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ $active, $color }) => ($active ? $color : "#E5E7EB")};
  background: ${({ $active, $color }) => ($active ? $color : "white")};
  color: ${({ $active }) => ($active ? "white" : "#6B7280")};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
`;

const LogButtonContainer = styled.div`
  grid-column: 2 / 3;
  justify-self: end;
`;

const LogButton = styled.button`
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ChartContainer = styled.div`
  grid-column: 1 / -1;
`;

export {
  GridContainer,
  MetricSelector,
  MetricButton,
  LogButton,
  LogButtonContainer,
  ChartContainer,
};
