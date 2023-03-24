import "./App.css";
import NAMES from "./components/Data.json";
import { useState, useTransition } from "react";

function App() {
    const [query, setQuery] = useState("");
    const [inputValue, setInputValue] = useState("");

    const [isPending, startTransition] = useTransition();

    const changeHandler = (event) => {
        setInputValue(event.target.value);
        startTransition(() => {
            setQuery(event.target.value);
        });
    };
    const filterdNames = NAMES.filter((item) => {
        return (
            item.first_name.includes(query) || item.last_name.includes(query)
        );
    });

    return (
        <div className="App">
            <input type="text" value={inputValue} onChange={changeHandler} />
            {isPending && <p>Updating List...</p>}
            {filterdNames.map((item) => (
                <p key={item.id}>
                    {item.first_name} {item.last_name}
                </p>
            ))}
        </div>
    );
}

export default App;
