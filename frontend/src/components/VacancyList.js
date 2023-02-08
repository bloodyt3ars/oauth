import React, { Fragment } from 'react';
import axios from 'axios';

export default class VacancyList extends React.Component {
    state = {
        vacancies: []
    }
    componentDidMount() {
        axios.get("api/vacancies/")
            .then(res => {
                const vacancies = res.data;
                this.setState({ vacancies });
            })
    }


    render() {
        if (this.state.vacancies.length > 0) {
            return (
                <Fragment>
                    {
                        this.state.vacancies
                            .map(vacancy => (
                                <div className="list-group w-auto" key={vacancy.id}>
                                    <a className="list-group-item d-flex gap-3 py-3" aria-current="true">
                                        <div className="d-flex gap-2 w-100 justify-content-between">
                                            <div>
                                                <h6 className="mb-0">{vacancy.title}</h6>
                                                <p className="mb-0">{vacancy.company}</p>
                                                <p className="mb-0 opacity-75">{vacancy.description}</p>
                                            </div>
                                            <small className="opacity-50 text-nowrap">{vacancy.salary} </small>
                                        </div>
                                    </a>
                                </div>
                            ))
                    }
                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    <div className="list-group w-auto">
                        <a className="list-group-item d-flex gap-3 py-3">
                            <div className="d-flex gap-2 w-100 justify-content-between">
                                    <h6 className="mb-0">Открытых вакансий нет</h6>
                            </div>
                        </a>
                    </div>
                </Fragment>
            )
        }

    }
}