import styled from "styled-components";
import ProfileView from "./ProfileView";
import SkillView from "./SkillView";
import ExperiencePage from "./ExperiencePage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";

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
      <ProjectPage />
      <ContactPage />
    </MainWrap>
  );
};

export default MainPage;
