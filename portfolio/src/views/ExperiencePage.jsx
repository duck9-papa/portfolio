import {
  PresentContainer,
  PresentContent,
  PresentItem,
  PresentItemTitle,
  PresentTitle,
} from "../assets/styles/CommonStyled";
import { GradientWrap } from "./SkillView";

const ExperiencePage = () => {
  const presentItems = [
    {
      title: "Sports2i",
      detail: "융합사업팀/매니저 - 2023.01~2023.12",
      content: [
        {
          title: "문체부 8과제 배구 입력기 프로그램 개발 프론트엔드 업무 수행",
          details: [
            "액션 입력기, 히트맵 입력기 개발",
            "액션 입력 프로세스 특허 등록",
            "시스템 코드 연동 체계 구축, 요청 처리 병렬화를 통해 성능 향상",
          ],
        },
        {
          title: "문체부 8과제 배구 출력기 프로그램 개발 프론트엔드 업무 수행",
          details: [
            "스포츠 통계 데이터의 다양한 시각화",
            "반응형 웹 사이트 제작",
            "Radis 서버와의 통신을 활용한 문자 중계 구현",
          ],
        },
        {
          title: "문체부 8과제 헬스 트레이너 프로그램 프론트엔드 업무 수행",
          details: [
            "REST API를 활용해 워치와의 데이터 연동",
            "헬스 데이터의 시각화 표출",
          ],
        },
        {
          title: "배구 전력 분석기 프론트엔드 업무 수행",
          details: [
            "공용 컴포넌트 제작 및 문서화",
            "draw.io를 활용해 공용 모듈 도식화",
          ],
        },
        {
          title: "개발 환경 구축 및 CI/CD 구축",
          details: [
            "NCP,  CentOs 환경에서의 nginx를 사용해 React Project 배포",
            "Github와 Jenkins를 활용해 CI/CD 환경 구축",
            "사내 가이드 노션 페이지 작성",
          ],
        },
      ],
    },
    {
      title: "Sports2i",
      detail: "융합개발 1팀/연구원 - 2024.01~2024.12",
      content: [
        {
          title: "zone 3D 프로젝트",
          details: [
            "three.js, R3F를 활용하여 투구 데이터의 3차원 표출 기능 개발",
            "React State를 활용하여 3D Model 속성 및 조작",
            "3D 환경 및 모델 변수 값 문서화",
            "자체 스터디중 정식 프로젝트 건의 및 승격",
            "KBS, MBC, SBS, SPOTV 및 티빙 슈퍼매치 서비스",
            "기존 외주 업체를 통해 제공하던 unity기반 프로그램을 사내 자체 개발로 전환",
          ],
        },
        {
          title: "구단 전력 분석기 3.0",
          details: [
            "페이지 자유 커스텀 기능 개발",
            "컴포넌트, 필터 및 내부 속성 코드 체계 구축",
            "그리드 시스템 구축 및 적용",
            "공용 모듈 제작 및 문서화",
            "계정 관리 및 환경 설정 기능 개발",
          ],
        },
        {
          title: "KBO-ABS 사이트 리팩토링",
          details: ["기존 .net 프레임워크로 제작된 사이트 Vue3로 마이그레이션"],
        },
      ],
    },
  ];

  return (
    <GradientWrap>
      <PresentContainer>
        <PresentTitle>EXPERIENCE</PresentTitle>
        {presentItems.map((presentItem, index) => (
          <PresentItem key={`presentKey${index}`}>
            <PresentItemTitle>
              <h2>{presentItem.title}</h2>
              <span>{presentItem.detail}</span>
            </PresentItemTitle>
            {presentItem.content.map((content, contentIndex) => (
              <PresentContent key={`contentKey${contentIndex}`}>
                <div className="title">{`${contentIndex + 1}. ${
                  content.title
                }`}</div>
                {content.details.map((detail, detailIndex) => (
                  <span key={`detailKey${detailIndex}`}>- {detail}</span>
                ))}
              </PresentContent>
            ))}
          </PresentItem>
        ))}
      </PresentContainer>
    </GradientWrap>
  );
};

export default ExperiencePage;
