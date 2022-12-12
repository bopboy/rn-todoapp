import { Image, StyleSheet, View } from 'react-native';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                // eslint-disable-next-line no-undef
                source={require('../../assets/test.png')}
                stlye={styles.image}
                resizeMode={'cover'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderWidth: 1,
        width: 200,
        height: 200,
    },
});
export default SignInScreen;
