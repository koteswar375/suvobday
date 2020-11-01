import React from 'react';
import './Contact.css';

const Contact = (props) => {

    return (
       <div className="contactForm">
           <div className="row">
               <label className="col s6">Name</label>
               <label className="col s6">Suvojit Dhar Chowdhury</label>
           </div>
           <div className="row">
               <label className="col s6">Email</label>
               <label className="col s6">suvojitdharchowdhury@gmail.com</label>
           </div>
           <div className="row">
               <label className="col s6">Mobile</label>
               <label className="col s6">8918203030</label>
           </div>
       </div>
    )
}

export default Contact;