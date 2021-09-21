module.exports = {
  siteMetadata: {
    siteUrl: "https://mataspigaga.com",
    title: "Matas Pigaga - A Gatsby Portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Olea Script\:400`, `Montserrat\:300,500,700`],
        display: "swap",
      },
    },
  ],
};
