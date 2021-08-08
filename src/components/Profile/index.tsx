import { LogOut } from "@styled-icons/boxicons-regular/LogOut";

import { Wrapper, Details, ContainerLogout, NameJobContainer } from "./styles";

export type ProfileProps = {
    img: string;
    name: string;
    job: string;
};

const Profile = ({ img, name, job }: ProfileProps) => (
    <Wrapper>
        <Details>
            <img src={img} alt={name} />
            <NameJobContainer>
                <p>{name}</p>
                <p>{job}</p>
            </NameJobContainer>
        </Details>
        <ContainerLogout href="#">
            <LogOut size={22} />
        </ContainerLogout>
    </Wrapper>
);

export default Profile;
