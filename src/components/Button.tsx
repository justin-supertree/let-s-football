import { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { css, SerializedStyles } from '@emotion/react';

import palette from '@/styles/palette';

type ButtonSize = 'lg' | 'md' | 'sm';
type ButtonColorScheme = 'primary';
type ButtonVariant = 'ghost' | 'solid';

type ButtonTheme = Record<
  ButtonColorScheme,
  {
    bg: string;
    bgHover: string;
    bgDisabled: string;
    text: string;
    textHover: string;
    textDisabled: string;
  }
>;

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  /* 버튼의 크기를 결정합니다 */
  size?: ButtonSize;
  /* 버튼의 컬러를 지정합니다 */
  colorScheme?: ButtonColorScheme;
  /* 버튼의 비활성화 여부를 결정합니다 */
  disabled?: boolean;
  /* 버튼 내 텍스트 왼쪽에 아이콘을 넣을 때 지정합니다 */
  iconLeft?: ReactElement;
  /* 버튼 내 텍스트 오른쪽에 아이콘을 넣을 때 지정합니다 */
  iconRight?: ReactElement;
  /* 버튼 내 렌더링할 요소를 결정합니다 */
  children: ReactNode;
  /* 버튼의 종류를 결정합니다 */
  variant?: ButtonVariant;
  css?: any;
};

const buttonTheme: ButtonTheme = {
  primary: {
    bg: `rgba(68, 68, 68, 0.50)`,
    bgHover: palette.neutrals100,
    bgDisabled: palette.neutrals700,
    text: palette.neutrals100,
    textHover: '#ffff',
    textDisabled: palette.neutrals600,
  },
};

const baseStyle: (colorScheme: ButtonColorScheme) => SerializedStyles = (
  colorScheme,
) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 0.5rem;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: ${buttonTheme[colorScheme].bg};
  color: ${buttonTheme[colorScheme].text};
  font-family: Sweet Sans Pro;
  font-style: normal;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.3px;
  transition: all 0.12s ease-in-out;
  cursor: pointer;

  svg {
    fill: ${buttonTheme[colorScheme].text};
  }

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background-color: ${buttonTheme[colorScheme].bgHover};
    color: ${buttonTheme[colorScheme].textHover};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${buttonTheme[colorScheme].bgDisabled};
    color: ${buttonTheme[colorScheme].textDisabled};
  }
`;

const sizeStyle: (size: ButtonSize) => SerializedStyles = (size) => css`
  ${size === 'sm' &&
  css`
    padding: 1rem;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.2px;
    width: 218px;
  `};

  ${size === 'md' &&
  css`
    padding: 19px 96px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.28px;
    width: 316px;
  `};

  ${size === 'lg' &&
  css`
    padding: 34px 62px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 416px;
  `};
`;

const variantStyle: (type: ButtonVariant) => SerializedStyles = (type) => css`
  ${type === 'ghost' &&
  css`
    /* border: 1px solid #444; */
    color: ${palette.neutrals100};
    background: linear-gradient(to right, #7f7f7f80 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.4s ease-out;

    svg {
      fill: ${palette.neutrals700};
    }

    &:hover:not(:disabled) {
      background-color: transparent;
      background-position: left bottom;
    }

    &:active:not(:disabled) {
      /* border: 1px solid ${palette.neutrals400}; */
      background-color: ${palette.neutrals300};
    }

    &:disabled {
      /* border: 1px solid #444; */
      background-color: transparent;
      /* opacity: 0.5; */
    }
  `}

  ${type === 'solid' &&
  css`
    border: none;
    /* border: 1px solid ${palette.neutrals300}; */
    color: ${palette.neutrals600};
    background: linear-gradient(
      to right,
      transparent 50%,
      ${palette.neutrals200} 50%
    );
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.4s ease-out;

    svg {
      fill: ${palette.neutrals700};
    }

    &:hover:not(:disabled) {
      color: #ffff;
      background-color: transparent;
      background-position: left bottom;
    }

    &:active:not(:disabled) {
      /* border: 1px solid ${palette.neutrals400}; */
      background-color: ${palette.neutrals300};
    }

    &:disabled {
      border: 1px solid ${palette.neutrals300};
      background-color: transparent;
      opacity: 0.5;
    }
  `}
`;

export const Button = ({
  size = 'md',
  colorScheme = 'primary',
  variant = 'solid',
  disabled,
  iconLeft,
  iconRight,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      css={[baseStyle(colorScheme), sizeStyle(size), variantStyle(variant)]}
      disabled={disabled}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

export default Button;
