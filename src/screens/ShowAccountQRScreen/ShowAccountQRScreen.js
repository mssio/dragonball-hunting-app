import React, { Component } from "react";
import { Alert, AsyncStorage } from "react-native";
import { isEmpty } from "utils/common";
import { Loading, ShowAccountQR } from "components";

const storageKey = "@mssDBLegends:accountIds";

class ShowAccountQRScreen extends Component {
  state = {
    isLoading: true,
    text: "Account QR"
  };

  async componentDidMount() {
    const { tabKey } = this.props;

    const accountIdsJson = await AsyncStorage.getItem(storageKey);
    if (!isEmpty(tabKey) && !isEmpty(accountIdsJson)) {
      const accountIds = JSON.parse(accountIdsJson);

      const text = accountIds[tabKey] + "." + Date.now();

      this.setState({
        isLoading: false,
        text
      });
    } else {
      Alert.alert(
        "Unexpected Error!",
        "Can't read data from storage. Maybe your device is not supported"
      );
    }
  }

  render() {
    return this.state.isLoading ? (
      <Loading />
    ) : (
      <ShowAccountQR text={this.state.text} />
    );
  }
}

export default ShowAccountQRScreen;
