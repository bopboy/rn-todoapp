import { Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY, WHITE } from '../colors';

const InputFAB = () => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                pressed && { backgroundColor: PRIMARY.DARK },
            ]}
        >
            <MaterialCommunityIcons name="plus" size={24} color={WHITE} />
        </Pressable>
    );
};

InputFAB.propTypes = {
    // propTypes
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 30,
        right: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: PRIMARY.DEFAULT,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default InputFAB;
