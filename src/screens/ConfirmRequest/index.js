import React, {Component} from "react";
import {ImageBackground} from "react-native";
import {connect} from "react-redux";
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

class ConfirmRequest extends Component {

	initialState = {
		file1: false,
		file2: false,
		file3: false,
		acceptDisabled: true
	};

	constructor(props) {
		super(props);
		this.state = this.initialState;
	}

	async onCheckChange(name) {
		let obj = {};
		obj[name] = !this.state[name];
		await this.setState(obj);
		if (this.state.file1 && this.state.file2 && this.state.file3) {
			this.setState({acceptDisabled: false});
		} else {
			this.setState({acceptDisabled: true});
		}
	}

	render() {
		const navigation = this.props.navigation;
		const selectedRequest = navigation.getParam('selectedRequest');
		return (
			<Container>
				<ImageBackground source={glow2} style={styles.containerImage}>
					<Header>
						<Body>
						<Title>Confirmed Request</Title>
						</Body>
						<Right/>
					</Header>
					<Content padder style={{marginBottom: 30, paddingTop: 0}}  ref={c => (this.component = c)}>
						<View style={styles.cardView}>
							<Card style={styles.card}>
								<CardItem header style={styles.cardHeader}>
									<Left>

										<Body>
										<Text style={{fontWeight: "bold"}}>Disclaimer</Text>
										</Body>
									</Left>
								</CardItem>

								<CardItem style={styles.cardItem}>
									<Text style={{marginBottom: 15}}>
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.

										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.

										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.

										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
										Before Monday night’s fixture against Newcastle, Leicester
										are top of the Premier League. Before Monday night’s fixture
										against Newcastle, Leicester are top of the Premier League.
									</Text>
								</CardItem>
								<ListItem onPress={() => {
									this.onCheckChange('file1');
								}}>
									<CheckBox checked={this.state.file1}/>
									<Body>
									<Text>I accept clauses in fileAAA.pdf</Text>
									</Body>
								</ListItem>
								<ListItem onPress={() => {
									this.onCheckChange('file2');
								}}>
									<CheckBox checked={this.state.file2}/>
									<Body>
									<Text>I accept clauses in fileBBB.pdf</Text>
									</Body>
								</ListItem>
								<ListItem onPress={() => {
									this.onCheckChange('file3');
								}}>
									<CheckBox checked={this.state.file3}/>
									<Body>
									<Text>I accept clauses in fileCCC.pdf</Text>
									</Body>
								</ListItem>
							</Card>
						</View>
					</Content>

					<CardItem style={styles.footer}>
						<Left>
							<Button onPress={() => {
								this.setState(this.initialState);
								this.component._root.scrollToPosition(0, 0);
								this.props.navigation.navigate("Home");
							}}>
								<Text style={{color: commonColor.textColor}}>Deny</Text>
							</Button>
						</Left>
						<Right>
							<Button disabled={this.state.acceptDisabled} onPress={() => {
								this.setState(this.initialState);
								this.component._root.scrollToPosition(0, 0);
								this.props.navigation.navigate("RequestAccepted", {
									acceptedRequest: selectedRequest
								});
							}}>
								<Text style={{color: commonColor.textColor}}>Accept and continue</Text>
							</Button>
						</Right>
					</CardItem>

				</ImageBackground>
			</Container>
		);
	}
}

export default connect()(ConfirmRequest);
