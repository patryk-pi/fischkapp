import { AppHeader } from "./components/AppHeader";
import { AppLayout } from "./components/AppLayout";
import { AddCard } from "./components/AddCard";

import "./scss/main.scss";

function App() {
    return (
        <AppLayout>
            <AppHeader />
            <AddCard></AddCard>
        </AppLayout>
    );
}

export default App;
