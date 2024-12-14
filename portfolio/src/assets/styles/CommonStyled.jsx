import styled, { keyframes } from "styled-components";
import { device } from "../Responsive";

const { pc, mobile } = device;

const mobileQuery = `@media screen and ${mobile}`;
const pcQuery = `@media screen and ${pc}`;

const displaySpread = keyframes`

  to{
    opacity: 1;
    translate: 0 0;
  }

`;

export const CommonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;
/** 프로필 뷰 */
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  font-weight: 500;
  img {
    width: 150px;
    height: 200px;
  }
`;
export const GuideRow = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const ProfileNameTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  opacity: 0;
  translate: 0 -100%;
  animation-name: ${({ $on }) => $on && displaySpread};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  i {
    scale: 0.5;
    cursor: pointer;
  }
`;
export const ImgMono = styled.div`
  display: flex;
  overflow: hidden;

  img {
    border-radius: 30px;
  }
  ${pcQuery} {
    width: 400px;
    height: 400px;
  }

  ${mobileQuery} {
    width: 60vw;
    height: 60vw;
    margin: 0 auto;
  }
`;

export const ImgFilm = styled.div`
  display: flex;

  transition: 1s;
  ${pcQuery} {
    translate: -${({ $displayImg }) => $displayImg * 401.6}px 0;
    img {
      width: 400px;
      height: 400px;
    }
  }

  ${mobileQuery} {
    transform: ${({ $displayImg }) =>
      `translateX(calc(-${$displayImg} * var(--viewport-width-60)))`};
    img {
      width: 60vw;
      height: 60vw;
    }
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  ${pcQuery} {
    width: 250px;
    height: 150px;
    padding: 16px;
  }

  border-radius: 16px;
  background-color: #fff;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  :first-child {
    width: 100px;
    height: 100px;
  }
  :last-child {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight: 600;
    font-size: 20px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;

  background-color: #977ced;
  .name {
    font-weight: 600;
    font-size: 20px !important;
    color: #fff;
  }
`;

export const MobileCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 8px;
  border-radius: 16px;
  background-color: #977ced;
  .name {
    font-weight: 600;
    font-size: 16px !important;
    color: #fff;
  }
  .item-container {
    display: flex;

    flex-wrap: wrap;
    gap: 8px;

    width: 100%;
  }
`;

export const MobileSkillItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(50% - 4px);
  height: 50%;

  border-radius: 16px;
  padding: 8px;
  background-color: #fff;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  span {
    color: #000;
  }
`;

export const PresentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 16px;
  color: #fff;
`;

export const PresentTitle = styled.h2`
  font-size: 24px;
  margin-top: 32px;
  margin-bottom: 0;
`;

export const PresentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
  width: 100%;
  max-width: 910px;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-align: start;
  color: #000;
`;

export const PresentItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  h2 {
    margin: 0;
    margin-bottom: 4px;
  }
  span {
    font-weight: 500;
  }
`;

export const PresentContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  .title {
    font-size: 16px !important;
    font-weight: 700;
  }
  span {
    padding-left: 16px;
  }
`;
