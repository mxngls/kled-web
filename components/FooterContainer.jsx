export default function Footer() {
    return (
        <footer className="footer__container">
            <div className="footer__container--content">
                The underlying data is sourced from the{" "}
                <a
                    href={
                        "https://krdict.korean.go.kr/eng/mainAction?nation=eng"
                    }
                >
                    National Institute of Korean Language
                </a>
                . Copyright of all materials belongs to the
                copyright owners. For further information regarding copyright
                please refer to their{" "}
                <a
                    href={
                        "https://krdict.korean.go.kr/eng/kboardPolicy/copyRightTermsInfo?nation=eng"
                    }
                >
                    website
                </a>
                .
            </div>
        </footer>
    );
}
