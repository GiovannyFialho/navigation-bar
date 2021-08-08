import styled, { css } from "styled-components";

import * as itemMenu from "components/ItemMenu/styles";
import * as ItemsMenu from "components/ItemsMenu/styles";
import * as Profile from "components/Profile/styles";

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    position: relative;
`;

export const Logo = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    transition: opacity 0.6s ease-in-out;
    width: max-content;
`;

export const ContainerIconMenu = styled.div`
    cursor: pointer;
    position: absolute;
    transform: translateX(-50%);
    right: 0;
    > svg {
        color: #fff;
    }
`;

const wrapperModifiers = {
    open: () => css`
        width: 250px;

        ${Logo} {
            opacity: 1;
        }

        ${ItemsMenu.SearchContainer} {
            input {
                padding: 0 20px 0 50px;
                width: 100%;
            }
        }

        ${itemMenu.Tooltip} {
            display: none;
        }

        ${Profile.Wrapper} {
            width: 250px;
        }
        ${Profile.Details} {
            opacity: 1;
        }
        ${Profile.ContainerLogout} {
            width: 50px;
            background: none;
        }
    `,
    close: () => css`
        width: 78px;

        ${Logo} {
            opacity: 0;
        }

        ${ItemsMenu.Icon} {
            &:hover {
                background-color: #fff;
                svg {
                    color: #1d1b31;
                }
            }
        }

        ${itemMenu.Title} {
            opacity: 0;
        }

        ${Profile.Wrapper} {
            width: 78px;
        }
        ${Profile.Details} {
            opacity: 0;
        }
        ${Profile.ContainerLogout} {
            width: 100%;
            background: #1d1b31;
        }
    `
};

type WrapperProps = {
    isOpen: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    ${({ isOpen }) => css`
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        background: #11101d;
        padding: 6px 14px;
        z-index: 99;
        transition: width 0.5s ease-in-out;

        ${isOpen && wrapperModifiers.open()}
        ${!isOpen && wrapperModifiers.close()}
    `}
`;
