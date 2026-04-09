import styled from "styled-components";

const MetricSelector = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
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

export { MetricSelector, MetricButton };
