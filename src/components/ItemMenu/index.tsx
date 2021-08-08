import { Wrapper, ContainerItem, Tooltip, Title } from "./styles";

export type ItemMenuProps = {
    link: string;
    icon: React.ReactNode;
    title: string;
};

const ItemMenu = ({ link, icon, title }: ItemMenuProps) => (
    <Wrapper>
        <ContainerItem href={link}>
            {icon}
            <Title>{title}</Title>
        </ContainerItem>
        <Tooltip>{title}</Tooltip>
    </Wrapper>
);

export default ItemMenu;
