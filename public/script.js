const statusCopy = {
  middle: {
    label: "중졸 검정고시 준비",
    title: "시험 신청부터 확인하면 돼요.",
    summary: "합격 후에는 고등학교 진학, 고졸 검정고시 준비 같은 다음 길을 고를 수 있어요.",
    baseInfo: ["시험 일정", "응시 자격", "시험 신청 서류", "합격 후 갈 수 있는 길"],
    baseActions: ["교육청 공고가 기준이에요.", "접수 기간을 놓치면 시험을 못 볼 수 있어요."],
    steps: ["올해 검정고시 일정을 확인해요.", "신청 서류를 따로 적어둬요.", "합격 후 고등학교 진학도 생각해봐요."]
  },
  middlePassed: {
    label: "중졸 검정고시 합격",
    title: "다음 길을 고를 차례예요.",
    summary: "중졸 검정고시 합격 후에는 고등학교 진학을 준비할 수 있어요.",
    baseInfo: ["고등학교 진학 방법", "학교 유형", "입학 상담", "고졸 검정고시 준비"],
    baseActions: ["진학하려는 학교나 교육청에 확인하는 게 안전해요.", "학교밖청소년지원센터에서 상담받을 수 있어요."],
    steps: ["고등학교에 갈지 먼저 정해요.", "가고 싶은 학교 유형을 살펴봐요.", "교육청이나 상담센터에 문의해요."]
  },
  high: {
    label: "고졸 검정고시 준비",
    title: "합격 후 대입까지 이어서 봐요.",
    summary: "고졸 검정고시는 대학 지원과 바로 연결될 수 있어요.",
    baseInfo: ["시험 과목", "합격 기준", "대학 지원 가능 여부"],
    baseActions: ["검정고시 성적이 대학에서 어떻게 쓰이는지 확인해야 해요.", "합격증명서와 성적증명서는 합격 후 필요할 수 있어요."],
    steps: ["시험 과목과 합격 기준을 봐요.", "관심 대학을 1~2곳 골라요.", "검정고시 출신 안내를 찾아요."]
  },
  passed: {
    label: "검정고시 합격 완료",
    title: "이제 대학별 서류를 확인해요.",
    summary: "대학마다 내야 하는 서류와 성적 반영 방식이 다를 수 있어요.",
    baseInfo: ["대학 지원 서류", "성적 반영 방식", "입학처 모집요강"],
    baseActions: ["모집요강이 가장 정확해요.", "잘 모르겠으면 입학처에 직접 물어보는 게 안전해요."],
    steps: ["지원할 대학을 골라요.", "모집요강에서 검정고시를 검색해요.", "내야 할 서류를 체크해요."]
  }
};

const goalCopy = {
  exam: {
    info: "검정고시 뜻과 시험 흐름",
    action: "일정, 과목, 합격 기준을 먼저 봐요.",
    step: "검정고시 기본 정보를 확인해요."
  },
  examDocs: {
    info: "시험 신청할 때 내는 서류",
    action: "이 서류는 대학 서류와 달라요.",
    step: "교육청 공고에서 신청 서류를 확인해요."
  },
  highSchool: {
    info: "중졸 검정고시 합격 후 고등학교 진학",
    action: "학교마다 입학 상담 방식이 다를 수 있어요.",
    step: "고등학교 진학 가능 경로를 확인해요."
  },
  college: {
    info: "대학 지원 방법",
    action: "수시와 정시 중 어떤 전형인지 확인해요.",
    step: "관심 대학 모집요강을 열어봐요."
  },
  collegeDocs: {
    info: "대학에 내는 서류",
    action: "합격증명서, 성적증명서가 필요할 수 있어요.",
    step: "대학별 제출 서류를 따로 체크해요."
  },
  support: {
    info: "도움받을 수 있는 곳",
    action: "학교밖청소년지원센터나 입학처 상담을 활용해요.",
    step: "혼자 막히는 부분은 상담처에 물어봐요."
  }
};

const universities = {
  postech: {
    name: "포항공과대학교",
    type: "4년제",
    focus: "지원 자격, 제출 서류, 서류·면접 평가 기준"
  },
  handong: {
    name: "한동대학교",
    type: "4년제",
    focus: "검정고시 성적 반영, 전형별 서류, 면접 여부"
  },
  sunlin: {
    name: "선린대학교",
    type: "전문대",
    focus: "학과별 모집 인원, 성적 산출 기준, 제출 서류"
  },
  pohang: {
    name: "포항대학교",
    type: "전문대",
    focus: "학과별 전형, 검정고시 성적 환산, 입학 상담"
  },
  polytech: {
    name: "한국폴리텍대학 포항캠퍼스",
    type: "기능대학",
    focus: "과정별 모집 요건, 학력 인정, 면접·서류 기준"
  }
};

const form = document.querySelector("#profileForm");
const summaryTitle = document.querySelector("#summaryTitle");
const summaryText = document.querySelector("#summaryText");
const infoList = document.querySelector("#infoList");
const actionList = document.querySelector("#actionList");
const topSteps = document.querySelector("#topSteps");
const universityList = document.querySelector("#universityList");

function checkedValues(name) {
  return [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function renderList(target, items, limit = 5) {
  target.innerHTML = "";
  [...new Set(items)].slice(0, limit).forEach((item) => {
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
  const stepItems = [...statusData.steps, ...goals.map((goal) => goalCopy[goal].step)];

  summaryTitle.textContent = statusData.title;
  summaryText.textContent = `${statusData.summary} ${schoolNames.length ? `선택한 대학: ${schoolNames.join(", ")}` : "대학은 아직 선택하지 않아도 괜찮아요."}`;

  renderList(topSteps, stepItems, 3);
  renderList(infoList, infoItems, 5);
  renderList(actionList, actionItems, 5);
  renderUniversities(selectedSchools);
}

form.addEventListener("change", updateResult);
updateResult();
