import Head from "next/head";
import HeaderContainer from "./header/HeaderContainer.jsx";
import SearchBarContainer from "./header/searchbar/SearchBarContainer.jsx";
import Navbar from "./header/Navbar.jsx";
import FooterContainer from "./FooterContainer.jsx";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>{"Korean Learner's English Dictionary"}</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
            </Head>
            <HeaderContainer>
                <SearchBarContainer />
                <Navbar />
            </HeaderContainer>
            <main>{children}</main>
            <FooterContainer />
        </>
    );
}
