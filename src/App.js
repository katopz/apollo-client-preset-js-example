import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// Example query from https://www.graph.cool/
const MOVIE_QUERY = gql`
{
  Movie(id: "cixos5gtq0ogi0126tvekxo27") {
    id
    title
    actors {
       name
    }
  }
}
`

const withService = graphql(MOVIE_QUERY)
export default withService(({ data }) => {
  const { loading, Movie } = data
  if (loading) return <div>loading...</div>

  return <p><b>{Movie.title}</b> : {Movie.actors.map(({ name }) => name).join(', ')}</p>
})
