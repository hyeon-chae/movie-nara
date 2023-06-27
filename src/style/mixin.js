import { css } from 'styled-components';

export const mixins = {
  // flex
  flexBox: (obj) => css`
    display: flex;
    flex-direction: ${obj?.direction || 'row'};
    align-items: ${obj?.align || 'center'};
    justify-content: ${obj?.justify || 'center'};
    flex-wrap: ${obj?.wrap || 'nowrap'};
  `,

  // text 길때 줄임
  // text 한줄 줄임
  textEllipsis: () => css`
    vertical-align: middle;
    text-overflow: ellipsis !important;
    overflow: hidden !important;
    white-space: nowrap !important;
  `,

  // text 두줄 이상 줄임
  textWrapEllips: (line) => css` 
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: ${line}; /* ellipsis line */
    -webkit-box-orient: vertical;
    /* webkit 엔진을 사용하지 않는 브라우저를 위한 속성. */
    /* height = line-height * line = 1.2em * 3 = 3.6em  */
    // white-space: normal;
    line-height: 1.2em;
    height: auto;
  `,

  // position
  positionCenter: (position) => css`
    position: $position;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  // font
  title01: () => css`
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
  `,

  title02: () => css`
    font-weight: 500;
    font-size: 44px;
    line-height: 48px;
  `,

  title03: () => css`
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
  `,

  title04: () => css`
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
  `,

  title05: () => css`
    font-weight: 400;
    font-size: 26px;
    line-height: 32px;
  `,

  subTitle: () => css`
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
  `,

  body01: () => css`
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  `,

  body02: () => css`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  `,

  body03: () => css`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  `,

  body04: () => css`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,

  button: () => css`
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  `,

  // button style
  // button font style component에서 button 태그에 include
  mainBtnStyle: () => css`
    border-radius: 4px;
    background: #ff7500;
    padding: 12px 16px;
    color: #fff;
    box-sizing: border-box;
  `,

  mainOutlineBtnStyle: () => css`
    border-radius: 4px;
    border: 1px solid #ff7500;
    padding: 11px 16px;
    color: #ff7500;
    box-sizing: border-box;
  `,

  mainBtnStyleDisabled: () => css`
    border-radius: 4px;
    background: #ededed;
    padding: 12px 16px;
    color: #ccc;
    box-sizing: border-box;
  `,

  mainOutlineBtnStyleDisabled: () => css`
    border-radius: 4px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 11px 16px;
    color: #ccc;
    box-sizing: border-box;
  `,

  btnDisabled: () => css`
    border-radius: 4px;
    background: #ededed;
    padding: 6px 16px;
    color: #ccc;
    box-sizing: border-box;
    border: none;
  `,
}
