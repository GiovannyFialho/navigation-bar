import { useState } from "react";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight";

import { Wrapper, LogoContainer, Logo, ContainerIconMenu } from "./styles";

export type SidebarProps = {
    logo: React.ReactNode;
};

const Sidebar = ({ logo }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper isOpen={isOpen}>
            <LogoContainer onClick={() => setIsOpen(!isOpen)}>
                <Logo>{logo}</Logo>
                <ContainerIconMenu>
                    {!isOpen ? <Menu size={25} /> : <MenuAltRight size={22} />}
                </ContainerIconMenu>
            </LogoContainer>
        </Wrapper>
    );
};

export default Sidebar;
