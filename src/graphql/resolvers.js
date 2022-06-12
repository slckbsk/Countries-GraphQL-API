const resolvers = {
  Query: {
    continents: (_, __, { db }) => db.continents,
    continent: (_, args, { db }) => {
      const idExists = db.continents.find((continent) => continent.country === args.country);
      return idExists ? idExists : new Error("CONTINENT ID NOT FOUND");
    },

    countries: (_, __, { db }) => db.countries,
    country: (_, args, { db }) => {
      const idExists = db.countries.find((country) => country.id === args.id);
      return idExists ? idExists : new Error("COUNTRY ID NOT FOUND");
    },

    languages: (_, __, { db }) => db.languages,
    language: (_, args, { db }) => {
      const idExists = db.languages.find((language) => language.id === args.id);
      return idExists ? idExists : new Error("LANGUAGE ID NOT FOUND");
    },
  },

  Country: {
    continent: (parent, __, { db }) => {
      if (
        db.continents.find((continent) => continent.country === parent.name)
      ) {
        return db.continents.find(
          (continent) => continent.country === parent.name
        );
      } else {
        return "not found";
        //  some of the country name doesn't match because I found datas from internet
        //  this is why return "not found"
      }
    },

    languages: (parent, __, { db }) => {
      return db.languages.filter((lang) => {
        if (
          parent.languages.find((language) => language.name === lang.name)
        ) {
          return {
            name: lang.name,
            native: lang.native,
          };
        }
      });
    },
  },
};

module.exports = {
  resolvers,
};
