import "./App.css";
import { PostForm } from "./components/PostForm";
// import { NameList } from "./components/NameList";
// import { ClickHandler } from "./components/ClickHandler";
// import { ParentComponent } from "./components/ParentComponent";
// import { UserGreeting } from "./components/UserGreeting";
// import { Greet } from "./components/Greet";
// import { Message } from "./components/Message";
// import { Stylesheet } from "./components/Stylesheet";
// import { Form } from "./components/Form";
import { PostList } from "./components/PostList";

function App() {
    return (
        <div className="App">
            <PostForm />
            <PostList />
        </div>
    );
}

export default App;
