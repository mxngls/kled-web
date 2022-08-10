export default function CurrentPage({ batch, resNum }) {
    return (
        <div className="content-container__current-page">
            {batch * 10} - {resNum > 10 ? batch * 10 + 10 : resNum}
        </div>
    );
}
