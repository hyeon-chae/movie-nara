import moment from 'moment';
import { styled } from 'styled-components'


const Wrapper = styled.div`
  padding: 40px 0 50px;
  text-align: center;
  color: #999;
  font-size: 14px;
  border-top: 1px solid #333;
  background: #000;
`

const Footer = () => {
  const updated = '2022-10-11'
  return (
   <Wrapper className="footer-area">
    Copyright CHAE HYEON all rights reserved. Last Updated {moment(updated).format('YYYY.MM.DD')}
  </Wrapper>
  )
}

export default Footer;