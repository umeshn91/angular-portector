const { browser } = require("protractor");

describe('LMS\'s Search Functionality', function() {

    it('can find search results', function() {
    
        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.driver.get('http:localhost:4200');
    
    
    //title of the launched webpage is expected to be BrowserStack - Google Search
    
        expect(browser.getTitle()).toEqual('Lms');
    });
    });

        it('should click to the search button', function(){
        
        element(by.xpath('//button[@class="btn btn-primary hidden-xs"]')).click().sendKeys('java');
        console.log("Search button clicked");
    });

  