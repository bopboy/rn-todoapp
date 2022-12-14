import {
    Keyboard,
    Platform,
    Pressable,
    StyleSheet,
    TextInput,
    useWindowDimensions,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BLACK, PRIMARY, WHITE } from '../colors';
import { useEffect, useRef, useState } from 'react';

const BOTTOM = 30;

const InputFAB = () => {
    const [text, setText] = useState('');
    const [isOpened, setIsOpened] = useState(false);
    const inputRef = useRef(null);
    const windowWidth = useWindowDimensions().width;
    const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM);

    const open = () => {
        setIsOpened(true);
        inputRef.current.focus();
    };
    const close = () => {
        setIsOpened(false);
        inputRef.current.blur();
    };
    const onPressButton = () => {
        isOpened ? close() : open();
    };

    useEffect(() => {
        const show = Keyboard.addListener('keyboardWillShow', (e) => {
            setKeyboardHeight(e.endCoordinates.height + BOTTOM);
        });
        const hide = Keyboard.addListener('keyboardWillHide', () => {
            setKeyboardHeight(BOTTOM);
        });
        return () => {
            show.remove();
            hide.remove();
        };
    }, []);

    return (
        <>
            <View
                style={[
                    styles.container,
                    styles.shadow,
                    { bottom: keyboardHeight, alignItems: 'flex-start' },
                    isOpened && { width: windowWidth - 20 },
                ]}
            >
                <TextInput
                    ref={inputRef}
                    value={text}
                    onChangeText={setText}
                    style={styles.input}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    textContentType={'none'}
                    keyboardAppearance={'light'}
                    returnKeyType={'done'}
                    onBlur={close}
                />
            </View>
            <Pressable
                onPress={onPressButton}
                style={({ pressed }) => [
                    styles.container,
                    { bottom: keyboardHeight },
                    pressed && { backgroundColor: PRIMARY.DARK },
                ]}
            >
                <MaterialCommunityIcons name="plus" size={24} color={WHITE} />
            </Pressable>
        </>
    );
};

InputFAB.propTypes = {
    // propTypes
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: BOTTOM,
        right: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: PRIMARY.DEFAULT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        color: WHITE,
        paddingLeft: 20,
        paddingRight: 70,
    },
    shadow: {
        shadowColor: BLACK,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 3, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            },
            android: { elevation: 5 },
        }),
    },
});

export default InputFAB;
