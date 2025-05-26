// src/views/Home.js
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Importando nossos novos estilos

export function Home() {
    return (
        <main className={styles.homeContainer}>
            <h1 className={styles.welcomeTitle}>
                Bem-vindo(a) à sua Aplicação de Filmes!
                <span className={styles.welcomeEmoji} role="img" aria-label="Claquete e pipoca">🎬🍿</span>
            </h1>
            <p className={styles.welcomeText}>
                Prepare-se para mergulhar no universo cinematográfico! Aqui você pode descobrir os filmes
                mais populares do momento, explorar detalhes, e muito mais.
                Sua aventura pelo mundo dos filmes começa agora!
            </p>
            <div className={styles.ctaContainer}>
                <Link to="/movies" className={styles.ctaButton}>
                    Ver Filmes Populares Agora!
                </Link>
            </div>
        </main>
    );
}