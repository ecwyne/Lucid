import React from 'react';
import GraphQLQuery from '../components/GraphQLQuery';
import GraphQLResponse from '../components/GraphQLResponse';
import GraphQLData from '../components/GraphQLData';
import GraphQLSchema from '../components/GraphQLSchema';
import styles from '../../public/graphql.css';

const GraphQLContainer = ({ logs, schema }) => {
  
  return (
    <div id="graphql-container">
      <GraphQLSchema logs={logs} schema={schema} />
      <hr id="graphql-hr" />
      <GraphQLData logs={logs} />
      <hr id="graphql-hr" />
      <GraphQLQuery logs={logs} />
      <hr id="graphql-hr" />
      <GraphQLResponse logs={logs} />
    </div>
  )
}

export default GraphQLContainer;