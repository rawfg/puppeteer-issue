import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
	ignoreHTTPSErrors: true,
	args: ['--single-process'],
	headless: 'new', // switching to true on Windows fixes the issue
	channel: 'chrome',
	// executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // works fine on MacOS
	executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // crashes on Windows
});

const pages = await browser.pages();
const page = pages && pages.length > 0 ? pages[0] : await browser.newPage();
await page.setViewport({width: 1920, height: 1080});
await page.goto('https://google.com', {waitUntil: 'load'});

console.log('Taking a screenshot of Google');
await page.screenshot({path: './google.png'});

await page.close();
await browser.close();
console.log('Exiting...');

process.exit();