import React from "react";
import './post-add-form.css';

type PostAddFormType = {
   onAdd: (body: string) => void
}

function PostAddForm(props: PostAddFormType) {
   return (
      <div className="bottom-panel d-flex">
         <input
            type="text"
            placeholder="О чем вы думаете сейча?"
            className="form-control new-post-lable" />
         <button
            type="submit"
            className="btn btn-outline-secondary"
            onClick={() => props.onAdd('hello')} >Добавить</button>
      </div >
   );
}
export default PostAddForm;