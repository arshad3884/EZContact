import { ReuseableCode } from "../support/ReuseableCode"
const reuse =new ReuseableCode

export class ContactLensesCatlog{

    applyBrandFilters()
    {
        const random  = reuse.getRandomNumber(1,20) 
      cy.get('[class="has-pretty-child"][unbxdparam_facetname="brand_uFilter"]').eq(random).click() //Click on random brand
      cy.wait(3000)
      cy.get('[class="clear_all_selected_facets"]').should('contain.text','Reset All Filters').click() //clear Reset All Filters
      cy.wait(4000)
      cy.get('[class="has-pretty-child"][unbxdparam_facetname="brand_uFilter"]').eq(random).click() //Click on random brand
      cy.wait(2000)
    }
    applyManufacturersFilter(){
        const random =reuse.getRandomNumber(1,7)
        cy.get('[class="has-pretty-child"] input[unbxdparam_facetname="contact_lens_manufacturer_uFilter"]').eq(random).click()
        cy.wait(2000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text','Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('[class="has-pretty-child"] input[unbxdparam_facetname="contact_lens_manufacturer_uFilter"]').eq(random).click()
        cy.wait(2000)
    }
    applyContactLensScheduleFilter(){
        const random = reuse.getRandomNumber(1,4)
        cy.get('input[unbxdparam_facetname="contact_lens_schedule_uFilter"]').eq(random).click()
        cy.wait(3000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text','Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('input[unbxdparam_facetname="contact_lens_schedule_uFilter"]').eq(random).click()
    }
    applyContactLensTypesFilter(){
        const random = reuse.getRandomNumber(1,5) 
        cy.get('input[unbxdparam_facetname="contact_lens_type_uFilter"]').eq(random).click()
        cy.wait(2000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text','Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('input[unbxdparam_facetname="contact_lens_type_uFilter"]').eq(random).click()
        cy.wait(2000)
    }
    applyBasecorvFilter(){
        const random = reuse.getRandomNumber(1,11)
        cy.get('input[unbxdparam_facetname="supported_bc_uFilter"]').eq(random).click()
        cy.wait(3000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text','Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('input[unbxdparam_facetname="supported_bc_uFilter"]').eq(random).click()
        
    }
    applyDiameterFilter(){
        const random = reuse.getRandomNumber(1,7)
        cy.get('input[unbxdparam_facetname="supported_dia_uFilter"]').eq(random).click()
        cy.wait(2000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text','Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('input[unbxdparam_facetname="supported_dia_uFilter"]').eq(random).click()
    }
    applyReviewFilter(){
        const random = reuse.getRandomNumber(1,5)
        cy.get('input[unbxdparam_facetname="unbxd_rating_average_uFilter"]').eq(random).click()
        cy.wait(2000)
        cy.get('[class="clear_all_selected_facets"]').should('contain.text','Reset All Filters').click() //clear Reset All Filters
        cy.wait(4000)
        cy.get('input[unbxdparam_facetname="unbxd_rating_average_uFilter"]').eq(random).click()

    }

}