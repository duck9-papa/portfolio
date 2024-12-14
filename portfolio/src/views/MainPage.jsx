import styled from "styled-components";
import ProfileView from "./ProfileView";
import SkillView from "./SkillView";
import ExperiencePage from "./ExperiencePage";

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainPage = () => {
  return (
    <MainWrap>
      <ProfileView />
      <SkillView />
      <ExperiencePage />
    </MainWrap>
  );
};

export default MainPage;
