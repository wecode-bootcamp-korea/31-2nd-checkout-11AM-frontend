import { css } from 'styled-components';

const theme = {
  background: '#FFFEFC',
  fontMd: 500,
  fontBd: 700,
  flexLayout: (direction, align, justify) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};

export default theme;
