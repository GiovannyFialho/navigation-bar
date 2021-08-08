import ItemMenu, { ItemMenuProps } from "components/ItemMenu";
import { Search } from "@styled-icons/boxicons-regular/Search";

import { Tooltip } from "components/ItemMenu/styles";

import { SearchContainer, Icon } from "./styles";

export type ItemsMenuProps = {
    items: ItemMenuProps[];
};

const ItemsMenu = ({ items }: ItemsMenuProps) => (
    <ul>
        <SearchContainer>
            <Icon>
                <Search size={22} />
            </Icon>
            <input type="text" placeholder="Search..." />
            <Tooltip>Search</Tooltip>
        </SearchContainer>
        {items?.map((item) => (
            <ItemMenu key={item.title} {...item} />
        ))}
    </ul>
);

export default ItemsMenu;
