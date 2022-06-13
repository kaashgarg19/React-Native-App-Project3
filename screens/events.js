// import the basic React component and library
import React, { Component } from 'react';
// import react-native specific components
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    Image,
    Platform,
    TouchableOpacity,
} from 'react-native';

///using geocoder to change geo cordinates to location of events
//A geocoding module for React Native to transform a description of a location (i.e. street address, town name, etc.) 
//into geographic coordinates (i.e. latitude and longitude) and vice versa.
import Geocoder from 'react-native-geocoder';
import EStyleSheet from 'react-native-extended-stylesheet';
//global variables for all stylesheets API

EStyleSheet.build();

//Eventbrite my token key
const API_TOKEN = 'B7PMTBSR7N3QIV5LLLYG';
//event search url of eventbrite
const SEARCH_URL = 'https://www.eventbriteapi.com/v3/search/';
const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1!==r2});

export default class Events extends Component {
    //the Component's constructor for setting up props and states
    constructor(props) {
        
      // must call the base class (Component's) constructor first
        super(props);
        //set up state variables...
        this.state = {
            dataSource: ds.cloneWithRows([]),
            //will hold the array of events returned from our web service
            eventType: '',
            city: ''
        };
    }
/// searching events by geocoder
    searchEvents(category, city) {
        Geocoder.geocodeAddress(city).then(geoCodeResponse => {
            let position = geoCodeResponse[0].position;
            let locationString = `&location.latitude=${position.lat}&location.longitude=${position.lng}`;
            let FETCH_URL = `${SEARCH_URL}?q=${category}${locationString}`;
   // call the 'fetch()'method of the fetch API to make a RESTful GET call to the Eventbrite api
            fetch(FETCH_URL, {
                method: 'GET',
                headers: {
                    'Authorization': API_TOKEN //(token verfication on eventbrite web server)
                }
            })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                // data being returned by your web service 
                this.setState({dataSource: ds.cloneWithRows(responseJSON.events)});
            });
        }).catch((err) => console.log('Error', err));  // deal with any errors...
    }

    // the render method is called (frequently) by React Native to maintain the UI
    renderRow(rowData) {
        const defaultImage = 'https://pixabay.com/static/uploads/photo/2015/02/13/09/47/question-634903__180.png';
        let image = rowData.logo ? rowData.logo.url : defaultImage;
        //for empty eventdetails 

        return (
            <View style={styles.row}>
                <Image style={styles.rowLogo}
                    source={{uri: image}}/>
                <View style={styles.rowDetails}>
                    <Text>
                        {rowData.name.text.length > 30 ?
                            `${rowData.name.text.substring(0,30)}...` :
                            rowData.name.text
                        }
                    </Text>
                    <TouchableOpacity onPress={() => this.showDetails(rowData)}>
                        <Text style={styles.link}>more details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
// Showing event data in UI screen
    showDetails(rowData) {
        this.props.navigator.push({
            name: 'eventDetail',
            title: rowData.name.text,
            description: rowData.description.text,
            url: rowData.url,
            img: rowData.logo.url
        });
    }
// using render separators to seprate two rows this not work for colunms sepration
    renderSeparator(sectionID, rowID) {
        return (
            <View style={styles.separator} key={sectionID + rowID} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Event Search</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder='kind of event...'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => this.setState({eventType: text})}/>
                    <TextInput style={styles.input}
                        placeholder='city...'
                        onChangeText={(text) => this.setState({city: text})}/>
                </View>
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() =>
                    this.searchEvents(this.state.eventType, this.state.city)}>
                    <Text style={styles.button}>Search</Text>
                </TouchableOpacity>
                <FlatList
                    style={styles.list}
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderSeparator={this.renderSeparator}
                    renderRow={(rowData) => this.renderRow(rowData)}/>
            </View>
            );
        }
    }

    // creating extended style sheet for displaying api list items
    const styles = EStyleSheet.create({
        container: {
            flex: 1,
        },
        list: {
            flex: 10
        },
        title: {
            flex: 2,
            textAlign: 'center',
            fontSize: 50,
            marginTop: 20,
            fontFamily: 'MerryChristmasFlake'
        },
        form: {
            flex: 4
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
        },
        rowDetails: {
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center'
        },
        rowLogo: {
            flex: 1,
            width: 50,
            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            resizeMode: 'contain'
        },
        input: {
            flex: 1,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'black',
            margin: 10,
            textAlign: 'center',
            fontSize: 16
        },
        buttonContainer: {
            flex: 1,
            padding: 10
        },
        button: {
            flex: 1,
            backgroundColor: 'deepskyblue',
            borderRadius: 5,
            borderColor: 'grey',
            borderWidth: 1,
            overflow: 'hidden',
            textAlign: 'center',
            padding: 10,
            color: 'white',
            fontWeight: 'bold'
        },
        link: {
            color: 'blue'
        },
        separator: {
            height: 1,
            backgroundColor: 'gray'
        }
    });
