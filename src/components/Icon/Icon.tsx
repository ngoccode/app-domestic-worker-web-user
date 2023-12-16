import React from 'react';

export type IconProps = {
    icon?: string;
    type?: 'outlined' | 'filled' | 'rounded';
    color?: string;
    size?: '2xs' | 'xs' | 'small' | 'medium' | 'large';
    customSize?: string;
    className?: string;
};

const Icon = ({
    icon = '',
    type = 'outlined',
    color = 'inherit',
    size = 'medium',
    customSize = '',
    className = '',
}: IconProps) => {
    const iconSize = React.useMemo(() => {
        if (customSize !== '') {
            return customSize;
        }
        switch (size) {
            case '2xs':
                return 14;
            case 'xs':
                return 16;
            case 'small':
                return 20;
            case 'medium':
                return 24;
            case 'large':
                return 32;
            default:
                return 24;
        }
    }, [size, customSize]);

    const iconClass = React.useMemo(() => {
        switch (type) {
            case 'rounded':
                return 'material-icons-round';
            case 'outlined':
                return 'material-icons-outlined';
            case 'filled':
                return 'material-icons';
            default:
                return 'material-icons';
        }
    }, [type]);

    return (
        <span
            className='icon'
            style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                fontSize: `${iconSize}px`,
            }}
        >
            <span
                className={`${iconClass} ${className}`}
                style={{
                    color,
                    fontSize: 'inherit',
                }}
            >
                {icon}
            </span>
        </span>
    );
};

Icon.defaultProps = {
    icon: '',
    type: 'rounded',
    color: 'inherit',
    size: 'medium',
    customSize: '',
    className: '',
};

export default Icon;
