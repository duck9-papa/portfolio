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
    width: 300px;
    height: 400px;
    border-radius: 30px;
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
  font-size: 18px;
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

  margin: 0;
  padding: 0;
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
    translate: -${({ $displayImg, $value }) =>
        $displayImg * ($value || 401.6)}px 0;
    img {
      width: 400px;
      height: 400px;
      object-fit: cover; /* 이미지가 요소 크기에 맞게 조정되도록 설정 */
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
  padding: 32px 16px;
  padding-top: 0;
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
  opacity: 0;
  translate: -50% 0;
  width: 100%;
  max-width: 910px;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  animation-name: ${({ $on }) => $on && displaySpread};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

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

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  max-width: 1296px;
  margin-top: 32px;
`;

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 16px;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.02;
  }
  ${pcQuery} {
    width: 300px;
    height: 300px;
  }
`;

export const ProjectItemImg = styled.img.attrs({ alt: "title" })`
  width: 100%;
  height: 80%;
  border-radius: 8px;
`;

export const ProjectDescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
  .period {
    font-size: 12px;
    color: #d9d9d9;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: #222;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  input,
  textarea {
    min-width: 300px;
    min-height: 30px;
    background-color: #fff;
    outline: none;
    border: none;
    border-radius: 8px;
    color: #000;
    padding: 0 12px;
    font-family: NotoSans;

    &[type="submit"] {
      margin-top: 24px;
      cursor: pointer;
      font-weight: 600;
      &:hover {
        background-color: #f9f9f9;
      }
    }
  }

  textarea {
    height: 92px;
    padding: 8px;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  ${mobileQuery} {
    flex-direction: column;
  }
`;
