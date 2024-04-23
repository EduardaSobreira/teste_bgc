const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

async function scrapeAmazonBestsellers() {
    let browser = null;
    try {
        const executablePath = await chromium.executablePath;
        browser = await puppeteer.launch({
            args: chromium.args,
            executablePath,
        });

        const page = await browser.newPage();

        await page.goto('https://www.amazon.com.br/bestsellers/');

        const pageData = await page.evaluate(() => {
            const products = [];
            for (let i = 0; i < 3; i++) {
                const product = {};
                product.title = document.querySelectorAll('.p13n-sc-truncate-desktop-type2')[i].innerText;
                product.price = document.querySelectorAll('.a-size-base.a-color-price')[i].innerText;
                product.rating = document.querySelectorAll('.a-icon-row')[i].innerText;
                product.url = document.querySelectorAll('.a-link-normal')[i + 1].href;

                products.push(product);
            }
            return products;
        });

        return {
            statusCode: 200,
            body: JSON.stringify(pageData)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' })
        };
    } finally {
        if (browser !== null) {
            await browser.close();
        }
    }
}

module.exports = { scrapeAmazonBestsellers };