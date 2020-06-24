import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { NodeInterface } from '../../interface/NodeInterface';

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'User',
  fields: () => ({
    id: globalIdField('User'),
    _id: {
      type: GraphQLNonNull(GraphQLString),
      resolve: user => user._id,
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
      resolve: user => user.email,
    }
  }),
  interfaces: () => [NodeInterface],
});

export default UserType;