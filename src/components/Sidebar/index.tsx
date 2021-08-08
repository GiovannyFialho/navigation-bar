import { Wrapper } from "./styles";

export type SidebarProps = {
    logo: React.ReactNode;
};

const Sidebar = ({ logo }: SidebarProps) => <Wrapper>{logo}</Wrapper>;

export default Sidebar;
