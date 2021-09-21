import { gql } from '@apollo/client'

export const GET_FOOTER_MENU_LINKS = gql`
  query getFooterLinks {
    footerLinks {
      data {
        footerCol1
        footerCol2
      }
    }
  }
`
