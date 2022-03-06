module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['upd', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
  },
};
