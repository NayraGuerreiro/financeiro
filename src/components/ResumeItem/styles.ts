import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin-left: 40px;
  color: black;
  font-family: 'Ysabeau Infant', sans-serif;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
   `;

export const Info = styled.div<{color?: string}>`
  color: ${props => props.color ?? '#000'};
  font-weigth: bold;
`;
