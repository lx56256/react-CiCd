module.exports = {
  branches: [{ name: 'main' }],
  repositoryUrl: 'https://github.com/lx56256/react-CiCd',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/github', {
      assets: [
        { path: 'build.zip', label: 'build'},
        { path: 'coverage.zip', label: 'coverage' },
      ],
    }],
  ],
};
