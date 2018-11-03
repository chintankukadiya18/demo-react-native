import React, {Component} from "react";
import {ImageBackground} from "react-native";
import {connect} from "react-redux";
import { Image } from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Text,
	Spinner,
	Button,
	Icon,
	ListItem,
	Left,
	Right,
	Body,
	Card,
	CardItem,
	CheckBox,
	View,
	Thumbnail
} from "native-base";
import styles from "./styles";

const commonColor = require("../../theme/variables/commonColor");
const glow2 = require("../../../assets/glow2.png");

class RequestAccepted extends Component {

	render() {
		const navigation = this.props.navigation;
		const acceptedRequest = navigation.getParam('acceptedRequest');
		return (
			<Container>
				<ImageBackground source={glow2} style={styles.containerImage}>
					<Header>
						<Body>
						<Title>Confirmed Request</Title>
						</Body>
						<Right/>
					</Header>
					<Content padder style={{marginBottom: 30, paddingTop: 0}}>
						<View style={styles.cardView}>
							<Card style={styles.card}>
								<CardItem header style={styles.cardItem}>
									<Text>Area: {acceptedRequest.area}</Text>
								</CardItem>
								<CardItem header style={styles.cardItem}>
									<Text >Activation time: {acceptedRequest.area}</Text>
								</CardItem>
								<CardItem header style={styles.cardItem}>
									<Text >Name: {acceptedRequest.area}</Text>
								</CardItem>
								<CardItem header style={styles.cardItem}>
									<Image source={{uri: acceptedRequest.icon}} style={{height: 300, width: null, flex: 1}}/>
								</CardItem>
							</Card>
						</View>
					</Content>
				</ImageBackground>
			</Container>
		);
	}
}

export default connect()(RequestAccepted);
