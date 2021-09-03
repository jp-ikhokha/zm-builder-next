import { gql } from '@apollo/client'

export const GET_MAIN_MENU_LINKS = gql`
  query getMainMenuLinks {
    mainMenuLinks {
      data {
        menuItemLabel
        menuItemUrl
      }
    }
  }
`
