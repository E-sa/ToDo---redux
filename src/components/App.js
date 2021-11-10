//this is the main component
//it is wraped by theme switcher
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../themes/GlobalStyle";
import { dark } from "../themes/dark";
import { light } from "../themes/light";

import "../styles/styles.scss";
import List from './ٍEachTask/EachTask';
import AddTaskInput from './AddTaskInput'
import ThemeSwitcherButton from "./ThemeSwitcherButton";
import Footer from "./Footer/Footer";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //defult theme. it changes to dark on button click
            theme: dark,
        };
    }

    //change theme function
    changeTheme = () => {
        if (this.state.theme === light) {
            this.setState({
                theme: dark,
            });
        } else if (this.state.theme === dark) {
            this.setState({
                theme: light,
            });
        }
    };

    render() {
        return (
            <main className="container">

                <ThemeProvider theme={this.state.theme}>
                    <GlobalStyle />

                    {/* 1. title and theme switcher container */}
                    <div className="title-theme-container">
                        <h1>TODO</h1>
                        <ThemeSwitcherButton onChangeTheme={this.changeTheme} />
                    </div>

                    <div className="create-todo-input-and-li-container">

                        {/* 2. "create a new todo" input */}
                        <AddTaskInput />

                        <div id="li-container">
                            {/* 3. maps on redux array */}
                            <List />

                        <Footer />
                        </div>

                    </div>

                </ThemeProvider>
            </main>
        );
    }
}

export default App;
