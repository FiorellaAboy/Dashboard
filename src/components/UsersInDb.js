import React, { Component } from "react";
import User  from './User';

class UsersInDb extends Component {
    constructor() {
        super();
        this.state = {
            usersList: []
        };
    }

    componentDidMount() {
        fetch ("/api/users")
            .then(response => response.json())
            .then(users => {
                /* console.table(data.data); */
                this.setState({
                    usersList: users.data
                })
            })
            .catch(err => console.error(err))
        ;
    }

    addClass(){
        document.querySelector(".usersCard").classList.toggle("bg-secondary");
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onMouseOver={() => this.addClass()}
                                className="m-0 font-weight-bold text-gray-800"
                                >Users in Data Base</h6>
                        </div>
                        <div className="card-body usersCard">
                            <div className="row">
                                {
                                    this.state.usersList.map((user,index)=>{
                                        return  <User  {...user}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
        )
    }
}
export default UsersInDb;