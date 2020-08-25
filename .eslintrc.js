module.exports = {
    "extends": "standard",
    "env": {
      "node": true
      },
    "parser": "babel-eslint",
    "plugins": [
      "import"
      ],
    "rules": {
      "no-param-reassign": [
        "error",
        { "props": false }
      ]
  }
}