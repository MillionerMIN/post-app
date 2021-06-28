import React from "react";
import './post-add-form.css';

function PostAddForm() {
   return (
      <form className="bottom-panel d-flex">
         <input
            type="text"
            placeholder="О чем вы думаете сейча?"
            className="form-control new-post-lable" />
         <button type="submit" className="btn btn-outline-secondary">Добавить</button>
      </form>
   )
}
export default PostAddForm;