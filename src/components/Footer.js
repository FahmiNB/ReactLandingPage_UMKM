import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <h2 class='website-rights'>COPYRIGHT By Fahmi Nur Baihaqi © 2022</h2>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='//m.facebook.com/groups/1462468153855533/#_=_'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='//www.instagram.com/pasarkulinerpratistha/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Footer;
