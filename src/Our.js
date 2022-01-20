import React from 'react'
import './Our.css'
import pic4 from './Image/woman.png'
const Our = () => {
    return (
      <div>  
            <div className='appr'>
                <h1>Our Approach</h1>
                <p>The program rewards user for delivering on certain tasks</p>
            </div>
        <div className='task'>
            <div className='img_text'>
                 <div className='imgwoman'>
                     <img src={pic4} alt="" />
                   </div>
            </div>

            <div> 

                     <div>
                         <p>Kudi.com provides people with opportunity to take advantage</p>
                         <p>of the internet and turn our everyday social media into a tool</p>
                         <p>for making passive income.</p>
                     </div>
                <div className='grid' >
                       <div>
                              <div className='boot'>
                                     <h6>Membership</h6>
                                     <p>Signup to join Kudi for online </p>
                                    <p>opportunity that pays.</p>
                                </div>

                               <div className='boot'>
                                      <h6>Share ADs</h6>
                                      <p>What you do as an affliate is to share these ADs</p>
                                     <p> to your Facebook page daily and get paid.</p>                        
                                </div>
                        </div>   
                       <div>
                             <div className='boot'>
                                     <h6>Choose a Package</h6>
                                      <p>Select subscription packages. They’re </p>
                                      <p>proportional to the wages earned by</p> 
                                      <p>subscribers.</p>                       
                             </div>
                             <div className='boot'>
                                 <h6>Get Paid</h6>
                                 <p>Your activity earning will increase</p>
                                 <p> based on the package you are on.</p>                        
                             </div>
                        </div>        
                </div>
            </div>    
        

                

            
            
        </div>
      </div>  
    )
}

export default Our
