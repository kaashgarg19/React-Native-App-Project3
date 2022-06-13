//The unauthorized user who’s going to use the application is going to see this screen first.
// To build the login screen, there are three requirements: 
//First input text fields for the user to enter their email and password and a login button to submit these credentials.

////using react components from react library

import React, { Component } from "react";
import {
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet
} from "react-native";
// importing native components

import { Button, Block, Input, Text } from "../components";

import { theme } from "../constants";

///importing redux and redux actions to update user information in database

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user'
// importing firebase from firebaseconfiguration
import Firebase from '../config/Firebase'

class Login extends React.Component {
    state = {
        errors: [],
        loading: false
    };

    // componentDidMount is one of the 'lifecycle' methods of React Native -
    // ... invoked automatically when the App component has first been rendered
    // ... so can be used for initialisation stuff
    componentDidMount = () => {
        //using firebase.auth()method to change userstate  to navigate to another screen after verfying user deatils from firebase database

        Firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.props.getUser(user.uid)
                if (this.props.user != null) {
                    this.setState({
                        loading: false,
                    });
                    this.props.navigation.navigate('Profile')
                }
            } else {
                this.setState({
                    loading: false,
                });
            }
        })
    }

    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

        return (
            <KeyboardAvoidingView style={styles.login} behavior="padding">
                <Block padding={[0, theme.sizes.base * 2]}>
                    <Text h1 bold>
                        Login To Eventrum
                    </Text>
                    <Block middle>
                        <Input
                            label="Email"
                            error={hasErrors("email")}
                            style={[styles.input, hasErrors("email")]}
                            value={this.props.user.email}
                            onChangeText={email => this.props.updateEmail(email)}
                        />
                        <Input
                            secure
                            label="Password"
                            error={hasErrors("password")}
                            style={[styles.input, hasErrors("password")]}
                            value={this.props.user.password}
                            onChangeText={password => this.props.updatePassword(password)}
                        />
                        <Button gradient onPress={() => {
                            this.setState({
                                loading: true,
                            });
                            this.props.login()
                        }}>
                            {loading ? (
                                <ActivityIndicator size="small" color="white" />
                            ) : (
                                    <Text bold white center>
                                        Login To Eventrum
                                    </Text>
                                )}
                        </Button>
                        <Button onPress={() => navigation.navigate("Signup")}>
                            <Text
                                gray
                                caption
                                center
                                style={{ textDecorationLine: "underline" }}
                            >
                                New User? SignUp to Eventrum
              </Text>
                        </Button>

                    </Block>
                </Block>
            </KeyboardAvoidingView>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}
// bindActionCreators to passing some actions to components

//dispatching actions to the store.
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

//creating stylesheet for components  using .create()

const styles = StyleSheet.create({
    login: {
		flex: 1,
		marginTop:50,
        justifyContent: "center"
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent
    }
});
