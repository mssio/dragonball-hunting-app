import React, { Component } from "react";
import { Alert, AsyncStorage } from "react-native";
import { isEmpty } from "utils/common";
import { Loading, InputAccount } from "components";

const storageKey = "@mssDBLegends:accountIds";

class InputAccountScreen extends Component {
  state = {
    isLoading: true,
    account1: "",
    account2: "",
    account3: "",
    account4: ""
  };

  async componentDidMount() {
    const accountIdsJson = await AsyncStorage.getItem(storageKey);
    if (!isEmpty(accountIdsJson)) {
      const accountIds = JSON.parse(accountIdsJson);
      this.setState({
        isLoading: false,
        account1: accountIds.account1,
        account2: accountIds.account2,
        account3: accountIds.account3,
        account4: accountIds.account4
      });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  handleSubmit = async payload => {
    if (
      isEmpty(payload.account1) ||
      isEmpty(payload.account2) ||
      isEmpty(payload.account3) ||
      isEmpty(payload.account4)
    ) {
      Alert.alert(
        "Incomplete Account!",
        "Please make sure that you enter all account details"
      );
    } else {
      await AsyncStorage.setItem(storageKey, JSON.stringify(payload));
      this.props.navigation.navigate("Show", payload);
    }
  };

  render() {
    return this.state.isLoading ? (
      <Loading />
    ) : (
      <InputAccount
        account1={this.state.account1}
        account2={this.state.account2}
        account3={this.state.account3}
        account4={this.state.account4}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default InputAccountScreen;
