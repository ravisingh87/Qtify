import styled from 'styled-components';

export const AlbumComDivContainer = styled.div`
  color: ${(props) => props.theme.color.white};
  height: 40vh;
`;

export const AlbumComDiv = styled.div``;
export const AlbumSpan = styled.span`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const AlbumSlider = styled.div`
  .slick-slider {
    width: 100%;
    overflow: hidden;
  }
  .slick-prev {
    left: 5px;
    z-index: 1;
  }

  .slick-prev:before {
    color: ${(props) => props.theme.color.primary};
  }

  .slick-next {
    right: 15px;
  }
  .slick-next:before {
    color: ${(props) => props.theme.color.primary};
  }
`;
