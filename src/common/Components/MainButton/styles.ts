import styled from 'styled-components/native';
import { IPrimaryButton } from './PrimaryButton.interface';

export interface PrimeMessageProps {
    secondaryColor?: boolean;
}

export const ButtonStyle = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const ConfirmButtonStyle = styled.TouchableOpacity<
    IPrimaryButton.PrimaryButtonButtonCaptionProps
>`
    height: 50px;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme, secondaryColor }) =>
        secondaryColor ? theme.colors.primary : theme.colors.gray};
`;

export const ButtonText = styled.Text<
    IPrimaryButton.PrimaryButtonButtonCaptionProps
>`
    color: ${({ theme }) => theme.colors.puerWhite};
    font-family: ${({ theme }) => theme.fonts.notoMedium};
    font-size: 18px;
`;
