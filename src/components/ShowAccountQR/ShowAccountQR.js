import React from "react";
import { View, Dimensions } from "react-native";
import QRCode from "react-native-qrcode";
import { defaultStyles } from "utils/common";

export default function ShowAccountQR({ text }) {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);

  const fullSize = Math.min(screenWidth, screenHeight);
  const qrUnadjustedSize = fullSize - Math.round(fullSize / 4);
  const qrSize = qrUnadjustedSize + (qrUnadjustedSize % 2);

  console.log(qrSize);

  return (
    <View style={defaultStyles.container}>
      <QRCode value={text} size={qrSize} />
    </View>
  );
}
