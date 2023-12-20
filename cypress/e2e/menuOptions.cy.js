// <reference types = "Cypress"/>

import { MenuOptions } from "../pageObjects/MenuOptions"
import { Homepage } from "../pageObjects/Homepage"

const menuOptions = new MenuOptions
const homepage = new Homepage

describe('MenuOptions TS_005 ',function(){
    
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Returning false prevents Cypress from failing the test
          return false;
        });
      });
    
    it('TC_MN_001 - Validate Sunglasses Menu option', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToSunglassesCatalog() //Visit and validate the link
    })  

    it('TC_MN_002 - Verify that under the sunglasses menu option, Mens sunglasses link is accessible ', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToMensSunglassesCatalog() //Visit and validate the link
    }) 

    it('TC_MN_003 - Verify that under the sunglasses menu option, Womens sunglasses link is accessible ', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToWomensSunglassesCatalog() //Visit and validate the link
    }) 
    
    it('TC_MN_004 - Verify that under the sunglasses menu option, Womens sunglasses link is accessible ', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToChildrensSunglassesCatalog() //Visit and validate the link
    }) 

    it('TC_MN_005 - Verify that EYEGLASSES option in the menu is clickable and redirect the user on the eyeglasses product page', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToEyeglassesCatalog()//visit and validate the link
    })

    it('TC_MN_006 - Verify that under the eyeglasses menu option, the Mens eyeglasses link is accessible ', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToMensEyeglassesCatalog()
    })
    it('TC_MN_007 - Verify that under the eyeglasses menu option, Womens eyeglasses link is accessible ', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToWomensEyeglassesCatalog()
    })

    it('TC_MN_008 - Verify that under the eyeglasses menu option, Children eyeglasses link is accessible ', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToChildrenEyeglassesCatalog()
    })

    it('TC_MN_009 - Verify that the CONTACT LENSES menu option is clickable and redirect the user on CONTACT LENSES product page', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToContactLenseCatalog() //Visit and validate
    })
    
    it('TC_MN_010 - Verify that the READER menu option is clickable and redirect the user on READERS product page', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToReadersCatalog() //Visit and validate
    })
    
    it('TC_MN_011 - Verify that the EYE-CARE menu option is clickable and redirect the user to EYE_CARE product page', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToEyecareCatalog() //Visit and validate
    })
    it('TC_MN_012 - Verify that the CLEARANCE menu option is clickable and redirect the user to the EYEWEAR-Clearance product page', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToEyewearClearanceCatalog() //Visit and validate
    })

    it('TC_MN_013 - Verify that under the SUNGLASSES menu, on the frame shape section "Aviator" shape is shown and clickable', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToAviatorShapeSunglasses() 
        
    })
    it('TC_MN_014 - Verify that under the SUNGLASSES menu, on the frame shape section "Rectangle" shape is shown and clickable', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToRectangleShapeSunglasses() 
        
    })
    it('TC_MN_015 - Verify that under the SUNGLASSES menu, on the frame shape section "Oval" shape is shown and clickable', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToOvalShapeSunglasses() 
    })
    it('TC_MN_016 - Verify that under the SUNGLASSES menu, on the frame shape section "cat-eye" shape is shown and clickable', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToCateyeShapeSunglasses() 
    })
    it('TC_MN_017 - Verify that under the SUNGLASSES menu, on the frame shape section "round" shape is shown and clickable', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToRoundShapeSunglasses() 
    })
    it('TC_MN_018 - Verify that in the SUNGLASSES menu, under the "Featured Brands" heading, the "TOM-FORD" option is shown and clickable', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToTomFordSunglasses() //visit and validate
    })
    it('TC_MN_019 - Verify that in the SUNGLASSES menu, under the "Featured Brands" heading, the "PERSOL" option is shown and clickable', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToPersolSunglasses() //visit and validate
    })
    it('TC_MN_020 - Verify that in the SUNGLASSES menu, under the "Featured Brands" heading, the "BURBERRY" option is shown and clickable', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToBurberrySunglasses() //visit and validate
    })
    it('TC_MN_021 - Verify that in the SUNGLASSES menu, under the "Featured Brands" heading, the "Ray-ban" option is shown and clickable', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToRaybanSunglasses() //visit and validate
    })
    
    it('TC_MN_022 - Verify that in the EYEGLASSES menu, the "Rectangle" shape icon is shown and accessible under the "Frame shapes" category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToRectangleShapeEyeglasses()
    })

    it('TC_MN_023 - Verify that in the EYEGLASSES menu, the "Oval" shape icon is shown and accessible under the "Frame shapes" category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToOvalShapeEyeglasses()
    })
    
    it('TC_MN_024 - Verify that in the EYEGLASSES menu, the "Cat-eye" shape icon is shown and accessible under the "Frame shapes" category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToCateyeShapeEyeglasses()
    })
    it('TC_MN_025 - Verify that in the EYEGLASSES menu, the "Round" shape icon is shown and accessible under the "Frame shapes" category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToRoundShapeEyeglasses()
    })    
    it('TC_MN_026 - Verify that in the EYEGLASSES menu, the "TOM-FORD" option is shown and accessible under the "FEATURED BRANDS" category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToTomfordEyeglasses()
    })
    it('TC_MN_027 - Verify that in the EYEGLASSES menu, the "Persol" option is shown and accessible under the "FEATURED BRANDS" category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToPersolEyeglasses()
    })
    it('TC_MN_028 - Verify that in the EYEGLASSES menu, the "Ray-ban" option is shown and accessible under the "FEATURED BRANDS" category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToRaybanEyeglasses()
    })
    it('TC_MN_029 - Verify that in the EYEGLASSES menu, the "Burberry" option is shown and accessible under the "FEATURED BRANDS" category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.goToBurberryEyeglasses()
    })
    it('TC_MN_030 - Verify that under the CONTACT LENSES menu option, Four random Brands are shown under "Feature Brands"', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.verifyContactLenseDropdown()
    })
    it('TC_MN_031 - Verify that under the CONTACT LENSES Brand option, Sixteen random Brand name links are shown under "Popular Brands"', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.verifyContactLenseBrandOptions()
    })

    it('TC_MN_032 - Verify that the EYE-CARE menu dropdown options is shown and accessible', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        menuOptions.verifyEyecareBrandOptions()
    })
})
