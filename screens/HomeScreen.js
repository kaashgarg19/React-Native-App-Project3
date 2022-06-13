//using react components from react library
// using react native components
import React, {Component} from 'react';
import {Button, Text, View, Image, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        //This shows logo of eventrum app in home screen which include a button to search events
        const EventImage = require('../assets/images/event.png');
        const { navigation } = this.props;
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle} >
                    The Eventrum Events APP
                </Text>
                <Button
                    style={styles.buttonStyle}
                    title="Search for Events >>"
                    onPress={() => navigation.navigate('events')} //onpress this button we will redirect of event search page we used geocoder to search nearby events using eventbrite api
                />
                 <Image
                    style={styles.imageStyle}
                    source={EventImage}
                />
                <Button
                    style={styles.buttonStyle}
                    title="About Eventrum >>"
                    onPress={() => navigation.navigate('Eventrum')}
                />
            
                <Text style={styles.textStyle} style={{ fontSize: 15}} >
                                 Eventrum Aman Gupta
                </Text>
            </View>
        );
    }
}

//creating stylesheet for using for our components
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 25,
        fontFamily: 'Times New Roman',
        color: 255,
    },
    buttonStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue',
    },
    ImageStyle: {
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
    },
   
});
