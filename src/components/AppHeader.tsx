import React from "react";
import styles from "./AppHeader.module.css";
import Logo from "./SVG/Logo";
import AddButton from "./SVG/AddButton";

type AppHeaderProps = {
    cardsAmount: number;
};

export const AppHeader = ({ cardsAmount = 0 }: AppHeaderProps) => {
    console.log(cardsAmount);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.summary}>
                    <Logo className={styles.logo} />
                    <div className={styles.counter}>
                        <h1>Cards: {cardsAmount}</h1>
                    </div>
                </div>
                <button className={styles.button}>
                    <AddButton />
                </button>
            </div>
        </header>
    );
};
