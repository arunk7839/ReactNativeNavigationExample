import React, { Component } from "react";
import {View,Text,Button,StyleSheet} from "react-native";
import StartMainTabs from "../MainTabs/StartMainTabs";


class MainScreen extends Component{


nextHandler = ()=>{
StartMainTabs();

}
render(){

return(
<View style={styles.container}>
<Text style={styles.titleText} >Entertainment</Text>
<Button color="#841584" title="Next" onPress={this.nextHandler}/>
</View>
);
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor:"#521751"
  },
    titleText: {
       fontSize: 50,
       fontWeight: 'bold',
       color: "#fa923f"
     }
  });
export default MainScreen;