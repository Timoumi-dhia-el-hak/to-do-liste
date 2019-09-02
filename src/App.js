import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createContact,
  deleteContact,
  editContact
} from "./actions/contactAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      contacts: this.props.contacts,
      editName: ""
    };
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleEdit(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  //
  deleteContact(e, index) {
    this.props.deleteContact(index);
  }

  render() {
    return (
      <div className="container">
        <h1 className="center">Daily to do list</h1>
        <hr />
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.createContact({ name: this.state.name });
              this.setState({ name: "" });
            }}
          >
            <input
              type="text"
              placeholder="Add your todo"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.name}
            />
            <br />
            <input type="submit" className="btn btn-success" value="ADD" />
          </form>
          <hr />
          {
            <ul className="list-group">
              {/* {this.props.contacts.map((contact, i) => this.listView(contact, i))} */}
              {this.props.contacts.map((el, i) => (
                <div className="row" key={i}>
                  <div className="col-md-10">
                    <li key={i} className="list-group-item clearfix">
                      {el.name}
                    </li>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={() => this.setState({ editName: el.name })}
                    >
                      Edit
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModalCenter"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLongTitle"
                            >
                              Edit to Do
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <input
                  
                              type="text"
                              value={this.state.editName}
                              name="editName"
                              onChange={e => {
                                this.handleEdit(e);
                              }}
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              key={i}
                              className="btn btn-primary"
                              onClick={e => {
                                e.preventDefault();
                                this.props.editContact(this.state.editName, i);
                              }}
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={e => this.deleteContact(e, i)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createContact: contact => dispatch(createContact(contact)),
    deleteContact: index => dispatch(deleteContact(index)),
    editContact: (newcontact, i) => dispatch(editContact(newcontact, i))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
