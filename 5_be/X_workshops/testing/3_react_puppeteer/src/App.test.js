// wir importieren puppeteer
const puppeteer = require('puppeteer');

// wir erstellen eine variable für unsere applikationsurl
const url = 'http://localhost:3000';

// wir erstellen eine vairable für die zeit, die eine interkation in anspruch nehmen soll:
const interactionDelay = 500;

// wir erstellen 2 lets, um sie mit den asynchronen daten anzubinden:
let browser;
let page;

// VOR ALLEM WAS IN DEN TESTS PASSIERT:
beforeAll(async () => {
  // wir legen die methoden .launch(); und .newPage(); auf unsere variablen:
  browser = await puppeteer.launch({
    headless: false // wir setzen im bereich beforeAll(); den paramter "headless" auf false
  });
  page = await browser.newPage();
  page.setDefaultNavigationTimeout(5000);
});

// NACHDEM ALLES GETESTET WURDE:
afterAll(async () =>
{
  await page.waitForTimeout(2500);
  await browser.close();
});

// wir erklären, das wir die react app testen, hier können wir auch genau wie bei jest einzelne komponenten nutzen
describe('React App', () => {

  // ES RENDERT EINE WILLKOMMENSNACHRICHT
  test('renders welcome message', async() =>
  {
    // gehe auf die seite
    await page.goto(url);

    // wir legen den inhalt der H1 in der react app auf eine variable:
    const text = await page.$eval('h1', (h1) => h1.textContent);

    // WIR ERWARTEN, DAS DER INHALT DER H1 "Hallo Welt!" IST
    expect(text).toEqual('Hallo Welt!');
  });

  // ES INTERAGIERT MIT DEM COUNTER BUTTON
  test('interacts with the counter button', async () =>
  {
    await page.goto(url);

    // wir überprüfen den Counter-Werlt, bevor die inkrementation erfolgt:
    const counterBefore = await page.$eval('h2', (h2) => h2.textContent);

    // der text soll "0" sein
    expect(counterBefore).toEqual('0');

    // es soll den button anklicken:
    // außerdem bauen wir in alle ausführungen noch unser vorher definiertes delay ein
    
    await page.click('button', {delay: interactionDelay}); 
    await page.click('button', {delay: interactionDelay});
    await page.click('button', {delay: interactionDelay});
    await page.click('button', {delay: interactionDelay});
    await page.click('button', {delay: interactionDelay});

    // der counter wert soll nach der interaktion höher sein:
    const counterAfter = await page.$eval('h2', (h2) => h2.textContent);

    expect(counterAfter).toEqual('5');
  });
});
