/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { EyeglassesProductDetail } from "../pageObjects/EyeglassesProductDetail"


const homepage = new Homepage
const eyeglassesProductDetail = new EyeglassesProductDetail

describe('EyeglassesProductDetail TS_016',function(){
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Returning false prevents Cypress from failing the test
          return false;
        });
    })

    it ('TC_EPD_001 - Verify the content on the Eyeglasses Product detail page shown correctly',function(){
      cy.visit('https://www.ezcontacts.com/eyeglasses')
      homepage.closeDiscountPOpup()
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.validateAllContentOnProductDetailPage()
    })

    it ('TC_EPD_002 - Validate the "RATINGS & REVIEWS" functionality on product detail page',function(){
        eyeglassesProductDetail.addLoginDetails()
        homepage.closeDiscountPOpup()
        eyeglassesProductDetail.goToFirstProductDetailPage()
        eyeglassesProductDetail.goToAddReview()
    })
})