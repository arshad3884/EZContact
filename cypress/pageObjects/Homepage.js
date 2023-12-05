export class Homepage
{
    closeDiscountPOpup()
    {
        cy.get('#ltkpopup-close-button > .ltkpopup-close').click()
    }
    hoverOnSunglassesMenu()
    {
        cy.get(':nth-child(14) > .dropdown-toggle').should('have.text','SUNGLASSES').trigger('mouseover')
    }
    validateMensSunglassesMenuOptions()
    {
        cy.get('[amplitude-tracking-name="sunglasses_mens"]').should('have.text','Men’s') //Sunglasses Men's
        cy.get('[amplitude-tracking-name="sunglasses_all_mens"]').should('have.text',"All Men's") //All Men's
    }
    validateWomensSunglassesMenuOptions()
    {
        cy.get('[amplitude-tracking-name="sunglasses_womens"]').should('have.text',"Women's") //Sunglasses Women's
        cy.get('[amplitude-tracking-name="sunglasses_all_womens"]').should('have.text',"All Women's") //All Women's
    }
    validateChildrenSunglassesMenuOptions()
    {
        cy.get('[amplitude-tracking-name="sunglasses_childrens"]').should('have.text',"Children's") //Sunglasses Children’s
        cy.get('[amplitude-tracking-name="sunglasses_all_childrens"]').should('have.text',"All Children's") //All Children's

    }
    validateFrameShapeOnSunglasses()
    {
        cy.get('h3.title.mar-top-0').eq(0).should('have.text','Frame Shapes')
        cy.contains('h3.title', 'Featured Brands').should('have.text','Featured Brands') 
    }
    hoverOnEyeglassesMenu()
    {
        cy.get(':nth-child(15) > .dropdown-toggle').should('have.text','EYEGLASSES').trigger('mouseover')
    }
    verifyFrameShapesOnEyeglasses()
    {
        cy.get('h3.title.mar-top-0').eq(1).should('have.text','Frame Shapes')
        cy.contains('h3.title', 'Featured Brands').should('have.text','Featured Brands') 
    }
    validateMensEyeglassesMenuOptions()
    {
        cy.get('[amplitude-tracking-name="eyeglasses_mens"]').should('have.text','Men’s') //Men's
        cy.get('[amplitude-tracking-name="eyeglasses_all_mens"]').should('have.text',"All Men's") //All Men's
    }
    validateWomensEyeglassesMenuOptions()
    {
        cy.get('[amplitude-tracking-name="eyeglasses_womens"]').should('have.text',"Women's") //Women's
        cy.get('[amplitude-tracking-name="eyeglasses_all_womens"]').should('have.text',"All Women's") //All Women's
    }
    validateChildrenEyeglassesMenuOptions()
    {
        cy.get('[amplitude-tracking-name="eyeglasses_childrens"]').should('have.text',"Children's") //Children's
        cy.get('[amplitude-tracking-name="eyeglasses_all_childrens"]').should('have.text',"All Children's") //All Children's
    }

    hoverOnContactLenseMenu()
    {
        cy.get(':nth-child(16) > .dropdown-toggle').should('have.text','CONTACT LENSES').trigger('mouseover') //CONTACT LENSES
        cy.contains('h3.title', 'Featured Brands').should('have.text','Featured Brands') 

    }
    verifyPopularBrandsOnContectLense()
    {
        cy.get('.open h3').eq(1).should('have.text','Popular Brands') //Popular Brands heading
        cy.get('.open .col-sm-8').should('exist') //Popular Brands 
    }
    gotoReaderPage()
    {
        cy.get(':nth-child(17) > .dropdown-toggle').should('have.attr','href','/readers').click() //Go to READER Menu link
        cy.get('h2.section-title').should('have.text','Readers') //Validate Readers heading 
    }
    hoverOnEyeCareMenu()
    {
        cy.get(':nth-child(18) > .dropdown-toggle').should('have.text','Eye Care').trigger('mouseover')
    }
    validateEyecareMenu()
    {
        cy.get('.open h3').eq(1).should('have.text','Categories')
        cy.get('.open .col-sm-8').should('exist') //Validate eyecare category list exists
    }
    gotoClearancePage()
    {
        cy.get('.active > .redirect-to-url-link').should('have.text','Clearance')
        .should('have.attr','href','/eyewear/clearance:yes').click() //validate and GO to Clearance page
        cy.get('a[unbxdparam_facetname="v_clearance_uFilter"]').should('have.text','Clearance×') //Validate Clearance Filter applied on the page
    }
    validateSalesMenu()
    {
        cy.get(':nth-child(20) > .loadspecialMsgPopup').should('have.text','SALES').click() //SALES menu
        cy.get('#special-top-message-modal > .modal-dialog > .modal-content > .modal-body > .p-bigger-margin > .clearfix > [style="padding-bottom: 6px;"] > .btn')
            .should('have.text','SHOP EYEGLASSES DEALS').should('have.attr','href','/eyeglasses/cyber-monday-sale/') //SHOP EYEGLASSES DEALS button
        cy.get('#special-top-message-modal > .modal-dialog > .modal-content > .modal-body > .p-bigger-margin > .clearfix > :nth-child(2) > .btn')
            .should('have.text','SHOP SUNGLASSES DEALS ').should('have.attr','href','/sunglasses/cyber-monday-sale/') //SHOP SUNGLASSES DEALS button
    }
    verifyTheSearchSuggestionDropdown(keyword)
    {   
        cy.get('#search_query').type(keyword) //Search a keyword
        cy.get('.top-search > .unbxd-autosuggest-results > .unbxd-as-wrapper').should('exist') //Verify the suggession dropdown
        cy.get('.unbxd-as-keysuggestion').each((suggestion, index, $list) => {
            cy.wrap(suggestion).trigger('mouseover');
            cy.wait(1000)
          }); //Validate the suggesion list
    }
    verifyTheHeroSection()
    {
        cy.get('.item > a > .ls-is-cached').should('exist') // main slider should exist
        cy.get('.right').click() //move right
        cy.wait(2000)
        cy.get('.left').click() //move left
        cy.wait(2000)
        cy.get('.item.active a').click() //Click on slider image
    }
    verifyDealSectionProducts()
    {
        cy.get('.recommended-products').should('exist') //Verify the DEAL section heading
        cy.get('.cls-recommended-view-div-fix').should('exist') //verify that products are shown
        cy.get('.recommend-fix-height').eq(0).click() //Go to first deal product page
        cy.wait(5000)
    }
    goToVisionSectionPage()
    {
        cy.get('[href="https://www.ezcontacts.com/online-vision-test/"]').should('exist').click() //validate and click HOWS YOUR Vision?
        cy.wait(2000)
        cy.url().should('include', '/online-vision-test/'); //Validate the URL
    }
    validateSunglassesSection()
    {
        cy.get('[amplitude-id="Sunglasses"] h2').should('have.text','Sunglasses') //Validate Sunglasses section heading
        cy.get('.innergrid [href="/sunglasses"]:first-child').should('have.attr','href','/sunglasses') //Validate shop now
    }
    validateWomensFrameSection()
    {
        cy.get('a[amplitude-id="WomenSunglasses"]').should('have.attr','href','/womens-eyeglasses') //Validate Women’s Frames
    }
    validateMenFrameSection()
    {
        cy.get('a[amplitude-id="MenSunglasses"]').should('have.attr','href','/mens-eyeglasses')
    }
    validateOnlineVisionSection()
    {
        cy.get('a[amplitude-id="Opternative"]').should('have.attr','href','/online-vision-test')
    }
    validateContactLenseSection()
    {
        cy.get('a[amplitude-id="Contacts"]').should('have.attr','href','/contact-lenses')
    }
    validateBrandLogoIcons()
    {
        cy.get('.col a[href="/eyeglasses/brand:persol"]').should('have.attr','href','/eyeglasses/brand:persol') //Validate persol
        cy.get('.col a[href="/eyeglasses/brand:dandg"]').should('have.attr','href','/eyeglasses/brand:dandg') //Validate dandg
        cy.get('.col a[href="/sunglasses/brand:gucci"]').should('have.attr','href','/sunglasses/brand:gucci') //Validate gucci
        cy.get('.col a[href="/eyeglasses/brand:coach"]').should('have.attr','href','/eyeglasses/brand:coach') //Validate coach
        cy.get('.col a[href="/eyeglasses/brand:ray-ban"]').should('have.attr','href','/eyeglasses/brand:ray-ban') //Validate ray-ban
        cy.get('.col a[href="/sunglasses/brand:marc-by-marc-jacobs"]').should('have.attr','href','/sunglasses/brand:marc-by-marc-jacobs') //Validate marc-by-marc-jacobs
    }
}