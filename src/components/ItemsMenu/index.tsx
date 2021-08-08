import ItemMenu, { ItemMenuProps } from "components/ItemMenu";

import { Wrapper } from "./styles";

export type ItemsMenuProps = {
    items: ItemMenuProps[];
};

const ItemsMenu = ({ items }: ItemsMenuProps) => (
    <Wrapper>
        {items?.map((item) => (
            <ItemMenu key={item.title} {...item} />
        ))}
    </Wrapper>
);

export default ItemsMenu;
