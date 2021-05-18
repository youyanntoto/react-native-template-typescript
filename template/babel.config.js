module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module:react-native-dotenv", {
      "path" : "src/env/.env",
    }],
    'react-native-reanimated/plugin'
  ],
}
