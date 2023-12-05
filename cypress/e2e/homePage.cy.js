/// <reference types = "Cypress"/>

import{ Homepage } from "../pageObjects/Homepage"

const homepage = new Homepage

describe('HomePage TS_002', function(){
    it ('TC_EZ_008 - Validate the "Sunglasses" drop-down category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.hoverOnSunglassesMenu() //Hover on Sunglasses Menu
        homepage.validateMensSunglassesMenuOptions() //Validate Men's menu options
        homepage.validateWomensSunglassesMenuOptions() //Validate Women's menu options
        homepage.validateChildrenSunglassesMenuOptions() //Validate Children's menu options
        homepage.validateFrameShapeOnSunglasses() //Validate Frame shapes on sunglasses
    })

    it ('TC_EZ_009 - Validate the "Eyeglasses" drop-down category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.hoverOnEyeglassesMenu() //Hover on Eyeglasses Menu
        homepage.verifyFrameShapesOnEyeglasses() //Verify Frameshapes on eyeglasses
        homepage.validateMensEyeglassesMenuOptions() //Validate Men's eyeglasses menu options
        homepage.validateWomensEyeglassesMenuOptions() //Validate Women eyeglasses menu options
        homepage.validateChildrenEyeglassesMenuOptions() //Validate Children eyeglasses menu options
    })

    it ('TC_EZ_010 - Validate the "Contact Lenses" drop-down category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.hoverOnContactLenseMenu() //Hover on Contact Lenses Menu
        homepage.verifyPopularBrandsOnContectLense() //Verify Popular Brands on Contact Lense
    })

    it ('TC_EZ_011 - Validate that the "Reader" tab from the navbar is functional', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.gotoReaderPage() //Validate and go to reader page

    })

    it ('TC_EZ_012 - Validate the "Eye Care" drop-down category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.hoverOnEyeCareMenu() //Hover on Eyecare Menu
        homepage.validateEyecareMenu() //validate Eyecare Categories

    })
    it ('TC_EZ_013 - Validate that the "Clearance" Menu from the navbar is functional', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.gotoClearancePage() //Validate and goto clearance page
    })
    
    it ('TC_EZ_014 - Validate that the "SALES" tab from the navbar is functional', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateSalesMenu() //validate sales menu
    })

    it('TC_EZ_015 - Verify search bar functionality', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.verifyTheSearchSuggestionDropdown('Rayban ') //Enter keyword and validate suggestion dropdown
    })

    it ('TC_EZ_016 - Verify the hero section is shown correctly and its functionality', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.verifyTheHeroSection() //Verify the main slider
    })

    it('TC_EZ_017 - Verify the "Deal section" products are functioning', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.verifyDealSectionProducts() //Verify the deal section products
    })
    it ('TC_EZ_018 - Validate the "Hows Your Vision?" option', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.goToVisionSectionPage() //
    })

    it ('TC_EZ_019 - Validate the Product category sections shown under "Hows Your Vision" option', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateSunglassesSection() //Validate Sunglasses section
        homepage.validateWomensFrameSection() //Validate Womens Frame section
        homepage.validateMenFrameSection() //Validate Mens Frame section
        homepage.validateOnlineVisionSection() //Validate OnlineVisionTest section
        homepage.validateContactLenseSection() //Validate contact lense section
    })

    it.only ('TC_EZ_020 - Verify that brand logo icons are shown and redirect the user to specific product page', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateBrandLogoIcons() //Validate brand logo icons

    })

})