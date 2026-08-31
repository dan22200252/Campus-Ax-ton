const statusCopy = {
  elemSchool: {
    title: "중학교 진학을 준비해요.",
    summary: "중학교는 의무교육이라 나이와 상관없이 다시 다닐 수 있고, 학비도 들지 않아요.",
    baseInfo: ["중학교 재입학 절차", "학교 유형", "방송통신중학교", "필요 서류"],
    baseActions: ["학적 정리 상태(제적/정원외 관리)에 따라 절차가 달라져요.", "거주지 교육지원청에 먼저 확인하는 게 안전해요."],
    steps: ["거주지 교육지원청이나 다니고 싶은 학교에 재입학 절차를 물어봐요.", "나이 차이가 걱정되면 방송통신중학교도 알아봐요.", "학교 기록이 어떻게 남아 있는지 먼저 확인해요."],
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
    summary: "학교로 돌아가는 방법은 여러 가지예요. 다시 들어가기, 방송통신고등학교, 평생교육시설 모두 고등학교 졸업으로 인정돼요.",
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
    summary: "대학마다 검정고시 성적 반영 방식과 낼 서류가 다를 수 있어요.",
    baseInfo: ["대학 지원 방법", "검정고시 성적 반영", "대학 낼 서류", "입학처 모집요강"],
    baseActions: ["학교가 내는 신입생 모집 안내(모집요강)가 가장 정확해요.", "잘 모르겠으면 입학처에 직접 물어보는 게 안전해요."],
    steps: ["지원할 대학을 골라요.", "신입생 모집 안내(모집요강)에서 '검정고시'를 찾아봐요.", "내야 할 서류를 체크해요."],
    keywords: ["검정고시 출신 대학 지원", "정시 수능 원서접수"]
  },
  highJob: {
    title: "직업훈련과 일할 준비를 확인해요.",
    summary: "고등학교 졸업 학력이 있으면 직업훈련, 자격증, 직장체험을 알아볼 수 있어요.",
    baseInfo: ["직업훈련 프로그램", "자격증 준비", "직장체험", "청소년 근로 서류"],
    baseActions: ["채용보다 준비 프로그램을 먼저 확인하면 덜 막막해요.", "만 18세가 안 됐으면 보호자 동의서가 필요할 수 있어요."],
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
      "모든 과목 평균이 60점을 넘으면 합격이에요. 한 과목 점수가 낮아도 평균만 넘으면 괜찮아요. 단, 한 과목이라도 안 보면 떨어져요.",
      "떨어져도 60점을 넘은 과목은 남아요. 다음에 시험 볼 때 그 과목은 다시 안 봐도 돼요.",
      "시험 비용은 없어요."
    ]
  },
  examDocs: {
    label: "시험 신청할 때 낼 서류",
    info: "시험 신청할 때 내는 서류",
    action: "이 서류는 대학 서류와 달라요.",
    step: "교육청 공고에서 신청 서류를 확인해요.",
    detail: [
      "시험 신청서 1부 (현장에서 쓰거나 온라인으로 작성)",
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
      "다니고 싶은 학교에 빈 자리가 있으면 다시 들어갈 수 있어요. 보통 2월과 8월, 학기 시작 전에 받아요.",
      "거주지 교육지원청 중등교육과에 연락하면 빈 자리가 있는 학교를 안내받을 수 있어요.",
      "매일 학교에 가기 어렵다면 방송통신고등학교가 있어요. 주말에만 나가면 돼요. 평생교육시설도 고등학교 졸업으로 인정돼요."
    ]
  },
  college: {
    label: "대학 지원 방법",
    info: "대학 지원 방법",
    action: "수시와 정시 중 어떤 전형인지 확인해요.",
    step: "관심 대학 모집요강을 열어봐요.",
    detail: [
      "수시는 보통 9월에 신청해요. 학교 성적과 학교생활기록부, 면접으로 뽑아요. 검정고시 출신은 학교 성적이 없어서 지원할 수 있는 전형이 적어요.",
      "정시는 수능 점수로 뽑아요. 수능은 보통 11월 셋째 주 목요일이에요. 신청은 12월 말부터 1월 초까지예요. 검정고시 출신이 가장 많이 가는 길이에요.",
      "정확한 날짜는 매년 한국대학교육협의회(대교협) 공고로 확인하세요."
    ]
  },
  collegeDocs: {
    label: "대학에 낼 서류",
    info: "대학에 내는 서류",
    action: "합격증명서, 성적증명서가 필요할 수 있어요.",
    step: "대학별 낼 서류를 따로 체크해요.",
    detail: [
      "검정고시 합격증명서·성적증명서(대입전형용) — 일반 발급용과 다르니 용도를 꼭 확인하세요.",
      "학생부종합전형은 학교생활기록부가 없어도 돼요. 대신 학교가 정한 다른 서류와 증명 자료를 내야 해요.",
      "낼 서류와 형식은 대학마다 달라요. 그 학교 모집 안내에서 마지막으로 확인해야 해요."
    ]
  },
  work: {
    label: "일할 준비 방법",
    info: "일할 준비와 직업훈련",
    action: "바로 취업보다 나이, 서류, 훈련 지원을 먼저 확인해요.",
    step: "직업체험이나 직업훈련 지원을 알아봐요.",
    detail: [
      "이 순서로 해보세요. 1) 고용24에서 직업심리검사로 방향 정하기 2) 큐넷에서 기능사 자격증 준비 3) 국민내일배움카드로 직업훈련 4) 고용센터에서 이력서와 면접 준비.",
      "만 18세가 안 됐으면 일을 시작할 때 보호자 동의서와 가족관계증명서가 필요해요.",
      "하루 7시간·주 35시간을 넘겨 일할 수 없고, 밤이나 휴일에는 일할 수 없어요."
    ]
  },
  support: {
    label: "도움받을 곳",
    info: "도움받을 수 있는 곳",
    action: "학교밖청소년지원센터나 입학처에 물어봐요.",
    step: "혼자 막히는 부분은 상담처에 물어봐요.",
    detail: [
      "청소년지원센터 꿈드림은 만 9세부터 24세까지 학교 밖 청소년을 돕는 곳이에요. 검정고시 준비와 교재비, 상담을 지원해요. 가까운 센터는 청소년상담 1388(전화 1388)로 물어보면 안내받을 수 있어요.",
      "혼자 정하기 어려우면 진학·검정고시·취업 경로를 상담사와 같이 비교해볼 수 있어요.",
      "대학 진학을 구체적으로 고민 중이면 해당 대학 입학처 상담도 함께 활용하세요."
    ]
  }
};

const universities = {
  postech: {
    name: "포항공과대학교",
    type: "4년제 · 학종만 운영",
    focus: "수시 학생부종합전형만 뽑아요. 정시와 논술은 없어요. 검정고시 합격자도 일반전형으로 지원할 수 있어요.",
    note: "농어촌 특별전형 등 조건이 붙은 이런 전형은 검정고시나 특목고 출신은 지원할 수 없어요.",
    url: "https://adm-u.postech.ac.kr/entrance-exam/guide/"
  },
  handong: {
    name: "한동대학교",
    type: "4년제 · 수시·정시 모두",
    focus: "검정고시 합격증명서·성적증명서(대입전형용) 제출이 필요해요.",
    note: "지원하기 전에 kged.go.kr에서 학교에 성적을 보내도 된다고 동의해요. 그때 받는 확인번호를 미리 챙겨둬야 해요.",
    url: "https://admissions.handong.edu/early/notice/"
  },
  sunlin: {
    name: "선린대학교",
    type: "전문대",
    focus: "전문대학 공통 지원자격상 검정고시 합격자도 지원할 수 있어요.",
    note: "학교마다 다른 조건이 있을 수 있어요. 그 학교 모집 안내에서 직접 확인하세요.",
    url: "https://admission.sunlin.ac.kr/"
  },
  pohang: {
    name: "포항대학교",
    type: "전문대",
    focus: "전문대학 공통 지원자격상 검정고시 합격자도 지원할 수 있어요.",
    note: "학교마다 다른 조건이 있을 수 있어요. 그 학교 모집 안내에서 직접 확인하세요.",
    url: "https://ipsi.pohang.ac.kr/"
  },
  polytech: {
    name: "한국폴리텍대학 포항캠퍼스",
    type: "나라에서 돈을 내주는 직업훈련 · 졸업장 없음",
    focus: "졸업장이 나오는 2년제 과정은 아니에요. 나라에서 돈을 내주는 무료 직업훈련이 중심이에요.",
    note: "졸업장이 필요하면 다른 학교와 함께 고려하세요. 검정고시 성적을 환산 입력하는 도구는 별도로 있어요.",
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
    whoFor: "초등학교 졸업자, 초졸 검정고시 합격자, 중학교에서 학교 기록이 '정원외 관리'로 남아 있는 사람",
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
    "시험 신청서 1부 (현장에서 쓰거나 온라인으로 작성)",
    "사진 2매 — 3.5cm × 4.5cm, 최근 3개월 이내 촬영",
    "최종학력증명서 1부 — 초등학교 졸업증명서 또는 중학교 제적·정원외 관리증명서",
    "신분증 (지참만, 제출 안 함)",
    "과목 면제 대상이면 과목합격증명서·자격증 사본"
  ],
  high: [
    "시험 신청서 1부 (현장에서 쓰거나 온라인으로 작성)",
    "사진 2매 — 3.5cm × 4.5cm, 최근 3개월 이내 촬영",
    "최종학력증명서 1부 — 중학교 졸업증명서 또는 고등학교 제적증명서",
    "신분증 (지참만, 제출 안 함)",
    "과목 면제 대상이면 과목합격증명서·자격증 사본"
  ]
};

const EXAM_LINKS = {
  apply: { url: "https://kged.go.kr", title: "검정고시 온라인 원서접수 (나이스)", desc: "공동인증서 로그인 → 시·도교육청 선택 → 원서 작성" },
  notice: { url: "https://www.sen.go.kr/user/bbs/BD_selectBbsList.do?q_bbsSn=1097", title: "서울시교육청 검정고시 공고", desc: "확정 일정·시험장 확인 (타 지역은 해당 교육청 누리집)" },
  center: { url: "https://www.1388.go.kr", title: "청소년상담 1388", desc: "전화 1388 · 24시간 채팅 상담 · 지역 꿈드림 센터를 안내받을 수 있어요" },
  mogef: { url: "https://www.mogef.go.kr", title: "여성가족부 — 학교 밖 청소년 지원", desc: "꿈드림 사업 안내 · 만 9~24세 검정고시 준비, 교재비·상담 지원" },
  hischool: { url: "https://www.hischool.go.kr", title: "고입정보포털 하이스쿨", desc: "고등학교 종류·전형·모집 일정 확인" },
  work: { url: "https://www.work24.go.kr", title: "고용24 (구 워크넷)", desc: "청소년 취업 지원, 직업훈련(내일배움카드) 신청" },
  adiga: { url: "https://www.adiga.kr", title: "어디가 (대입정보포털)", desc: "대학별 전형·모집요강·입시 일정 확인" },
  kosaf: { url: "https://www.kosaf.go.kr", title: "한국장학재단", desc: "국가장학금·학자금 대출 신청" },
  qnet: { url: "https://www.q-net.or.kr", title: "큐넷 (Q-Net)", desc: "기능사 등 국가기술자격 시험 접수·일정" },
  youth: { url: "https://www.gov.kr", title: "정부24 — 청소년증 발급", desc: "온라인 신청 또는 가까운 읍·면·동 주민센터 방문 신청" }
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

/* '더 알고 싶은 것'을 체크박스 묶음 대신 한 항목당 질문 하나로 물어본다.
   키는 goalCopy의 키와 같아야 한다 — 안내 카드가 그 키로 상세를 찾는다. */
const TOPIC_QUESTIONS = {
  exam: {
    short: "시험",
    icon: "📝",
    q: "검정고시가 어떤 시험인지 알려드릴까요?",
    hint: "시험 종류와 과목, 합격 기준, 비용을 알려줘요.",
    yesSub: "처음이라 기본부터 알고 싶어요",
    noLabel: "이미 알아요"
  },
  examDocs: {
    short: "시험 서류",
    icon: "📄",
    q: "시험 신청할 때 낼 서류를 알려드릴까요?",
    hint: "이 서류는 나중에 대학에 내는 서류와 달라요.",
    yesSub: "무엇을 준비해야 하는지 알고 싶어요",
    noLabel: "이미 알아요"
  },
  highSchool: {
    short: "고등학교",
    icon: "🏫",
    q: "고등학교 진학 방법을 알려드릴까요?",
    hint: "재입학·편입학, 방송통신고 같은 경로를 안내해요.",
    yesSub: "학교로 돌아가는 방법이 궁금해요",
    noLabel: "괜찮아요"
  },
  college: {
    short: "대학",
    icon: "🎓",
    q: "대학 지원 방법을 알려드릴까요?",
    hint: "수시와 정시가 어떻게 다른지, 검정고시 출신은 어디에 지원할 수 있는지 안내해요.",
    yesSub: "어떤 전형으로 갈 수 있는지 알고 싶어요",
    noLabel: "괜찮아요"
  },
  collegeDocs: {
    short: "대학 서류",
    icon: "🗂️",
    q: "대학에 낼 서류를 알려드릴까요?",
    hint: "합격증명서·성적증명서는 용도가 나뉘어 있어서 잘못 발급받기 쉬워요.",
    yesSub: "무엇을 언제 발급받아야 하는지 알고 싶어요",
    noLabel: "괜찮아요"
  },
  work: {
    short: "일자리",
    icon: "💼",
    q: "일할 준비 방법을 알려드릴까요?",
    hint: "직업훈련, 자격증, 청소년이 일할 때 필요한 서류를 안내해요.",
    yesSub: "무엇부터 시작해야 할지 알고 싶어요",
    noLabel: "괜찮아요"
  },
  support: {
    short: "도움",
    icon: "🤝",
    q: "도움받을 수 있는 곳을 알려드릴까요?",
    hint: "꿈드림 센터 상담이나 대학 입학처 상담을 안내해요.",
    yesSub: "혼자 정하기 어려워서 상담받고 싶어요",
    noLabel: "괜찮아요"
  }
};

/* 학력 x 목표 조합에 따라 물어볼 항목이 달라진다.
   경로에 상관없는 항목까지 다 묻지 않으려고 여기서 걸러낸다.
   "자세한 정보 보기"(statusDetailHTML)가 이미 자세히 다루는 주제는
   여기서 또 묻지 않는다 — 안내 카드에서 같은 내용이 두 번 나오는 걸 막기 위해서다.
   예: elemGed/midGed는 examDetailHTML이 exam·examDocs를 이미 다룬다. */
const TOPICS_BY_PATH = {
  elem: {
    ged: ["highSchool", "support"],
    school: ["support"],
    none: ["exam", "support"]
  },
  mid: {
    ged: ["college", "collegeDocs", "support"],
    school: ["support"],
    none: ["exam", "support"]
  },
  high: {
    univ: ["collegeDocs", "support"],
    job: ["support"],
    none: ["exam", "work", "support"]
  }
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

/* 몇 달 뒤 날짜는 연도가 없으면 헷갈린다 — 응시 제한 안내에는 이걸 쓴다 */
function fmtDateY(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const wd = ["일", "월", "화", "수", "목", "금", "토"][new Date(y, m - 1, d).getDay()];
  return `${y}년 ${m}월 ${d}일(${wd})`;
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
    <p class="detail-lead"><strong>${esc(e.name)}</strong> — 합격하면 ${esc(e.gives)}을 인정받아요. <strong>시험 비용은 없어요</strong>.</p>
    <table class="info-mini">
      <tr><th>시험 볼 수 있는 사람</th><td>${esc(e.whoFor)}</td></tr>
      <tr><th>과목</th><td>${esc(e.count)} · ${esc(e.subjects)}</td></tr>
      <tr><th>시험시간</th><td>${esc(e.time)}</td></tr>
    </table>
    <p class="note-mini">모든 과목 평균이 60점을 넘으면 합격이에요. 한 과목 점수가 낮아도 평균만 넘으면 괜찮아요. 대신 한 과목이라도 안 보면 떨어져요.</p>
    <p class="note-mini">떨어져도 60점을 넘은 과목은 남아요. 다음에 시험 볼 때 그 과목은 다시 안 봐도 돼요.</p>
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
      <p>일하느라 전화 상담 시간을 맞추기 어렵다면, 청소년지원센터 꿈드림을 이용해보세요. 센터에 따라 방문·온라인 게시판 상담도 운영해요.</p>
      ${linksHTML(["center", "mogef"])}
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
    <p class="note-mini">만 18세가 안 됐으면 보호자 동의서와 가족관계증명서가 필요해요. 하루 7시간, 일주일 35시간까지만 일할 수 있어요. 밤이나 휴일에는 일할 수 없어요.</p>
    ${linksHTML(["work", "qnet", "center"])}
  `;
}

function admissionTypesHTML() {
  return `
    <h4>합격 후 대학에 가고 싶다면</h4>
    <table class="info-mini">
      <tr><th>학생부교과전형</th><td>내신 등급 기준으로 선발해서, 검정고시 출신은 대부분 지원이 제한돼요.</td></tr>
      <tr><th>학생부종합전형</th><td>지원할 수 있어요. 학교생활기록부 대신 대학이 정한 서류를 내요. 보통 활동 5개쯤과 그걸 증명할 자료예요.</td></tr>
      <tr><th>논술전형</th><td>지원할 수 있어요. 논술 점수만 보는 곳도 있고, 논술과 검정고시 평균 점수를 함께 보는 곳도 있어요.</td></tr>
      <tr><th>정시전형</th><td>수능 성적 중심이라 차별 없이 지원 가능해요.</td></tr>
    </table>
    <p class="note-mini">전형 이름과 점수 계산 방법은 대학마다 달라요. 가고 싶은 대학이 생기면 그 학교 모집 안내에서 확인하세요.</p>
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
    <p class="note-mini">다니다 그만둔 학교가 있으면 학교 기록이 어떻게 남았는지 먼저 확인해요. 기록에 따라 방법이 달라져요. 교육지원청에 물어보면 알려줘요.</p>
    ${linksHTML(["center"])}
  `,
  midSchool: () => `
    <h4>어떻게 하면 되나요</h4>
    <ul class="plain">
      <li>다니고 싶은 학교에 빈 자리가 있는지 먼저 확인해요. 보통 2월과 8월에 받아요</li>
      <li>거주지 교육지원청 중등교육과에 연락하면 빈 자리가 있는 학교를 안내받을 수 있어요</li>
      <li>매일 학교에 가기 어렵다면 방송통신고등학교가 있어요 — 주말에만 나가요</li>
      <li>평생교육시설도 고등학교 졸업으로 인정돼요</li>
    </ul>
    <p class="note-mini">다니다 그만둔 학교가 있으면 학교 기록이 어떻게 남았는지 먼저 확인해요. 기록에 따라 방법이 달라져요. 교육지원청에 물어보면 알려줘요.</p>
    ${linksHTML(["hischool", "center"])}
  `,
  highUniv: () => `
    <h4>두 가지 길</h4>
    <table class="info-mini">
      <tr><th>수시모집</th><td>보통 9월에 신청해요. 학교 성적과 면접으로 뽑아요. 검정고시 출신은 지원할 수 있는 전형이 적으니 대학마다 꼭 확인하세요.</td></tr>
      <tr><th>정시모집</th><td>수능 성적 중심, 수능은 보통 11월 셋째 주 목요일. 검정고시 출신에게 가장 많이 가는 길이에요.</td></tr>
    </table>
    <p class="note-mini">수능 신청은 8월 말부터 9월 초까지예요. 학교에 소속돼 있지 않으면 사는 지역 교육지원청에서 혼자 신청해요.</p>
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
    ${linksHTML(["center", "mogef"])}
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
const universitiesSection = document.querySelector("#universitySection");
const detailSections = document.querySelector("#detailSections");
const selectedDetails = document.querySelector("#selectedDetails");
const roadmapSlot = document.querySelector("#roadmapSlot");
const stepDetail = document.querySelector("#stepDetail");
const stepDetailTag = document.querySelector("#stepDetailTag");
const stepDetailTitle = document.querySelector("#stepDetailTitle");
const stepDetailBody = document.querySelector("#stepDetailBody");

document.querySelectorAll(".accordion__trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = document.getElementById(btn.dataset.panel);
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    btn.classList.toggle("is-open", willOpen);
  });
});

/* 대학 카드의 "주의할 점"은 기본으로 접어 두고 눌렀을 때만 펼친다 */
universityList.addEventListener("click", (event) => {
  const btn = event.target.closest(".university-card__more");
  if (!btn) return;
  const note = btn.nextElementSibling;
  const willOpen = note.hidden;
  note.hidden = !willOpen;
  btn.setAttribute("aria-expanded", String(willOpen));
  btn.textContent = willOpen ? "📌 주의할 점 접기" : "📌 주의할 점 보기";
});

/* =========================================================
   질문 위저드 — 한 화면에 질문 하나, 답하면 다음으로
   ========================================================= */

/* 거주 지역. 데모라 포항만 열려 있고, 지도의 data-region 값과 짝지어져 있다.
   지역을 늘릴 때는 여기와 ENABLED_REGION 두 곳만 손보면 된다. */
const REGIONS = {
  pohang: { name: "포항", area: "경상북도", office: "경상북도교육청" }
};

const ENABLED_REGION = { gyeongbuk: "pohang" };

const statusState = { region: null, level: null, quit: null, quitDate: null, goal: null, youth: null, youthInfo: null, topics: {}, schools: [] };
let activeICSPayload = null;

const STATUS_STORAGE_KEY = "axton_status_v1";
const NOTES_STORAGE_KEY = "axton_notes_v1";
const ROADMAP_STORAGE_KEY = "axton_roadmap_v1";
const AI_NOTES_CACHE_KEY = "axton_ai_notes_v1";

const situationView = document.querySelector("#situationView");
const detailsView = document.querySelector("#detailsView");

const stepGoalOptions = document.querySelector("#stepGoalOptions");
const stepTopicNode = document.querySelector("#stepTopic");
const stepTopicOptions = document.querySelector("#stepTopicOptions");
const qTopic = document.querySelector("#qTopic");
const qTopicHint = document.querySelector("#qTopicHint");
const qTopicCount = document.querySelector("#qTopicCount");
const stepNotesNode = document.querySelector("#stepNotes");
const extraNotes = document.querySelector("#extraNotes");
const aiNotesCard = document.querySelector("#aiNotesCard");
const aiNotesSummary = document.querySelector("#aiNotesSummary");
const aiInfoList = document.querySelector("#aiInfoList");
const aiActionList = document.querySelector("#aiActionList");
const kmapSvg = document.querySelector(".kmap__svg");
const regionHint = document.querySelector("#regionHint");
const regionSelect = document.querySelector("#regionSelect");
const quitDateInput = document.querySelector("#quitDateInput");
const quitDateNote = document.querySelector("#quitDateNote");
const quitYesSub = document.querySelector("#quitYesSub");
const qQuitHint = document.querySelector("#qQuitHint");
const wizNow = document.querySelector("#wizNow");
const wizTotal = document.querySelector("#wizTotal");
const wizBar = document.querySelector("#wizBar");
const btnWizBack = document.querySelector("#btnWizBack");
const btnWizNext = document.querySelector("#btnWizNext");
const wizStepsNav = document.querySelector("#wizSteps");

/* youthInfo는 '청소년증 없어요'일 때만, 항목 질문은 학력x목표가 정해진 뒤에만
   나온다. 그래서 전체 질문 수가 답에 따라 달라진다(현재 4~10개). */
const BASE_STEPS = [
  { id: "region", label: "지역", node: document.querySelector("#stepRegion") },
  { id: "level", label: "학력", node: document.querySelector("#stepLevel") },
  /* 고등학교 졸업자는 이미 졸업했으니 자퇴 질문이 필요 없다 */
  { id: "quit", label: "자퇴", node: document.querySelector("#stepQuit"), when: () => statusState.level === "elem" || statusState.level === "mid" },
  { id: "quitDate", label: "날짜", node: document.querySelector("#stepQuitDate"), when: () => statusState.quit === "yes" && (statusState.level === "elem" || statusState.level === "mid") },
  { id: "goal", label: "목표", node: document.querySelector("#stepGoal") },
  /* 대학 진학이 목표일 때만 궁금한 대학을 고르는 질문을 끼워넣는다 */
  { id: "schools", label: "관심 대학", node: document.querySelector("#stepSchools"), when: () => statusState.goal === "univ" },
  { id: "youth", label: "청소년증", node: document.querySelector("#stepYouth") },
  { id: "youthInfo", label: "발급", node: document.querySelector("#stepYouthInfo"), when: () => statusState.youth === "no" }
];

const ALL_STEP_NODES = [...BASE_STEPS.map((step) => step.node), stepTopicNode, stepNotesNode];

if (quitDateInput) quitDateInput.max = new Date().toISOString().slice(0, 10);

let wizIndex = 0;

function relevantTopics() {
  if (!statusState.level || !statusState.goal) return [];
  const byGoal = TOPICS_BY_PATH[statusState.level];
  return (byGoal && byGoal[statusState.goal]) || [];
}

function selectedTopics() {
  return relevantTopics().filter((key) => statusState.topics[key] === "yes");
}

function wizSteps() {
  const steps = BASE_STEPS.filter((step) => !step.when || step.when());
  /* 항목 질문은 여러 개라도 노드 하나를 돌려쓴다 */
  relevantTopics().forEach((key, idx) => {
    steps.push({ id: `topic:${key}`, topic: key, topicIndex: idx, node: stepTopicNode });
  });
  /* 자유 메모는 항상 맨 마지막 — 위 질문에서 못 다룬 개인 사정을 받는다 */
  if (statusState.level && statusState.goal) {
    steps.push({ id: "notes", label: "메모", node: stepNotesNode });
  }
  return steps;
}

/* 단계 표시에 쓸 짧은 이름 — 항목 질문은 TOPIC_QUESTIONS에서 가져온다 */
function stepLabel(step) {
  if (step.topic) return TOPIC_QUESTIONS[step.topic].short;
  return step.label || "";
}

function isAnswered(step) {
  if (step.id === "notes" || step.id === "schools") return true;
  return step.topic ? Boolean(statusState.topics[step.topic]) : Boolean(statusState[step.id]);
}

function renderTopicStep(step) {
  const topic = TOPIC_QUESTIONS[step.topic];
  const total = relevantTopics().length;

  qTopicCount.textContent = `알고 싶은 것 ${step.topicIndex + 1} / ${total}`;
  qTopic.textContent = topic.q;
  qTopicHint.textContent = topic.hint;
  stepTopicOptions.innerHTML = `
    <button type="button" class="opt-card" data-group="topic" data-topic="${step.topic}" data-value="yes">
      <span class="opt-card__ico" aria-hidden="true">${topic.icon}</span>
      <span class="opt-card__txt"><strong>네, 알려주세요</strong><span>${esc(topic.yesSub)}</span></span>
    </button>
    <button type="button" class="opt-card" data-group="topic" data-topic="${step.topic}" data-value="no">
      <span class="opt-card__ico" aria-hidden="true">⏭</span>
      <span class="opt-card__txt"><strong>${esc(topic.noLabel)}</strong><span>이 부분은 넘어갈게요</span></span>
    </button>
  `;

  const answered = statusState.topics[step.topic];
  if (answered) setActiveOption("topic", answered);
}

/* 질문 문구에 실제 학교 이름을 넣어 무엇을 묻는지 분명하게 한다 */
function syncQuitCopy() {
  const school = quitSchoolName();
  if (!school || !quitYesSub) return;
  quitYesSub.textContent = `${school}에 다니다 그만뒀어요`;
  qQuitHint.textContent = school === "고등학교"
    ? "고등학교를 그만둔 날부터 6개월이 지나야 고졸 검정고시를 볼 수 있어요."
    : "중학교는 그만둬도 기다리는 기간 없이 중졸 검정고시를 볼 수 있어요. 서류 안내를 위해 물어봐요.";
}

/* 날짜를 고르면 6개월이 지나는 날을 바로 계산해 보여준다 */
function syncQuitDateNote() {
  if (!quitDateNote) return;
  const r = quitRule();
  if (!r) { quitDateNote.hidden = true; quitDateNote.innerHTML = ""; return; }

  if (!r.applies) {
    quitDateNote.className = "quit-note quit-note--ok";
    quitDateNote.innerHTML = "중학교를 그만둔 경우에는 <strong>기다리는 기간이 없어요.</strong> 정원외관리증명서만 챙기면 돼요.";
  } else {
    const first = r.firstOk;
    const cls = r.rounds[0] && r.rounds[0].state === "ok" ? "quit-note--ok" : "quit-note--wait";
    quitDateNote.className = `quit-note ${cls}`;
    quitDateNote.innerHTML = `6개월이 지나는 날은 <strong>${fmtDateY(r.clearDate)}</strong>예요.`
      + (first ? ` ${esc(first.round)}부터 볼 수 있어요.` : " 다음 회차 공고일을 교육청에서 확인해야 해요.")
      + ` <span class="quit-note__law">기준은 시험일이 아니라 공고일이에요.</span>`;
  }
  quitDateNote.hidden = false;
}

/* 되돌아가기는 언제나 되고, 앞으로 가는 건 그 사이 질문에 답이 다 있을 때만 된다.
   뒤 질문의 내용 자체가 앞 답변으로 만들어지므로(학력 -> 목표 -> 항목 질문),
   중간에 빈 답이 있으면 그 앞으로는 갈 수 없다. */
function canJumpTo(steps, idx) {
  if (idx < 0 || idx >= steps.length || idx === wizIndex) return false;
  if (idx < wizIndex) return true;
  return steps.slice(0, idx).every(isAnswered);
}

function renderStepNav(steps) {
  wizStepsNav.innerHTML = steps.map((step, idx) => {
    const current = idx === wizIndex;
    const jump = canJumpTo(steps, idx);
    /* 메모는 비워도 넘어갈 수 있어서, ✓는 실제로 적은 내용이 있을 때만 붙인다 */
    const answered = step.id === "notes"
      ? Boolean(extraNotes && extraNotes.value.trim())
      : isAnswered(step);
    /* done = 답이 있어 오갈 수 있는 질문, next = 아직 답이 없지만 지금 갈 수 있는 질문 */
    const state = current ? "current" : !jump ? "future" : answered ? "done" : "next";
    const title = current ? "지금 답하는 질문"
      : !jump ? "앞 질문에 답하면 열려요"
      : answered ? `${stepLabel(step)} 답 고치기`
      : `${stepLabel(step)} 질문으로 가기`;
    return `
      <button type="button" class="wiz__chip is-${state}" data-step-id="${esc(step.id)}"
        ${jump ? "" : "disabled"}${current ? ' aria-current="step"' : ""}
        title="${esc(title)}">
        <span class="wiz__chip-n" aria-hidden="true">${answered && !current ? "✓" : idx + 1}</span>
        <span class="wiz__chip-t">${esc(stepLabel(step))}</span>
      </button>
    `;
  }).join("");
}

function renderWizard() {
  const steps = wizSteps();
  wizIndex = Math.min(Math.max(wizIndex, 0), steps.length - 1);
  const current = steps[wizIndex];

  ALL_STEP_NODES.forEach((node) => {
    node.hidden = node !== current.node;
  });
  if (current.topic) renderTopicStep(current);
  if (current.id === "quit") syncQuitCopy();
  if (current.id === "quitDate") { syncQuitCopy(); syncQuitDateNote(); }

  wizNow.textContent = String(wizIndex + 1);
  wizTotal.textContent = String(steps.length);
  wizBar.style.width = `${((wizIndex + 1) / steps.length) * 100}%`;
  renderStepNav(steps);

  btnWizBack.disabled = wizIndex === 0;
  /* 이미 답한 질문이면 다시 고르지 않고도 앞으로 갈 수 있게 */
  btnWizNext.hidden = !isAnswered(current);
}

function aiContext() {
  const statusKey = currentStatusKey();
  const region = statusState.region ? REGIONS[statusState.region] : null;
  const schools = checkedValues("school").map((key) => universities[key]?.name).filter(Boolean);

  return {
    region: region ? region.name : null,
    level: statusState.level,
    goal: statusState.goal,
    statusTitle: statusKey && statusCopy[statusKey] ? statusCopy[statusKey].title : null,
    selectedTopics: selectedTopics().map((key) => goalCopy[key]?.label).filter(Boolean),
    selectedSchools: schools,
    quit: statusState.quit,
    quitDate: statusState.quitDate,
    youthCard: statusState.youth,
    wantsYouthCardInfo: statusState.youthInfo
  };
}

function aiCacheKey(notes, context) {
  return JSON.stringify({ notes: notes.trim(), context });
}

function readAiCache(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(AI_NOTES_CACHE_KEY) || "null");
    return saved && saved.key === key ? saved.result : null;
  } catch (e) {
    return null;
  }
}

function writeAiCache(key, result) {
  try {
    localStorage.setItem(AI_NOTES_CACHE_KEY, JSON.stringify({ key, result }));
  } catch (e) {
    /* ignore */
  }
}

function hideAiNotesCard() {
  if (!aiNotesCard) return;
  aiNotesCard.hidden = true;
  aiNotesCard.classList.remove("is-loading", "is-error");
  aiNotesSummary.textContent = "";
  aiInfoList.innerHTML = "";
  aiActionList.innerHTML = "";
}

function showAiNotesCard(result, state = "ready") {
  if (!aiNotesCard) return;
  aiNotesCard.hidden = false;
  aiNotesCard.classList.toggle("is-loading", state === "loading");
  aiNotesCard.classList.toggle("is-error", state === "error");
  aiNotesSummary.textContent = result.summary || "";
  renderList(aiInfoList, result.infoItems || [], 3);
  renderList(aiActionList, result.actionItems || [], 3);
}

function demoNotesAnalysisResult() {
  return {
    hasUsefulInfo: true,
    summary: "자퇴한 지 얼마 안 된 상태에서 검정고시 준비 비용과 상담 지원을 찾고 있어요.",
    infoItems: [
      "학교밖청소년지원센터 꿈드림: 검정고시 준비, 상담, 교재비 같은 지원을 연결받을 수 있는지 물어볼 수 있어요.",
      "청소년상담 1388: 가까운 꿈드림 센터나 상담 창구를 모를 때 먼저 연락하기 좋아요.",
      "청소년특별지원: 생활·학업 지원이 필요한 청소년에게 해당될 수 있는 제도라 대상 여부를 확인해보면 좋아요."
    ],
    actionItems: [
      "자퇴한 지 얼마 안 됐고 검정고시를 준비하려고 하는데, 받을 수 있는 교재비나 상담 지원이 있나요?",
      "포항에서 연결 가능한 꿈드림 센터가 어디인지 알려주실 수 있나요?",
      "검정고시 준비를 시작하려면 지금 먼저 신청하거나 챙겨야 할 것이 있나요?"
    ]
  };
}

async function runNotesAnalysis() {
  const notes = extraNotes ? extraNotes.value.trim() : "";
  if (!notes) {
    hideAiNotesCard();
    return;
  }

  const context = aiContext();
  const key = aiCacheKey(notes, context);
  const cached = readAiCache(key);
  if (cached) {
    showAiNotesCard(cached);
    return;
  }

  const result = demoNotesAnalysisResult();
  writeAiCache(key, result);
  showAiNotesCard(result);
}

async function goNext() {
  if (wizIndex >= wizSteps().length - 1) {
    updateResult();
    situationView.hidden = true;
    detailsView.hidden = false;
    detailsView.scrollIntoView({ behavior: "smooth", block: "start" });
    await runNotesAnalysis();
    return;
  }
  wizIndex += 1;
  renderWizard();
  situationView.scrollIntoView({ behavior: "smooth", block: "start" });
}

function goBack() {
  if (wizIndex === 0) return;
  wizIndex -= 1;
  renderWizard();
  situationView.scrollIntoView({ behavior: "smooth", block: "start" });
}

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

function setActiveRegion(value) {
  kmapSvg.querySelectorAll("[data-enabled]").forEach((el) => {
    el.classList.toggle("is-active", ENABLED_REGION[el.dataset.region] === value);
  });

  /* 지도로 골라도 드롭다운이 같은 값을 보여주게 맞춘다 */
  if (regionSelect) {
    const match = Object.keys(ENABLED_REGION).find((key) => ENABLED_REGION[key] === value);
    regionSelect.value = match || "";
  }
}

function renderGoalOptions() {
  stepGoalOptions.innerHTML = "";
  goalOptionsByLevel[statusState.level].forEach(({ value, icon, title, sub }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opt-card";
    btn.dataset.group = "goalPick";
    btn.dataset.value = value;
    btn.innerHTML = `<span class="opt-card__ico" aria-hidden="true">${icon}</span><span class="opt-card__txt"><strong>${esc(title)}</strong><span>${esc(sub)}</span></span>`;
    stepGoalOptions.appendChild(btn);
  });
  if (statusState.goal) setActiveOption("goalPick", statusState.goal);
}

/* =========================================================
   자퇴 후 응시 제한
   근거: 「초·중등교육법 시행규칙」 제35조 제6항 제2호
   - 고졸 검정고시: 고등학교 제적일부터 '공고일'까지 6개월이 지나야 응시 가능
   - 중졸 검정고시: 같은 제한이 없음(제35조 제4항). 중학교는 의무교육이라
     자퇴가 아니라 '정원외 관리'가 되고, 정원외 관리자는 바로 응시할 수 있다.
   - 예외: 등록 장애인, 장애로 학업을 계속할 수 없어 퇴학된 사람,
     「장애인 등에 대한 특수교육법」에 따라 정원외 관리되는 사람
   기준이 시험일이 아니라 '공고일'이라는 점이 중요하다. 공고일은 원서접수보다
   앞서기 때문에, 우리는 공고일을 모르는 상태에서 단정하지 않고 세 단계로 나눠 안내한다.
   ========================================================= */

const QUIT_WAIT_MONTHS = 6;

/* 자퇴한 학교는 최종 학력에서 도출된다 — 초졸이면 중학교, 중졸이면 고등학교 */
function quitSchoolName() {
  if (statusState.level === "elem") return "중학교";
  if (statusState.level === "mid") return "고등학교";
  return null;
}

function addMonths(iso, months) {
  const d = new Date(`${iso}T00:00:00`);
  const day = d.getDate();
  d.setMonth(d.getMonth() + months);
  if (d.getDate() < day) d.setDate(0);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/* 6개월 제한을 적용받는 상황인지 판정하고, 회차별 응시 가능 여부를 낸다 */
function quitRule() {
  if (statusState.quit !== "yes" || !statusState.quitDate) return null;

  const school = quitSchoolName();
  const base = {
    school,
    quitDate: statusState.quitDate,
    /* 중학교를 그만둔 경우는 6개월 대기가 없다 */
    applies: statusState.level === "mid"
  };

  if (!base.applies) return { ...base, status: "none" };

  const clearDate = addMonths(statusState.quitDate, QUIT_WAIT_MONTHS);
  const rounds = EXAM_SCHEDULE.map((rnd) => {
    const apply = rnd.events.find((ev) => ev.label.includes("원서접수"));
    if (!apply) return null;
    /* 공고일은 원서접수보다 앞선다. 정확한 공고일을 모르니
       접수 시작 30일 전을 기준으로 안전/애매/불가를 나눈다. */
    const marginDate = addMonths(apply.date, 0);
    const safeBy = new Date(`${marginDate}T00:00:00`);
    safeBy.setDate(safeBy.getDate() - 30);
    const safeIso = `${safeBy.getFullYear()}-${String(safeBy.getMonth() + 1).padStart(2, "0")}-${String(safeBy.getDate()).padStart(2, "0")}`;
    let state = "tight";
    if (clearDate <= safeIso) state = "ok";
    else if (clearDate > apply.date) state = "no";
    const past = daysUntil(apply.end || apply.date) < 0;
    return { round: rnd.round, applyDate: apply.date, applyEnd: apply.end, state, past };
  }).filter(Boolean);

  /* 접수가 이미 끝난 회차는 안내해도 소용없으니 건너뛴다 */
  const firstOk = rounds.find((r) => r.state === "ok" && !r.past) || null;
  const anyTight = rounds.some((r) => r.state === "tight");
  return { ...base, clearDate, rounds, firstOk, anyTight, status: firstOk && rounds[0].state === "ok" ? "clear" : "wait" };
}

function quitRuleHTML() {
  const r = quitRule();
  if (!r) return "";

  if (!r.applies) {
    return `
      <h4>중학교를 그만둔 경우</h4>
      <p class="detail-lead">중학교는 의무교육이라 자퇴가 아니라 <strong>정원외 관리</strong>가 돼요. 정원외 관리 중이면 <strong>기다리는 기간 없이</strong> 중졸 검정고시를 볼 수 있어요.</p>
      <ul class="plain">
        <li>원서를 낼 때 <strong>중학교 정원외관리증명서</strong>가 필요해요.</li>
        <li>내 학교 기록이 정원외 관리인지 제적인지는 다녔던 학교나 교육지원청에 물어보면 알려줘요.</li>
      </ul>
      <p class="note-mini">근거: 「초·중등교육법 시행규칙」 제35조 제4항. 정확한 조건은 사는 지역 교육청 공고에서 확인하세요.</p>
    `;
  }

  const rows = r.rounds.map((row) => {
    const label = row.past ? "접수 끝남"
      : row.state === "ok" ? "볼 수 있어요"
      : row.state === "no" ? "볼 수 없어요"
      : "공고일 확인 필요";
    const cls = (row.past || row.state === "no") ? "tag-mini tag-mini--past" : "tag-mini";
    return `<li>${esc(row.round)} (접수 ${fmtDateY(row.applyDate)}) — <span class="${cls}">${label}</span></li>`;
  }).join("");

  return `
    <h4>고등학교를 그만뒀다면 6개월을 기다려야 해요</h4>
    <p class="detail-lead">고졸 검정고시는 고등학교를 그만둔 날부터 <strong>6개월</strong>이 지나야 볼 수 있어요. 기준은 시험일이 아니라 <strong>시험 공고가 나는 날</strong>이에요.</p>
    <table class="info-mini">
      <tr><th>그만둔 날</th><td>${fmtDateY(statusState.quitDate)}</td></tr>
      <tr><th>6개월이 지나는 날</th><td><strong>${fmtDateY(r.clearDate)}</strong></td></tr>
    </table>
    <h4>회차별로 보면</h4>
    <ul class="plain">${rows}</ul>
    <p class="note-mini">공고일은 원서접수보다 앞서요. 그래서 접수일까지 6개월이 겨우 채워지는 회차는 '공고일 확인 필요'로 표시했어요. 이런 회차는 사는 지역 교육청 공고에서 공고일을 직접 확인해야 해요.</p>
    <p class="note-mini">장애인으로 등록되어 있거나, 장애 때문에 학교를 계속 다닐 수 없어 그만둔 경우에는 이 6개월 규정을 적용받지 않아요.</p>
    <p class="note-mini">근거: 「초·중등교육법 시행규칙」 제35조 제6항 제2호.</p>
    ${linksHTML(["notice"])}
  `;
}

function setAnswer(group, value, topicKey) {
  if (group === "region") {
    statusState.region = value;
    setActiveRegion(value);
  } else if (group === "level") {
    /* 학력을 바꾸면 목표 선택지와 물어볼 항목이 모두 달라진다 */
    if (statusState.level !== value) {
      statusState.goal = null;
      statusState.topics = {};
      /* 그만둔 학교가 최종 학력에서 도출되므로 자퇴 답도 다시 받는다 */
      statusState.quit = null;
      statusState.quitDate = null;
      setActiveOption("quit", null);
      if (quitDateInput) quitDateInput.value = "";
    }
    statusState.level = value;
    setActiveOption("level", value);
    renderGoalOptions();
  } else if (group === "goalPick") {
    if (statusState.goal !== value) {
      statusState.topics = {};
      if (value !== "univ") {
        statusState.schools = [];
        document.querySelectorAll('input[name="school"]').forEach((input) => { input.checked = false; });
      }
    }
    statusState.goal = value;
    setActiveOption("goalPick", value);
  } else if (group === "quit") {
    statusState.quit = value;
    if (value === "no") statusState.quitDate = null;
    setActiveOption("quit", value);
  } else if (group === "quitDate") {
    statusState.quitDate = value;
  } else if (group === "topic") {
    if (!TOPIC_QUESTIONS[topicKey]) return;
    statusState.topics[topicKey] = value;
    setActiveOption("topic", value);
  } else if (group === "youth") {
    statusState.youth = value;
    if (value === "yes") statusState.youthInfo = null;
    setActiveOption("youth", value);
  } else if (group === "youthInfo") {
    statusState.youthInfo = value;
    setActiveOption("youthInfo", value);
  } else {
    return;
  }

  saveStatusState();
  updateResult();
  goNext();
}

document.querySelector(".wiz").addEventListener("click", (event) => {
  const btn = event.target.closest(".opt-card[data-group]");
  if (!btn) return;
  setAnswer(btn.dataset.group, btn.dataset.value, btn.dataset.topic);
});

/* 순서 번호가 아니라 질문 id로 이동한다 — 답을 바꾸면 질문 목록의 길이가
   달라지므로, 누른 순간에 그 질문이 지금 몇 번째인지 다시 찾는다. */
wizStepsNav.addEventListener("click", (event) => {
  const chip = event.target.closest(".wiz__chip[data-step-id]");
  if (!chip || chip.disabled) return;

  const steps = wizSteps();
  const idx = steps.findIndex((step) => step.id === chip.dataset.stepId);
  /* -1은 답이 바뀌어 사라진 질문 — canJumpTo가 나머지(빈 답 건너뛰기)를 막는다 */
  if (!canJumpTo(steps, idx)) return;

  wizIndex = idx;
  renderWizard();
  situationView.scrollIntoView({ behavior: "smooth", block: "start" });
});

function pickRegionFrom(target) {
  const hit = target.closest("[data-region]");
  if (!hit) return;
  const value = ENABLED_REGION[hit.dataset.region];
  if (!value) {
    /* 데모에서 잠긴 지역 — 왜 안 눌리는지 안내문을 깜빡여서 알려준다 */
    regionHint.classList.add("is-warn");
    window.setTimeout(() => regionHint.classList.remove("is-warn"), 1400);
    return;
  }
  setAnswer("region", value);
}

kmapSvg.addEventListener("click", (event) => {
  pickRegionFrom(event.target);
});

if (quitDateInput) {
  quitDateInput.addEventListener("change", () => {
    if (!quitDateInput.value) return;
    statusState.quitDate = quitDateInput.value;
    saveStatusState();
    syncQuitDateNote();
    updateResult();
    /* 날짜는 자동으로 넘기지 않는다 — 고른 결과를 확인하고 '다음'을 누르게 */
    renderWizard();
  });
}

if (regionSelect) {
  regionSelect.addEventListener("change", () => {
    const value = ENABLED_REGION[regionSelect.value];
    if (!value) return;
    setAnswer("region", value);
  });
}

kmapSvg.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (!event.target.closest("[data-enabled]")) return;
  event.preventDefault();
  pickRegionFrom(event.target);
});

function youthCardDetailHTML(force) {
  if (!force && statusState.youthInfo !== "yes") return "";
  return `
    <h4>청소년증 발급 방법</h4>
    <p class="detail-lead">청소년증은 <strong>만 9세부터 24세까지</strong> 발급받을 수 있는 신분증이에요. <strong>발급 돈은 안 들어요.</strong></p>
    <table class="info-mini">
      <tr><th>신청 장소</th><td>가까운 읍·면·동 주민센터(행정복지센터). 사는 곳으로 등록된 주소가 아니어도 신청할 수 있어요.</td></tr>
      <tr><th>온라인 신청</th><td>정부24에서도 신청할 수 있어요.</td></tr>
      <tr><th>준비물</th><td>사진 1매(3.5cm × 4.5cm), 신청서. 본인이나 보호자가 신청할 수 있어요.</td></tr>
      <tr><th>받는 기간</th><td>보통 2주쯤 걸려요. 급하면 임시 발급 되는지 주민센터에 물어보세요.</td></tr>
    </table>
    <p class="note-mini">청소년증은 신분증으로 쓸 수 있고, 대중교통·문화시설 청소년 할인에도 쓸 수 있어요. 준비물과 걸리는 기간은 지역마다 조금 달라요. 가기 전에 주민센터에 한 번 물어보는 게 안전해요.</p>
    ${linksHTML(["youth", "center"])}
  `;
}

function restoreStatusState() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(STATUS_STORAGE_KEY) || "null");
  } catch (e) {
    saved = null;
  }

  if (saved) {
    if (saved.region && REGIONS[saved.region]) {
      statusState.region = saved.region;
      setActiveRegion(saved.region);
    }
    if (saved.level && goalOptionsByLevel[saved.level]) {
      statusState.level = saved.level;
      setActiveOption("level", saved.level);
      if (saved.goal && statusKeyMap[saved.level][saved.goal]) {
        statusState.goal = saved.goal;
      }
      renderGoalOptions();
    }
    if (saved.quit === "yes" || saved.quit === "no") {
      statusState.quit = saved.quit;
      setActiveOption("quit", saved.quit);
      if (saved.quit === "yes" && /^\d{4}-\d{2}-\d{2}$/.test(saved.quitDate || "")) {
        statusState.quitDate = saved.quitDate;
        if (quitDateInput) quitDateInput.value = saved.quitDate;
      }
    }
    if (saved.topics && typeof saved.topics === "object") {
      Object.entries(saved.topics).forEach(([key, val]) => {
        if (TOPIC_QUESTIONS[key] && (val === "yes" || val === "no")) statusState.topics[key] = val;
      });
    }
    if (saved.youth === "yes" || saved.youth === "no") {
      statusState.youth = saved.youth;
      setActiveOption("youth", saved.youth);
      if (saved.youth === "no" && (saved.youthInfo === "yes" || saved.youthInfo === "no")) {
        statusState.youthInfo = saved.youthInfo;
        setActiveOption("youthInfo", saved.youthInfo);
      }
    }
    if (Array.isArray(saved.schools)) {
      statusState.schools = saved.schools.filter((key) => universities[key]);
    }
  }

  /* 궁금한 대학 체크박스는 폼 상태라 저장된 값대로 다시 맞춘다.
     저장된 게 없으면 첫 방문 때 마크업의 기본 체크도 여기서 다 해제된다. */
  document.querySelectorAll('input[name="school"]').forEach((input) => {
    input.checked = statusState.schools.includes(input.value);
  });

  /* 저장된 답이 있으면 첫 미응답 질문에서 이어서 시작한다 */
  const steps = wizSteps();
  const firstOpen = steps.findIndex((step) => !isAnswered(step));
  wizIndex = firstOpen === -1 ? steps.length - 1 : firstOpen;
  renderWizard();
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
  /* 이 섹션의 표시 여부는 위저드 진행 상태가 아니라 상단 "포항 대학" 메뉴
     클릭 여부로만 정해진다 (아래 #navToUniversities 핸들러 참고) */
  universityList.innerHTML = "";

  Object.entries(universities).forEach(([key, school]) => {
    const card = document.createElement("article");
    card.className = `university-card${selectedSchools.includes(key) ? " is-active" : ""}`;
    card.innerHTML = `
      <small>${esc(school.type)}</small>
      <h3>${esc(school.name)}</h3>
      <p>${esc(school.focus)}</p>
      ${school.note ? `
        <button type="button" class="university-card__more" aria-expanded="false">📌 주의할 점 보기</button>
        <p class="university-card__note" hidden>${esc(school.note)}</p>
      ` : ""}
      <a class="university-card__link" href="${esc(school.url)}" target="_blank" rel="noopener noreferrer">🔗 공식 입학처 바로가기</a>
    `;
    universityList.appendChild(card);
  });
}

/* =========================================================
   로드맵 — 답변으로 단계를 만들고 S커브 알약으로 그린다
   ========================================================= */

function daysUntil(iso) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((new Date(`${iso}T00:00:00`) - today) / 86400000);
}

function ddayLabel(iso) {
  const left = daysUntil(iso);
  if (left < 0) return "지났어요";
  if (left === 0) return "오늘";
  return `D-${left}`;
}

/* EXAM_SCHEDULE의 status 값은 하드코딩이라 쓰지 않고 날짜로 직접 판정한다.
   시험일은 지났지만 합격 발표가 남은 회차가 있어서, 회차 단위로 접으면
   지금 당장 확인해야 할 발표가 묻힌다. */
function pickExamRound() {
  const rounds = EXAM_SCHEDULE.map((rnd) => ({
    round: rnd.round,
    apply: rnd.events.find((ev) => ev.label.includes("원서접수")),
    exam: rnd.events.find((ev) => ev.label.includes("시험일")),
    result: rnd.events.find((ev) => ev.label.includes("발표"))
  }));

  /* 자퇴 후 6개월이 안 지난 회차는 아예 응시할 수 없으니 건너뛴다 */
  const rule = quitRule();
  const blocked = rule && rule.applies
    ? new Set(rule.rounds.filter((r) => r.state === "no").map((r) => r.round))
    : new Set();

  const open = rounds.filter((r) => !blocked.has(r.round));
  return open.find((r) => r.apply && daysUntil(r.apply.date) >= 0)
    || open.find((r) => r.exam && daysUntil(r.exam.date) >= 0)
    || open[open.length - 1]
    || rounds[rounds.length - 1];
}

/* 수능은 매년 11월 셋째 주 목요일이라 실제 날짜를 계산할 수 있다.
   afterIso를 넘기면 그 날짜 이후 첫 수능을 준다 — 검정고시로 학력을 얻는
   경로는 합격 발표 뒤의 수능이라야 응시할 수 있어서 오늘 기준으로 잡으면 안 된다. */
function nextSuneung(afterIso) {
  const floor = afterIso || null;
  const startYear = new Date(floor ? `${floor}T00:00:00` : Date.now()).getFullYear();
  for (let y = startYear; y <= startYear + 3; y += 1) {
    const firstThursday = 1 + ((4 - new Date(y, 10, 1).getDay() + 7) % 7);
    const iso = `${y}-11-${String(firstThursday + 14).padStart(2, "0")}`;
    const passesFloor = floor ? iso > floor : daysUntil(iso) >= 0;
    if (passesFloor && daysUntil(iso) >= 0) return iso;
  }
  return null;
}

function roadmapSteps() {
  if (!currentStatusKey()) return [];

  const steps = [];
  const { level, goal } = statusState;
  const schoolNames = checkedValues("school").map((key) => universities[key].name);

  if (statusState.youthInfo === "yes") {
    steps.push({
      id: "youthCard",
      icon: "🪪",
      tag: "먼저",
      title: "청소년증 발급 신청",
      meta: "가까운 주민센터 · 사진 1매 · 수수료 없음 · 약 2주 걸려요",
      detail: youthCardDetailHTML(true)
    });
  }

  if (goal === "ged") {
    const round = pickExamRound();
    const type = level === "elem" ? EXAM_TYPES.mid : EXAM_TYPES.high;
    const applyRange = round.apply
      ? `${fmtDate(round.apply.date)}${round.apply.end ? ` ~ ${fmtDate(round.apply.end)}` : ""}`
      : "교육청 공고 확인";

    steps.push({
      id: "ged:study",
      icon: "📚",
      tag: round.apply ? `접수까지 ${ddayLabel(round.apply.date)}` : "지금",
      title: `${type.count} 공부 · 서류 준비`,
      meta: `${type.subjects} · 최종학력증명서 1부, 사진 2매(3.5×4.5cm)`,
      detail: `
        <p class="detail-lead"><strong>${esc(type.name)}</strong> — 합격하면 ${esc(type.gives)}을 인정받아요.</p>
        <table class="info-mini">
          <tr><th>시험 볼 수 있는 사람</th><td>${esc(type.whoFor)}</td></tr>
          <tr><th>과목</th><td>${esc(type.count)} · ${esc(type.subjects)}</td></tr>
          <tr><th>합격 기준</th><td>모든 과목 평균 60점 이상. 한 과목이라도 안 보면 떨어져요.</td></tr>
        </table>
        <h4>지금 챙겨둘 서류</h4>
        <ul class="plain">${EXAM_DOCS_BY_LEVEL[level === "elem" ? "mid" : "high"].map((doc) => `<li>${esc(doc)}</li>`).join("")}</ul>
        <p class="note-mini">떨어져도 60점을 넘은 과목은 남아요. 다음에 시험 볼 때 그 과목은 다시 안 봐도 돼요.</p>
        ${quitRuleHTML()}
        ${linksHTML(["center", "mogef"])}
      `
    });
    steps.push({
      id: "ged:apply",
      icon: "🖊️",
      tag: round.apply ? ddayLabel(round.apply.date) : "일정 확인",
      title: `${round.round} 원서접수`,
      meta: `${applyRange} · kged.go.kr 공동인증서 로그인 · 시험 비용 없음`,
      detail: `
        <p class="detail-lead">접수 기간은 <strong>${esc(applyRange)}</strong>예요. <strong>시험 비용은 없어요</strong>.</p>
        <h4>접수하는 순서</h4>
        <ul class="plain">
          <li>kged.go.kr에 공동인증서로 로그인해요.</li>
          <li>거주지 시·도교육청을 선택해요.</li>
          <li>시험 신청서를 쓰고 사진과 최종학력증명서를 올려요.</li>
        </ul>
        <h4>전체 일정</h4>
        ${scheduleHTML()}
        <p class="note-mini">위 날짜는 예상이에요. 확정 일정은 거주지 시·도교육청 공고에서 다시 확인하세요.</p>
        ${quitRuleHTML()}
        ${linksHTML(["apply", "notice"])}
      `
    });
    if (round.exam) {
      steps.push({
        id: "ged:exam",
        icon: "📝",
        tag: ddayLabel(round.exam.date),
        title: "시험일",
        meta: `${fmtDate(round.exam.date)} · ${type.time} · 모든 과목 평균 60점을 넘으면 합격`,
        detail: `
          <p class="detail-lead"><strong>${fmtDate(round.exam.date)}</strong>, ${esc(type.time)}에 ${esc(type.count)}을 봐요.</p>
          <table class="info-mini">
            <tr><th>시험 과목</th><td>${esc(type.subjects)}</td></tr>
            <tr><th>시험 시간</th><td>${esc(type.time)}</td></tr>
            <tr><th>합격 기준</th><td>모든 과목 평균 60점 이상. 한 과목이 낮아도 평균만 넘으면 돼요.</td></tr>
          </table>
          <p class="note-mini">한 과목이라도 안 보면 떨어져요. 컨디션이 안 좋아도 모든 과목을 다 보는 게 중요해요.</p>
          <p class="note-mini">시험장은 거주지 교육청 공고에 나와요. 전날 위치를 미리 확인해두세요.</p>
          ${linksHTML(["notice"])}
        `
      });
    }
    const gained = level === "elem" ? "중졸 학력" : "고졸 학력";
    if (round.result) {
      steps.push({
        id: "ged:result",
        icon: "🎉",
        tag: ddayLabel(round.result.date),
        title: `합격 발표 · ${gained} 취득`,
        meta: `${fmtDate(round.result.date)} · ${type.gives} · 합격증명서·성적증명서(대입전형용) 발급`,
        detail: `
          <p class="detail-lead"><strong>${fmtDate(round.result.date)}</strong> 발표예요. 합격하면 ${esc(type.gives)}을 인정받아요.</p>
          <h4>합격했다면 바로 할 일</h4>
          <ul class="plain">
            <li>합격증명서와 성적증명서를 발급받아요.</li>
            <li>대학에 낼 거면 <strong>'대입전형용'</strong>으로 발급받아야 해요 — 일반 발급용과 달라요.</li>
            <li>대학이 요구하면 kged.go.kr에서 성적 제공 동의를 하고 확인번호를 받아둬요.</li>
          </ul>
          <h4>떨어졌다면</h4>
          <ul class="plain">
            <li>60점 이상 받은 과목은 '과목합격'으로 남아 다음 회차에 다시 안 봐도 돼요.</li>
            <li>다음 회차는 보통 반 년 뒤예요. 남은 과목만 준비하면 돼요.</li>
          </ul>
          ${linksHTML(["apply"])}
        `
      });
    }

    if (level === "mid") {
      /* 합격 발표 뒤에 오는 수능이라야 응시할 수 있다 */
      const suneung = nextSuneung(round.result ? round.result.date : null);
      steps.push({
        id: "ged:univ",
        icon: "🎓",
        tag: "그 다음",
        title: schoolNames.length ? `${schoolNames.join(" · ")} 지원` : "대학 지원",
        meta: `수시 원서접수 9월 초 · 수능 ${suneung ? `${fmtDate(suneung)} (${ddayLabel(suneung)})` : "11월 셋째 주 목요일"} · 정시 12월 말~1월 초`,
        detail: `
          <p class="detail-lead">고졸 학력이 생기면 대학에 지원할 수 있어요. 수시와 정시 중 어디로 갈지 먼저 정해요.</p>
          ${typicalTimelineHTML(UNIV_TYPICAL_TIMELINE)}
          <h4>수시와 정시</h4>
          <ul class="plain">
            <li><strong>수시</strong> — 9월 초에 신청해요. 학교 성적과 학교생활기록부를 봐요. 검정고시 출신은 지원할 수 있는 전형이 적어요.</li>
            <li><strong>정시</strong> — 수능 성적 중심${suneung ? `, 수능은 ${fmtDate(suneung)}` : ""}. 검정고시 출신에게 가장 많이 가는 길이에요.</li>
          </ul>
          ${schoolNames.length ? compiledUniversitiesHTML(checkedValues("school")) : '<p class="note-mini">아래 "궁금한 대학"에서 학교를 고르면 학교별 확인 사항이 여기 나와요.</p>'}
          ${linksHTML(["adiga", "kosaf"])}
        `
      });
    } else {
      steps.push({
        id: "ged:nextLevel",
        icon: "🏫",
        tag: "그 다음",
        title: "고등학교 진학 또는 고졸 검정고시",
        meta: "중졸 학력이 생기면 두 갈래가 열려요. 준비되면 다시 골라주세요.",
        detail: `
          <p class="detail-lead">중졸 학력이 생기면 <strong>고등학교 진학</strong>과 <strong>고졸 검정고시</strong> 두 갈래가 열려요.</p>
          <h4>고등학교 진학</h4>
          <ul class="plain">
            <li>빈 자리가 있으면 재입학·편입학이 가능해요 — 보통 학기 시작 전(2월, 8월)에 받아요.</li>
            <li>매일 등교가 어려우면 방송통신고등학교(주말 등교)도 똑같이 고등학교 졸업으로 인정돼요.</li>
          </ul>
          <h4>고졸 검정고시</h4>
          <ul class="plain">
            <li>필수 6과목 + 선택 1과목, 총 7과목이에요.</li>
            <li>합격하면 대학에 지원할 수 있어요.</li>
          </ul>
          <p class="note-mini">지금 정하지 않아도 괜찮아요. 준비가 됐을 때 위에서 목표를 다시 골라주세요.</p>
          ${linksHTML(["hischool", "center"])}
        `
      });
    }
  } else if (goal === "school") {
    steps.push({
      id: "school:record",
      icon: "🔎",
      tag: "지금",
      title: "학적 상태 확인",
      meta: "제적인지 정원외 관리인지에 따라 절차가 달라져요. 먼저 확인해요.",
      detail: `
        <p class="detail-lead">학적 상태에 따라 절차가 완전히 달라져요. 이걸 모르고 학교에 연락하면 헛걸음할 수 있어요.</p>
        <ul class="plain">
          <li><strong>정원외 관리</strong> — 학적이 학교에 남아 있는 상태예요. 원래 학교로 돌아가는 절차가 비교적 간단해요.</li>
          <li><strong>제적</strong> — 학적이 없어진 상태예요. 재입학 절차를 새로 밟아야 해요.</li>
        </ul>
        <p class="note-mini">본인 학적 상태는 마지막으로 다녔던 학교나 거주지 교육지원청에 물어보면 확인할 수 있어요.</p>
      `
    });
    steps.push({
      id: "school:office",
      icon: "☎️",
      tag: "이어서",
      title: "거주지 교육지원청 문의",
      meta: "중등교육과에 연락하면 빈 자리가 있는 학교를 안내받을 수 있어요.",
      detail: `
        <p class="detail-lead">빈 자리가 있는 학교를 개인이 찾기는 어려워요. 교육지원청이 한 번에 안내해줘요.</p>
        <ul class="plain">
          <li>거주지 교육지원청 <strong>중등교육과</strong>에 전화해요.</li>
          <li>학적 상태와 희망 지역을 말하면 가능한 학교를 알려줘요.</li>
          <li>고등학교 종류와 전형은 고입정보포털에서도 볼 수 있어요.</li>
        </ul>
        ${linksHTML(["hischool"])}`
    });
    steps.push({
      id: "school:apply",
      icon: "📮",
      tag: "2월 또는 8월",
      title: "재입학·편입학 신청",
      meta: "빈 자리가 있으면 보통 학기 시작 전에 받아요. 학교마다 상담 방식이 달라요.",
      detail: `
        <p class="detail-lead">재입학·편입학은 보통 <strong>2월과 8월</strong>, 학기 시작 전에 받아요.</p>
        <ul class="plain">
          <li>학교에 직접 연락해 상담 일정을 잡아요.</li>
          <li>필요 서류는 학교마다 달라요 — 미리 물어보는 게 안전해요.</li>
          <li>한 학교에서 안 되면 다른 학교도 알아볼 수 있어요.</li>
        </ul>
        <p class="note-mini">시기를 놓치면 다음 학기까지 기다려야 할 수 있어요. 두 달 전부터 준비하는 게 좋아요.</p>
      `
    });
    steps.push({
      id: "school:start",
      icon: "🏫",
      tag: "목표",
      title: "등교 시작",
      meta: "매일 등교가 어려우면 방송통신고등학교(주말 등교)도 똑같이 고등학교 졸업으로 인정돼요.",
      detail: `
        <p class="detail-lead">매일 등교가 부담이면 다른 방식도 있어요. 어느 쪽이든 <strong>정식 고졸 학력</strong>이 나와요.</p>
        <ul class="plain">
          <li><strong>방송통신고등학교</strong> — 주말에만 등교해요. 일과 병행할 수 있어요.</li>
          <li><strong>평생교육시설</strong> — 학교처럼 인정받아요. 여기도 고등학교 졸업으로 인정돼요.</li>
        </ul>
        ${linksHTML(["hischool", "center"])}`
    });
  } else if (goal === "univ") {
    const suneung = nextSuneung();
    steps.push({
      id: "univ:docs",
      icon: "🗂️",
      tag: "지금",
      title: "증명서 발급 · 모집요강 확인",
      meta: "합격증명서·성적증명서(대입전형용)는 일반 발급용과 달라요. 용도를 꼭 확인해요.",
      detail: `
        <p class="detail-lead">증명서를 <strong>용도를 잘못 골라 발급받는 실수</strong>가 가장 흔해요.</p>
        <ul class="plain">
          <li>대학에 낼 거면 반드시 <strong>'대입전형용'</strong>으로 발급받아요.</li>
          <li>대학이 요구하면 kged.go.kr에서 성적 제공 동의 후 확인번호를 받아둬요.</li>
          <li>학생부종합전형은 학교생활기록부 대신 학교가 정한 다른 서류를 달라고 할 수 있어요.</li>
        </ul>
        <p class="note-mini">낼 서류와 형식은 대학마다 달라요. 모집요강에서 '검정고시'를 검색해 최종 확인하세요.</p>
        ${linksHTML(["apply", "adiga"])}`
    });
    steps.push({
      id: "univ:early",
      icon: "🎓",
      tag: "9월 초",
      title: schoolNames.length ? `${schoolNames.join(" · ")} 수시 지원` : "수시 원서접수",
      meta: "학교 성적과 학교생활기록부를 봐요. 검정고시 출신은 지원할 수 있는 전형이 적어요.",
      detail: `
        <p class="detail-lead">수시는 보통 <strong>9월 초</strong>에 신청해요. 학교 성적과 학교생활기록부, 면접으로 뽑아요.</p>
        <ul class="plain">
          <li>검정고시 출신은 학교 성적이 없어서 지원할 수 있는 전형이 제한돼요.</li>
          <li>학생부종합전형은 학교생활기록부 대신 다른 서류와 증명 자료를 달라고 할 수 있어요.</li>
          <li>농어촌 전형처럼 조건이 붙은 전형은 검정고시 출신이 지원 못 할 수 있어요.</li>
        </ul>
        ${schoolNames.length ? compiledUniversitiesHTML(checkedValues("school")) : '<p class="note-mini">아래 "궁금한 대학"에서 학교를 고르면 학교별 확인 사항이 여기 나와요.</p>'}
        ${linksHTML(["adiga"])}`
    });
    steps.push({
      id: "univ:suneung",
      icon: "📝",
      tag: suneung ? ddayLabel(suneung) : "11월",
      title: "수능",
      meta: `${suneung ? fmtDate(suneung) : "11월 셋째 주 목요일"} · 정시의 기준이 되는 시험이에요.`,
      detail: `
        <p class="detail-lead">수능은 매년 <strong>11월 셋째 주 목요일</strong>이에요${suneung ? ` — 다음 수능은 ${fmtDate(suneung)}(${ddayLabel(suneung)})예요` : ""}.</p>
        <ul class="plain">
          <li>정시의 기준이 되는 시험이에요. 검정고시 출신에게 가장 많이 가는 길이에요.</li>
          <li>원서접수는 보통 8월 말~9월 초에 따로 해요 — 대학 원서와 별개예요.</li>
        </ul>
        <p class="note-mini">정확한 날짜와 접수 일정은 매년 한국교육과정평가원 공고로 확인하세요.</p>
        ${linksHTML(["adiga"])}`
    });
    steps.push({
      id: "univ:regular",
      icon: "📮",
      tag: "목표",
      title: "정시 원서접수",
      meta: "12월 말~1월 초 · 검정고시 출신에게 가장 많이 가는 길이에요.",
      detail: `
        <p class="detail-lead">정시는 <strong>12월 말~1월 초</strong>에 접수해요. 수능 성적이 기준이에요.</p>
        <ul class="plain">
          <li>가·나·다 군에서 각 1곳씩, 최대 3곳에 지원할 수 있어요.</li>
          <li>검정고시 출신도 다른 지원자와 같은 기준으로 평가받아요.</li>
          <li>정확한 날짜는 매년 한국대학교육협의회(대교협) 공고로 확인해요.</li>
        </ul>
        ${linksHTML(["adiga", "kosaf"])}`
    });
  } else if (goal === "job") {
    steps.push({
      id: "job:direction",
      icon: "🧭",
      tag: "지금",
      title: "방향 정하기",
      meta: "고용24 직업심리검사로 관심 분야를 먼저 좁혀요.",
      detail: `
        <p class="detail-lead">무엇을 할지부터 정하는 게 순서예요. 바로 채용공고를 보면 막막해져요.</p>
        <ul class="plain">
          <li>고용24에서 <strong>직업심리검사</strong>를 무료로 받을 수 있어요.</li>
          <li>결과를 보고 관심 분야를 2~3개로 좁혀요.</li>
          <li>고용센터에서 직업상담사와 같이 볼 수도 있어요.</li>
        </ul>
        ${linksHTML(["work"])}`
    });
    steps.push({
      id: "job:cert",
      icon: "🏅",
      tag: "이어서",
      title: "자격증 준비",
      meta: "큐넷에서 기능사 시험 일정을 확인해요.",
      detail: `
        <p class="detail-lead">기능사는 학력 제한이 없어서 검정고시 전에도 딸 수 있어요.</p>
        <ul class="plain">
          <li>큐넷에서 종목별 시험 일정과 시험 볼 수 있는 사람을 확인해요.</li>
          <li>필기 합격 후 실기를 봐요. 회차가 연 4회 정도 있어요.</li>
          <li>기능사 이상 자격이 있으면 고졸 검정고시 시험 볼 수 있는 사람도 생겨요.</li>
        </ul>
        ${linksHTML(["qnet"])}`
    });
    steps.push({
      id: "job:training",
      icon: "🛠️",
      tag: "그 다음",
      title: "직업훈련 신청",
      meta: "국민내일배움카드로 훈련비를 지원받을 수 있어요.",
      detail: `
        <p class="detail-lead"><strong>국민내일배움카드</strong>로 훈련비 대부분을 지원받을 수 있어요.</p>
        <ul class="plain">
          <li>고용24에서 카드를 신청하고 훈련 과정을 검색해요.</li>
          <li>한국폴리텍대학 같은 국비 무료 과정도 있어요.</li>
          <li>훈련 중 훈련을 받는 동안 돈을 받을 수 있는 과정도 있어요.</li>
        </ul>
        ${linksHTML(["work"])}`
    });
    steps.push({
      id: "job:apply",
      icon: "📄",
      tag: "목표",
      title: "취업 준비",
      meta: "고용센터에서 이력서와 면접을 준비해요. 만 18세가 안 됐으면 보호자 동의서가 필요해요.",
      detail: `
        <p class="detail-lead">일을 시작하기 전에 <strong>나이에 따른 서류와 근로 조건</strong>을 꼭 확인해요.</p>
        <ul class="plain">
          <li>만 18세가 안 됐으면 <strong>보호자 동의서</strong>와 가족관계증명서가 필요해요.</li>
          <li>하루 7시간·주 35시간을 넘겨 일할 수 없어요.</li>
          <li>밤이나 휴일에는 일할 수 없어요.</li>
          <li>이력서와 면접 준비는 고용센터에서 도와줘요.</li>
        </ul>
        ${linksHTML(["work", "center"])}`
    });
  } else {
    steps.push({
      id: "none:browse",
      icon: "👀",
      tag: "지금",
      title: "정보 하나씩 살펴보기",
      meta: "지금 결정하지 않아도 늦지 않아요. 궁금한 것부터 봐요.",
      detail: `
        <p class="detail-lead">지금 정하지 않아도 괜찮아요. 아는 게 늘면 정하기가 쉬워져요.</p>
        <ul class="plain">
          <li>검정고시가 어떤 시험인지부터 가볍게 봐요.</li>
          <li>학교로 돌아가는 방법, 일할 준비 방법도 있어요.</li>
          <li>하나씩 보다가 마음이 가는 쪽이 생기면 그때 정해요.</li>
        </ul>
      `
    });
    steps.push({
      id: "none:consult",
      icon: "🤝",
      tag: "이어서",
      title: "꿈드림 센터 상담 신청",
      meta: "만 9~24세 학교 밖 청소년 대상. 진학·취업 경로를 같이 비교해볼 수 있어요.",
      detail: `
        <p class="detail-lead">혼자 정하기 어려우면 상담사와 같이 비교해보는 게 빨라요. <strong>무료</strong>예요.</p>
        <ul class="plain">
          <li>청소년지원센터 꿈드림 — 만 9~24세 학교 밖 청소년 대상이에요.</li>
          <li>검정고시 준비, 교재비, 상담을 지원해요.</li>
          <li>가까운 센터 위치는 청소년상담 1388(전화 1388)로 물어보면 안내받을 수 있어요.</li>
        </ul>
        ${linksHTML(["center", "mogef"])}`
    });
    steps.push({
      id: "none:decide",
      icon: "🎯",
      tag: "그 다음",
      title: "목표 정하기",
      meta: "검정고시, 학교 복귀, 일할 준비 중에서 골라봐요.",
      detail: `
        <p class="detail-lead">크게 세 갈래예요. 지금 결정이 최종은 아니고, 나중에 바꿀 수 있어요.</p>
        <ul class="plain">
          <li><strong>검정고시</strong> — 시험으로 학력을 인정받아요. 시험 비용은 없어요.</li>
          <li><strong>학교 복귀</strong> — 재입학·편입학, 방송통신고 등이 있어요.</li>
          <li><strong>일할 준비</strong> — 자격증, 직업훈련부터 시작해요.</li>
        </ul>
      `
    });
    steps.push({
      id: "none:comeback",
      icon: "🔄",
      tag: "목표",
      title: "다시 와서 로드맵 받기",
      meta: "목표를 고르면 날짜가 들어간 로드맵이 나와요.",
      detail: `
        <p class="detail-lead">목표를 고르면 <strong>실제 날짜와 D-day가 들어간 로드맵</strong>이 나와요.</p>
        <ul class="plain">
          <li>다음 검정고시 원서접수·시험·발표 날짜가 계산돼요.</li>
          <li>지금 뭘 해야 하는지 순서대로 정리돼요.</li>
          <li>단계마다 완료 체크를 할 수 있어요.</li>
        </ul>
        <p class="note-mini">지금 답한 내용은 이 브라우저에 저장돼 있어서, 다시 와도 이어서 할 수 있어요.</p>
      `
    });
  }

  return steps;
}

const ROADMAP_TONES = ["c1", "c2", "c3", "c4"];

/* 완료 체크는 단계 id로 저장한다. 답변이 바뀌어 경로가 달라지면
   맞지 않는 id는 그냥 안 쓰이고, 진행률은 현재 단계만 세어서 낸다. */
let roadmapDone = {};
let openStepId = null;

function loadRoadmapDone() {
  try {
    const saved = JSON.parse(localStorage.getItem(ROADMAP_STORAGE_KEY) || "null");
    roadmapDone = saved && typeof saved === "object" ? saved : {};
  } catch (e) {
    roadmapDone = {};
  }
}

function saveRoadmapDone() {
  try {
    localStorage.setItem(ROADMAP_STORAGE_KEY, JSON.stringify(roadmapDone));
  } catch (e) {
    /* localStorage unavailable — 체크는 화면에만 남는다 */
  }
}

function progressHTML(steps) {
  const doneCount = steps.filter((step) => roadmapDone[step.id]).length;
  const percent = steps.length ? Math.round((doneCount / steps.length) * 100) : 0;
  const allDone = steps.length > 0 && doneCount === steps.length;

  return `<div class="scv-prog${allDone ? " scv-prog--done" : ""}">`
    + `<p class="scv-prog__count"><strong>${steps.length}개 중 ${doneCount}개</strong> 완료${allDone ? " · 다 했어요!" : ""}</p>`
    + `<div class="scv-prog__bar"><i style="width: ${percent}%"></i></div>`
    + (doneCount ? '<button type="button" class="scv-prog__reset" data-roadmap-reset="1">체크 초기화</button>' : "")
    + `</div>`;
}

function renderRoadmap() {
  /* 아래쪽 단계를 체크하면 다시 그리면서 맨 위로 튀어서, 스크롤 위치를 지켜준다 */
  const panel = roadmapSlot.closest(".roadmap-panel");
  const keepScroll = panel ? panel.scrollTop : 0;

  const steps = roadmapSteps();
  if (!steps.length) {
    roadmapSlot.innerHTML = '<p class="roadmap-empty">질문에 답하면 여기에 로드맵이 그려져요.</p>';
    if (openStepId) { openStepId = null; stepDetail.hidden = true; }
    return;
  }
  /* 경로가 바뀌어 없어진 단계가 열려 있으면 닫는다 */
  if (openStepId && !steps.some((st) => st.id === openStepId)) {
    openStepId = null;
    stepDetail.hidden = true;
    stepDetailBody.innerHTML = "";
  }

  const pills = steps.map((step, idx) => {
    const isLast = idx === steps.length - 1;
    const tone = isLast ? "goal" : ROADMAP_TONES[idx % ROADMAP_TONES.length];
    const side = idx % 2 === 1 ? " scv__step--r" : "";
    const done = Boolean(roadmapDone[step.id]);
    const open = step.id === openStepId;
    const pill = `<div class="scv__step scv__step--${tone}${side}${done ? " is-done" : ""}${open ? " is-open" : ""}">`
      + `<button type="button" class="scv__open" data-step-id="${esc(step.id)}" aria-expanded="${open}">`
      + `<span class="scv__ico" aria-hidden="true">${step.icon}</span>`
      + `<span class="scv__txt">`
      + `<span class="scv__n">STEP ${String(idx + 1).padStart(2, "0")} · ${esc(step.tag)}</span>`
      + `<span class="scv__ttl">${esc(step.title)}</span>`
      + `<span class="scv__meta">${esc(step.meta)}</span>`
      + `</span>`
      + `<span class="scv__more" aria-hidden="true">${open ? "닫기" : "자세히"}</span>`
      + `</button>`
      + `<button type="button" class="scv__check" data-step-id="${esc(step.id)}" aria-pressed="${done}"`
      + ` aria-label="${esc(step.title)} ${done ? "완료 취소" : "완료로 표시"}"><span aria-hidden="true">✓</span></button>`
      + `</div>`;
    if (isLast) return pill;
    return pill + `<div class="scv__conn scv__conn--${idx % 2 === 0 ? "lr" : "rl"}" aria-hidden="true"></div>`;
  }).join("");

  roadmapSlot.innerHTML = progressHTML(steps) + `<div class="scv">${pills}</div>`;
  if (panel) panel.scrollTop = keepScroll;
}

function showStepDetail(step, idx, total) {
  stepDetailTag.textContent = `STEP ${String(idx + 1).padStart(2, "0")} / ${total} · ${step.tag}`;
  stepDetailTitle.textContent = step.title;
  stepDetailBody.innerHTML = step.detail || `<p class="detail-lead">${esc(step.meta)}</p>`;
  stepDetail.hidden = false;
  /* 데스크톱은 안내 카드가 자체 스크롤이라 위로 올리는 것만으로 보이지만,
     모바일처럼 한 칸으로 쌓이는 레이아웃에서는 카드 자체가 화면 밖에 있을 수
     있다 — scrollIntoView로 펼친 내용이 있는 곳까지 화면을 실제로 옮긴다. */
  stepDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeStepDetail() {
  openStepId = null;
  stepDetail.hidden = true;
  stepDetailBody.innerHTML = "";
  renderRoadmap();
}

document.querySelector("#stepDetailClose").addEventListener("click", closeStepDetail);

roadmapSlot.addEventListener("click", (event) => {
  const opener = event.target.closest(".scv__open");
  if (opener) {
    const id = opener.dataset.stepId;
    if (openStepId === id) {
      closeStepDetail();
      return;
    }
    const steps = roadmapSteps();
    const idx = steps.findIndex((st) => st.id === id);
    if (idx === -1) return;
    openStepId = id;
    renderRoadmap();
    showStepDetail(steps[idx], idx, steps.length);
    return;
  }

  if (event.target.closest("[data-roadmap-reset]")) {
    roadmapDone = {};
    saveRoadmapDone();
    renderRoadmap();
    return;
  }

  const btn = event.target.closest(".scv__check");
  if (!btn) return;

  const id = btn.dataset.stepId;
  const nowDone = !roadmapDone[id];
  if (nowDone) {
    roadmapDone[id] = true;
  } else {
    delete roadmapDone[id];
  }
  saveRoadmapDone();

  /* 로드맵 전체를 다시 그리면 방금 누른 버튼이 DOM에서 사라져서
     키보드 포커스가 날아간다. 해당 알약과 진행률만 제자리에서 갱신한다. */
  const pill = btn.closest(".scv__step");
  pill.classList.toggle("is-done", nowDone);
  btn.setAttribute("aria-pressed", String(nowDone));
  btn.setAttribute("aria-label", `${pill.querySelector(".scv__ttl").textContent} ${nowDone ? "완료 취소" : "완료로 표시"}`);

  const prog = roadmapSlot.querySelector(".scv-prog");
  if (prog) prog.outerHTML = progressHTML(roadmapSteps());
});

function updateResult() {
  const statusKey = currentStatusKey();
  const goals = selectedTopics();
  const selectedSchools = checkedValues("school");

  /* 궁금한 대학 체크는 다른 답변처럼 새로고침해도 이어지도록 상태에 반영해 저장한다 */
  statusState.schools = selectedSchools;
  saveStatusState();

  if (!statusKey) {
    summaryTitle.textContent = "질문에 순서대로 답해 주세요.";
    summaryText.textContent = "사는 지역과 최종 학력, 앞으로의 목표를 고르면 맞춤 안내가 나와요.";
    detailSections.innerHTML = "";
    selectedDetails.innerHTML = "";
    activeICSPayload = null;
    renderList(topSteps, [], 3);
    renderList(infoList, [], 5);
    renderList(actionList, [], 5);
    renderUniversities(selectedSchools);
    renderRoadmap();
    return;
  }

  const statusData = statusCopy[statusKey];
  const schoolNames = selectedSchools.map((key) => universities[key].name);
  const region = statusState.region ? REGIONS[statusState.region] : null;

  const infoItems = [...statusData.baseInfo, ...goals.map((goal) => goalCopy[goal].info)];
  const actionItems = [...statusData.baseActions, ...goals.map((goal) => goalCopy[goal].action)];
  const stepItems = [...statusData.steps, ...goals.map((goal) => goalCopy[goal].step)];

  /* 지역·청소년증은 목록 뒤에 붙이면 5개 제한에 잘려서 맨 앞으로 올린다 */
  if (region) {
    infoItems.unshift(`${region.area} 검정고시 공고와 시험장`);
    actionItems.unshift(`시험장과 확정 일정은 ${region.office} 공고에서 확인해요.`);
  }

  if (statusState.youthInfo === "yes") {
    stepItems.unshift("가까운 주민센터에서 청소년증을 신청해요.");
    infoItems.unshift("청소년증 발급 절차와 준비물");
  }

  /* 자퇴 후 응시 제한은 시험 일정 전체를 바꾸는 조건이라 맨 앞에 둔다 */
  const rule = quitRule();
  if (rule && rule.applies) {
    infoItems.unshift(`고등학교를 그만둔 뒤 6개월이 지나는 날: ${fmtDateY(rule.clearDate)}`);
    actionItems.unshift(rule.firstOk
      ? `${rule.firstOk.round}부터 응시할 수 있어요. 기준은 시험일이 아니라 공고일이에요.`
      : "응시 가능한 회차의 공고일을 교육청에서 직접 확인해야 해요.");
    if (rule.rounds[0] && rule.rounds[0].state !== "ok") {
      stepItems.unshift("응시할 수 있는 회차를 교육청 공고에서 확인해요.");
    }
  } else if (rule && !rule.applies) {
    infoItems.unshift("중학교 정원외관리증명서");
    actionItems.unshift("중학교를 그만둔 경우는 기다리는 기간이 없어요. 정원외관리증명서를 챙기세요.");
  }

  summaryTitle.textContent = statusData.title;
  summaryText.textContent = `${region ? `${region.name} 기준으로 안내해요. ` : ""}${statusData.summary} ${schoolNames.length ? `선택한 대학: ${schoolNames.join(", ")}` : "대학은 아직 선택하지 않아도 괜찮아요."}`;

  activeICSPayload = (statusKey === "elemGed" || statusKey === "midGed")
    ? { events: flattenExamEvents(), filename: "검정고시_일정.ics", calName: "검정고시 일정" }
    : null;

  const detailRenderer = statusDetailHTML[statusKey];
  detailSections.innerHTML = detailRenderer ? detailRenderer() : "";
  selectedDetails.innerHTML = quitRuleHTML()
    + youthCardDetailHTML()
    + searchLinksHTML(statusData.keywords)
    + compiledGoalsHTML(goals)
    + compiledUniversitiesHTML(selectedSchools);

  renderPrioritySteps(topSteps, stepItems, 3);
  renderList(infoList, infoItems, 5);
  renderList(actionList, actionItems, 5);
  renderUniversities(selectedSchools);
  renderRoadmap();
}

detailSections.addEventListener("click", (event) => {
  const btn = event.target.closest("#icsDownloadBtn");
  if (!btn || !activeICSPayload) return;
  downloadICS(activeICSPayload.events, activeICSPayload.filename, activeICSPayload.calName);
});

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
    hideAiNotesCard();
  });
}

const heroView = document.querySelector("#heroView");
const mainView = document.querySelector("main");
const footerView = document.querySelector("footer");
const finderSection = document.querySelector("#finder");

function goToFinderPage() {
  heroView.hidden = true;
  mainView.hidden = false;
  footerView.hidden = false;
  finderSection.hidden = false;
  universitiesSection.hidden = true;
  window.scrollTo(0, 0);
}

function goToHeroPage() {
  heroView.hidden = false;
  mainView.hidden = true;
  footerView.hidden = true;
  universitiesSection.hidden = true;
  window.scrollTo(0, 0);
}

document.querySelector("#btnStartFinder").addEventListener("click", goToFinderPage);

document.querySelector("#navBrand").addEventListener("click", (event) => {
  event.preventDefault();
  goToHeroPage();
});

document.querySelector("#navToFinder").addEventListener("click", (event) => {
  event.preventDefault();
  goToFinderPage();
});

/* 포항 대학 정보는 상단 메뉴를 눌렀을 때만 나오는 전용 화면이다 —
   위저드(situationView/detailsView)는 숨기고 이 섹션만 보여준다. */
document.querySelector("#navToUniversities").addEventListener("click", (event) => {
  event.preventDefault();
  heroView.hidden = true;
  mainView.hidden = false;
  footerView.hidden = true;
  finderSection.hidden = true;
  universitiesSection.hidden = false;
  window.scrollTo(0, 0);
});

document.querySelector("#btnBackToSituation").addEventListener("click", () => {
  detailsView.hidden = true;
  situationView.hidden = false;
  wizIndex = 0;
  renderWizard();
  situationView.scrollIntoView({ behavior: "smooth", block: "start" });
});

btnWizBack.addEventListener("click", goBack);
btnWizNext.addEventListener("click", goNext);

form.addEventListener("change", updateResult);
loadRoadmapDone();
restoreStatusState();
updateResult();
