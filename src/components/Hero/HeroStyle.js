import styled from 'styled-components';

export const HeroDivContainer = styled.div`
  background-color: ${(props) => props.theme.color.black};
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  color: ${(props) => props.theme.color.white};
`;
