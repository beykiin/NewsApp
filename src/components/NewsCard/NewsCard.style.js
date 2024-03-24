import { StyleSheet, Dimensions } from "react-native";

export default  StyleSheet.create({
    container:{
        backgroundColor: 'black',
        margin:15,
        borderRadius:10,
    },
    image:{
        height: Dimensions.get('window').height/4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        
    },
    title:{
        color:'aliceblue',
        fontWeight: 'bold',
        fontSize:20,
    },
    description:{
        color:'aliceblue',
        marginTop:5,
        textAlign: 'justify',
        fontSize:15,
    },
    innerContainer:{
        padding:10,
    },
    author:{
        color:'aliceblue',
        fontStyle: 'italic',
        marginTop:5,
        textAlign: 'right',
    },
});
