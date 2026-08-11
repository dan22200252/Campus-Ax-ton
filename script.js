const statusCopy = {
  middlePrep: {
    title: "중졸 검정고시 준비 단계예요.",
    summary: "아직 접수 전이라면, 공고부터 확인하고 접수 기간을 놓치지 않는 게 먼저예요.",
    baseInfo: ["시험 일정", "응시 자격", "시험 신청 서류", "합격 후 선택할 수 있는 길"],
    baseActions: ["교육청 공고가 기준이에요.", "접수 기간을 놓치면 시험을 못 볼 수 있어요."],
    steps: ["올해 검정고시 일정을 확인해요.", "신청 서류를 따로 적어둬요.", "합격 후 갈 길을 미리 생각해봐요."],
    links: [
      { label: "경상북도교육청 홈페이지 (검정고시 공고·접수 안내 확인)", url: "https://www.gbe.kr" }
    ]
  },
  middleHighSchool: {
    title: "고등학교 진학을 준비해요.",
    summary: "시험에 합격했다면, 이제 그 성적으로 어떻게 진학할지 확인할 차례예요.",
    baseInfo: ["고등학교 진학 방법", "학교 유형", "입학 상담", "필요 서류"],
    baseActions: ["학교마다 입학 상담 방식이 다를 수 있어요.", "교육청이나 학교에 직접 확인하는 게 안전해요."],
    steps: ["가고 싶은 학교 유형을 골라요.", "입학 상담이 가능한지 확인해요.", "필요 서류를 학교에 물어봐요."],
    links: [
      { label: "경상북도교육청 홈페이지 (고등학교 진학·입학 상담 확인)", url: "https://www.gbe.kr" }
    ]
  },
  middleWork: {
    title: "일할 준비를 먼저 확인해요.",
    summary: "시험에 합격했다면, 합격증명서·성적증명서를 어디에 쓸 수 있는지부터 확인해요.",
    baseInfo: ["일할 수 있는 나이", "보호자 동의서", "직업체험", "직업훈련 지원"],
    baseActions: ["만 15세 미만은 취직인허증이 필요할 수 있어요.", "위험하거나 유해한 일은 청소년에게 금지돼요."],
    steps: ["내 나이에서 일할 수 있는지 확인해요.", "꿈드림 직업체험을 알아봐요.", "필요 서류를 먼저 체크해요."],
    links: [
      { label: "학교밖청소년지원센터 꿈드림 (직업체험·자립 지원 확인)", url: "https://www.kdream.or.kr" }
    ]
  },
  highPrep: {
    title: "고졸 검정고시 준비 단계예요.",
    summary: "아직 접수 전이라면, 공고부터 확인하고 접수 기간을 놓치지 않는 게 먼저예요.",
    baseInfo: ["시험 과목", "합격 기준", "시험 신청 서류", "합격 후 선택지"],
    baseActions: ["합격 후 합격증명서와 성적증명서가 필요할 수 있어요.", "대학이나 직업훈련 중 어떤 길을 볼지 정해두면 좋아요."],
    steps: ["시험 과목과 합격 기준을 봐요.", "신청 서류를 확인해요.", "합격 후 대학·일 준비 중 관심 길을 골라요."],
    links: [
      { label: "경상북도교육청 홈페이지 (검정고시 공고·접수 안내 확인)", url: "https://www.gbe.kr" }
    ]
  },
  highCollege: {
    title: "대학 진학 정보를 확인해요.",
    summary: "대학마다 검정고시 성적 반영 방식과 제출 서류가 다를 수 있어요. 성적 활용은 대입정보포털에서 먼저 확인해요.",
    baseInfo: ["대학 지원 방법", "검정고시 성적 반영", "대학 제출 서류", "입학처 모집요강"],
    baseActions: ["모집요강이 가장 정확해요.", "잘 모르겠으면 입학처에 직접 물어보는 게 안전해요."],
    steps: ["지원할 대학을 골라요.", "모집요강에서 검정고시를 검색해요.", "내야 할 서류를 체크해요."],
    links: [
      { label: "대입정보포털 어디가 (검정고시 성적 활용·대입 정보)", url: "https://www.adiga.kr" }
    ]
  },
  highWork: {
    title: "직업훈련과 일할 준비를 확인해요.",
    summary: "고졸 검정고시 합격 후에는 직업훈련, 자격증, 직장체험을 알아볼 수 있어요.",
    baseInfo: ["직업훈련 프로그램", "자격증 준비", "직장체험", "청소년 근로 서류"],
    baseActions: ["채용보다 준비 프로그램을 먼저 확인하면 덜 막막해요.", "만 18세 미만은 보호자 동의서가 필요할 수 있어요."],
    steps: ["관심 있는 직업 분야를 적어봐요.", "꿈드림이나 직업훈련 프로그램을 찾아봐요.", "근로에 필요한 서류를 확인해요."],
    links: [
      { label: "학교밖청소년지원센터 꿈드림 (직업훈련·자립 지원 확인)", url: "https://www.kdream.or.kr" }
    ]
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
  work: {
    info: "일할 준비와 직업훈련",
    action: "바로 취업보다 나이, 서류, 훈련 지원을 먼저 확인해요.",
    step: "직업체험이나 직업훈련 지원을 알아봐요."
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

const legacyStatusMap = {
  middle: "middlePrep",
  high: "highPrep",
  passed: "highCollege"
};

const form = document.querySelector("#profileForm");
const summaryTitle = document.querySelector("#summaryTitle");
const summaryText = document.querySelector("#summaryText");
const infoList = document.querySelector("#infoList");
const actionList = document.querySelector("#actionList");
const topSteps = document.querySelector("#topSteps");
const universityList = document.querySelector("#universityList");
const linkList = document.querySelector("#linkList");

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

function renderLinks(target, links) {
  target.innerHTML = "";
  if (!links.length) {
    target.parentElement.hidden = true;
    return;
  }
  target.parentElement.hidden = false;
  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    li.appendChild(a);
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
  const rawStatus = form.querySelector('input[name="status"]:checked').value;
  const status = legacyStatusMap[rawStatus] || rawStatus;
  const goals = checkedValues("goal");
  const selectedSchools = checkedValues("school");
  const statusData = statusCopy[status] || statusCopy.middlePrep;
  const schoolNames = selectedSchools.map((key) => universities[key].name);

  const infoItems = [...statusData.baseInfo, ...goals.map((goal) => goalCopy[goal].info)];
  const actionItems = [...statusData.baseActions, ...goals.map((goal) => goalCopy[goal].action)];
  const stepItems = [...statusData.steps, ...goals.map((goal) => goalCopy[goal].step)];

  summaryTitle.textContent = statusData.title;
  summaryText.textContent = `${statusData.summary} ${schoolNames.length ? `선택한 대학: ${schoolNames.join(", ")}` : "대학은 아직 선택하지 않아도 괜찮아요."}`;

  renderList(topSteps, stepItems, 3);
  renderList(infoList, infoItems, 5);
  renderList(actionList, actionItems, 5);
  renderLinks(linkList, statusData.links || []);
  renderUniversities(selectedSchools);
}

form.addEventListener("change", updateResult);
updateResult();
