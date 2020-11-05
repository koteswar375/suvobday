import React from 'react';
import './Contact.scss';

const Contact = (props) => {

    return (
       <div className="contactForm">
           <div className="row">
               <label className="col s4 l6">Name</label>
               <label className="col s8 l6">Suvojit Dhar Chowdhury</label>
           </div>
           <div className="row">
               <label className="col s4 l6">Email</label>
               <label className="col s8 l6">suvojitdharchowdhury@gmail.com</label>
           </div>
           <div className="row">
               <label className="col s4 l6">Mobile</label>
               <label className="col s8 l6">8918203030</label>
           </div>
       </div>
    )
}

export default Contact;