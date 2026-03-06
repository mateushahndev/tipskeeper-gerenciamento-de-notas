const anoAtual = new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
            <p>Copyrigth © {anoAtual}</p>
        </footer>
    )
}