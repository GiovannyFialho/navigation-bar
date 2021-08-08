import { Wrapper, ContainerItem, Tooltip, Title } from "./styles";

export type ItemsMenuProps = {
    link: string;
    icon: React.ReactNode;
    title: string;
};

const ItemsMenu = ({ link, icon, title }: ItemsMenuProps) => (
    <Wrapper>
        <ContainerItem href={link}>
            {icon}
            <Title>{title}</Title>
        </ContainerItem>
        <Tooltip>{title}</Tooltip>
    </Wrapper>
);

export default ItemsMenu;
