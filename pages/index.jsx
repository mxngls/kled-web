import FooterContainer from "../components/FooterContainer";
import HeaderContainer from "../components/header/HeaderContainer";
import Navbar from "../components/header/Navbar";
import SearchBarContainer from "../components/header/searchbar/SearchBarContainer";

export default function Home() {
    return (
        <>
            <HeaderContainer home={true}>
                <Navbar />
            </HeaderContainer>
            <main>
                <div className="home-container">
                    <h2>The Korean Learner&apos;s English Dictionary</h2>
                    <div className="home__content">
                        <SearchBarContainer home={true} />
                    </div>
                </div>
            </main>
            <FooterContainer />
        </>
    );
}
