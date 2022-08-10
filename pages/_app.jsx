// Fonts
import "../styles/fonts.css"

// Global
import "../styles/globals.css";

// CSS for specific sites
import "../styles/pages/404.css";
import "../styles/pages/view.css";
import "../styles/pages/home.css";
import "../styles/pages/wordlist.css";
import "../styles/pages/404.css";

// Shared between components
import "../styles/emptyButton.css";
import "../styles/wordListButton.css";

// CSS for individual componentents
import "../styles/content/contentContainer.css";
import "../styles/content/contentHeader/contentHeaderContainer.css";
import "../styles/content/contentHeader/sortOptions/sortOption.css";
import "../styles/content/contentHeader/sortOptions/sortOptionsContainer.css";
import "../styles/content/contentFooterContainer.css";

// CSS for <HeaderContainer /> component
import "../styles/header/headerContainer.css"
import "../styles/header/navbar.css";
import "../styles/header/searchbar/searchbarContainer.css";
import "../styles/header/searchbar/searchbarInput.css";
import "../styles/header/searchbar/searchOptionsContainer.css";
import "../styles/header/searchbar/matchType.css";
import "../styles/word/inflections.css";

// CSS for <FooterContainer /> component
import "../styles/footerContainer.css"

// CSS for <WordContainer /> component
import "../styles/word/word.css";
import "../styles/word/wordHeader.css";

// CSS for <SenseContainer /> component
import "../styles/word/sense/sense.css";
import "../styles/word/sense/examples.css";
import "../styles/word/sense/reference.css";

import { React } from "react";

function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default App;
