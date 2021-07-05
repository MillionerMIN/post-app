import React, { Component } from "react";
import './post-add-form.css';

type StatePostAddFormType = {
   text: string
}

type PostAddFormType = {
   onAdd: (body: string) => void
}


export default class PostAddForm extends Component<PostAddFormType, StatePostAddFormType> {

   constructor(props: any) {
      super(props)
      this.state = {
         text: '',
      }
      this.onValueChange = this.onValueChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onValueChange(e: React.ChangeEvent<HTMLInputElement>): void {
      this.setState({
         text: e.target.value
      })
   }

   onSubmit(e: any) {
      e.preventDefault();
      this.props.onAdd(this.state.text);
      this.setState({
         text: '',
      })
   }

   render() {
      return (
         <form
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit} >
            <input
               type="text"
               placeholder="О чем вы думаете сейча?"
               className="form-control new-post-lable"
               onChange={this.onValueChange}
               value={this.state.text} />
            <button
               type="submit"
               className="btn btn-outline-secondary">
               Добавить</button>
         </ form >
      );
   }
}