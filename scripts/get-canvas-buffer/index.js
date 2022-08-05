const render = require("../renderer/index.js");
const puppeteer = require("puppeteer");
const fs = require("fs");

async function getCanvasBuffer() {
  const cleanup = await render(
    "/Users/erikrehn/Desktop/altostruct/altostruct-landing-page/src/components/City/index.tsx"
  );

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1300 * 6,
      height: 300 * 6,
    },
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:9999");
  await page.screenshot({ path: "example.png" });
  const mime = "image/webp";

  const dataUrl = await page.evaluate(async () => {
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL("image/webp", 0.5);
    return url;
  });
  const base64Buffer = dataUrl.replace(`data:${mime};base64`, "");
  const buffer = Buffer.from(base64Buffer, "base64");
  await browser.close();
  cleanup();
  return buffer;
}

module.exports = getCanvasBuffer;
