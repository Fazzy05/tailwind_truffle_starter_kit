import React from 'react';
import SimpleReactFooter from 'simple-react-footer';

const Footer = () => {
  
  // Define the data for the footer
  const description = "The best NFT marketplace website in the world and feel your experience in selling or buy our work";
  const title = "NFT Marketplace";

  const columns = [{
    title: "About",
    resources: [{
      name: "Product",
      link: "/item1"
    },{
      name: "Resources",
      link: "/item2"
    },{
      name: "Terms & Condition",
      link: "/item3"
    },]
  },{
    title: "Company",
    resources: [{
      name: "Our Team",
      link: "/item5"
    },{
      name: "Partner With Us",
      link: "/item6"
    },
    {
      name: "Privacy & Policy",
      link: "/item6"
    },{
      name: "Features",
      link: "/item6"}]
  },{
    title: "Contact",
    resources: [{
      name: "+92 320 9557754",
    },{
      name: "+92 332 1429266",
    },
    ,{
      name: "fazkhalid08@gmail.com",
    },{
      name: "abdullahamjad209@gmail.com",
    }]
  }];

  return <SimpleReactFooter
    description={description}
    title={title}
    columns={columns}
    linkedin="lorem_ipsum_on_linkedin"
    facebook="lorem_ipsum_on_fb"
    twitter="lorem_ipsum_on_twitter"
    instagram="lorem_ipsum_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="lorem_ipsum_collections"
    iconColor="white"
    backgroundColor="#4e4599"
    fontColor="white"
  
  />;
}

export default Footer;