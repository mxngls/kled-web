export default function HeaderContainer({ children, home }) {
    return (
        <header className={`header-container${!!home ? "--home" : ""}`}>
            {" "}
            {children}
        </header>
    );
}
