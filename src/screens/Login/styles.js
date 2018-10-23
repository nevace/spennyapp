const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const commonColor = require("../../theme/variables/commonColor");
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor: commonColor.brandPrimary
  },
  topTextView: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    height: Platform.OS === "ios" ? 100 : 80,
    alignItems: "center"
  },
  topText: {
    marginTop: 25,
    fontSize: Platform.OS === "ios" ? 25 : 20,
    lineHeight: Platform.OS === "ios" ? 30 : 30,
    color: commonColor.inverseTextColor
  },
  mapImage: {
    width: Platform.OS === "ios" ? deviceWidth / 1.5 : deviceWidth / 1.8,
    height:
      Platform.OS === "ios"
        ? 316 * deviceWidth / (506 * 1.5)
        : 316 * deviceWidth / (506 * 1.8),
    resizeMode: "contain",
    alignSelf: "center"
  },
  infoTextView: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    alignItems: "center"
  },
  infoText: {
    textAlign: "center",
    color: commonColor.inverseTextColor
  },
  gpsAutoBtn: {
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: color(commonColor.brandPrimary).darken(0.2).hex()
  },
  otherText: {
    textAlign: "center",
    fontSize: 14,
    color: commonColor.inverseTextColor
  },
  gpsManualBtn: {
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: color(commonColor.brandPrimary).lighten(0.2).hex()
  }
};
