import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app-check.js";
import { getAI, getGenerativeModel, GoogleAIBackend } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-ai.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8h4Pa6kv2JDO6zKbBug9BGoNEb2E4XFU",
  authDomain: "campus-ax-ton.firebaseapp.com",
  projectId: "campus-ax-ton",
  storageBucket: "campus-ax-ton.firebasestorage.app",
  messagingSenderId: "1050696088881",
  appId: "1:1050696088881:web:56903bfdd0348fb6540410",
  measurementId: "G-Q0K8YPC5D3"
};

const app = initializeApp(firebaseConfig);
initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider("6LfnH5stAAAAALluLj2DslVZQPz1TDMqfWiayQqG"),
  isTokenAutoRefreshEnabled: true
});

const ai = getAI(app, { backend: new GoogleAIBackend() });
const model = getGenerativeModel(ai, {
  model: "gemini-3.5-flash-lite",
  generationConfig: {
    responseMimeType: "application/json",
    temperature: 0.2,
    maxOutputTokens: 700
  }
});

function normalizeList(value) {
  return Array.isArray(value)
    ? value.filter((item) => typeof item === "string").map((item) => item.trim()).filter(Boolean).slice(0, 3)
    : [];
}

function parseJson(text) {
  const clean = String(text || "").trim().replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
  return JSON.parse(clean);
}

function buildPrompt(notes, context) {
  return `
너는 학교 밖 청소년을 위한 검정고시·진로 안내 사이트의 보조 분석기야.
사용자가 마지막 메모에 쓴 내용을 보고, 기존 규칙 기반 안내에서 추가로 확인하면 좋은 점만 짚어줘.

중요한 원칙:
- 새로운 제도, 날짜, 합격 가능성, 법적 판단을 지어내지 마.
- "반드시 된다", "지원 가능하다"처럼 단정하지 마.
- 공식 확인이 필요한 내용은 교육청, 꿈드림, 대학 입학처 등 공식 창구 확인으로 표현해.
- 중학생도 이해할 수 있게 짧고 쉬운 말로 써.
- 결과는 JSON만 출력해. 설명 문장은 JSON 밖에 쓰지 마.

JSON 형식:
{
  "hasUsefulInfo": boolean,
  "summary": "메모에서 읽힌 상황을 1문장으로 요약",
  "infoItems": ["추가로 확인하면 좋은 정보 1", "추가로 확인하면 좋은 정보 2"],
  "actionItems": ["바로 해볼 행동 1", "바로 해볼 행동 2"]
}

선택 답변:
${JSON.stringify(context, null, 2)}

사용자 메모:
${notes}
`.trim();
}

window.axtonAnalyzeNotes = async function axtonAnalyzeNotes(notes, context = {}) {
  const trimmed = String(notes || "").trim();
  if (!trimmed) {
    return { hasUsefulInfo: false, summary: "", infoItems: [], actionItems: [] };
  }

  const result = await model.generateContent(buildPrompt(trimmed, context));
  const raw = result.response.text();
  const parsed = parseJson(raw);

  return {
    hasUsefulInfo: Boolean(parsed.hasUsefulInfo),
    summary: typeof parsed.summary === "string" ? parsed.summary.trim() : "",
    infoItems: normalizeList(parsed.infoItems),
    actionItems: normalizeList(parsed.actionItems)
  };
};
