import styled from 'styled-components';

export const ButtonStyle = styled.button`
  border: 1px solid black !important;
  background-color: ${(props) => props.bgColor === 'black' && props.theme.color.black};
  font-weight: 600;
  font-size: 18px;
`;
