import Sidebar, { SidebarProps } from "components/Sidebar";
import itemsMock from "components/ItemsMenu/mock";

export default function Home(props: SidebarProps) {
    return (
        <>
            <Sidebar {...props} />
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            logo: "Giovanny",
            items: itemsMock,
            profile: {
                img: "https://media-exp1.licdn.com/dms/image/C4D03AQE3LOUXlSOw7w/profile-displayphoto-shrink_800_800/0/1619556816216?e=1634169600&v=beta&t=bCWzEJ0_0CTsHyv2X84z0MlJvjxD2-eXWocGrsJbBf4",
                name: "Giovanny Fialho",
                job: "Desenvolvedor Frontend"
            }
        }
    };
}
