module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'import/no-useless-path-segments': 'off',
    'react/forbid-prop-types': 'off', // TODO: see if there is a way to detect style proptypes and remove this
    'react/destructuring-assignment': false,
    'react/prop-types': 'off',
    'no-console': 'off',
    'react/no-did-update-set-state':'off'
  },
};