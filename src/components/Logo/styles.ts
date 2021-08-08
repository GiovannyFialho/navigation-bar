import styled, { css } from "styled-components";

export const LogoName = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: 600;
`;

const wrapperModifiers = {
    active: () => css`
        opacity: 1;
    `,
    none: () => css`
        opacity: 0;
    `
};

type WrapperProps = {
    active: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    ${({ active }) => css`
        height: 60px;
        display: flex;
        align-items: center;
        position: relative;

        svg {
            cursor: pointer;
        }

        ${LogoName} {
            transition: opacity 0.5s ease;

            ${active && wrapperModifiers.active()}
            ${!active && wrapperModifiers.none()}
        }
    `}
`;
