import styled from "styled-components";

export const Title = styled.span`
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    pointer-events: none;
    transition: 0.4s;
    margin-left: 50px;
`;

export const Icon = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s ease-in-out;
    svg {
        color: #fff;
    }
`;

export const ContainerItem = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.4s ease;
    background: #11101d;
    &:hover {
        background: #fff;
        ${Title} {
            color: #11101d;
        }
        ${Icon} {
            svg {
                color: #11101d;
            }
        }
    }
`;

export const Tooltip = styled.span`
    position: absolute;
    top: -20px;
    left: calc(100% + 15px);
    z-index: 3;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
`;

export const Wrapper = styled.li`
    position: relative;
    margin: 8px 0;
    list-style: none;
    height: 50px;
    &:hover {
        ${Tooltip} {
            opacity: 1;
            pointer-events: auto;
            transition: all 0.4s ease;
            top: 50%;
            transform: translateY(-50%);
        }
    }
`;
