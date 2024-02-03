import React from "react";
import {Contactform} from '../contactForm/contactForm'
import {ContactFilter} from '../contactFilter/contactFilter'
import {Contactslist} from '../contactList/contactList'

export const Form = () => {
    return (
        <>
        <Contactform/>
        <ContactFilter/>
        <Contactslist/>
        </>
    )
}
