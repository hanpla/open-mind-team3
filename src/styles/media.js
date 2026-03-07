import { css } from "styled-components";

const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  pc: "1200px",
};

export const media = {
  mobile: (...args) => css`
    @media (min-width: ${breakpoints.mobile}) and (max-width: 767px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${breakpoints.tablet}) and (max-width: 1199px) {
      ${css(...args)};
    }
  `,
  pc: (...args) => css`
    @media (min-width: ${breakpoints.pc}) {
      ${css(...args)};
    }
  `,
};
