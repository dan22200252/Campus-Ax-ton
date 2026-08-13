const statusCopy = {
  middlePrep: {
    title: "중졸 검정고시 준비 단계예요.",
    summary: "시험 일정과 신청 서류를 먼저 확인하면 돼요.",
    baseInfo: ["시험 일정", "응시 자격", "시험 신청 서류", "합격 후 선택할 수 있는 길"],
    baseActions: ["교육청 공고가 기준이에요.", "접수 기간을 놓치면 시험을 못 볼 수 있어요."],
    steps: ["올해 검정고시 일정을 확인해요.", "신청 서류를 따로 적어둬요.", "합격 후 갈 길을 미리 생각해봐요."]
  },
  middleHighSchool: {
    title: "고등학교 진학을 준비해요.",
    summary: "중졸 검정고시 합격 후에는 일반 고등학교 진학을 알아볼 수 있어요.",
    baseInfo: ["고등학교 진학 방법", "학교 유형", "입학 상담", "필요 서류"],
    baseActions: ["학교마다 입학 상담 방식이 다를 수 있어요.", "교육청이나 학교에 직접 확인하는 게 안전해요."],
    steps: ["가고 싶은 학교 유형을 골라요.", "입학 상담이 가능한지 확인해요.", "필요 서류를 학교에 물어봐요."]
  },
  middleWork: {
    title: "일할 준비를 먼저 확인해요.",
    summary: "바로 취업보다 나이, 필요 서류, 직업훈련 지원을 먼저 보는 게 좋아요.",
    baseInfo: ["일할 수 있는 나이", "보호자 동의서", "직업체험", "직업훈련 지원"],
    baseActions: ["만 15세 미만은 취직인허증이 필요할 수 있어요.", "위험하거나 유해한 일은 청소년에게 금지돼요."],
    steps: ["내 나이에서 일할 수 있는지 확인해요.", "꿈드림 직업체험을 알아봐요.", "필요 서류를 먼저 체크해요."]
  },
  highPrep: {
    title: "고졸 검정고시 준비 단계예요.",
    summary: "고졸 검정고시는 대학 진학이나 일할 준비와 이어질 수 있어요.",
    baseInfo: ["시험 과목", "합격 기준", "시험 신청 서류", "합격 후 선택지"],
    baseActions: ["합격 후 합격증명서와 성적증명서가 필요할 수 있어요.", "대학이나 직업훈련 중 어떤 길을 볼지 정해두면 좋아요."],
    steps: ["시험 과목과 합격 기준을 봐요.", "신청 서류를 확인해요.", "합격 후 대학·일 준비 중 관심 길을 골라요."]
  },
  highCollege: {
    title: "대학 진학 정보를 확인해요.",
    summary: "대학마다 검정고시 성적 반영 방식과 제출 서류가 다를 수 있어요.",
    baseInfo: ["대학 지원 방법", "검정고시 성적 반영", "대학 제출 서류", "입학처 모집요강"],
    baseActions: ["모집요강이 가장 정확해요.", "잘 모르겠으면 입학처에 직접 물어보는 게 안전해요."],
    steps: ["지원할 대학을 골라요.", "모집요강에서 검정고시를 검색해요.", "내야 할 서류를 체크해요."]
  },
  highWork: {
    title: "직업훈련과 일할 준비를 확인해요.",
    summary: "고졸 검정고시 합격 후에는 직업훈련, 자격증, 직장체험을 알아볼 수 있어요.",
    baseInfo: ["직업훈련 프로그램", "자격증 준비", "직장체험", "청소년 근로 서류"],
    baseActions: ["채용보다 준비 프로그램을 먼저 확인하면 덜 막막해요.", "만 18세 미만은 보호자 동의서가 필요할 수 있어요."],
    steps: ["관심 있는 직업 분야를 적어봐요.", "꿈드림이나 직업훈련 프로그램을 찾아봐요.", "근로에 필요한 서류를 확인해요."]
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
    type: "4년제 · 학종만 운영",
    focus: "수시 학생부종합전형만 선발(정시·논술 없음). 검정고시 합격자도 일반전형으로 지원할 수 있어요.",
    note: "농어촌 특별전형 등 고른기회전형은 검정고시·특목고 출신자 지원이 제한돼요.",
    url: "https://adm-u.postech.ac.kr/entrance-exam/guide/"
  },
  handong: {
    name: "한동대학교",
    type: "4년제 · 수시·정시 모두",
    focus: "검정고시 합격증명서·성적증명서(대입전형용) 제출이 필요해요.",
    note: "지원 전 나이스 검정고시 서비스(kged.go.kr)에서 학교에 성적 제공 동의를 하고 확인번호를 미리 받아둬야 해요.",
    url: "https://admissions.handong.edu/early/notice/"
  },
  sunlin: {
    name: "선린대학교",
    type: "전문대",
    focus: "전문대학 공통 지원자격상 검정고시 합격자도 지원할 수 있어요.",
    note: "학교 고유의 세부 조건은 확인되지 않았어요. 최신 모집요강에서 직접 확인하세요.",
    url: "https://admission.sunlin.ac.kr/"
  },
  pohang: {
    name: "포항대학교",
    type: "전문대",
    focus: "전문대학 공통 지원자격상 검정고시 합격자도 지원할 수 있어요.",
    note: "학교 고유의 세부 조건은 확인되지 않았어요. 최신 모집요강에서 직접 확인하세요.",
    url: "https://ipsi.pohang.ac.kr/"
  },
  polytech: {
    name: "한국폴리텍대학 포항캠퍼스",
    type: "국비 직업훈련 · 비학위",
    focus: "2년제 학위과정이 아닌 국비 무료 직업훈련과정(전문기술과정 등) 중심이에요.",
    note: "학위가 필요하면 다른 학교와 함께 고려하세요. 검정고시 성적을 환산 입력하는 도구는 별도로 있어요.",
    url: "https://www.kopo.ac.kr/pohang/content.do?menu=5970"
  }
};

/* =========================================================
   검정고시 상세 데이터 (시험 종류·일정·서류·링크)
   ========================================================= */

const EXAM_TYPES = {
  mid: {
    name: "중학교 졸업학력 검정고시",
    gives: "중학교 졸업 학력",
    whoFor: "초등학교 졸업자, 초졸 검정고시 합격자, 중학교에서 학적이 정원외로 관리되는 사람",
    subjects: "필수 5과목(국어·수학·영어·사회·과학) + 선택 1과목(도덕·기술가정·체육·음악·미술·정보 중)",
    count: "총 6과목",
    time: "09:00 ~ 15:00"
  },
  high: {
    name: "고등학교 졸업학력 검정고시",
    gives: "고등학교 졸업 학력 (대학 진학 가능)",
    whoFor: "중학교 졸업자, 중졸 검정고시 합격자, 기능사 이상 자격 취득자 등",
    subjects: "필수 6과목(국어·수학·영어·사회·과학·한국사) + 선택 1과목(도덕·기술가정·체육·음악·미술 중)",
    count: "총 7과목",
    time: "09:00 ~ 15:50"
  }
};

const EXAM_SCHEDULE = [
  {
    round: "2026년 제2회",
    status: "past",
    events: [
      { date: "2026-06-22", end: "2026-06-26", label: "원서접수", certainty: "fixed" },
      { date: "2026-08-11", label: "시험일", certainty: "fixed" },
      { date: "2026-08-28", label: "합격자 발표", certainty: "fixed" }
    ]
  },
  {
    round: "2027년 제1회",
    status: "upcoming",
    events: [
      { date: "2027-02-08", end: "2027-02-12", label: "원서접수 (예상)", certainty: "guess" },
      { date: "2027-04-03", label: "시험일 (예상)", certainty: "guess" },
      { date: "2027-05-06", label: "합격자 발표 (예상)", certainty: "guess" }
    ]
  }
];

const EXAM_DOCS_BY_LEVEL = {
  mid: [
    "응시원서 1부 (현장 또는 온라인 작성)",
    "사진 2매 — 3.5cm × 4.5cm, 최근 3개월 이내 촬영",
    "최종학력증명서 1부 — 초등학교 졸업증명서 또는 중학교 제적·정원외 관리증명서",
    "신분증 (지참만, 제출 안 함)",
    "과목 면제 대상이면 과목합격증명서·자격증 사본"
  ],
  high: [
    "응시원서 1부 (현장 또는 온라인 작성)",
    "사진 2매 — 3.5cm × 4.5cm, 최근 3개월 이내 촬영",
    "최종학력증명서 1부 — 중학교 졸업증명서 또는 고등학교 제적증명서",
    "신분증 (지참만, 제출 안 함)",
    "과목 면제 대상이면 과목합격증명서·자격증 사본"
  ]
};

const EXAM_LINKS = {
  apply: { url: "https://kged.go.kr", title: "검정고시 온라인 원서접수 (나이스)", desc: "공동인증서 로그인 → 시·도교육청 선택 → 원서 작성" },
  notice: { url: "https://www.sen.go.kr/user/bbs/BD_selectBbsList.do?q_bbsSn=1097", title: "서울시교육청 검정고시 공고", desc: "확정 일정·시험장 확인 (타 지역은 해당 교육청 누리집)" },
  center: { url: "https://www.kdream.or.kr", title: "청소년지원센터 꿈드림", desc: "만 9~24세 학교 밖 청소년 · 검정고시 준비, 교재비·상담 지원" },
  hischool: { url: "https://www.hischool.go.kr", title: "고입정보포털 하이스쿨", desc: "고등학교 종류·전형·모집 일정 확인" },
  work: { url: "https://www.work24.go.kr", title: "고용24 (구 워크넷)", desc: "청소년 취업 지원, 직업훈련(내일배움카드) 신청" },
  adiga: { url: "https://www.adiga.kr", title: "어디가 (대입정보포털)", desc: "대학별 전형·모집요강·입시 일정 확인" },
  kosaf: { url: "https://www.kosaf.go.kr", title: "한국장학재단", desc: "국가장학금·학자금 대출 신청" },
  qnet: { url: "https://www.q-net.or.kr", title: "큐넷 (Q-Net)", desc: "기능사 등 국가기술자격 시험 접수·일정" }
};

const afterGoalOptionsByLevel = {
  middle: [
    { value: "highschool", icon: "🏫", title: "일반 고등학교", sub: "학교로 돌아가고 싶어요" },
    { value: "work", icon: "💼", title: "일할 준비", sub: "취업을 준비하고 싶어요" }
  ],
  high: [
    { value: "college", icon: "🎓", title: "대학교 진학", sub: "더 공부하고 싶어요" },
    { value: "work", icon: "💼", title: "일할 준비", sub: "취업을 준비하고 싶어요" }
  ]
};

const statusKeyMap = {
  middle: { prep: "middlePrep", highschool: "middleHighSchool", work: "middleWork" },
  high: { prep: "highPrep", college: "highCollege", work: "highWork" }
};

/* =========================================================
   유틸
   ========================================================= */

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function fmtDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const wd = ["일", "월", "화", "수", "목", "금", "토"][new Date(y, m - 1, d).getDay()];
  return `${m}월 ${d}일(${wd})`;
}

/* =========================================================
   검정고시 상세 렌더링
   ========================================================= */

function scheduleHTML() {
  return EXAM_SCHEDULE.map((rnd) => {
    const tag = rnd.status === "past" ? '<span class="tag-mini tag-mini--past">시험 종료</span>' : '<span class="tag-mini">공고 전 · 예상</span>';
    const items = rnd.events.map((ev) => {
      const guess = ev.certainty === "guess";
      const range = ev.end ? ` ~ ${fmtDate(ev.end)}` : "";
      return `<li>${guess ? "예상 · " : "확정 · "}${esc(ev.label)}: ${fmtDate(ev.date)}${range}</li>`;
    }).join("");
    return `<div class="schedule-round"><strong>${esc(rnd.round)}</strong> ${tag}<ul class="plain">${items}</ul></div>`;
  }).join("");
}

function linksHTML(keys) {
  const cards = keys.map((k) => {
    const l = EXAM_LINKS[k];
    return `<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer"><strong>${esc(l.title)}</strong><span>${esc(l.desc)}</span></a>`;
  }).join("");
  return `<h4>바로 가기</h4><div class="links-mini">${cards}</div>`;
}

function examDetailHTML(examKey) {
  const e = EXAM_TYPES[examKey];
  const docs = EXAM_DOCS_BY_LEVEL[examKey].map((d) => `<li>${esc(d)}</li>`).join("");
  return `
    <h4>내가 볼 시험</h4>
    <p class="detail-lead"><strong>${esc(e.name)}</strong> — 합격하면 ${esc(e.gives)}을 인정받아요. 응시료는 무료입니다.</p>
    <table class="info-mini">
      <tr><th>응시자격</th><td>${esc(e.whoFor)}</td></tr>
      <tr><th>과목</th><td>${esc(e.count)} · ${esc(e.subjects)}</td></tr>
      <tr><th>시험시간</th><td>${esc(e.time)}</td></tr>
    </table>
    <p class="note-mini">전 과목 평균 60점 이상이면 합격(과락 없음). 결시 과목이 있으면 불합격이고, 60점 이상 받은 과목은 다음 회차에 다시 안 봐도 되는 '과목합격'으로 남아요.</p>
    <h4>일정</h4>
    ${scheduleHTML()}
    <h4>접수할 때 필요한 것</h4>
    <ul class="plain">${docs}</ul>
    ${linksHTML(["apply", "notice", "center"])}
  `;
}

function workDetailHTML() {
  return `
    <h4>이 순서로 준비해보세요</h4>
    <ul class="plain">
      <li>1. 직업 방향 정하기 — 고용24 직업심리검사(무료)로 관심 분야를 좁혀요</li>
      <li>2. 자격증 따기 — 기능사 시험에 응시할 수 있어요 (큐넷)</li>
      <li>3. 직업훈련 받기 — 국민내일배움카드로 훈련비 지원을 받아요</li>
      <li>4. 지원하기 — 고용센터에서 이력서·면접 준비를 도와줘요</li>
    </ul>
    <p class="note-mini">만 18세 미만은 근로계약 시 친권자·후견인 동의서와 가족관계증명서가 필요하고, 하루 7시간·주 35시간을 넘겨 일할 수 없어요. 야간·휴일 근로는 원칙적으로 금지입니다.</p>
    ${linksHTML(["work", "qnet", "center"])}
  `;
}

const statusDetailHTML = {
  middlePrep: () => examDetailHTML("mid"),
  highPrep: () => examDetailHTML("high"),
  middleHighSchool: () => `
    <h4>어떻게 하면 되나요</h4>
    <ul class="plain">
      <li>거주지 교육지원청 또는 다니고 싶은 중학교에 문의하면 재입학 절차를 안내받아요</li>
      <li>중학교는 의무교육이라 학력 조건 없이 초등학교 졸업만 있으면 들어갈 수 있어요</li>
      <li>나이 차이가 걱정되면 방송통신중학교도 선택지예요 (주말 등교, 학력 인정)</li>
    </ul>
    <p class="note-mini">다니다 그만둔 학교가 있다면 학적 정리 상태(제적/정원외 관리)에 따라 절차가 달라지니 교육지원청에 먼저 확인하세요.</p>
    ${linksHTML(["center", "notice"])}
  `,
  highCollege: () => `
    <h4>두 가지 길</h4>
    <table class="info-mini">
      <tr><th>수시모집</th><td>내신·학생부·면접 중심, 보통 9월 원서접수. 검정고시 출신은 내신이 없어 지원 가능한 전형이 제한되니 대학별로 꼭 확인하세요.</td></tr>
      <tr><th>정시모집</th><td>수능 성적 중심, 수능은 보통 11월 셋째 주 목요일. 검정고시 출신에게 가장 일반적인 경로예요.</td></tr>
    </table>
    <p class="note-mini">수능 응시원서는 8월 말~9월 초 접수, 학교 소속이 없으면 거주지 교육지원청에서 개인 접수합니다.</p>
    ${linksHTML(["adiga", "kosaf", "center"])}
  `,
  middleWork: workDetailHTML,
  highWork: workDetailHTML
};

/* =========================================================
   DOM 참조
   ========================================================= */

const form = document.querySelector("#profileForm");
const summaryTitle = document.querySelector("#summaryTitle");
const summaryText = document.querySelector("#summaryText");
const infoList = document.querySelector("#infoList");
const actionList = document.querySelector("#actionList");
const topSteps = document.querySelector("#topSteps");
const universityList = document.querySelector("#universityList");
const detailSections = document.querySelector("#detailSections");

const stepLevel = document.querySelector("#stepLevel");
const stepStage = document.querySelector("#stepStage");
const stepGoal = document.querySelector("#stepGoal");
const stepGoalOptions = document.querySelector("#stepGoalOptions");

const statusState = { level: null, stage: null, afterGoal: null };

function currentStatusKey() {
  if (!statusState.level || !statusState.stage) return null;
  if (statusState.stage === "prep") return statusKeyMap[statusState.level].prep;
  if (!statusState.afterGoal) return null;
  return statusKeyMap[statusState.level][statusState.afterGoal];
}

function setActiveOption(group, value) {
  document.querySelectorAll(`.opt-card[data-group="${group}"]`).forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.value === value);
  });
}

function renderAfterGoalOptions() {
  stepGoalOptions.innerHTML = "";
  afterGoalOptionsByLevel[statusState.level].forEach(({ value, icon, title, sub }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opt-card";
    btn.dataset.group = "afterGoal";
    btn.dataset.value = value;
    btn.innerHTML = `<span class="opt-card__ico" aria-hidden="true">${icon}</span><span class="opt-card__txt"><strong>${esc(title)}</strong><span>${esc(sub)}</span></span>`;
    stepGoalOptions.appendChild(btn);
  });
}

stepLevel.addEventListener("click", (event) => {
  const btn = event.target.closest(".opt-card");
  if (!btn) return;
  statusState.level = btn.dataset.value;
  statusState.stage = null;
  statusState.afterGoal = null;
  setActiveOption("level", statusState.level);
  setActiveOption("stage", null);
  stepStage.hidden = false;
  stepGoal.hidden = true;
  updateResult();
});

stepStage.addEventListener("click", (event) => {
  const btn = event.target.closest(".opt-card");
  if (!btn) return;
  statusState.stage = btn.dataset.value;
  statusState.afterGoal = null;
  setActiveOption("stage", statusState.stage);
  if (statusState.stage === "passed") {
    renderAfterGoalOptions();
    stepGoal.hidden = false;
  } else {
    stepGoal.hidden = true;
  }
  updateResult();
});

stepGoalOptions.addEventListener("click", (event) => {
  const btn = event.target.closest(".opt-card");
  if (!btn) return;
  statusState.afterGoal = btn.dataset.value;
  setActiveOption("afterGoal", statusState.afterGoal);
  updateResult();
});

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
      <small>${esc(school.type)}</small>
      <h3>${esc(school.name)}</h3>
      <p>${esc(school.focus)}</p>
      ${school.note ? `<p class="university-card__note">${esc(school.note)}</p>` : ""}
      <a class="university-card__link" href="${esc(school.url)}" target="_blank" rel="noopener noreferrer">공식 입학처 바로가기 →</a>
    `;
    universityList.appendChild(card);
  });
}

function updateResult() {
  const statusKey = currentStatusKey();
  const goals = checkedValues("goal");
  const selectedSchools = checkedValues("school");

  if (!statusKey) {
    summaryTitle.textContent = "위 단계를 순서대로 선택해 주세요.";
    summaryText.textContent = "중졸/고졸, 준비/합격 여부를 고르면 맞춤 안내가 나와요.";
    detailSections.innerHTML = "";
    renderList(topSteps, [], 3);
    renderList(infoList, [], 5);
    renderList(actionList, [], 5);
    renderUniversities(selectedSchools);
    return;
  }

  const statusData = statusCopy[statusKey];
  const schoolNames = selectedSchools.map((key) => universities[key].name);

  const infoItems = [...statusData.baseInfo, ...goals.map((goal) => goalCopy[goal].info)];
  const actionItems = [...statusData.baseActions, ...goals.map((goal) => goalCopy[goal].action)];
  const stepItems = [...statusData.steps, ...goals.map((goal) => goalCopy[goal].step)];

  summaryTitle.textContent = statusData.title;
  summaryText.textContent = `${statusData.summary} ${schoolNames.length ? `선택한 대학: ${schoolNames.join(", ")}` : "대학은 아직 선택하지 않아도 괜찮아요."}`;

  const detailRenderer = statusDetailHTML[statusKey];
  detailSections.innerHTML = detailRenderer ? detailRenderer() : "";

  renderList(topSteps, stepItems, 3);
  renderList(infoList, infoItems, 5);
  renderList(actionList, actionItems, 5);
  renderUniversities(selectedSchools);
}

form.addEventListener("change", updateResult);
updateResult();
