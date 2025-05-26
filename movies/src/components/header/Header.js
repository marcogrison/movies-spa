import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
    console.log("Objeto styles:", styles); // Bom para depurar e ver as classes disponíveis
    console.log("styles.appHeader:", styles.appHeader);
    console.log("styles.headerContainer:", styles.headerContainer);
    console.log("styles.appTitle:", styles.appTitle);
    console.log("styles.mainNav:", styles.mainNav);

    return (
        <header className={styles.appHeader}>
            <div className={styles.headerContainer}>
                <h1 className={styles.appTitle}>
                    <Link to="/">Aplicação de Filmes</Link>
                </h1>
                <nav className={styles.mainNav}>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/movies"}>Filmes</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}