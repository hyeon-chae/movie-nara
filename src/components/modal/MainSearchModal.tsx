import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

interface IPropsMainSearchModal {
  isShowSearchModal: (val: boolean) => void;
  handleSearchKeyword: (val: string) => void;
}

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 69px;
  left: 0;
  height: 100vh;
  .background{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 35%;
    background: #00000077;
  }
  .contents{
    background: #000000dd;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 35%;
  }
  .text-area{
    ${mixins.subTitle()}
    padding: 15px 10px;
  }
  .search-area{
    padding: 50px;
    .input-area{
      border:1px solid #999;
      padding:16px 20px;
      border-radius: 30px;
      ${mixins.flexBox({justify:'flex-start'})}
    }
    input{
      width: calc(100% - 50px);
      background:none;
      border: none;
       ${mixins.body04()}
    }
  }
  .close-icon{
    position: absolute;
    top: calc(35% + 15px);
    left:50%;
    transform: translateX(-50%);
    font-size: 32px;
  }
`

const MainSearchModal = ({isShowSearchModal, handleSearchKeyword}: IPropsMainSearchModal) => {
  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const onSearchKeyword = () => {
    if(searchKeyword === ''){
      return; 
    }else{
      isShowSearchModal(false)
      navigate('/search', { replace: true });
      handleSearchKeyword(searchKeyword);    
    }
    
  }
  const handleOnKeyPress = (e: any) => {
     // Enter 입력이 되면 클릭 이벤트 실행
    if (e.key === 'Enter') {
      console.log('enter');
      onSearchKeyword();      
    }
  };

  return (
    <Wrapper className="main-search-modal modal">
      <div 
        onClick={() => isShowSearchModal(false)}
        className="background">
      </div>
      <div className="contents">
        <div className="search-area">
          <p className="text-area">
          Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="input-area">
            <input 
              type="text" 
              placeholder="Search by movies, TV shows, people, and more."
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyPress={handleOnKeyPress}
            />
            <FontAwesomeIcon 
              onClick={onSearchKeyword}
              icon={faMagnifyingGlass} className="search-icon"/>
          </div>
        </div>
      </div>
      <FontAwesomeIcon 
      onClick={() => isShowSearchModal(false)}
      icon={faCircleXmark} className="close-icon"/>
    </Wrapper>
  )
}

export default MainSearchModal;