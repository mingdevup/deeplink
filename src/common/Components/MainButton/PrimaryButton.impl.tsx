import React from 'react';
import { IPrimaryButton } from './PrimaryButton.interface';
import { theme } from '@Definitions/Styled';

import { ButtonStyle, ConfirmButtonStyle, ButtonText } from './styles';

export const PrimaryButton: React.FC<IPrimaryButton.IProps> = ({
    color = theme.colors.primary,
    caption,
    captionColor = theme.colors.puerWhite,
    fontFamily = theme.fonts.notoRegular,
    secondaryColor = true,
    actionBlock,
    disabled,
    onPress,
}) => {
    return (
        <ButtonStyle>
            <ConfirmButtonStyle
                actionBlock={actionBlock || secondaryColor}
                secondaryColor={secondaryColor}
                color={color}
                disabled={disabled}
                onPress={onPress}>
                <ButtonText color={captionColor} fontFamily={fontFamily}>
                    {caption}
                </ButtonText>
            </ConfirmButtonStyle>
        </ButtonStyle>
    );
};
