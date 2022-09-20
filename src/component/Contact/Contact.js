import Sidebar from '../Sidebar/Index';
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass] = useState('text-animate')
    
    const refFrom = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_sj47dpj',
            'template_g20nlx9',
            refFrom.current,
            'mW8WFQdas_Oc08y-M'
        )
        .then(
            () => {
                alert('Message sucessfully sent!')
                console.log('sucess')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, Please try again ')
                console.log("failed")
            }
        )
    }
    
   

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate')
    //     }, 3000)
    // }, [])

    return (
        <div className='contact'> 
            <Sidebar />
            <div className='contact__details'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        className="text__animate"
                        strArray={['C','o','n','t','a','c','t',' ', 'M','e']}
                        idx={15}/>
                    </h1>

                    <p>
                        I am interested in freelance opportunities - especially 
                        ambitious or large projects. However, if you have other request 
                        or question, don't hesitiate to contact me using the forn either.
                    </p>
                        <div className='contact-form'>
                            
                            <form ref={refFrom} onSubmit={sendEmail}>
                                    <input 
                                    className='half'
                                    type="text" 
                                    name="name" 
                                    placeholder='Name' 
                                    required />
                               
                                    <input 
                                    className='half'
                                    type="email" 
                                    name="email" 
                                    placeholder='Email' 
                                    required />
                               
                                        <input 
                                        type="text" 
                                        name="Subject" 
                                        placeholder='Subject' 
                                        required/>
                             
                                    <textarea 
                                    placeholder='Message' 
                                    name='message ' 
                                    required>
                                    </textarea>
                               
                                    <input type="submit" className='flat-button' value="SEND" />
                                </form>
                            
                        </div>
                </div>
                
            </div>

        </div>
    )
} 

export default Contact;