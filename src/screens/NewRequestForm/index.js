import React, {Component} from "react";
import {ImageBackground, Platform} from "react-native";
import {connect} from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Card,
  CardItem,
  Label,
  Item,
  Input,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const commonColor = require("../../theme/variables/commonColor");
const glow2 = require("../../../assets/glow2.png");

class NewRequestForm extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <ImageBackground source={glow2} style={styles.containerImage}>
          <Header>
            <Left>
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>New Request</Title>
            </Body>
            <Right />
          </Header>

          <Content padder enableResetScrollToCoords={false}>

          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default connect()(NewRequestForm);
