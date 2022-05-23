import React, { FC } from 'react';
import { EasyStatusProps } from './easy-status';
import styled, { css } from 'styled-components';

export type BannerVariants = 'ERROR' | 'INFO' | 'SUCCESS' | 'WARNING';

export interface BannerProps extends EasyStatusProps {
    variant: BannerVariants;
}

interface ButtonStyleProps {
    backgroundColor: string;
}

const _button = styled.div<ButtonStyleProps>`
    ${({ backgroundColor }) => {
        return css`
            padding: 12px;
            position: absolute;
            top: 0px;
            width: 100%;
            margin: 0px;
            background-color: ${backgroundColor};
        `;
    }}
`;

const _text = styled.p`
    color: white;
    padding: 0px;
    margin: 0px;
`;

export const Banner: FC<BannerProps> = ({ variant = 'error' }) => {
    const variantMap = {
        ERROR: '#c0392b',
        INFO: '#3498db',
        SUCCESS: '#2ecc71',
        WARNING: 'orange'
    };

    const backgroundColor = variantMap[variant];

    const message = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;

    return (
        <_button backgroundColor={backgroundColor}>
            <_text>{message}</_text>
        </_button>
    );
};
