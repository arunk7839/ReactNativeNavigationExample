import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";


class Events extends Component{

render(){

return(
<View style={styles.container}>
<Text style={styles.titleText}>Events</Text>
</View>
);
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor:"#228b22"
  },
    titleText: {
       fontSize: 50,
       fontWeight: 'bold',
       color: "#fa923f"
     }
  });
export default Events;