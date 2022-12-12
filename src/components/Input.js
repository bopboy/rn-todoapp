import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from '../colors';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export const KeyboardTypes = {
    DEFAULT: 'deault',
    EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
    DONE: 'done',
    NEXT: 'next',
};

export const IconNames = {
    EMAIL: 'email',
    PASSWORD: 'lock',
};

const Input = ({ title, placeholder, value, iconName, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.title,
                    value && styles.hasValueTitle,
                    isFocused && styles.focusedTitle,
                ]}
            >
                {title}
            </Text>
            <View>
                <TextInput
                    {...props}
                    value={value}
                    style={[
                        styles.input,
                        value && styles.hasValueInput,
                        isFocused && styles.focusedInput,
                    ]}
                    placeholder={placeholder ?? title}
                    placeholderTextColor={GRAY.DEFAULT}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    textContentType={'none'}
                    keyboardAppearance={'light'}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <View style={styles.icon}>
                    <MaterialIcons
                        name={iconName}
                        size={20}
                        color={(() => {
                            switch (true) {
                                case isFocused:
                                    return PRIMARY.DEFAULT;
                                case !!value:
                                    return BLACK;
                                default:
                                    return GRAY.DEFAULT;
                            }
                        })()}
                    />
                </View>
            </View>
        </View>
    );
};

Input.defaultProps = {
    returnKeyType: ReturnKeyTypes.DONE,
};

Input.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    iconName: PropTypes.oneOf(Object.values(IconNames)),
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    title: {
        marginBottom: 4,
        color: GRAY.DEFAULT,
    },
    hasValueTitle: {
        color: BLACK,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: GRAY.DEFAULT,
        paddingHorizontal: 20,
        height: 42,
        paddingLeft: 30,
    },
    hasValueInput: {
        borderColor: BLACK,
        color: BLACK,
    },
    focusedTitle: {
        fontWeight: '600',
        color: PRIMARY.DEFAULT,
    },
    focusedInput: {
        borderWidth: 2,
        borderColor: PRIMARY.DEFAULT,
        color: PRIMARY.DEFAULT,
    },
    icon: {
        position: 'absolute',
        left: 8,
        height: '100%',
        justifyContent: 'center',
    },
});

export default Input;
