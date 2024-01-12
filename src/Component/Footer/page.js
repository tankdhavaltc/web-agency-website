import React from 'react';
import "./Footer.scss";
import { companyPages, seoServices, websiteService } from '@/constants';
import Link from 'next/link';
import SVG_ICONS from '@/constants/icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer-area">
                <div className="group">
                    <div className="group-box">
                        <div className="service-title">Company</div>
                        <div className="underline"></div>
                        <div className="service-links">
                            {companyPages.map((service) => (
                                <Link className='link' href={service.href} key={service.id}>{service.label}</Link>
                            ))}
                        </div>
                        <div className="underline"></div>
                        <div className="footer-logo">
                            {SVG_ICONS.LogoSVGIcon}
                        </div>
                        <div className="address">
                            <div>Office 14 New Station St,</div>
                            <div>Leeds, LS1 5DL</div>
                            <div>2021 © DStudio.</div>
                        </div>
                        <div className="underline"></div>
                    </div>
                    <div className="group-box">
                        <div className="service-title">Website Service</div>
                        <div className="underline"></div>
                        <div className="service-links">
                            {websiteService.map((service) => (
                                <Link className='link' href={service.href} key={service.id}>{service.label}</Link>
                            ))}
                        </div>
                        <div className="underline"></div>
                    </div>
                    <div className="group-box">
                        <div className="service-title">Seo Services</div>
                        <div className="underline"></div>
                        <div className="service-links">
                            {seoServices.map((service) => (
                                <Link className='link' href={service.href} key={service.id}>{service.label}</Link>
                            ))}
                        </div>
                        <div className="underline"></div>
                    </div>
                    <div className="group-box">
                        <div className="service-title">Let’s talk.</div>
                        <div className="underline"></div>
                        <p className='update-text'>
                            Score valuable tips, benefit fro
                            insider knowledge and get
                            helpful updates.
                        </p>
                        <div className='company-email'>
                            <Link href={"mailto:debuggers@gmail.com"}>
                                <i>{SVG_ICONS.RightArrow}</i>
                                debuggers@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer