import React from 'react';

const Form = () => (
  <div className="form-contain">

    <form>
      <h3 className="comment-head">Comment</h3>
      <div className="ui-row"> 
        <input type="text" className="field-txt -full" placeholder="Name" />
      </div>
      <div className="ui-row"> 
        <textarea className="field-txtbox -full" placeholder="Message"></textarea>
      </div>
      <div className="ui-row"> 
        <button className="send-btn">Send</button>
      </div>
    </form>

  </div>
)

export default Form;