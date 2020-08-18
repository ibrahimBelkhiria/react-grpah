import * as webdriver from "selenium-webdriver";
import { until, By } from "selenium-webdriver";

/**
 * @jest-environment jest-environment-webdriver
 */

const serverUrl = "http://localhost:3000/";

const appTitle = "React Github";


const browser =  new webdriver.Builder()
                    .forBrowser("chrome").build();

    
    test('it performs a validation of title on the home page', async () => {
    await browser.get(serverUrl)
    await browser.wait(until.elementLocated(By.tagName('title')));
    const title = await browser.findElement(By.tagName('title'));
    
    console.log(title);
     expect(title).toContain(appTitle);
    })
    
    test('it performs a validation of the search box on the page', async () => {
    const foundAndLoadedCheck = async () => {
        await until.elementLocated(By.id('keyword'))
        const value = await browser.findElement(By.id('keyword')).getText()
        return value !== '~'
    }
    
    await browser.wait(foundAndLoadedCheck, 3000)
    const search = await browser.findElement(By.id('keyword')).getText()
    expect(search).toEqual('')
    })
    
// declaring the test group
    
    describe('it captures a screenshot of the current page on the browser', () => {
        test('snap a picture by taking the screenshot', async () => {
            // files saved in ./reports/screenshots by default
            await browser.get(serverUrl)
            await browser.takeScreenshot()
            
        })
    })