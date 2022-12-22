module.exports = {
  siteMetadata: {
    title: 'Official | SLICK Blockchain Cryptocurrency',
    description: '[DIGITAL] - Partake, Wield, Stake, Employ',
    keywords: 'SLICK Blockchain Cryptocurrency, for Stakers, for Blockchain development, for Blockchain DAPP selling NFTs, Crypto DAPP Staking, beeing Meme Mascotte of organisations.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sharp",
    // REMARK plugin needed to extract the markdown files and parses
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site./ This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
