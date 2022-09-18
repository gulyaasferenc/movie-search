import { gql } from '@apollo/client'

const SEARCH_MOVIES = gql`
  query SearchMovies($query: String!) {
    searchMovies(query: $query) {
      id
      name
      overview
      releaseDate
    }
  }
`

export default SEARCH_MOVIES
