import React from 'react';

const Contact = () => {
    const contact = {
        first: "Your",
        last: "Name",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
      };
    return (
        <div>
            <div>
                <img key={contact.avatar}
                 src={contact.avatar || null} alt="" />
            </div>
            <div>
                <h1>
                    {contact.first || contact.last ? (<>{contact.first}{contact.last}</>

                    ): (<i>no name</i>) } {''}
                    <favorite contact={contact}></favorite>
                </h1>
            </div>
        </div>
    );
};

export default Contact;