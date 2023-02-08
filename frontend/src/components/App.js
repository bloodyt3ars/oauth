import React, { Component, Fragment } from "react";
import { createRoot } from 'react-dom/client';
import VacancyAdd from "./VacancyAdd";
import VacancyList from "./VacancyList";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Fragment>
            <h1>Вакансии</h1>
            <VacancyList/>
        </Fragment>
    );
  }
}

const app = document.getElementById("app");
const root = createRoot(app)
root.render(<App/>);