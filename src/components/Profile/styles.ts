import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    height: 60px;
    left: 0;
    bottom: 0;
    padding: 10px 14px;
    background: #1d1b31;
    transition: width 0.5s ease-in-out;
    overflow: hidden;
    list-style: none;
`;

export const Details = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    transition: opacity 0.5s ease-in-out;

    img {
        height: 45px;
        width: 45px;
        object-fit: cover;
        border-radius: 6px;
        margin-right: 10px;
    }
`;

export const NameJobContainer = styled.div`
    margin-right: 10px;
    p {
        font-size: 15px;
        font-weight: 400;
        color: #fff;
        white-space: nowrap;
        &:last-child {
            font-size: 12px;
        }
    }
`;

export const ContainerLogout = styled.a`
    position: absolute;
    right: 0;
    transform: translateX(30%);
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;

    > svg {
        color: #fff;
    }
`;
