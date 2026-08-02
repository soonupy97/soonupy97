/* claude-4session-demo.html -> PNG frame sequence (deterministic via CDP virtual time) */
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const CHROME = "C:\\Users\\soonu\\AppData\\Local\\ms-playwright\\chromium-1234\\chrome-win64\\chrome.exe";
const PAGE_URL = "file:///C:/Project/Portfolio/recording-src/claude-4session-demo.html";
const OUT = path.join(__dirname, "frames");

const W = 1440, H = 900;
const FPS = 15;
const DURATION = 45.0; // 본편 43s + 마지막 화면 2s 홀드
const STEP_MS = 1000 / FPS;
const TOTAL_FRAMES = Math.round(DURATION * FPS);

(async () => {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: [
      `--window-size=${W},${H}`,
      "--run-all-compositor-stages-before-draw",
      "--disable-new-content-rendering-timeout",
      "--hide-scrollbars=false",
      "--force-device-scale-factor=1",
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  await page.goto(PAGE_URL, { waitUntil: "networkidle0" });

  // 컨트롤 바 숨김
  await page.addStyleTag({ content: ".ctrl{display:none!important}" });

  const client = await page.createCDPSession();

  // 가상 시간 일시정지 → 재생 클릭 → 프레임 단위로 시간 전진
  await client.send("Emulation.setVirtualTimePolicy", { policy: "pause" });
  await page.evaluate(() => document.getElementById("play").click());

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const expired = new Promise((res) =>
      client.once("Emulation.virtualTimeBudgetExpired", res)
    );
    await client.send("Emulation.setVirtualTimePolicy", {
      policy: "pauseIfNetworkFetchesPending",
      budget: STEP_MS,
    });
    await expired;

    const file = path.join(OUT, `f${String(i).padStart(4, "0")}.png`);
    await page.screenshot({ path: file });

    if (i % 75 === 0) console.log(`frame ${i}/${TOTAL_FRAMES}`);
  }

  await browser.close();
  console.log(`done: ${TOTAL_FRAMES} frames -> ${OUT}`);
})().catch((e) => { console.error(e); process.exit(1); });
