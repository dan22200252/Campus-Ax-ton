const statusCopy = {
  middle: {
    label: "중졸 검정고시 준비",
    title: "중졸 검정고시부터 차근차근 준비하는 단계",
    baseInfo: ["응시 자격과 접수 기간", "중졸 검정고시 과목 구성", "합격 기준과 과목 면제 가능 여부"],
    baseActions: ["교육청 공고에서 올해 시험 일정을 확인하기", "원서 접수에 필요한 신분 확인 서류 준비하기"]
  },
  high: {
    label: "고졸 검정고시 준비",
    title: "고졸 학력 취득과 대입 가능성을 함께 보는 단계",
    baseInfo: ["고졸 검정고시 과목과 합격 기준", "검정고시 성적의 대입 활용 방식", "합격증명서와 성적증명서 발급 방법"],
    baseActions: ["시험 일정과 합격자 발표일을 달력에 표시하기", "관심 대학 모집요강에서 검정고시 지원 기준 확인하기"]
  },
  passed: {
    label: "검정고시 합격 완료",
    title: "대학 지원 조건과 서류를 구체적으로 확인할 단계",
    baseInfo: ["대학별 검정고시 출신 지원 가능 여부", "수시·정시 전형별 반영 기준", "온라인 증명서 발급과 제출 방식"],
    baseActions: ["관심 대학 입학처 모집요강 내려받기", "성적증명서와 합격증명서 발급 경로 확인하기"]
  }
};

const goalCopy = {
  exam: {
    info: "검정고시 일정, 과목, 합격 기준",
    action: "공식 교육청 공고를 기준으로 최신 시험 정보를 확인하기"
  },
  college: {
    info: "수시·정시 전형에서 검정고시 성적을 보는 방식",
    action: "대학별 모집요강에서 검정고시 출신 지원 항목 찾기"
  },
  documents: {
    info: "합격증명서, 성적증명서, 주민등록 관련 서류",
    action: "정부24 또는 나이스 대국민서비스 발급 가능 여부 확인하기"
  },
  support: {
    info: "장학금, 입학 상담, 지역 청소년 지원기관",
    action: "대학 장학 안내와 포항 지역 지원기관 정보를 함께 확인하기"
  }
};

const universities = {
  postech: {
    name: "포항공과대학교",
    type: "4년제",
    focus: "모집단위별 지원 자격, 학생부 대체 서류, 면접·서류평가 기준을 확인합니다."
  },
  handong: {
    name: "한동대학교",
    type: "4년제",
    focus: "검정고시 성적 반영 방식, 자기소개·면접 요소, 전형별 제출 서류를 확인합니다."
  },
  sunlin: {
    name: "선린대학교",
    type: "전문대",
    focus: "전문대 수시 지원 가능 여부, 학과별 모집 인원, 성적 산출 기준을 확인합니다."
  },
  pohang: {
    name: "포항대학교",
    type: "전문대",
    focus: "학과별 전형, 검정고시 성적 환산, 장학·입학 상담 창구를 확인합니다."
  },
  polytech: {
    name: "한국폴리텍대학 포항캠퍼스",
    type: "기능대학",
    focus: "과정별 모집 요건, 검정고시 학력 인정 여부, 면접·서류 제출 기준을 확인합니다."
  }
};

const form = document.querySelector("#profileForm");
const summaryTitle = document.querySelector("#summaryTitle");
const summaryText = document.querySelector("#summaryText");
const infoList = document.querySelector("#infoList");
const actionList = document.querySelector("#actionList");
const universityList = document.querySelector("#universityList");

function checkedValues(name) {
  return [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function renderUniversities(selectedSchools) {
  universityList.innerHTML = "";

  Object.entries(universities).forEach(([key, school]) => {
    const card = document.createElement("article");
    card.className = `university-card${selectedSchools.includes(key) ? " is-active" : ""}`;
    card.innerHTML = `
      <small>${school.type}</small>
      <h3>${school.name}</h3>
      <p>${school.focus}</p>
    `;
    universityList.appendChild(card);
  });
}

function updateResult() {
  const status = form.querySelector('input[name="status"]:checked').value;
  const goals = checkedValues("goal");
  const selectedSchools = checkedValues("school");
  const statusData = statusCopy[status];
  const schoolNames = selectedSchools.map((key) => universities[key].name);

  const infoItems = [...statusData.baseInfo, ...goals.map((goal) => goalCopy[goal].info)];
  const actionItems = [...statusData.baseActions, ...goals.map((goal) => goalCopy[goal].action)];

  summaryTitle.textContent = statusData.title;
  summaryText.textContent = `${statusData.label} 상태이며, ${goals.length}개 목표와 ${schoolNames.length ? schoolNames.join(", ") : "관심 대학 미선택"} 정보를 함께 보고 있습니다.`;

  renderList(infoList, [...new Set(infoItems)]);
  renderList(actionList, [...new Set(actionItems)]);
  renderUniversities(selectedSchools);
}

form.addEventListener("change", updateResult);
updateResult();
