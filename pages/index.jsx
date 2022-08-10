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
                    <h1>KLED</h1>
                    <h4>The Korean Learner&apos;s English Dictionary</h4>
                    <div className="home__content">
                        <SearchBarContainer main={true} />
                    </div>
                </div>
            </main>
            <FooterContainer />
        </>
    );
}
