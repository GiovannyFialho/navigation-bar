import styled from "styled-components";

export const Wrapper = styled.li`
    position: fixed;
    height: 60px;
    width: 78px;
    left: 0;
    bottom: -8px;
    padding: 10px 14px;
    background: #1d1b31;
    transition: all 0.5s ease;
    overflow: hidden;
    list-style: none;
`;

export const Details = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    img {
        height: 45px;
        width: 45px;
        object-fit: cover;
        border-radius: 6px;
        margin-right: 10px;
    }
`;

export const NameJobContainer = styled.div`
    p {
        font-size: 15px;
        font-weight: 400;
        color: #fff;
        white-space: nowrap;
        &::last-child {
            font-size: 12px;
        }
    }
`;

export const ContainerLogout = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: #1d1b31;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;

    > svg {
        color: #fff;
    }
`;
