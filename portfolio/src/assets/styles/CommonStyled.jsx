import styled, { keyframes } from "styled-components";

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
    border-radius: 30px;
  }
`;

export const ProfileNameTag = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  opacity: 0;
  translate: 0 -100%;
  animation-name: ${({ $on }) => $on && displaySpread};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
export const ImgMono = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  overflow: hidden;
`;

export const ImgFilm = styled.div`
  display: flex;
  translate: -${({ $displayImg }) => $displayImg * 401.6}px 0;
  transition: 1s;
  img {
    width: 400px;
    height: 400px;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 150px;
  padding: 16px;
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
