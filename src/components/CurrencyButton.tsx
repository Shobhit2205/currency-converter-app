import React, {PropsWithChildren} from 'react';
import { StyleSheet, Text, View } from 'react-native';

type currenctButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: currenctButtonProps): JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    flag: {
        fontSize: 28,
        color: '#000000',
        marginBottom: 4,
    },
    country: {
        fontSize: 14,
        color: '#2d3436',
    },
});

export default CurrencyButton;
