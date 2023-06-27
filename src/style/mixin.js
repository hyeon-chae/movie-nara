
export const mixins = {
  // flex
  flexBox: (obj) => `
    display: flex;
    flex-direction: ${obj?.direction ?? 'row'};
    align-items: ${obj?.align ?? 'center'};
    justify-content: ${obj?.justify ?? 'center'};
    flex-wrap: ${obj?.wrap ?? 'nowrap'}
  `,
  

  // font
  titleFont: (weight, size, height) => `
    font-weight: ${weight};
    font-size: ${size};
    line-height: ${height};
  `
}
/* ${mixins => mixins.flexBox({justify:'flex-start'})} */
/* ${mixins.flexBox({justify:'flex-start'})} */