import { BlurView } from '@danielsaraldi/react-native-blur-view';
import { StyleSheet, View, Text } from 'react-native';

export default function MyComponent() {
    return (
        <View  style={styles.container}>
            <BlurView type="x-ligth"
            radius={75}
            style={styles.blurView}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>BlurView</Text>
                </View>
            </BlurView>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
      
    },
    blurView: {
       
        width: '100%',
        height: 256,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color:"white"
    },
});
