import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { toggleTheme } from "./store/themeSlice";

const App = () => {
    const { theme } = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();

    return (
        <div
            style={{
                display: "flex",
                backgroundColor: theme.background,
                color: theme.text,
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <main>
                <button onClick={() => dispatch(toggleTheme())} style={{ padding: "10px 20px", cursor: "pointer" }}>
                    <h1>Hamza is testing</h1>
                </button>
            </main>
        </div>
    );
};

export default App;
