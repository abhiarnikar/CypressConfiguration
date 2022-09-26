export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); 
        if (envi == 'production') 
            return "https://www.flipkart.com/"; 
        else if (envi == 'staging')
            return "https://www.google.com/";
        else if (envi == 'qa')
            return "https://www.facebook.com/";
    }
}