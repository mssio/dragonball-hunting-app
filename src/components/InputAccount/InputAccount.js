import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Form,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";

class InputAccount extends Component {
  state = {
    account1: "",
    account2: "",
    account3: "",
    account4: ""
  };

  static defaultProps = {
    account1: "",
    account2: "",
    account3: "",
    account4: ""
  };

  componentDidMount() {
    this.setState({
      account1: this.props.account1,
      account2: this.props.account2,
      account3: this.props.account3,
      account4: this.props.account4
    });
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleSubmit = () => {
    const payload = {
      account1: this.state.account1,
      account2: this.state.account2,
      account3: this.state.account3,
      account4: this.state.account4
    };

    this.props.onSubmit(payload);
  };

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Input Account</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.container}>
          <Form>
            <Item>
              <Icon
                active
                type="MaterialCommunityIcons"
                name="numeric-1-box-multiple-outline"
              />
              <Input
                placeholder="Account #1"
                value={this.state.account1}
                onChangeText={text => this.handleChange("account1", text)}
              />
            </Item>
            <Item>
              <Icon
                active
                type="MaterialCommunityIcons"
                name="numeric-2-box-multiple-outline"
              />
              <Input
                placeholder="Account #2"
                value={this.state.account2}
                onChangeText={text => this.handleChange("account2", text)}
              />
            </Item>
            <Item>
              <Icon
                active
                type="MaterialCommunityIcons"
                name="numeric-3-box-multiple-outline"
              />
              <Input
                placeholder="Account #3"
                value={this.state.account3}
                onChangeText={text => this.handleChange("account3", text)}
              />
            </Item>
            <Item>
              <Icon
                active
                type="MaterialCommunityIcons"
                name="numeric-4-box-multiple-outline"
              />
              <Input
                placeholder="Account #4"
                value={this.state.account4}
                onChangeText={text => this.handleChange("account4", text)}
              />
            </Item>
            <Button onPress={this.handleSubmit} style={styles.button}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  button: {
    marginTop: 30,
    alignSelf: "center"
  }
});

export default InputAccount;
