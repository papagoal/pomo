import React from 'react';
import {useStyletron} from 'baseui';

export const Outer = ({children}) => {
    const [css, theme] = useStyletron();
    return (
        <div
            className={css({
                background: theme.colors.accent100,
                height: '95vh'
            })}
        >
            {children}
        </div>
    );
};
export const Inner = ({children, h='80vh'}) => {
    const [css, theme] = useStyletron();
    return (
        <div
            className={css({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: theme.colors.accent200,
                color: theme.colors.accent700,
                padding: '.25rem',
                height: h
            })}
        >
            {children}
        </div>
    );
};