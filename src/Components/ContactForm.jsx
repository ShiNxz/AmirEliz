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
    const [canMessage, setCanMessage] = useState(localStorage.getItem("sentMessage") ? false : true)
    const [loading, setLoading] = useState(false)
    
    const handleForm = async () => {
        setLoading(true)
		if(localStorage.getItem("sentMessage"))  {
            setLoading(false)
            return Swal.fire({
            title: texts.contact.form.alert.error,
            text: texts.contact.form.alert.errorMessage2,
            icon: 'error'
        })}

        if(name.length < 2 || email.length < 5 || message.length < 3) {
            setLoading(false)
            return Swal.fire({
            title: texts.contact.form.alert.error,
            text: texts.contact.form.alert.errorMessage,
            icon: 'error'
        })}

        const { success } = await Axios('contact', 'POST', { name, email, message })

        success ? Swal.fire({
            title: texts.contact.form.alert.title,
            text: texts.contact.form.alert.message,
            icon: 'success',
            confirmButtonText: texts.contact.form.alert.button
        }) : Swal.fire({
            icon: 'error'
        })

        setLoading(false)
        if(!success) return;
		localStorage.setItem("sentMessage", 'true')
        setCanMessage(false)
    }

    return (
        <div className='h-auto w-full md:w-1/2 px-8 ltr:text-left rtl:text-right mt-12 md:mt-0'>
            <FormInput disabled={!canMessage || loading} dataAos="fade-up" dataAosDelay='800' className='w-full md:w-2/5' id='name' type='text' onChange={setName} name={texts.contact.form.name} />
            <FormInput disabled={!canMessage || loading} dataAos="fade-up" dataAosDelay='1000' className='ww-full md:w-3/5' id='email' type='email' onChange={setEmail} name={texts.contact.form.email} />
            <TextArea disabled={!canMessage || loading} dataAos="fade-up" dataAosDelay='1200' className='w-full md:w-4/5' id='message' onChange={setMessage} name={texts.contact.form.message} placeholder={texts.contact.form.placeholder}/>
            <Button className='flex flex-row items-center content-center justify-center mt-5 w-full md:w-auto' disabled={!canMessage || loading} loading={loading} dataAos="fade-up" dataAosDelay='1500' dataAosAnchor='#contact' onClick={handleForm}>{canMessage ? loading ? texts.contact.form.loading : texts.contact.form.send : texts.contact.form.alreadySent}</Button>
        </div>
    )
}

export default ContactForm