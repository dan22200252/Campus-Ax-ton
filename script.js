const statusCopy = {
  elemSchool: {
    title: "중학교 진학을 준비해요.",
    summary: "중학교는 의무교육이라 나이와 상관없이 다시 다닐 수 있고, 학비도 들지 않아요.",
    baseInfo: ["중학교 재입학 절차", "학교 유형", "방송통신중학교", "필요 서류"],
    baseActions: ["학적 정리 상태(제적/정원외 관리)에 따라 절차가 달라져요.", "거주지 교육지원청에 먼저 확인하는 게 안전해요."],
    steps: ["거주지 교육지원청이나 다니고 싶은 학교에 재입학 절차를 물어봐요.", "나이 차이가 걱정되면 방송통신중학교도 알아봐요.", "학적 상태를 먼저 확인해요."],
    keywords: ["중학교 재입학 신청", "방송통신중학교"]
  },
  elemGed: {
    title: "중졸 검정고시 준비 단계예요.",
    summary: "시험 일정과 신청 서류를 먼저 확인하면 돼요.",
    baseInfo: ["시험 일정", "응시 자격", "시험 신청 서류", "합격 후 선택할 수 있는 길"],
    baseActions: ["교육청 공고가 기준이에요.", "접수 기간을 놓치면 시험을 못 볼 수 있어요."],
    steps: ["올해 검정고시 일정을 확인해요.", "신청 서류를 따로 적어둬요.", "합격 후 갈 길을 미리 생각해봐요."],
    keywords: ["중졸 검정고시 원서접수", "검정고시 준비 방법"]
  },
  midSchool: {
    title: "고등학교 진학을 준비해요.",
    summary: "재입학·편입학, 방송통신고등학교, 학력인정 평생교육시설도 정식 고졸 학력이 나와요.",
    baseInfo: ["고등학교 진학 방법", "학교 유형", "입학 상담", "필요 서류"],
    baseActions: ["학교마다 입학 상담 방식이 다를 수 있어요.", "교육청이나 학교에 직접 확인하는 게 안전해요."],
    steps: ["가고 싶은 학교 유형을 골라요.", "입학 상담이 가능한지 확인해요.", "필요 서류를 학교에 물어봐요."],
    keywords: ["고등학교 편입학 결원", "방송통신고등학교"]
  },
  midGed: {
    title: "고졸 검정고시 준비 단계예요.",
    summary: "고졸 검정고시는 대학 진학이나 일할 준비와 이어질 수 있어요.",
    baseInfo: ["시험 과목", "합격 기준", "시험 신청 서류", "합격 후 선택지"],
    baseActions: ["합격 후 합격증명서와 성적증명서가 필요할 수 있어요.", "대학이나 직업훈련 중 어떤 길을 볼지 정해두면 좋아요."],
    steps: ["시험 과목과 합격 기준을 봐요.", "신청 서류를 확인해요.", "합격 후 대학·일 준비 중 관심 길을 골라요."],
    keywords: ["고졸 검정고시 과목", "검정고시 합격 기준"]
  },
  highUniv: {
    title: "대학 진학 정보를 확인해요.",
    summary: "대학마다 검정고시 성적 반영 방식과 제출 서류가 다를 수 있어요.",
    baseInfo: ["대학 지원 방법", "검정고시 성적 반영", "대학 제출 서류", "입학처 모집요강"],
    baseActions: ["모집요강이 가장 정확해요.", "잘 모르겠으면 입학처에 직접 물어보는 게 안전해요."],
    steps: ["지원할 대학을 골라요.", "모집요강에서 검정고시를 검색해요.", "내야 할 서류를 체크해요."],
    keywords: ["검정고시 출신 대학 지원", "정시 수능 원서접수"]
  },
  highJob: {
    title: "직업훈련과 일할 준비를 확인해요.",
    summary: "고등학교 졸업 학력이 있으면 직업훈련, 자격증, 직장체험을 알아볼 수 있어요.",
    baseInfo: ["직업훈련 프로그램", "자격증 준비", "직장체험", "청소년 근로 서류"],
    baseActions: ["채용보다 준비 프로그램을 먼저 확인하면 덜 막막해요.", "만 18세 미만은 보호자 동의서가 필요할 수 있어요."],
    steps: ["관심 있는 직업 분야를 적어봐요.", "꿈드림이나 직업훈련 프로그램을 찾아봐요.", "근로에 필요한 서류를 확인해요."],
    keywords: ["청소년 국비 직업훈련", "고용24 청소년 인턴"]
  },
  goalless: {
    title: "아직 목표를 정하지 않아도 괜찮아요.",
    summary: "천천히 정보들을 살펴보고, 혼자 정하기 어려우면 상담 센터에 먼저 물어보세요.",
    baseInfo: ["검정고시가 뭔지", "학교 밖 청소년 지원 제도", "상담받을 수 있는 곳"],
    baseActions: ["지금 결정하지 않아도 늦지 않아요.", "궁금한 것부터 하나씩 살펴봐요."],
    steps: ["궁금한 것부터 하나씩 체크해봐요.", "꿈드림 센터에 상담을 신청해요.", "준비가 되면 다시 돌아와 목표를 선택해요."],
    keywords: ["꿈드림 센터 상담", "학교밖청소년지원센터"]
  }
};

const goalCopy = {
  exam: {
    label: "검정고시가 뭔지",
    info: "검정고시 뜻과 시험 흐름",
    action: "일정, 과목, 합격 기준을 먼저 봐요.",
    step: "검정고시 기본 정보를 확인해요.",
    detail: [
      "초졸·중졸·고졸 3종류가 있고, 합격하면 해당 학교급 졸업 학력을 인정받아요.",
      "전 과목 평균 60점 이상이면 합격이고 과락 제도는 없어요. 단, 결시 과목이 있으면 불합격이에요.",
      "떨어져도 60점 이상 받은 과목은 '과목합격'으로 남아서 다음 회차엔 그 과목을 다시 안 봐도 돼요.",
      "응시료는 무료예요."
    ]
  },
  examDocs: {
    label: "시험 신청할 때 낼 서류",
    info: "시험 신청할 때 내는 서류",
    action: "이 서류는 대학 서류와 달라요.",
    step: "교육청 공고에서 신청 서류를 확인해요.",
    detail: [
      "응시원서 1부 (현장 또는 온라인 작성)",
      "사진 2매 — 3.5cm × 4.5cm, 최근 3개월 이내 촬영",
      "최종학력증명서 1부 — 이전 학교급 졸업증명서 또는 제적·정원외 관리증명서",
      "신분증(지참만, 제출은 안 함), 과목 면제 대상이면 과목합격증명서·자격증 사본"
    ]
  },
  highSchool: {
    label: "고등학교 진학 방법",
    info: "중졸 검정고시 합격 후 고등학교 진학",
    action: "학교마다 입학 상담 방식이 다를 수 있어요.",
    step: "고등학교 진학 가능 경로를 확인해요.",
    detail: [
      "다니고 싶은 학교에 결원이 있으면 재입학·편입학이 가능해요 — 보통 학기 시작 전(2월, 8월)에 받아요.",
      "거주지 교육지원청 중등교육과에 연락하면 결원 있는 학교를 안내받을 수 있어요.",
      "매일 등교가 어려우면 방송통신고등학교(주말 등교)나 학력인정 평생교육시설도 정식 고졸 학력이 나와요."
    ]
  },
  college: {
    label: "대학 지원 방법",
    info: "대학 지원 방법",
    action: "수시와 정시 중 어떤 전형인지 확인해요.",
    step: "관심 대학 모집요강을 열어봐요.",
    detail: [
      "수시모집: 내신·학생부·면접 중심, 보통 9월 원서접수. 검정고시 출신은 내신이 없어 지원 가능한 전형이 제한돼요.",
      "정시모집: 수능 성적 중심, 수능은 보통 11월 셋째 주 목요일, 원서접수는 12월 말~1월 초. 검정고시 출신에게 가장 일반적인 경로예요.",
      "정확한 날짜는 매년 한국대학교육협의회(대교협) 공고로 확인하세요."
    ]
  },
  collegeDocs: {
    label: "대학에 낼 서류",
    info: "대학에 내는 서류",
    action: "합격증명서, 성적증명서가 필요할 수 있어요.",
    step: "대학별 제출 서류를 따로 체크해요.",
    detail: [
      "검정고시 합격증명서·성적증명서(대입전형용) — 일반 발급용과 다르니 용도를 꼭 확인하세요.",
      "학생부종합전형은 학교생활기록부 대신 학교가 정한 대체서식과 증빙자료를 요구할 수 있어요.",
      "정확한 제출 서류와 형식은 대학마다 달라 모집요강에서 최종 확인이 필요해요."
    ]
  },
  work: {
    label: "일할 준비 방법",
    info: "일할 준비와 직업훈련",
    action: "바로 취업보다 나이, 서류, 훈련 지원을 먼저 확인해요.",
    step: "직업체험이나 직업훈련 지원을 알아봐요.",
    detail: [
      "순서: 1) 고용24 직업심리검사로 방향 정하기 → 2) 큐넷에서 기능사 자격증 준비 → 3) 국민내일배움카드로 직업훈련 → 4) 고용센터에서 이력서·면접 준비.",
      "만 18세 미만은 근로계약 시 친권자·후견인 동의서와 가족관계증명서가 필요해요.",
      "하루 7시간·주 35시간을 넘겨 일할 수 없고, 야간·휴일 근로는 원칙적으로 금지예요."
    ]
  },
  support: {
    label: "도움받을 곳",
    info: "도움받을 수 있는 곳",
    action: "학교밖청소년지원센터나 입학처 상담을 활용해요.",
    step: "혼자 막히는 부분은 상담처에 물어봐요.",
    detail: [
      "청소년지원센터 꿈드림 — 만 9~24세 학교 밖 청소년 대상, 검정고시 준비와 교재비·상담을 지원해요.",
      "혼자 정하기 어려우면 진학·검정고시·취업 경로를 상담사와 같이 비교해볼 수 있어요.",
      "대학 진학을 구체적으로 고민 중이면 해당 대학 입학처 상담도 함께 활용하세요."
    ]
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

const goalOptionsByLevel = {
  elem: [
    { value: "school", icon: "🏫", title: "중학교 진학", sub: "학교로 돌아가고 싶어요" },
    { value: "ged", icon: "📝", title: "검정고시", sub: "시험으로 학력을 인정받고 싶어요" },
    { value: "none", icon: "🤔", title: "아직 목표 없음", sub: "천천히 정해도 괜찮아요" }
  ],
  mid: [
    { value: "school", icon: "🏫", title: "고등학교 진학", sub: "학교로 돌아가고 싶어요" },
    { value: "ged", icon: "📝", title: "검정고시", sub: "시험으로 학력을 인정받고 싶어요" },
    { value: "none", icon: "🤔", title: "아직 목표 없음", sub: "천천히 정해도 괜찮아요" }
  ],
  high: [
    { value: "univ", icon: "🎓", title: "대학교 진학", sub: "더 공부하고 싶어요" },
    { value: "job", icon: "💼", title: "취업", sub: "일을 시작하고 싶어요" },
    { value: "none", icon: "🤔", title: "아직 목표 없음", sub: "천천히 정해도 괜찮아요" }
  ]
};

const statusKeyMap = {
  elem: { school: "elemSchool", ged: "elemGed", none: "goalless" },
  mid: { school: "midSchool", ged: "midGed", none: "goalless" },
  high: { univ: "highUniv", job: "highJob", none: "goalless" }
};

const RECOMMENDED_GOALS_BY_Q2 = {
  ged: ["exam", "examDocs", "support"],
  school: ["highSchool", "support"],
  univ: ["college", "collegeDocs", "support"],
  job: ["work", "support"],
  none: ["exam", "support"]
};

function updateGoalRecommendations() {
  const recommended = RECOMMENDED_GOALS_BY_Q2[statusState.goal] || null;
  document.querySelectorAll('input[name="goal"]').forEach((input) => {
    const label = input.closest(".opt-card--check");
    if (!recommended) {
      label.hidden = false;
      return;
    }
    const isRecommended = recommended.includes(input.value);
    label.hidden = !isRecommended;
    input.checked = isRecommended;
  });
}

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

function searchLinksHTML(keywords) {
  if (!keywords || !keywords.length) return "";
  const chips = keywords.map((kw) =>
    `<a href="https://search.naver.com/search.naver?query=${encodeURIComponent(kw)}" target="_blank" rel="noopener noreferrer">${esc(kw)} 검색</a>`
  ).join("");
  return `<h4>이런 키워드로 검색해보세요</h4><div class="search-chips">${chips}</div>`;
}

function compiledGoalsHTML(selectedGoals) {
  if (!selectedGoals.length) return "";
  const blocks = selectedGoals.map((key) => {
    const item = goalCopy[key];
    const detailItems = (item.detail || []).map((d) => `<li>${esc(d)}</li>`).join("");
    return `<div class="compiled-block"><h5>${esc(item.label)}</h5><ul class="plain">${detailItems}</ul></div>`;
  }).join("");
  return `<h4>선택한 "알고 싶은 것" 자세히 보기</h4>${blocks}`;
}

function compiledUniversitiesHTML(selectedSchools) {
  if (!selectedSchools.length) return "";
  const cards = selectedSchools.map((key) => {
    const s = universities[key];
    return `
      <div class="compiled-block">
        <h5>${esc(s.name)} <span class="tag-mini">${esc(s.type)}</span></h5>
        <p class="detail-lead">${esc(s.focus)}</p>
        ${s.note ? `<p class="note-mini">${esc(s.note)}</p>` : ""}
        <a class="university-card__link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">공식 입학처 바로가기 →</a>
      </div>
    `;
  }).join("");
  return `<h4>선택한 "궁금한 대학" 자세히 보기</h4>${cards}`;
}

const UNIV_TYPICAL_TIMELINE = [
  { label: "수시모집 원서접수", timing: "9월 초" },
  { label: "대학수학능력시험(수능)", timing: "11월 셋째 주 목요일" },
  { label: "정시모집 원서접수", timing: "12월 말~1월 초" }
];

function typicalTimelineHTML(items) {
  const rows = items.map((it) => `<li>${esc(it.label)}: <strong>${esc(it.timing)}</strong></li>`).join("");
  return `<div class="schedule-round"><strong>일반적인 시기</strong> <span class="tag-mini">매년 조금씩 달라짐</span><ul class="plain">${rows}</ul></div>`;
}

function flattenExamEvents() {
  const events = [];
  EXAM_SCHEDULE.forEach((rnd) => {
    rnd.events.forEach((ev) => {
      events.push({ date: ev.date, label: `${rnd.round} ${ev.label}` });
    });
  });
  return events;
}

/* =========================================================
   로드맵 (상황·목표별 맞춤 타임라인)
   ========================================================= */

function roadmapStepsHTML(items) {
  return items.map((it, idx) => {
    const isLast = idx === items.length - 1;
    return `
      <div class="roadmap__item">
        <div class="roadmap__rail">
          <div class="roadmap__dot">${idx + 1}</div>
          ${isLast ? "" : '<div class="roadmap__line"></div>'}
        </div>
        <div class="roadmap__body">
          ${it.when ? `<div class="roadmap__when">${esc(it.when)}</div>` : ""}
          <p class="roadmap__title">${esc(it.title)}</p>
          ${it.desc ? `<p class="roadmap__desc">${esc(it.desc)}</p>` : ""}
        </div>
      </div>
    `;
  }).join("");
}

function roadmapForStatus(statusKey) {
  if (statusKey === "elemGed" || statusKey === "midGed") {
    const items = EXAM_SCHEDULE.flatMap((rnd) =>
      rnd.events.map((ev) => {
        const guess = ev.certainty === "guess";
        const range = ev.end ? ` ~ ${fmtDate(ev.end)}` : "";
        return {
          when: `${fmtDate(ev.date)}${range}`,
          title: `${rnd.round} ${ev.label}`,
          desc: guess ? "예상 일정이에요" : "확정된 일정이에요"
        };
      })
    );
    items.push({
      title: "합격하면 다음 단계로",
      desc: statusKey === "elemGed"
        ? "고등학교 진학이나 고졸 검정고시 중 하나를 다시 선택해보세요"
        : "대학 진학이나 취업 준비 중 하나를 다시 선택해보세요"
    });
    return roadmapStepsHTML(items);
  }

  if (statusKey === "highUniv") {
    const items = [{ title: "목표 대학·전형 정하기", desc: "학생부종합 / 논술 / 정시 중 어디에 해당하는지 확인해요" }]
      .concat(UNIV_TYPICAL_TIMELINE.map((it) => ({ when: it.timing, title: it.label, desc: "정확한 날짜는 매년 대교협 공고로 확인하세요" })));
    return roadmapStepsHTML(items);
  }

  return roadmapStepsHTML(statusCopy[statusKey].steps.map((s) => ({ title: s })));
}

function buildICS(events, calName) {
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", `PRODID:-//AxTon//${calName}//KO`];
  events.forEach((ev, idx) => {
    const dt = ev.date.replace(/-/g, "");
    lines.push(
      "BEGIN:VEVENT",
      `UID:axton-${dt}-${idx}@campus-axton`,
      `DTSTAMP:${dt}T000000Z`,
      `DTSTART;VALUE=DATE:${dt}`,
      `SUMMARY:${ev.label}`,
      "END:VEVENT"
    );
  });
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

function downloadICS(events, filename, calName) {
  const ics = buildICS(events, calName);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function examDetailHTML(examKey) {
  const e = EXAM_TYPES[examKey];
  const docs = EXAM_DOCS_BY_LEVEL[examKey].map((d) => `<li>${esc(d)}</li>`).join("");
  return `
    <h4>내가 볼 시험</h4>
    <p class="detail-lead"><strong>${esc(e.name)}</strong> — 합격하면 ${esc(e.gives)}을 인정받아요. <strong>응시료는 무료</strong>입니다.</p>
    <table class="info-mini">
      <tr><th>응시자격</th><td>${esc(e.whoFor)}</td></tr>
      <tr><th>과목</th><td>${esc(e.count)} · ${esc(e.subjects)}</td></tr>
      <tr><th>시험시간</th><td>${esc(e.time)}</td></tr>
    </table>
    <p class="note-mini">전 과목 평균 60점 이상이면 합격(과락 없음). 결시 과목이 있으면 불합격이고, 60점 이상 받은 과목은 다음 회차에 다시 안 봐도 되는 '과목합격'으로 남아요.</p>
    <h4>일정 로드맵 (마감 놓치지 마세요)</h4>
    ${scheduleHTML()}
    <button type="button" id="icsDownloadBtn" class="btn-ics">📅 이 일정 캘린더에 저장(.ics)</button>
    <h4>접수할 때 필요한 것</h4>
    <ul class="plain">${docs}</ul>
    <h4>지금 할 일 — 여기서 접수하세요</h4>
    ${linksHTML(["apply"])}
    <p class="note-mini">정확한 최신 일정은 거주지 시·도교육청 홈페이지에서 "검정고시 공고"를 검색해 다시 확인하세요.</p>
    <div class="consult-callout">
      <h4>전화 상담이 어려우면</h4>
      <p>일하느라 유선 상담 시간을 맞추기 어렵다면, 청소년지원센터 꿈드림을 이용해보세요. 센터에 따라 방문·온라인 게시판 상담도 운영해요.</p>
      ${linksHTML(["center"])}
    </div>
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

function admissionTypesHTML() {
  return `
    <h4>합격 후 대학에 가고 싶다면</h4>
    <table class="info-mini">
      <tr><th>학생부교과전형</th><td>내신 등급 기준으로 선발해서, 검정고시 출신은 대부분 지원이 제한돼요.</td></tr>
      <tr><th>학생부종합전형</th><td>지원 가능해요. 학교생활기록부 대신 대학이 정한 대체서식(활동 5개 내외 + 증빙자료)을 내요.</td></tr>
      <tr><th>논술전형</th><td>지원 가능해요. 대학마다 논술 성적 100% 또는 논술+비교내신(검정고시 평균 점수 환산)을 함께 반영해요.</td></tr>
      <tr><th>정시전형</th><td>수능 성적 중심이라 차별 없이 지원 가능해요.</td></tr>
    </table>
    <p class="note-mini">전형 이름과 반영 방법은 대학마다 달라요. 목표 대학이 생기면 이 네 가지 중 어디에 해당하는지 그 대학 모집요강에서 확인하세요.</p>
  `;
}

const statusDetailHTML = {
  elemGed: () => examDetailHTML("mid"),
  midGed: () => examDetailHTML("high") + admissionTypesHTML(),
  elemSchool: () => `
    <h4>어떻게 하면 되나요</h4>
    <ul class="plain">
      <li>거주지 교육지원청 또는 다니고 싶은 중학교에 문의하면 재입학 절차를 안내받아요</li>
      <li>중학교는 의무교육이라 학력 조건 없이 초등학교 졸업만 있으면 들어갈 수 있어요</li>
      <li>나이 차이가 걱정되면 방송통신중학교도 선택지예요 (주말 등교, 학력 인정)</li>
    </ul>
    <p class="note-mini">다니다 그만둔 학교가 있다면 학적 정리 상태(제적/정원외 관리)에 따라 절차가 달라지니 교육지원청에 먼저 확인하세요.</p>
    ${linksHTML(["center"])}
  `,
  midSchool: () => `
    <h4>어떻게 하면 되나요</h4>
    <ul class="plain">
      <li>다니고 싶은 학교에 결원이 있는지 먼저 확인해요 — 보통 학기 시작 전(2월, 8월)에 재입학·편입학을 받아요</li>
      <li>거주지 교육지원청 중등교육과에 연락하면 결원 있는 학교를 안내받을 수 있어요</li>
      <li>매일 등교가 어려우면 방송통신고등학교(주말 등교)나 학력인정 평생교육시설도 정식 고졸 학력이 나와요</li>
    </ul>
    <p class="note-mini">다니다 그만둔 학교가 있다면 학적 정리 상태(제적/정원외 관리)에 따라 절차가 달라지니 교육지원청에 먼저 확인하세요.</p>
    ${linksHTML(["hischool", "center"])}
  `,
  highUniv: () => `
    <h4>두 가지 길</h4>
    <table class="info-mini">
      <tr><th>수시모집</th><td>내신·학생부·면접 중심, 보통 9월 원서접수. 검정고시 출신은 내신이 없어 지원 가능한 전형이 제한되니 대학별로 꼭 확인하세요.</td></tr>
      <tr><th>정시모집</th><td>수능 성적 중심, 수능은 보통 11월 셋째 주 목요일. 검정고시 출신에게 가장 일반적인 경로예요.</td></tr>
    </table>
    <p class="note-mini">수능 응시원서는 8월 말~9월 초 접수, 학교 소속이 없으면 거주지 교육지원청에서 개인 접수합니다.</p>
    <h4>일정 로드맵</h4>
    ${typicalTimelineHTML(UNIV_TYPICAL_TIMELINE)}
    <p class="note-mini">정확한 날짜는 매년 한국대학교육협의회(대교협) 공고로 달라져요. 위 시기는 일반적인 패턴이라 캘린더 저장은 지원하지 않아요 — 확정되면 직접 등록해주세요.</p>
    ${linksHTML(["adiga", "kosaf", "center"])}
  `,
  highJob: workDetailHTML,
  goalless: () => `
    <h4>이렇게 시작해보세요</h4>
    <ul class="plain">
      <li>검정고시가 뭔지부터 가볍게 살펴봐요 — 위 "알고 싶은 것"에서 체크해보세요</li>
      <li>혼자 정하기 막막하면 꿈드림 센터 상담을 먼저 받아보는 것도 좋아요</li>
      <li>목표가 생기면 위에서 다시 선택해서 맞춤 안내를 받아보세요</li>
    </ul>
    <p class="note-mini">지금 당장 정하지 않아도 괜찮아요. 준비가 됐을 때 다시 돌아와도 늦지 않아요.</p>
    ${linksHTML(["center"])}
  `
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
const selectedDetails = document.querySelector("#selectedDetails");
const roadmapSlot = document.querySelector("#roadmapSlot");

document.querySelectorAll(".accordion__trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = document.getElementById(btn.dataset.panel);
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    btn.classList.toggle("is-open", willOpen);
  });
});

const stepLevel = document.querySelector("#stepLevel");
const stepGoal = document.querySelector("#stepGoal");
const stepGoalOptions = document.querySelector("#stepGoalOptions");

const statusState = { level: null, goal: null };
let activeICSPayload = null;

const STATUS_STORAGE_KEY = "axton_status_v1";
const NOTES_STORAGE_KEY = "axton_notes_v1";

function saveStatusState() {
  try {
    localStorage.setItem(STATUS_STORAGE_KEY, JSON.stringify(statusState));
  } catch (e) {
    /* localStorage unavailable (private mode etc.) — safe to ignore */
  }
}

function currentStatusKey() {
  if (!statusState.level || !statusState.goal) return null;
  return statusKeyMap[statusState.level][statusState.goal];
}

function setActiveOption(group, value) {
  document.querySelectorAll(`.opt-card[data-group="${group}"]`).forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.value === value);
  });
}

function renderGoalOptions() {
  stepGoalOptions.innerHTML = "";
  goalOptionsByLevel[statusState.level].forEach(({ value, icon, title, sub }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opt-card";
    btn.dataset.group = "q2";
    btn.dataset.value = value;
    btn.innerHTML = `<span class="opt-card__ico" aria-hidden="true">${icon}</span><span class="opt-card__txt"><strong>${esc(title)}</strong><span>${esc(sub)}</span></span>`;
    stepGoalOptions.appendChild(btn);
  });
}

stepLevel.addEventListener("click", (event) => {
  const btn = event.target.closest(".opt-card");
  if (!btn) return;
  statusState.level = btn.dataset.value;
  statusState.goal = null;
  setActiveOption("level", statusState.level);
  renderGoalOptions();
  stepGoal.hidden = false;
  updateGoalRecommendations();
  saveStatusState();
  updateResult();
});

stepGoalOptions.addEventListener("click", (event) => {
  const btn = event.target.closest(".opt-card");
  if (!btn) return;
  statusState.goal = btn.dataset.value;
  setActiveOption("q2", statusState.goal);
  updateGoalRecommendations();
  saveStatusState();
  updateResult();
});

function restoreStatusState() {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(STATUS_STORAGE_KEY) || "null");
  } catch (e) {
    return;
  }
  if (!saved || !saved.level || !goalOptionsByLevel[saved.level]) return;

  statusState.level = saved.level;
  setActiveOption("level", statusState.level);
  renderGoalOptions();
  stepGoal.hidden = false;

  if (saved.goal && statusKeyMap[saved.level][saved.goal]) {
    statusState.goal = saved.goal;
    setActiveOption("q2", statusState.goal);
  }
  updateGoalRecommendations();
}

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

const PRIORITY_LABELS = ["지금 바로", "이어서", "그 다음"];

function renderPrioritySteps(target, items, limit = 3) {
  target.innerHTML = "";
  [...new Set(items)].slice(0, limit).forEach((item, idx) => {
    const li = document.createElement("li");
    const tag = document.createElement("span");
    tag.className = "priority-tag";
    tag.textContent = PRIORITY_LABELS[idx] || `${idx + 1}순위`;
    li.appendChild(tag);
    li.appendChild(document.createTextNode(item));
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
    summaryText.textContent = "최종 학력과 앞으로의 목표를 고르면 맞춤 안내가 나와요.";
    detailSections.innerHTML = "";
    selectedDetails.innerHTML = "";
    roadmapSlot.innerHTML = "";
    activeICSPayload = null;
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

  activeICSPayload = (statusKey === "elemGed" || statusKey === "midGed")
    ? { events: flattenExamEvents(), filename: "검정고시_일정.ics", calName: "검정고시 일정" }
    : null;

  const detailRenderer = statusDetailHTML[statusKey];
  detailSections.innerHTML = detailRenderer ? detailRenderer() : "";
  selectedDetails.innerHTML = searchLinksHTML(statusData.keywords)
    + compiledGoalsHTML(goals)
    + compiledUniversitiesHTML(selectedSchools);
  roadmapSlot.innerHTML = roadmapForStatus(statusKey);

  renderPrioritySteps(topSteps, stepItems, 3);
  renderList(infoList, infoItems, 5);
  renderList(actionList, actionItems, 5);
  renderUniversities(selectedSchools);
}

detailSections.addEventListener("click", (event) => {
  const btn = event.target.closest("#icsDownloadBtn");
  if (!btn || !activeICSPayload) return;
  downloadICS(activeICSPayload.events, activeICSPayload.filename, activeICSPayload.calName);
});

const extraNotes = document.querySelector("#extraNotes");
if (extraNotes) {
  try {
    extraNotes.value = localStorage.getItem(NOTES_STORAGE_KEY) || "";
  } catch (e) {
    /* ignore */
  }
  extraNotes.addEventListener("input", () => {
    try {
      localStorage.setItem(NOTES_STORAGE_KEY, extraNotes.value);
    } catch (e) {
      /* ignore */
    }
  });
}

const situationView = document.querySelector("#situationView");
const detailsView = document.querySelector("#detailsView");
const inputError = document.querySelector("#inputError");

document.querySelector("#btnShowDetails").addEventListener("click", () => {
  if (!currentStatusKey()) {
    inputError.classList.add("show");
    return;
  }
  inputError.classList.remove("show");
  updateResult();
  situationView.hidden = true;
  detailsView.hidden = false;
  detailsView.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#btnBackToSituation").addEventListener("click", () => {
  detailsView.hidden = true;
  situationView.hidden = false;
  situationView.scrollIntoView({ behavior: "smooth", block: "start" });
});

form.addEventListener("change", updateResult);
restoreStatusState();
updateResult();
