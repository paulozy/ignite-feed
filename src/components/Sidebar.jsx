import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
      />

      <div className={styles.profile}>
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHzSzpZOMCjkA/profile-displayphoto-shrink_800_800/0/1629385386407?e=1661385600&v=beta&t=0zTfWMZctq5k_Sur4fy3GSEe2Ux4XV1WjiGs81eSdhg" />

        <strong>Paulo Santana</strong>
        <span>Backend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
