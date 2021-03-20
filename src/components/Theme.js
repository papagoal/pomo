import React from 'react';
import {useStyletron} from 'baseui';

export const Outer = ({children}) => {
    const [css, theme] = useStyletron();
    return (
        <div
            className={css({
                marginTop: '20vh',
                width: '100%',
                height: '100%'
            })}
        >
            {children}
        </div>
    );
};
export const Inner = ({children}) => {
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
                height: '100px',
            })}
        >
            {children}
        </div>
    );
};