module.exports = {
  release: {
    branches: ['main'],
    repositoryUrl: 'https://github.com/lx56256/react-CiCd',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/github',
    ],
  },
};
