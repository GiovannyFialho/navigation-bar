import styled from "styled-components";
import { Wrapper } from "components/ItemMenu/styles";

export const Icon = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: #1d1b31;
    border-radius: 12px;
    cursor: pointer;
    > svg {
        color: #fff;
    }
`;

export const SearchContainer = styled(Wrapper)`
    input {
        font-size: 15px;
        color: #fff;
        font-weight: 400;
        outline: none;
        height: 50px;
        width: 50px;
        border: none;
        border-radius: 12px;
        transition: all 0.5s ease;
        background: #1d1b31;
    }
`;
