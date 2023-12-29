/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { ContactLensesProductDetail } from "../pageObjects/ContactLensesProductDetail"
import { beforeEach } from "mocha"


const homepage = new Homepage
const contactLensesProductDetail = new ContactLensesProductDetail

describe('ContactLensesProductDetail TS_017',function(){
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Returning false prevents Cypress from failing the test
          return false;
        });
    })
  
    beforeEach(()=>{
      cy.visit('/contact-lenses')
      homepage.closeDiscountPOpup()
      })
    it ('TC_CLPD_001 - Verify the content on the Contact-lenses Product detail page shown correctly',function(){
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.validateAllContentOnProductDetailPage()
    })

    it ('TC_CLPD_002 - Validate the "RATINGS & REVIEWS" functionality on product detail page',function(){
      contactLensesProductDetail.addLoginDetails()
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.goToAddReview()
    })

    it ('TC_CLPD_003 - Validate the "QUESTIONS & ANSWERS" section and functionality on product detail page',function(){
  
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.goToQuestionAnswersSection()
    })

    it ('TC_CLPD_005 - Validate the "Add to Cart" functionality on the contact-lenses product page after setting eyes prescription separately',function(){
   
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.addAProductToCartAndValidate()
      contactLensesProductDetail.removeAProductFromCart()
    })

    it ('TC_CLPD_006 - Validate the "Add to Cart" functionality on the contact-lenses product page after setting only Right Eye (OD) prescription',function(){
    
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.addProductToCartWithRightEyeOD()
      contactLensesProductDetail.removeAProductFromCart()
    })

    it ('TC_CLPD_007 - Validate the "Add to Cart" functionality on the contact-lenses product page after setting only Left Eye (OD) prescription',function(){
    
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.addProductToCartWithLeftEyeOD()
      contactLensesProductDetail.removeAProductFromCart()
    })

    it ('TC_CLPD_008 - Validate the "Add to Cart" functionality on the contact-lenses product page after enabling Same prescription for both eyes',function(){
    
      cy.selectRandomProduct()
      contactLensesProductDetail.addtocartwithSameprescription()
      
    })

    it ('TC_CLPD_009 - Validate on the contact-lenses product if user clicks on "Add to cart" without selecting any option app shows an error',function(){
      cy.visit('https://www.ezcontacts.com/contact-lenses')
      contactLensesProductDetail.goToFirstProductDetailPage() 
      contactLensesProductDetail.addProductToCartWithoutSelect()
    })
})    