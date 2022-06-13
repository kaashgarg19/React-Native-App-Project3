# React-Native-App-Project3
<B>Eventrum events app which is a cross-platform native app. </B>

<BR>
 <br>
<B>----------As react native uses native platform components at the end  it gives us the fully native look and feel.-------------------</B>
  
  
<BR>
<BR>
<DIV>
<p style="color:DodgerBlue;">
<b>
Hi, My name is Aman Gupta. I'm a recent graduate in MSc Advanced Computer science. This is my design implementation presentation of Eventrum events app which is a cross-platform native app. In addition, this application can run on both android and iOS gadgets. I have utilized React-Native innovation to perform this task.</b>
</p>
</DIV>
<br>
<br>-----------------------------------------------------------------------------------------------------------------------------------
<p><B>Requirements of Eventrum Event App</B><p>
  
<br>
FRONT END: React Native Framework using Java Script Source Code.<br>
BACK END: Firebase Database using JSON Format.<br>
Data Source (web Services/API) I have used  Eventbrite open event data source to fetching event data to my app.<br>
Geocoding framework to get nearby sports/festival event location information.(https://developers.google.com/maps/documentation/geocoding/intro)<br>   
IDE (Integrated Development Environment) for coding the react native cross-platform app (VS code, WebStorm).
<br>

<br>
<B>The above frameworks and Technologies are used to build this app. The frontend and backend are the core part of the app whereas, data source and geocoding is used to fetch data. The major coding of app is done in Vs code using expo-cli. The major node libraries are installed in node modules which helps us to build this app.
  References:</B>
https://reactnative.dev/docs/environment-setup
https://docs.expo.io/workflow/expo-cli/
https://code.visualstudio.com/
https://www.jetbrains.com/webstorm/download/#section=windows
https://developers.google.com/maps/documentation/javascript/geocoding
https://www.eventbrite.com/platform/api


<BR>
<BR>
  <B> Eventrum App Overall Structure</B>
<BR>
<BR>
![image](https://user-images.githubusercontent.com/103975775/173411745-8988edf6-14f6-4271-9719-165c6964dc7d.png)
<BR>
<BR>
-The EventSearchscreen is an inside screen in that it contains the component that grants you to View full event detail by Linking to external Eventbrite websites. Moreover, the additional framework (Geocoder) helps user to find nearby events using Location services. The outcomes of event search is in a FlatList once information is retrieved. 

-The Signup and Login Screen are normal Screen where user can access the app by creating account. In addition, I have implemented Firebase authentication to store user data to a cloud based service and redux technology to manage state containers.

-The EventdetailsScreen fetches the events search details using URL from external Eventbrite website and display it on Event Detail Screen where user can booked an event by linking the Eventbrite api server.  

-The HomeScreen and AboutEventrum screen are for primarily for general presentation as it were.
  
<BR>
<BR>
  
  <B> User Interface Eventrum Event App
</B>
  <BR>
-The Event Search screen contains search bar where user can search events using their preferred location. This task perform, using Eventbrite interface server which show the data. In addition, search details are shown using renderrow() and the location of events can be fetch using the additional framework (Geocoding).The FlatList is utilized the data source list and show all Event List in the EventSearchscreen. 
<BR>
<BR>
  ![image](https://user-images.githubusercontent.com/103975775/173412285-7c9dd4f9-2c7c-4460-973a-8fb2410f0dab.png)
<BR>
<BR>
The EventdetailsScreen essentially show the full data depiction alongside booking and venue details they fetch the data from URL. On this screen, user can access all details  and register itself through external website (Eventbrite web service) to book events. 
<BR>
<BR>
 ![image](https://user-images.githubusercontent.com/103975775/173412378-a62d4e5d-3e73-4205-8d8b-f96b92530660.png)
<BR>
<BR>

The HomeScreen of app contains app Image and buttons to navigate EventSearchscreen and AboutEventrumScreen.
<BR>
<BR>

![image](https://user-images.githubusercontent.com/103975775/173412540-80234063-40af-4b67-8830-fb7f5814f19e.png)
<BR>
<BR>

All screens depend on the React Navigation framework which is implemented in root App.js file of the prototype.


  <B>1.- Navigation Example of Eventrum App UI!</B>
<BR>
<BR>
Navigation plays an important role in mobile apps which keeps the track of all pages which are available in the app. Therefore, all the screens are accessible to user through navigation. There should not be any bugs in navigation as it will affect whole our app.

The application used React-Navigation library and utilizations stack components to explore between screens of application. The 'createStackNavigator' work delivers the stack object, that is then used in the 'NavigationContainer' part to add screens to the stack. This coding is done on App.js in the application folder. 

To navigate between screen all screens the need to access the parameters. However, navigation.navigate(‘’) coding structure is used to navigate between app screen.

It also shows which screen is the startup screen of the App. Note that as all the screens are made as Components in disengaged JavaScript files – they ought to be imported to this files. In the event that different screens need to get to the route object, they should recover a reference to it through their props (all screens in the stack get this prop). 
<BR>
<BR>
  ![image](https://user-images.githubusercontent.com/103975775/173413170-a8c6d1a0-4c5b-496f-871a-4f5cb9c15b4d.png)


 <BR>
 <BR>
<BR>
  <B>2.- USER INTERFACE IMPLEMENTATION -- Interaction/ Event Handling</B>
 <BR>
 <BR>
-There are different components and methods used to implemented in this prototype, the primary ones are:

-The 'TouchableOpacity’ component is utilized to give parts the ‘Fading' visual conduct – for example at the point when a Listitem thing is chosen.

-The 'onPress' prop of different component's used to permit tap and hold interaction in screen– for example to navigate between two screen using buttons.

-FlatList to hold array data of events using renderrow method to display the events in EventSearchscreen.

-The customize methods to perform navigation task in the app for example- handlesignup method to signup the user in app using buttons.

<BR>
<BR>
  ![image](https://user-images.githubusercontent.com/103975775/173413628-fbc026d2-3168-468f-9acb-e8609fb9dbdf.png)
 
<BR>
<BR>
<B>3.- Web Services Implementation
</B>   
<BR>
 <BR>
-The React Native ‘fetch' API is used for getting to the information from Eventbrite Web service using Authentication apikey and search URL for events. The Eventbrite server will verify the access code and call your redirect URI. The user's private token will be available in the JSON response.
<BR>
-The fetch method recognizes a URI as a String, when a user search a term in the EventSearchscreen the data fetch from Eventbrite URL after authorization of token and display it on screen. The returned information is in the JSON format which can appear in the slide. To perform this task, we need  Api key to access the Eventbrite web services for fetching the data from cloud storage and we also need a URL for searching recipe in the external website.
<BR>
<BR>
 ![image](https://user-images.githubusercontent.com/103975775/173414224-cb4b4083-75db-45b9-88a0-4a11608db003.png)
 
<BR>
<BR>
<B>4.- Firebase Authentication!
</B>   
<BR>
 <BR>
-The user login and signup data is store in Firebase cloud storage. We need to define  firebase email/password authentication database apikey in config.js file in the application to link firebase to the app and need to import firebase to screens. Moreover, the user login details are authenticate from firebase server.

-The above task is perform after initializing the firebase in the application. The above code describes the Firebase configuration. We need these firebase configuration details for making association between react native and firebase database.

-Authentication: When we click on the authentication, the users tab will contain all the users login details on the app and sign in tab shows the method of user’s logged in to the app. In this app, sign in method is enabled for Email/password only.


<BR>
<BR>
 ![image](https://user-images.githubusercontent.com/103975775/173414399-aed86f68-38e7-44a5-a741-368787625772.png)
 
<BR>
<BR>
  <B>5.- Additional Framework
</B>   
<BR>
 <BR>
-The additional framework helps the user to find nearby events. The geocoder framework changes the address into geographic coordinates (like latitude and longitude) for location of events.
   
-The react-native geocoder is used to fetch nearby events location using Searchevents() method and fetch the URL for location in a string response.
<BR>
<BR>
![image](https://user-images.githubusercontent.com/103975775/173414954-6ec9f967-407b-477c-938c-02ed03762c18.png)
 
<BR>
<BR>
  <B>Project sufficiently finished for the going with features:</B> <BR>
-Created a user-friendly Event app by deploying react native.<BR>
-Made multi-screen UI with navigation.<BR>
-Application can get information from Eventbrite web service and used Firebase and Redux to store user data.<BR>

  <B>Project challenged on following aspects: </B><BR>
-Not able to make my own database using firebase for cooperative and personal events.<BR>
-Not implemented Facebook signup option due to over complexity in code. <BR>
-Not able to implement UI screens for adding Favourite events in application for future reference.<BR>

<BR><BR>
  Hope you, find this app useful.....
THANKS


