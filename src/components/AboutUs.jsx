import React from 'react'
import sponsored from '../assets/sponsored.png'
import Group18 from '../assets/Group 18.png'

export const AboutUs = () => {
  return (
    <><><div className='AboutUs '>
          <img src={sponsored}
              alt="sponsored"
              className='h-full w-full' />
      </div><div className='About text-white'>
              <h2><b>About Us</b></h2>
              <p>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit.</p>
          </div></><div className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10" id="banner4">
              <div className="col-6" id="">
                  <img 
                  src={Group18} 
                  width="300%" 
                  height="600" 
                  alt="group18" />
              </div>
              <div className="col-6 text-white">
                  <h2><b>Get Popular NFT</b></h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur totam aliquid consequatur soluta
                      distinctio laudantium ipsam quia accusantium dicta sunt modi, minima excepturi accusamus tempore praesentium
                      adipisci, libero minus repudiandae? Eveniet perspiciatis recusandae enim explicabo eius animi. Suscipit qui
                      doloribus maxime laborum atque laudantium est modi laboriosam obcaecati perferendis, omnis magni cumque
                      doloremque dignissimos commodi necessitatibus non fugit ipsa ipsam architecto! Veniam, consequatur!</p>
                  <button type="button" className="btn btn-primary" id="b4-btn">Show More</button>
              </div>
          </div></>
    
  )
}
