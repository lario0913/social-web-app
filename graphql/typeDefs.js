const {gql} = require('apollo-server')

module.exports = gql`
    type Post{
        id: ID!,
        body: String!,
        createdAt: String!,
        username: String!
    }
    
    type Query {
        getPosts: [Post]
    }

    type User{
        id:ID!,
        email: String!,
        token: String!,
        username: String!,
        createdAt: String!
    }

    input RegisterInput{
        username: String!,
        email: String!,
        password: String!,
        confirmPassword: String!
    }

    type Mutation{
        register(registerInput: RegisterInput) : User!
    }
`