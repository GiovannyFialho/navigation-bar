import { Wrapper, ContainerItem, Tooltip, Title, Icon } from "./styles";

export type ItemMenuProps = {
    link: string;
    icon: React.ReactNode;
    title: string;
};

const ItemMenu = ({ link, icon, title }: ItemMenuProps) => (
    <Wrapper>
        <ContainerItem href={link}>
            <Icon>{icon}</Icon>
            <Title>{title}</Title>
        </ContainerItem>
        <Tooltip>{title}</Tooltip>
    </Wrapper>
);

export default ItemMenu;
