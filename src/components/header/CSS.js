/** */

import styled from "styled-components";

/** */

import theme from '../../themes/index'

/** */

const CSS = styled.header`
  width: 100%;
  position: relative;
  z-index: 9;
  > div{
    width: 100%;
    background: ${theme.colors.blue};
    > div{
      width: 100%;
      max-width: 1280px;
      height: 110px;
      margin: 0 auto;
      position: relative;
      &:after{
        content: '';
        position: absolute;
        bottom: -96px;
        left: 0;
        width: 358px;
        height: 96px;
        background: url('../img/svg/shape-header.svg');
        z-index: 1;
      }
    }
  }
  > nav{
    width: 100%;
    background: ${theme.colors.white80};
    > div{
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      ul{
        display: flex;
        align-items: stretch;
        height: 46px;
        padding-left: 28%;
        li{
          display: flex;
          align-items: stretch;
          margin-right: 20px;
          color: ${theme.colors.blue};
          position: relative;
          &:last-child{
            margin-right: 0;
          }
          a{
            line-height: 46px;
            font-weight: bold;
            font-size: 14px;
            text-decoration: none;
            text-transform: uppercase;
            &:after{
              content: '';
              width: 100%;
              height: 4px;
              background: ${theme.colors.yellow};
              position: absolute;
              bottom: -4px;
              left: 0;
              opacity: 0;
              visibility: hidden;
              transition: all ease .3s;
            }
            &:hover{
              &:after{
                opacity: 1;
                visibility: visible;
              }
            }
            &.active{
              &:after{
                opacity: 1;
                visibility: visible;
              }
            }
          }
        }
      }
    }
  }
`;

export default CSS;