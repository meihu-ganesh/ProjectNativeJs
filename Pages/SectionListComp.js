import React from 'react';
import { SectionList, Text, View } from 'react-native';
import ExStyles from '../style';

const SectionListComp = () => {

    const users = [
        {
            id: 1,
            name: 'Ganesh',
            data: ['Python', 'JavaScript', 'React JS'],
        },
        {
            id: 2,
            name: 'Parth',
            data: ['Robotics', 'JavaScript', 'React JS', 'NodeJS'],
        },
        {
            id: 3,
            name: 'Krishna',
            data: ['JavaScript', 'React JS', 'NodeJS', 'C++'],
        },
        {
            id: 4,
            name: 'Akshara',
            data: ['Excel', 'Data Collection', 'Word', 'Presentation'],
        },
    ];

    return (
        <View>
            <Text style={ExStyles.heading}>Section List in React-Native</Text>
            <SectionList
                sections={users}
                renderItem={({item})=> <Text style={{fontSize: 20, marginLeft: 25}}>{item}</Text>}
                renderSectionHeader={({section:{name}})=> (
                    <Text style={{fontSize: 25, color: "#ee55aa"}}>{name}</Text>
                )}
            />
        </View>
    );
};

export default SectionListComp;
