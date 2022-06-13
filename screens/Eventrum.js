// import the basic React component and library
import React, {Component} from 'react';
// import react-native specific components
import {ActivityIndicator, StyleSheet, View, Button, Text, TouchableOpacity, Image} from 'react-native';


export default class InstructionsScreen extends Component
{
    render() {
        const SrcImage = require('../assets/images/event.png');
        return (
            <View style={styles.itemStyle}> 
                <Image
                    style={styles.imageStyle}
                    source={SrcImage}
                />  
                <Text style={styles.textStyle}> 
                    About Eventrum:  
                    {'\n'}
                    {'\n'}
                    1. ReacT Native Event Search app utilizing the EventBrite API
                    {'\n'}
                    2. Searching Eventbrite API using category and city input
                    {'\n'}
                    3.Navigate between screens/components to view event details
                    {'\n'}
                    4. View full event detail by Linking to external eventbrite websites
                    {'\n'}
                    5. Customized Font
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    ........................By Aman Gupta................................................

                </Text>
            </View>
        );
    }
}

// here we define the styles used by our component ...
// ...through the 'create()' method of the StyleSheet component
const styles = StyleSheet.create
({
    itemStyle:
        {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            flexDirection: 'column',
            padding: 10,
            margin: 10,
        },
    textStyle:
        {
            fontSize: 15,
            fontStyle: 'italic',
            textAlign: 'left',
            margin: 10,
        },
    imageStyle:
        {
            width: 300,
            height: 250,
            resizeMode: 'stretch',
        },
});
