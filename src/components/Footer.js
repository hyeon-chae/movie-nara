import moment from 'moment';


const Footer = () => {
  const updated = '2022-10-10'
  return (
   <div className="footer-area">
    Copyright CHAE HYEON all rights reserved. Last Updated {moment(updated).format('YYYY.MM.DD')}
  </div>
  )
}

export default Footer;