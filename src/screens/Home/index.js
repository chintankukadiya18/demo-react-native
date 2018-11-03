import React, {Component} from "react";
import {ImageBackground} from "react-native";
import {connect} from "react-redux";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    ListItem,
    Text,
    Left,
    Right,
    Body,
    Spinner,
    List,
    Thumbnail
} from "native-base";
import ConfirmRequest from '../../screens/ConfirmRequest';

import styles from "./styles";
import {itemsFetchData} from "../../actions";
//import data from "./data.json";
import data from "./requests.json";

const glow2 = require("../../../assets/glow2.png");

class Home extends Component {
    componentDidMount() {
        this.props.fetchData(data);
    }

	onRequestClick() {
		alert("hello");
	}
    render() {
        if (this.props.isLoading) {
            return <Spinner/>;
        } else {
            const navigation = this.props.navigation;
            return (
                <Container>
                    <ImageBackground source={glow2} style={styles.containerImage}>
                        <Header>
                            <Body style={styles.centerText}>
                            <Title>Requests</Title>
                            </Body>
                        </Header>

                        <Content padder>
                            <List
                                dataArray={this.props.items}
                                renderRow={(data // eslint-disable-line
                                ) =>
                                    <ListItem thumbnail style={styles.listitem} button
                                              onPress={() => {
	                                              this.props.navigation.navigate("ConfirmRequest", {
		                                              selectedRequest : data
                                                  });
                                              }}>
                                        <Left>
                                            <Thumbnail square source={{ uri: data.icon }} />
                                        </Left>
                                        <Body>
                                        <Text style={styles.text}>Status:{data.status}</Text>
                                        <Text style={styles.text}>Area:{data.area}</Text>
                                        <Text style={styles.text}>Schedule:{data.schedule}</Text>
                                        <Text style={styles.text}>Name:{data.name}</Text>
                                        </Body>
                                    </ListItem>}
                            />
                        </Content>
                    </ImageBackground>
                </Container>
            );
        }
    }
}

function bindAction(dispatch) {
    return {
        fetchData: url => dispatch(itemsFetchData(url))
    };
}

const mapStateToProps = state => ({
    items: state.homeReducer.items,
    hasErrored: state.homeReducer.hasErrored,
    isLoading: state.homeReducer.isLoading
});


export default connect(mapStateToProps, bindAction)(Home);
