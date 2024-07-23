import styled from 'styled-components';

export const SongsDiv = styled.li`
  cursor: pointer;
  width: 70px;
  text-align: center;
  &.active {
    color: ${(props) => props.theme.color.primary};
    &::after {
      content: '';
      position: relative;
      height: 5px;
      margin-top: 0.5rem;
      border-radius: 5px;
      background-color: ${(props) => props.theme.color.primary};
      display: block;
    }
  }
  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;
