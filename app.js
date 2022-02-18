import puppeteer from "puppeteer-extra"
import RecaptchaPlugin from "puppeteer-extra-plugin-recaptcha"
import bypass from "./bypass/captchaBypasser.js"

puppeteer.use(RecaptchaPlugin({
  provider: {
    fn: bypass,
  }
}))

puppeteer.launch({headless: false}).then(async (browser) => {
  const page = await browser.newPage()
  await page.goto('http://democaptcha.com/demo-form-eng/hcaptcha.html')
  console.log('Solving captcha...')
  await page.solveRecaptchas()
  console.log('Captcha solved!')
})