import React, { Fragment } from 'react';
import axios from 'axios';

export default class VacancyAdd extends React.Component {
    constructor(probs){
        super(probs)
        this.state = {
            title: "",
            company: "",
            salary: "",
            description: ""
        }
    }
    



    addVacancy = event => {
        event.preventDefault();
        axios.post('/api/vacancies/', { title: this.state.title,
            company: this.state.company,
            salary: this.state.salary,
            description: this.state.description })
            .then(res => {
                window.location.reload();
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <Fragment>
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h1 className="fw-bold mb-0 fs-2">Добавить вакансию</h1>
                    </div>
                    <div className="modal-body p-5 pt-0">
                        <form className="">
                            <div className="form-floating mb-3">
                                <input type="title" name="title" className="form-control rounded-3" id="floatingInput" onChange={(event)=> this.setState({title: event.target.value})} />
                                <label htmlFor="floatingInput">Название</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="company" name="company" className="form-control rounded-3" id="floatingInput" onChange={(event)=> this.setState({company: event.target.value})}  />
                                <label htmlFor="floatingInput">Компания</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="integer" name="salary" className="form-control rounded-3" id="floatingInput" onChange={(event)=> this.setState({salary: Number(event.target.value)})}  />
                                <label htmlFor="floatingInput">Зарплата</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea type="text" name="description" className="form-control rounded-3" id="floatingInput" onChange={(event)=> this.setState({description: event.target.value})}  />
                                <label htmlFor="floatingInput">Описание</label>
                            </div>
                            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="button" onClick={this.addVacancy}>Добавить</button>
                        </form>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}
