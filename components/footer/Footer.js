import React from "react";

import Logo from '../../components/logo/Logo'

import styling from "./Footer.module.scss";

const Links = ({ title, items }) => (
  <div className={styling.links}>
    <h6>title</h6>
    {/*         
        <ul>
            {(items || []).map(link => (
                <li key={link.label}>
                    <a href={link.url} target='_blank' rel='noreferrer'>{link.label}</a>
                </li>
            ))}
        </ul> */}
  </div>
);

const Footer = () => (
  <footer className={styling.footer}>
    <div className={styling.wrapper}>
      <div className={styling.info}>
        <Logo />
        <p className={styling.description}>blogConfig.description</p>
        {/* <SocialIcons /> */}
      </div>

      {/* {blogConfig.footer.links.map((links, i) => <Links key={i} {...links} />)} */}
    </div>
  </footer>
);

export default Footer;
