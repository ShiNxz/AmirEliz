import Swal from 'sweetalert2'
import { useContext, useState } from 'react'

import { Context } from '../Context'

import Button from './UI/Button'
import FormInput from './UI/FormInput'
import TextArea from './UI/TextArea'
import Axios from './../libs/useAxios'

const ContactForm = () => {
    const { texts } = useContext(Context)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    const handleForm = async () => {
        if(name.length < 2 || email.length < 5 || message.length < 3) return Swal.fire({
            title: texts.contact.form.alert.error,
            text: texts.contact.form.alert.errorMessage,
            icon: 'error'
        })

        const { success } = await Axios('contact', 'POST', { name, email, message })

        success ? Swal.fire({
            title: texts.contact.form.alert.title,
            text: texts.contact.form.alert.message,
            icon: 'success',
            confirmButtonText: texts.contact.form.alert.button
        }) : Swal.fire({
            icon: 'error'
        })
    }

    return (
        <div className='h-auto md:w-1/2 px-8 ltr:text-left rtl:text-right'>
            <FormInput dataAos="fade-up" dataAosDelay='800' className='w-2/5' id='name' type='text' onChange={setName} name={texts.contact.form.name} />
            <FormInput dataAos="fade-up" dataAosDelay='1000' className='w-3/5' id='email' type='email' onChange={setEmail} name={texts.contact.form.email} />
            <TextArea dataAos="fade-up" dataAosDelay='1200' className='w-4/5' id='message' onChange={setMessage} name={texts.contact.form.message} placeholder={texts.contact.form.placeholder}/>
            <Button dataAos="fade-up" dataAosDelay='1500' dataAosAnchor='#contact' onClick={handleForm} className='mt-5'>{texts.contact.form.send}</Button>
        </div>
    )
}

export default ContactForm