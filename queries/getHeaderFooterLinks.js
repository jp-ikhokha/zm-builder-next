import { gql } from '@apollo/client'

export const GET_HEADER_FOOTER_LINKS = gql`
  query getHeaderFooterLinks {
    mainMenuLinks {
      data {
        menuItemLabel
        menuItemUrl
      }
    }

    footerLinks {
      data {
        footerCol1
        footerCol2
        footerCol3
        footerCol4
        footerCol5
      }
    }
  }
`
