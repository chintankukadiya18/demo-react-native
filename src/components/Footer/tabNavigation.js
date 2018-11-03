import React from "react";
import {Icon, FooterTab, Button, Footer as FTab} from "native-base";
import {Text} from 'native-base';
import {TabNavigator} from "react-navigation";
import Spinner from "../../screens/Spinner/";
import ConfirmRequest from '../../screens/ConfirmRequest';
import RequestAccepted from '../../screens/RequestAccepted';
import ProgressBar from "../../screens/Progressbar/";
import CalendarNSP from "../../screens/Calendar/";
import NewRequestForm from "../../screens/NewRequestForm/";
import Form from "../../screens/Form/";
import Home from "../../screens/Home/";
import styles from "./styles";

const FooterTabNavigation = TabNavigator(
	{
		Home: {
			screen: ({screenProps, navigation}) => <Home navigation={navigation}/>
		},
		ConfirmRequest: {
			screen: ({screenProps, navigation}) =>
				<ConfirmRequest navigation={navigation}/>
		},
		RequestAccepted: {
			screen: ({screenProps, navigation}) =>
				<RequestAccepted navigation={navigation}/>
		}/*,
    ProgressBar: {
      screen: ({ screenProps, navigation }) =>
        <ProgressBar navigation={navigation} />
    },
    Calendar: {
      screen: ({ screenProps, navigation }) =>
        <CalendarNSP navigation={navigation} />
    },
    Form: {
      screen: ({ screenProps, navigation }) => <NewRequestForm navigation={navigation} />
    }*/
	}, {
		tabBarPosition: "bottom",
		lazy: true,
		swipeEnabled: false,
		tabBarComponent: props => {
			return (
				<FTab>
					<FooterTab style={styles.footer}>
						{/*<Button onPress={() => props.navigation.navigate("Calendar")}>
              <Icon name="calendar" style={{ color: "#fff" }} />
            </Button>
            <Button onPress={() => props.navigation.navigate("Form")}>
              <Icon name="add-circle" style={{ color: "#fff" }} />
                <Text>New Request</Text>
            </Button>*/}
						<Button onPress={() => props.navigation.navigate("Home")}>
							<Icon name="paper" style={{color: "#fff"}}/>
							<Text>Requests</Text>
						</Button>
						{/* <Button onPress={() => props.navigation.navigate("ProgressBar")}>
              <Icon active name="options" style={{ color: "#fff" }} />
            </Button>*/}
						{/* <Button onPress={() => props.navigation.navigate("ConfirmRequest")}>
              <Icon name="ios-refresh-circle" style={{ color: "#fff" }} />
            </Button>*/}
					</FooterTab>
				</FTab>
			);
		}
	}
);

export default FooterTabNavigation;
