import React from "react";
import styles from "./AppLayout.module.css";
import { ReactNode } from "react";

type AppLayoutProps = {
    children: ReactNode;
};

export const AppLayout = (props: AppLayoutProps) => (
    <div className={styles.layout}>{props.children}</div>
);
