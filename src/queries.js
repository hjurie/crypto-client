import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  query getCoinList($quote: String) {
    coins(quote:$quote) {
      base_currency
      quote_currency
    }
  }
  # {
  #   coins(quote:"btc") {
  #     base_currency
  #     quote_currency
  #   }
  # }
`

export const DETAIL_PAGE = gql`
  query getCoinIntro($crypto: String!) {
    coinIntro(crypto: $crypto) {
      fullName
      summary
      publishTime
      publishVolume
      circulateVolume
      officialWebsite
    }
  }
`;