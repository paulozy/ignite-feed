import styles from "./Header.module.css";
import ignoteLogo from "../assets/ignite.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ignoteLogo} alt="Logotipo Ignite" />
    </header>
  );
}
