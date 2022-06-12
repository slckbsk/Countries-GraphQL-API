const { gql } = require("apollo-server");

const typeDefs = gql`
  type Country {
    id: String!
    name: String!
    native: String!
    phone: String!
    capital: String
    currency: String
    languages: [Language]!
    emoji: String!
    emojiU: String!
    continent: Continent!
  }

  type Language {
    id: String!
    name: String
    native: String
    rtl: Boolean!
  }

  type Continent {
    country: String!
    continent: String
  }

  type CountryInfo {
    code: String!
    name: String!
  }

  type Query {
    countries: [Country!]
    country(id: String!): Country

    languages: [Language!]
    language(id: String!): Language

    continents: [Continent!]
    continent(country: String): Continent

    countryInfos: [CountryInfo!]
    countryInfo(code: String!): CountryInfo
  }
`;

module.exports = {
  typeDefs,
};
