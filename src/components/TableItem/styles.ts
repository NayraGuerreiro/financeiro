import styled from "styled-components";

export const TableLine = styled.tr`
font-family: 'Ysabeau Infant', sans-serif;
`;

export const TableColumn = styled.td`
  padding: 10px 0;
  text-align: center;
  font-family: 'Ysabeau Infant', sans-serif;
`;

export const Category = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  font-family: 'Ysabeau Infant', sans-serif;
  padding: 5px 5px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;
