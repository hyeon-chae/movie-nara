import { styled } from 'styled-components'
import { mixins } from 'style/mixin';

interface IPropsLoading {
  color?: string;
  height?: string;
}

const Wrapper = styled.div<IPropsLoading>`
  width: 100%;
  height: ${(props) => (props.height || '200px')};
  position: relative;
  .letter-holder {
    padding: 16px;
    font-size: 16px;
    font-weight: 800;
    color:${(props) => (props.color || '#777')};
    ${mixins.flexBox({ justify: 'center' })};
    ${mixins.positionCenter()}
  }
  .letter {
    animation-name: loading;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    animation-direction: linear;
    padding: 0 2px;
  }
  .l-1 {
    animation-delay: 0.48s;
  }
  .l-2 {
    animation-delay: 0.6s;
  }
  .l-3 {
    animation-delay: 0.72s;
  }
  .l-4 {
    animation-delay: 0.84s;
  }
  .l-5 {
    animation-delay: 0.96s;
  }
  .l-6 {
    animation-delay: 1.08s;
  }
  .l-7 {
    animation-delay: 1.2s;
  }
  .l-8 {
    animation-delay: 1.32s;
  }
  .l-9 {
    animation-delay: 1.44s;
  }
  .l-10 {
    animation-delay: 1.56s;
  }
  @keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Loading = ({color, height}:IPropsLoading) => {
  return (
    <Wrapper className='loading' height={height}>
      <div className="letter-holder" color={color}>
        <div className="l-1 letter">L</div>
        <div className="l-2 letter">o</div>
        <div className="l-3 letter">a</div>
        <div className="l-4 letter">d</div>
        <div className="l-5 letter">i</div>
        <div className="l-6 letter">n</div>
        <div className="l-7 letter">g</div>
        <div className="l-8 letter">.</div>
        <div className="l-9 letter">.</div>
        <div className="l-10 letter">.</div>
      </div>
    </Wrapper>
  )
}

export default Loading;