import { StyleSheet, Text, View } from 'react-native';
// import PropTypes from 'prop-types';

const Component = () => {
    return (
        <View stlye={styles.container}>
            <Text style={styles.title}>Component</Text>
        </View>
    );
};

Component.propTypes = {
    // propTypes
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
});

export default Component;
