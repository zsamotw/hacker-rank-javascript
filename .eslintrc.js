module.exports = {
    "env": {
        "node": true,
        "jest": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": 'error',
    }
};