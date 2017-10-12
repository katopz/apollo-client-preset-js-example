import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SERVICE_QUERY = gql`
{
  allServices {
    id
    name
    pingURL
  }
}
`

const withService = graphql(SERVICE_QUERY)
export default withService(({ data }) => {
  const { loading, allServices } = data
  if (loading) return <div>loading...</div>
  if (!allServices) return <div>Forget to config YOUR_GRAPHQL_END_POINT ?</div>

  return <p>{allServices[0].name}</p>
})
