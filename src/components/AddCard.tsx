import React, { useState } from "react";
import styles from "./AddCard.module.css";
import { ReactNode } from "react";
import { AddCardFront } from "./AddCardFront";

type CardProps = {
    children: ReactNode;
};

export const AddCard = (props: CardProps) => {
    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");

    return (
        <div className={styles.addCard}>
            <AddCardFront question={question} setQuestion={setQuestion} />
        </div>
    );
};
