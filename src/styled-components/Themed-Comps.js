import styled from 'styled-components/native';

export const ThemedView = styled.View`
    backgroundColor: ${(props) => props.theme.colors.background};
`;

export const ThemedHeader = styled.View`
    backgroundColor: ${(props) => props.theme.colors.header};
`;

export const ThemedText = styled.Text`
    color: ${(props) => props.theme.colors.primary};
`;

export const ThemedStatusBar = styled.StatusBar`
    backgroundColor: ${(props) => props.theme.colors.header};
`;
