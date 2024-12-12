import styled from "styled-components";
import {
  CommonWrap,
  ProfileContainer,
  ProfileNameTag,
} from "../assets/styles/CommonStyled";
import profileImg from "../assets/images/증명사진.jpg";
import { useEffect, useState } from "react";

const Wrap = styled(CommonWrap)`
  background: linear-gradient(90deg, #a2c1f8, #977ced);
`;

const ProfileView = () => {
  const [displayCount, setDisplayCount] = useState(0);
  useEffect(() => {
    if (displayCount < 1500) {
      setTimeout(() => {
        setDisplayCount((pre) => pre + 100);
      }, 100);
    }
  }, [displayCount]);
  return (
    <Wrap>
      <ProfileContainer>
        <img alt="profile" src={profileImg} />
        <div className="text-box">
          <ProfileNameTag $on={displayCount >= 500}>
            안녕하세요 개발자 강인호입니다.
          </ProfileNameTag>

          <ProfileNameTag $on={displayCount >= 1500}>
            항상 끊임없이 새로운 것을 탐구합니다.
          </ProfileNameTag>
        </div>
      </ProfileContainer>
    </Wrap>
  );
};

export default ProfileView;
