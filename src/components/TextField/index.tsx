/* eslint-disable prettier/prettier */
import React from 'react';
import {  
    FormControl,
    IInputProps,
    Input,
    Text,
    View,
    WarningOutlineIcon,} from 'native-base';
import {StyleSheet, TextInput, TextStyle, ViewStyle} from 'react-native';


interface IRenderInputProps extends IInputProps {
    label?: string;
    error?: string;
    labelStyles?: TextStyle;
    showCount?: boolean;
    containerStyles?: ViewStyle;
    editable?: boolean;
    InputRightElement?: React.ReactElement;
  }
  const TextFieldView = React.forwardRef<TextInput, IRenderInputProps>(
    (props: IRenderInputProps, ref:any) => {
      const {
        showCount,
        error,
        label,
        labelStyles,
        containerStyles,
        style,
        InputRightElement,
        ...restProps
      } = props;
  
      return (
        <View alignItems="center" style={containerStyles}>
          <FormControl isInvalid={Boolean(error)}>
            {label ? (
              <Text
                color="#000"
                fontWeight="500"
                mb={-3}
                mt={3}
                style={labelStyles}>
                {label}
              </Text>
            ) : null}
            <Input
              backgroundColor={!props.editable ? `${'#f6f7fb'}20` : '#f6f7fb'}
              borderRadius={8}
              fontSize="sm"
              minHeight={props.minHeight ?? props.multiline ? '200px' : '48px'}
              placeholderTextColor="#000"
              maxLength={100}
              ref={ref}
              size="md"
              style={[styles.input, style]}
              {...restProps}
              InputRightElement={InputRightElement}
            />
            {showCount ? (
              <Text
                color="gray.500"
                fontSize="xs"
                position="absolute"
                right={1}
                top={label ? '12px' : '-12px'}>
                {props.value?.length}/{props.maxLength}
              </Text>
            ) : null}
            {error ? (
              <View flexDirection="row" mt={2} pr={2} width="100%">
                <WarningOutlineIcon
                  size="xs"
                  style={[{color: 'red.900'}, styles.errorIconStyle]}
                />
                <Text color="red.900" width="98%">
                  {error}
                </Text>
              </View>
            ) : null}
          </FormControl>
        </View>
      );
    },
  );
  TextFieldView.defaultProps = {
    label: undefined,
    error: undefined,
    labelStyles: {},
    containerStyles: {},
    showCount: false,
    editable: true,
  };
  
  const styles = StyleSheet.create({
    input: {
      minHeight: 48,
      borderWidth: 0,
    },
    errorIconStyle: {
      marginTop: 5,
      marginRight: 5,
    },
  });
  
  const TextField = React.memo(TextFieldView);
  export {TextField};