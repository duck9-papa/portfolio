import styled from "styled-components";
import ProfileView from "./ProfileView";
import SkillView from "./SkillView";

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainPage = () => {
  return (
    <MainWrap>
      <ProfileView />
      <SkillView />
    </MainWrap>
  );
};

export default MainPage;
