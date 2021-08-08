import { useState } from "react";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight";

import { Wrapper, LogoName } from "./styles";

export type LogoProps = {
    logo: React.ReactNode;
};

const Logo = ({ logo }: LogoProps) => {
    const [active, setActive] = useState(false);

    return (
        <Wrapper active={active} onClick={() => setActive(!active)}>
            <LogoName>{logo}</LogoName>

            {!active ? <Menu size={22} /> : <MenuAltRight size={22} />}
        </Wrapper>
    );
};

export default Logo;
