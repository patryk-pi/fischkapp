import { ReactNode } from "react";

type AppLayoutProps = {
    children: ReactNode;
};

export const AppLayout = (props: AppLayoutProps) => (
    <div className={"layout"}>{props.children}</div>
);
