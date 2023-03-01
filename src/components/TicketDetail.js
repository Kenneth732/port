import React from "react";
import PropTypes from "prop-types";


function TicketDetail(props){
  const { ticket, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <div className="dark">
      <h1>{ticket.names}</h1> <br />
      <h3>{ticket.location}</h3>
      <p><em>{ticket.issue}</em></p>
      <div className="buttons">
      <button onClick={onClickingEdit}>Update Portfolio</button>
      <button onClick={()=> onClickingDelete(ticket.id)}>Delete Portfolio</button>
      </div>
      </div>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default TicketDetail;