import React from 'react'

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) =>{
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

const FAQ = () => {
  return (
    <div>
        <div class="row col-12 text-center text-white" id="section">
    <h2><b>Frequently Asked<br />Questions</b></h2>
    <p>Wanna Ask Something?</p>
    <div className="faq">
      <div className="question">      
        <h3>Lorem, ipsum dolor?</h3>
        <svg width='15' height='10' viewBox='0 0 42 25'>
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            stroke-width="7"
            stroke-linecap="round"
          />

        </svg>
      </div>
      <div className="answer">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas, sunt blanditiis animi incidunt voluptatem repudiandae possimus consectetur distinctio assumenda maxime, eum quibusdam iure odit laborum repellat magnam. Necessitatibus, ipsa?</p>
      </div>
    
    </div>

    <div className="faq">
      <div className="question">      
        <h3>Lorem, ipsum dolor?</h3>
        <svg width='15' height='10' viewBox='0 0 42 25'>
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            stroke-width="7"
            stroke-linecap="round"
          />

        </svg>
      </div>
      <div className="answer">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas, sunt blanditiis animi incidunt voluptatem repudiandae possimus consectetur distinctio assumenda maxime, eum quibusdam iure odit laborum repellat magnam. Necessitatibus, ipsa?</p>
      </div>
    
    </div>

    <div className="faq">
      <div className="question">      
        <h3>Lorem, ipsum dolor?</h3>
        <svg width='15' height='10' viewBox='0 0 42 25'>
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            stroke-width="7"
            stroke-linecap="round"
          />

        </svg>
      </div>
      <div className="answer">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas, sunt blanditiis animi incidunt voluptatem repudiandae possimus consectetur distinctio assumenda maxime, eum quibusdam iure odit laborum repellat magnam. Necessitatibus, ipsa?</p>
      </div>
    
    </div>


<div class="container col-10 justify-content-evenly text-white" id="banner12">
  <h1><b>Get ready to collect<br />our NFT</b></h1>
  <button type="button" class="btn btn-primary" id="b12">Get Started</button>
</div>
</div>
    </div>
  )
}

export default FAQ