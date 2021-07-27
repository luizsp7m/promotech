const puppeteer = require('puppeteer');

export default async function getImages(request, response)  {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/catkitty212/');

  const imgList = await page.evaluate(() => {
    const nodeList = document.querySelectorAll('article img');
    const imgArray = [...nodeList];
    const imgList = imgArray.map(( { src } ) => ({
      src
    }));

    return imgList;
  });

  await browser.close();

  return response.status(200).json(imgList);
}