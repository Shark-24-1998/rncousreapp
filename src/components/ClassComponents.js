import { Component } from "react";
import { Alert, SafeAreaView, Text } from "react-native";
import CustomeComponent from "./CustomeComponent";

class ClassComponent extends Component{
    render() {
        return(
            <SafeAreaView>
                <Text>Hello Class Components</Text>
                <CustomeComponent  title={"Click Me"} onPress={() => Alert.alert("Hello Function")}/>
            </SafeAreaView>
        )
    }
}

export default ClassComponent