import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";


class Plays extends Component{

render(){

return(
<View style={styles.container}>
<Text style={styles.titleText}>Plays</Text>
</View>
);
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor:"#6a5acd"
  },
    titleText: {
       fontSize: 50,
       fontWeight: 'bold',
       color: "#fa923f"
     }
  });
export default Plays;