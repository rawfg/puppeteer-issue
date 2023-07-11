import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
	ignoreHTTPSErrors: true,
	args: ['--single-process'],
	headless: 'new',
	channel: 'chrome',
	// executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
});

const pages = await browser.pages();
const page = pages && pages.length > 0 ? pages[0] : await browser.newPage();
await page.setViewport({width: 1920, height: 1080});
await page.goto('https://google.com', {waitUntil: 'load'});
console.log('Taking a screenshot of Google');
await page.screenshot({path: './google.png'});
await page.close();
await browser.close();

