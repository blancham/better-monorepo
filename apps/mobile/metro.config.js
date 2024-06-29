const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { makeMetroConfig } = require("@rnx-kit/metro-config");
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  ...makeMetroConfig({
    projectRoot: __dirname,
    resolver: {
      resolveRequest: MetroSymlinksResolver(),
    },
  }),
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
