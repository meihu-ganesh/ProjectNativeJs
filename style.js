import { StyleSheet } from "react-native";

const ExStyles = StyleSheet.create ({
    heading:{
        fontSize: 30,
    },
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
    },
    loopBox: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#33aaff",
        marginBottom: 6,
        padding: 5,
    },
    loopItem: {
        fontSize: 20,
        color: "#ffaa33",
        flex: 1,
        margin: 2,
        textAlign: "center",
    }
});

export default ExStyles;
