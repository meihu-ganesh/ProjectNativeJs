import { StyleSheet } from "react-native";

const ExStyles = StyleSheet.create ({
    textBox:{
        // color: '#000000',
        color: '#fff',
        fontSize: 25,
        fontWeight: '300',
        backgroundColor: '#60c0f9',
        margin: 6,
        padding: 10,
        borderRadius: 25,
    },
    inputBox:{
        fontSize:18,
        color: '#033fa5',
        borderWidth: 2,
        padding: 10,
        borderColor: '#033fa5',
        margin: 10,
    },
    item:{
        fontSize: 22,
        padding: 10,
        color: "#ff3366",
        backgroundColor: "#bbeeaa",
        borderWidth: 2,
        borderColor: "#faaced",
        margin: 10,
        borderRadius: 15,
    },
    gridContainer: {
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    gridItem: {
        fontSize: 23,
        backgroundColor: "#ffaa33",
        color: "#fff",
        margin: 7,
        padding: 10,
        width: 120,
        height: 120,
        borderRadius: 15,
        textAlign: "center",
        textAlignVertical: "center",
    }
});

export default ExStyles;
