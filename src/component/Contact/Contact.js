import Sidebar from '../Sidebar/Index';
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'

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

                        <div className='contact-head'>
                        <p className='head1'>
                        I am interested in freelance opportunities - especially 
                        ambitious or large projects. However, if you have other request 
                        or question, don't hesitiate to contact me using the forn either.
                        </p>
                        <div className='head2'>
                            <h2>Other Details.</h2>
                        Benjamin Feranmi
                            <br/>
                            Nigeria
                            <br/>
                            Branka Radiman 19, 665800 <br/> MitriBrant Area <br/>
                            <span>Opaferanmi01@gmail.com</span>
                        </div>
                        </div>
                        <div className='contact-sp'>
                            
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

                           <div className='contact-map'>
                            <MapContainer center={[7.790912432212298, 4.5523312863139935]} zoom={13}> 
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                <Marker position={[7.790912432212298, 4.5523312863139935]}>
                                    <Popup>Benjamin Lives Here, Come for a cup of coffee :) </Popup>
                                </Marker>
                            </MapContainer>
                           </div>
                            
                        </div>
                </div>
                
            </div>

        </div>
    )
} 

export default Contact;