import React from 'react';
import { Item as NbItem, Input as NbInput } from 'native-base';
import styled from 'styled-components';
import { View, Text } from '@components';
import { colors } from '@styles';

const Item = styled(NbItem)`
  max-height: 40px;
  border-color: ${colors.base};
  border-width: 0.5px;
  border-radius: 5px;
`;

interface Iinput {
  keyboardType?: string;
  value: string;
  onChange: (e: string) => void;
  onBlur: () => void;
  onSubmit: () => void;
  label: string;
  useRef: () => void;
  onFocus: () => void;
  password?: boolean;
}
const Input = (props : Iinput) => {
  return (
    <View input>
      <Text input>{props.label}</Text>
      <Item regular>
        <NbInput
          {...props}
          secureTextEntry={props.password}
          ref={useRef}
          value={props.value}
          autoCapitalize="sentences"
          autoCorrect
          autoFocus
          blurOnSubmit
          caretHidden
          contextMenuHidden
          maxLength={120}
          onChangeText={props.onChange}
          onSubmitEditing={props.onSubmit}
          selectionColor={colors.base}
        />
      </Item>
    </View>
  );
};

export default Input;
