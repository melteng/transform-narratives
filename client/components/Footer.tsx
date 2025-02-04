import React, { Component } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import _ from 'lodash';
import Image from './Image';
import { UrlObject } from 'url';

const ActiveLink = (href: string | undefined) => {

    const router = useRouter();
    return router.asPath === href;

}

const LinkRender = (props: { link: string; label: string, pad?: boolean }) => {

    return (
        <li className={props.pad ? 'pt-2' : ''}>
            {
                ActiveLink(props.link) ? 
                <span className='opacity-40'>{props.label}</span> 
                :
                <Link href={props.link} passHref>
                    {props.label}
                </Link>
            }
        </li>
    );
    
}

class Footer extends Component {
  render() {
    return (
        <div>
        <div className='p-2 text-center text-sm border-t-[1px] border-t-[#E589E0] border-b-[1px] border-b-[#F4B477]'>
            If you or someone you know has been impacted by gun violence and are in need of support or services, please <span className='text-bluegreen'><Link href="/resources" passHref>click here</Link></span> for resources.
        </div>
        <nav className="w-full px-6 xl:px-12 my-7 mb-24">
            <Link href="/" passHref>
            <svg viewBox="0 0.081 58 35.601" width="58" height="35.601">
                <g transform="matrix(0.11329, 0, 0, 0.11329, 0, 0.071911)">
                    <path d="M149,61.7V17.8H0v43.9h32.2c3.9,0,11.1-0.8,14.4,0.2v132.7H102V74.4c0-3.5-0.7-9.8,0.2-12.7H149z"
                        style={{'fill': 'rgb(2, 102, 112)'}}></path>
                    <path d="M362.4,163.7v-28.1c0-3.6,0.8-10-0.2-13h-59.8c-2,0-4.7-0.3-6.2,0.2v19.5c0,2.8-0.5,6.8,0.2,9.1h21.8
                c3.1,0,7.5-0.6,10.1,0.2c-0.7,2.1-3.1,3.8-4.8,5c-1.9,1.4-3.7,3.1-6,4.1c-6,2.6-17.4,2.6-24,0.5c-9.3-3.1-13.6-9.7-16.1-19.7
                c-0.7-2.6-0.5-5.5-0.5-8.6c0-13.5,4.6-22.9,13.9-26.9c9.7-4.2,24-1.3,27.8,6.2h29.6c3.7,0,10.4,0.8,13.4-0.2
                c-2.5-20.2-14.7-32.3-30-39.8c-3.9-1.9-8.7-2.9-13-4.1c-6.7-1.9-15.9-1.6-24.2-1.4c-7.7,0.9-5.4,0.4-7.7,0.9
                c-3.5,0.7-6.9,1.6-10.3,2.6c-16,5.9-28.4,16.7-35,31.9c-2.1,4.9-3.4,10.4-4.8,16.1c-2.1,8.2-1.5,21.9,0.5,29.5
                c0.8,3.2,0.8,5.9,1.9,8.9c7.1,19.4,19.4,31.9,39.4,38.4c10.7,3.5,28.5,5.3,40.8,1.7c8.1-2.4,15.7-5.3,21.8-9.6c2.1-1.4,4-3.5,6-5
                c2.4-1.7,4.6-3.7,6.5-6c1.9-2.5,4-4.9,5.8-7.4C360.4,167.2,361,165.1,362.4,163.7z"
                        style={{'fill': 'rgb(2, 102, 112)'}}></path>
                    <path d="M202.8,67.7c-3.7,0-9.3-0.8-12.5,0.2v64.2h-0.5c-2.8-5.4-6.9-10.3-10.1-15.4c-7-11.1-14.1-22-21.1-33.1
                c-2.3-3.6-4.8-7.3-7.2-11c-1-1.5-2.8-3.1-3.4-5h-27.6c-3.7,0-9.3-0.8-12.5,0.2v127.2h40.1l0-63.3c1.6,0.8,2.4,3.4,3.4,4.8
                c2.4,3.7,4.9,7.5,7.4,11.3c7.2,10.7,14.2,21.6,21.4,32.4c2.4,3.5,4.7,6.9,7,10.6c0.9,1.4,2.4,2.6,2.9,4.3h27.6
                c3.5,0,9.8,0.8,12.7-0.2v-115c0-3.7,0.8-9.1-0.2-12.2H202.8z" style={{'fill': 'rgb(2, 102, 112)'}}></path>
                    <path
                        d="M509.3,171c1.5-2.9,3.2-6.1,2.5-9.6c-1.1-6-3.6-10.3-7.4-12.5c-3.6-2.1-8-2.2-13.2-0.3l-1.2,0.4l-0.4,0.1
                c0.1-0.4,0.3-0.7,0.4-1.1c0.6-1.6,1.3-3.3,1.8-5.1c0.9-3.4,0.9-6.9,0.3-10.3c-0.1-0.5-0.2-1.1-0.2-1.6c0-0.9-0.1-1.8-0.4-2.7
                c-2-5.9-7.2-7.9-11.5-9c-2.3-0.7-4.8-0.9-7.2-0.5l-1.2,0.3c-1.3,0.3-2.5,0.6-3.7,1c0.3-1.1,0.8-2.3,1.2-3.2s0.8-1.9,1.1-2.9l1-4.9
                c0.5-1.6,1-3.3,1.5-5c0.7-2.4,1.5-4.9,2.2-7.1c1.2-3.6,2.1-7.3,2.7-11c0.6-3.3,1.4-6.6,2.3-9.9c2.3-7.2,4.5-14.6,6.5-21.8
                c1.5-5.1,3-10.4,4.6-15.7c2.1-6.7,3.5-20.2,0.2-27.6c-2.2-5-6.6-8.4-12.8-10.2c-4.5-1.3-9.9,0.2-13.2,1.8
                c-8.4,4.2-12.4,11.5-15.4,18.8c-2.2,5.8-4,11.8-5.2,17.9c-0.8,3.3-1.6,6.8-2.5,10c-0.9,3.2-1.8,6.4-2.7,9.6
                c-2.2,8.2-4.6,16.6-7.2,24.4c-0.9,2.7-1.7,5.4-2.4,8c-2.3,8-4.5,15.6-9.2,21.2c-1.7-0.4-2.6-1.9-3.8-4.3l-0.3-0.6
                c-2.3-4.6-4.1-9.5-5.6-14.4c-0.3-1-0.7-2-1-3c-1.4-4.4-2.9-9-4.3-13.5c-1.2-3.8-2.4-7.7-3.6-11.5c-0.5-1.8-1-3.6-1.2-5.5
                c-0.3-2-0.8-4-1.4-6c-1.4-4.3-2.7-8.7-4-13.1c-2.6-8.6-5.1-17.4-8.6-25.3c-2.2-5.1-4.7-8.9-7.5-11.4c-4.4-4-9.6-4.9-15-2.5
                c-7,3.1-9.8,10.6-11.7,18.4c-0.3,1.1-0.4,2.3-0.3,3.5c0,0.9,0,1.7-0.2,2.6c-0.5,3.6-0.5,7.2,0,10.7c0.4,2,0.6,4.1,0.7,6.1
                c0.1,2.6,0.4,5.2,1,7.7c1.2,4.2,2.7,8.8,4.4,13.3c0.2,0.6,0.3,1.2,0.4,1.8c0.1,0.8,0.3,1.6,0.5,2.4c0.6,1.9,1.2,3.9,1.9,6
                c0.7,2.2,1.3,4.4,2,6.4c0.8,2.4,1.4,4.9,1.9,7.5c0.5,2.6,1.2,5.1,1.9,7.6c1.3,4.2,2.6,8.6,3.9,13s2.6,9.1,4,13.4
                c0.5,1.7,0.9,3.4,1.1,5.1c0.2,1.7,0.6,3.4,1,5.1l0.2,0.8c1,3.5,3.3,11.6,2.4,15.5c-1.3,6.4-3.3,12.6-5.8,18.5l-11.7,21.6l-0.1,0.2
                c-2.7,6.1-4.6,12.8-6.6,20.2c-1.6,5.9,0,12.1,1.2,16.6l0.2,0.8c0,0.5-0.1,1-0.2,1.5v0.2c-0.4,2.8-0.3,5.6,0.5,8.2
                c5.2,15.9,13.7,32.9,26.2,51.8c0.8,1.1,1.5,2.3,2.3,3.6c3.3,5.2,7,11.1,11.7,14.4c4.4,2.9,9.2,5.1,14.3,6.5
                c1.6,0.4,3.2,0.7,4.9,0.8c1.1,0.1,2.1,0.2,3.2,0.4h0.2h2.9c3.4,0.6,6.8,0.8,10.2,0.7l0.1-0.1h1.5c13.3,0,30.1-3.4,37.6-13
                c2.7-3.2,4.9-6.7,6.7-10.5c1.8-4.3,3.2-8.8,4.4-13.3c0.3-0.9,0.5-1.9,0.8-2.8l0.5-3.7c1.4-4.9,2.5-9.9,3.7-14.8
                c2.1-9.2,4.2-17.9,7.5-25.9c5.3-12.6,9.6-25.5,13-38.7c0.9-3.4,1.8-12.9-0.8-17.1C508.1,173.4,508.6,172.1,509.3,171z M485.7,154.6
                L485.7,154.6C485.7,154.6,485.7,154.6,485.7,154.6C485.7,154.6,485.7,154.6,485.7,154.6z M477.3,126.3L477.3,126.3
                c0.4,0,0.9,0.1,1.3,0.2c3.5,0.9,6.3,5.1,5,10.5c-1.3,5.3-3.6,10.2-5.9,14.8c-1,2-2,4.1-2.9,6.2c-0.4,0.9-0.7,1.9-1,2.9
                c-0.3,1.4-0.9,2.7-1.5,3.9c-1.9-0.3-5.1-0.6-6.6-0.3c-1.2,0.2-2.5,0.4-3.7,0.5c-1.6,0.1-3.2,0.3-4.7,0.7c-0.5,0.1-1,0.2-1.6,0.4
                s-1.3,0.4-2,0.5c0.5-2.1,1.1-4.1,1.9-6.1c0.3-1,0.7-1.9,1-2.9c0.8-2.3,1.4-4.6,2-6.8c1.3-4.7,2.5-9.2,4.8-13
                c0.9-1.3,1.8-2.6,2.9-3.8c0.6-0.7,1.2-1.5,1.8-2.3C469.4,130.1,473.5,126.3,477.3,126.3z M471.7,176.3c-0.2,2.6-1.6,3.8-3.7,5.4
                c-5.1,3.9-10.7,7.8-17.5,9.5c-2.8,0.7-8.6-2.7-9.4-3.8c-0.3-0.4-0.5-0.9-0.7-1.4c-0.2-0.5-0.4-1-0.6-1.4c-0.6-1.3-0.9-2.6-0.8-4
                l0.1-0.2h0c1-0.4,2.1-0.7,3.2-0.8c1.1-0.1,2.2-0.3,3.3-0.7c3.8-1.2,8.4-2.6,13.8-4c0.8-0.2,1.7-0.3,2.6-0.3c1.6,0,3.1-0.3,4.6-0.8
                C469.7,173.8,470.2,174.4,471.7,176.3z M462.6,132.3c0-0.1,0.1-0.2,0.1-0.3c0,0,0.1,0,0.1,0C462.7,132.1,462.7,132.2,462.6,132.3z
                M366.4,206.3l0.1-0.2c0.3-1.1,0.6-2.2,0.7-3.3c0.1-1,0.3-1.9,0.7-2.8c2.4-5.9,5.2-11.6,8.5-17c4.3-7.3,7.9-15,10.6-23
                c0.2-0.4,0.4-0.8,0.4-1.2c0.2-0.7,0.5-1.4,0.7-2.2c0.4-1.6,0.7-3.2,0.8-4.8c0.1-1.1,0.2-2.2,0.5-3.3c0.9-3.8-0.4-8.5-1.1-11.3
                l-0.1-0.4c-0.7-2.7-1.3-5.5-1.8-8.1c-0.7-3.8-1.6-7.5-2.8-11.2c-0.7-2.2-1.3-4.5-1.7-6.8c-0.5-2.5-1.1-5-1.9-7.4
                c-1.6-4.9-3.2-10.3-4.6-15.3s-2.9-10.2-4.5-15.1c-0.4-1.4-0.8-2.8-1-4.2c-0.3-1.6-0.7-3.1-1.1-4.7l-4.8-14.6
                c-0.4-1.5-0.7-3.1-0.8-4.7c-0.1-1.5-0.3-2.9-0.6-4.3l-0.1-3.1V37c-2-8.5-0.5-20.1,3.3-25.3c0.5-0.5,1.1-0.9,1.8-1.2
                c0.5-0.2,1-0.5,1.5-0.8c2.9,0.1,3.8,1.3,5.4,3.5l0.3,0.4c3.3,4.6,4.9,9.9,6.7,15.9c0.6,2,1.2,4,1.9,6.1c3,9,5.6,18.6,8.2,27.9
                c3.3,11.9,6.7,24.3,10.8,35.5c0.4,1.1,0.8,2.2,1.2,3.3c2.8,8.1,6,17.3,15,19.7c4.6,1.2,8.6-1.6,10.8-4.6c3.6-4.9,5.3-9.8,7.4-15.5
                c0.5-1.3,1-2.7,1.5-4.2c3.4-9,6-18.6,8.5-27.9c1.4-5.3,2.9-10.8,4.5-16.1c0.3-1.1,0.6-2.3,0.7-3.5c0.1-0.9,0.3-1.9,0.5-2.8
                c0.6-2.1,1.2-4.3,1.8-6.5c1.4-5.9,3.2-11.6,5.4-17.2c2.2-5.2,5.2-10.8,10.6-12.8c1-0.4,3.7-1.4,5.7-0.9c2.4,0.6,4.4,2.1,5.6,4.2
                c3.2,5.6,1.4,15,0,20c-0.6,2.3-1.1,4.5-1.5,6.6c-0.5,2.6-1.1,5.2-1.8,7.7c-3.5,10.7-6.6,22.1-9.5,33.1c-2.9,11-5.9,22.4-9.5,33.1
                l-3.6,15.9c-0.9,2.5-1.9,5-3.1,7.5c-0.9,1.9-1.8,3.8-2.6,5.8c-0.7,2-1.3,4.1-1.7,6.2c-0.4,1.9-0.8,3.7-1.5,5.6l-0.5,1.3
                c-1.6,4-2.8,8.1-3.6,12.4c-1.3,0.4-2.7,0.8-4.1,1c-1.2,0.2-2.6,0.5-3.7,0.8s-2.4,0.7-3.5,1c-4.2,1-8.3,2.3-12.3,3.9
                c-15.4,6.6-29.2,15.8-39.5,23c-1.8,1.2-3.7,2.4-5.6,3.5c-2.8,1.6-5.5,3.3-8,5.3C366,207.4,366.2,206.8,366.4,206.3z M493.1,207.8
                c-2.4,5.8-4.5,11.8-6.5,17.7c-1.1,3.1-2.2,6.4-3.4,9.5c-2.1,6.1-3.8,12.3-5.1,18.6c-0.9,3.9-1.8,7.9-2.9,11.8
                c-0.3,1-0.4,2.1-0.5,3.2c-0.1,0.9-0.2,1.7-0.4,2.6l-0.5,1.7c-3,10.5-5.8,20.4-13.2,25.8c-3.6,2.6-8.2,4.1-12.4,5.2l-5.8,0.5h-0.3
                c-3,0.6-6,0.7-9,0.4h-4.8v0c-2.7-0.5-5.3-0.7-8-0.8c-3.1-0.1-6.1-0.5-9.1-1.3c-10.4-3.4-15.1-11.1-20.5-20.1
                c-0.4-0.8-0.9-1.4-1.4-2.4s-1.2-1.8-1.8-2.7s-1.2-1.7-1.8-2.6c-2.4-4.1-4.6-8.4-6.5-12.8c-1.3-2.9-2.7-5.8-4.2-8.7
                c-0.6-1.2-1.4-2.4-2.2-3.6c-1-1.4-1.8-2.9-2.6-4.5c-3.6-8.1-6.6-17.4-2.3-24.5c2.7-4.4,6.9-7,11.3-9.6c1.8-1.1,3.6-2.2,5.4-3.5
                c11.3-7.9,23.1-14.9,35.3-21.2c2.4-1.1,4.8-2,7.3-2.7l1.9-0.6c-0.1,0.7,0,1.5,0.2,2.2c0.8,3.5,2.5,6.7,4.8,9.3
                c0.8,0.7,1.7,1.4,2.8,1.8c0.4,0.2,0.8,0.4,1.2,0.6c2.5,1.6,5.2,2.8,8,3.6c5.8,1.5,13.1-1.8,18.1-4.8c0.3-0.2,0.7-0.4,1-0.5
                c-2.8,4.3-8,8-15.5,11.1c-1.7,0.7-3.5,1.2-5.2,1.7c-2.9,0.7-5.6,1.8-8.2,3.2c-4.2,2.7-8.1,5.8-11.8,9.2c-2.3,2-4.7,4.1-7.1,6
                l-3.3,3.5c-2.2,2.2-4.6,4.2-7.2,6c-0.8-0.4-1.7-0.5-2.6-0.3c-1,0.1-1.9,0.5-2.6,1.3c-0.1,0.1-0.2,0.2-0.3,0.3l-0.8,0.6l0,0.9
                c-0.1,3.2,2.5,6.5,4.9,9.4c0.9,1,1.7,2,2.1,2.8c0.2,0.4,0.4,0.8,0.7,1.3c0.8,1.4,1.6,3.2,3.8,4c2,1.2,4.1-0.2,4.8-0.7l0.9-0.6
                l0.2-0.8c0.9-4.1-1.4-7.1-3.3-9.6c-0.3-0.5-0.7-0.9-1-1.3c2-1.4,3.9-3,5.7-4.7l3.5-3.7c1-0.8,1.9-1.7,2.8-2.6
                c0.6-0.6,1.1-1.2,1.7-1.7c4.2-3.8,8.8-7.3,13.6-10.4c1.9-1.3,4-2.3,6.2-3.1l3.2-0.7l0.3-0.1c0.5-0.2,1-0.4,1.3-0.6s0.6-0.3,0.9-0.4
                c1.1,2,2.8,3.6,4.9,4.5c4.9,2.4,12.9,3.2,17.3,0.3c4.1-2.7,6.9-6.8,9.7-10.7l0.9-1.3c1.5-2.1,3.1-4.3,4.6-6.4
                c2.7-3.6,5.4-7.4,7.9-11.1c0.2-0.3,0.4-0.7,0.6-1C497.7,196.6,495.3,202.5,493.1,207.8z M502.2,167.5c-3.2,7.6-8,14.5-12.6,21.2
                c-1.4,1.9-2.7,3.9-4,5.8l-1.6,2.4c-2.8,4.3-5.7,8.7-9.2,12.2c-3.1,3.1-6.6,5.8-10.9,4.3c-1.1-0.4-2-1.1-2.8-2
                c0.5-0.3,1-0.7,1.5-0.9c0.8-0.4,1.5-0.8,2.1-1.4c4-3.8,7.4-8.2,10-13.1c0.8-1.7,1.3-3.5,1.6-5.4c0.3-2.4,1.2-4.7,2.5-6.8
                c1.2-1.8,2-3.7,2.5-5.8c0.4-1.8,0-3.7-1-5.3c-0.3-0.5-0.5-1-0.6-1.6c0.4-3,3.4-7.9,5.2-10.4c1.7-2.2,4-4,6.6-5.1
                c0.5-0.2,1-0.3,1.5-0.3c0.9-0.1,1.9-0.3,2.8-0.7c2.7,0,4.5,0.6,5.5,1.6s1.6,2.9,1.6,5.5C503.1,163.7,502.8,165.6,502.2,167.5z"
                        style={{'fill': 'rgb(2, 102, 112)'}}></path>
                </g>
            </svg>
            </Link>
            <div className="mt-4 w-full flex flex-col md:flex-row justify-between">
                <div className="mt-4 w-full md:w-1/2 lg:w-1/3 flex flex-col sm:flex-row justify-between text-bluegreen text-md font-semibold">

                    <ul className="list-none pt-2 md:pt-0">
                        <LinkRender label='The Big Picture' link='/about/big-picture' />
                        <LinkRender label='About the Initiative' link='/about/initiative' pad={true} />
                        <LinkRender label='About Our Community' link='/about/community' pad={true} />
                    </ul>
                    <ul className="list-none pt-2 md:pt-0">
                        <LinkRender label='Media Archive' link='/archive' />
                        <LinkRender label='Studios' link='/studios' pad={true} />
                    </ul>
                    <ul className="list-none pt-2 md:pt-0">
                        <LinkRender label='News' link='/news' />
                        <LinkRender label='Events' link='/events' pad={true} />
                        <LinkRender label='Get Involved' link='/get-involved' pad={true} />
                    </ul>
                    {/* <ul className="list-none pt-2 md:pt-0">
                        <LinkRender label='Get Involved' link='/get-involved' pad={true} />
                        
                        <li className='pt-2'>
                            <Link href='/' passHref>
                            Facebook
                            </Link>
                        </li>
                        <li className='pt-2'>
                            <Link href='/' passHref>
                            Twitter
                            </Link>
                        </li>
                    </ul> */}
                </div>
                <div className="flex flex-row mt-7 lg:mt-0 w-1/3 xl:w-1/4 items-center justify-between list-none">
                    <svg viewBox="0 0 75 26.578" width="75" height="26.578" className='flex-shrink-0'>
                        <title>Engagement Lab logo</title>
                        <path fill="#F6A536" fillRule="evenodd"
                            d="M 73.222 24.141 C 73.222 23.798 72.916 23.456 72.305 23.456 L 70.336 23.456 L 70.336 24.826 L 72.305 24.826 C 72.906 24.826 73.222 24.484 73.222 24.141 Z M 72.967 21.4 C 72.967 21.057 72.662 20.715 72.06 20.715 L 70.336 20.715 L 70.336 22.085 L 72.111 22.085 C 72.682 22.066 72.967 21.733 72.967 21.4 Z M 74.619 24.141 C 74.619 25.169 73.844 26.197 72.305 26.197 L 68.909 26.197 L 68.909 19.344 L 72.06 19.344 C 73.6 19.344 74.364 20.372 74.364 21.41 C 74.364 21.85 74.221 22.281 73.946 22.644 C 74.395 23.035 74.619 23.593 74.619 24.141 Z"
                            clipRule="evenodd"></path>
                        <path fill="#00AB9E" fillRule="evenodd"
                            d="M 70.932 14.166 L 71.764 11.799 L 72.596 14.166 L 70.932 14.166 Z M 73.613 17.06 L 75 17.06 L 72.457 9.827 L 71.071 9.827 L 68.528 17.06 L 69.915 17.06 L 70.423 15.613 L 73.105 15.613 L 73.613 17.06 Z"
                            clipRule="evenodd"></path>
                        <path fill="#F72923" fillRule="evenodd"
                            d="M 74.239 5.791 L 74.239 7.161 L 69.289 7.161 L 69.289 0.309 L 70.637 0.309 L 70.637 5.791 L 74.239 5.791 Z"
                            clipRule="evenodd"></path>
                        <path fill="#000" fillRule="evenodd"
                            d="M 25.546 26.197 C 25.087 26.197 24.676 26.107 24.323 25.928 C 23.936 25.726 23.634 25.43 23.397 25.023 C 23.082 24.46 22.948 23.683 22.948 22.425 C 22.948 19.557 22.725 17.709 22.285 16.931 C 22.111 16.617 21.969 16.494 21.172 16.48 L 21.172 26.153 L 19.036 26.153 L 19.036 14.395 L 20.994 14.395 C 21.505 14.395 22.097 14.412 22.653 14.611 C 23.307 14.848 23.806 15.282 24.179 15.938 C 24.824 17.092 25.099 19.032 25.099 22.425 C 25.099 23.45 25.212 23.872 25.306 24.045 C 25.318 24.067 25.327 24.084 25.33 24.088 C 25.331 24.089 25.367 24.114 25.546 24.114 C 25.678 24.114 25.678 24.114 25.719 24.026 C 25.861 23.739 25.931 23.202 25.931 22.425 C 25.931 19.032 26.206 17.092 26.852 15.939 C 27.201 15.294 27.71 14.847 28.362 14.611 C 28.935 14.412 29.519 14.395 30.021 14.395 L 31.98 14.395 L 31.98 26.153 L 29.843 26.153 L 29.843 16.479 C 29.098 16.493 28.925 16.6 28.729 16.934 C 28.295 17.702 28.083 19.499 28.083 22.425 C 28.083 23.576 27.955 24.343 27.669 24.911 C 27.469 25.327 27.171 25.658 26.807 25.865 C 26.45 26.084 26.024 26.197 25.546 26.197 Z M 22.464 4.848 C 22.464 1.878 24.348 0 27.299 0 C 30.25 0 31.934 1.639 31.934 4.438 L 31.934 4.575 L 29.733 4.575 L 29.733 4.404 C 29.733 2.97 28.9 2.014 27.299 2.014 C 25.648 2.014 24.665 3.243 24.665 4.746 L 24.665 7.682 C 24.665 9.321 25.581 10.414 27.299 10.414 C 29.05 10.414 29.733 9.543 29.733 8.109 L 29.733 7.989 L 26.899 7.989 L 26.899 6.009 L 31.934 6.009 L 31.934 7.989 C 31.934 10.84 30.317 12.428 27.299 12.428 C 24.431 12.428 22.464 10.755 22.464 7.58 L 22.464 4.848 Z M 39.902 7.457 L 38.246 2.163 L 38.045 2.163 L 36.622 7.457 L 39.902 7.457 Z M 39.92 0.309 L 43.401 12.111 L 41.124 12.111 L 40.421 9.48 L 36.102 9.48 L 35.399 12.111 L 33.122 12.111 L 36.37 0.309 L 39.92 0.309 Z M 44.619 4.848 C 44.619 1.878 46.562 0 49.606 0 C 52.651 0 54.388 1.639 54.388 4.438 L 54.388 4.575 L 52.117 4.575 L 52.117 4.404 C 52.117 2.97 51.257 2.014 49.606 2.014 C 47.904 2.014 46.889 3.243 46.889 4.746 L 46.889 7.682 C 46.889 9.321 47.835 10.414 49.606 10.414 C 51.412 10.414 52.117 9.543 52.117 8.109 L 52.117 7.989 L 49.194 7.989 L 49.194 6.009 L 54.388 6.009 L 54.388 7.989 C 54.388 10.84 52.72 12.428 49.606 12.428 C 46.648 12.428 44.619 10.755 44.619 7.58 L 44.619 4.848 Z M 65.002 0.309 L 65.002 2.332 L 58.16 2.332 L 58.16 5.148 L 64.536 5.148 L 64.536 7.171 L 58.16 7.171 L 58.16 10.088 L 65.102 10.088 L 65.102 12.111 L 55.964 12.111 L 55.964 0.309 L 65.002 0.309 Z M 9.037 0.309 L 9.037 2.332 L 2.196 2.332 L 2.196 5.148 L 8.572 5.148 L 8.572 7.171 L 2.196 7.171 L 2.196 10.088 L 9.137 10.088 L 9.137 12.111 L 0 12.111 L 0 0.309 L 9.037 0.309 Z M 42.54 14.395 L 42.54 16.418 L 35.698 16.418 L 35.698 19.234 L 42.074 19.234 L 42.074 21.257 L 35.698 21.257 L 35.698 24.174 L 42.64 24.174 L 42.64 26.197 L 33.503 26.197 L 33.503 14.395 L 42.54 14.395 Z M 65.441 14.825 L 65.441 16.839 L 61.846 16.839 L 61.846 26.578 L 59.608 26.578 L 59.608 16.839 L 56.014 16.839 L 56.014 14.825 L 65.441 14.825 Z M 0 21.628 L 14.848 21.628 L 14.848 19.344 L 0 19.344 L 0 21.628 Z M 54.061 14.776 L 51.972 14.776 L 51.972 24.576 L 51.927 24.57 C 51.424 24.497 51.1 24.193 50.875 23.582 C 50.614 22.871 50.536 21.89 50.452 20.851 L 50.437 20.665 C 50.332 19.311 50.223 17.912 49.734 16.805 C 49.443 16.157 49.054 15.675 48.548 15.335 C 48.064 15.001 47.449 14.813 46.721 14.776 L 44.543 14.776 L 44.543 26.578 L 46.632 26.578 L 46.632 16.775 L 46.684 16.781 C 46.964 16.811 47.193 16.895 47.377 17.03 C 47.593 17.203 47.765 17.457 47.916 17.819 C 48.19 18.554 48.256 19.56 48.325 20.624 L 48.335 20.772 C 48.403 21.975 48.489 23.472 48.983 24.595 C 49.273 25.241 49.652 25.713 50.143 26.038 C 50.62 26.354 51.205 26.535 51.88 26.577 L 54.061 26.578 L 54.061 14.776 Z M 20.558 0.309 L 18.469 0.309 L 18.469 10.109 L 18.425 10.103 C 17.922 10.03 17.597 9.726 17.372 9.115 C 17.112 8.404 17.033 7.423 16.95 6.384 L 16.935 6.198 C 16.83 4.844 16.721 3.445 16.231 2.338 C 15.94 1.69 15.551 1.208 15.045 0.868 C 14.561 0.534 13.946 0.346 13.219 0.309 L 11.04 0.309 L 11.04 12.111 L 13.13 12.111 L 13.13 2.308 L 13.182 2.314 C 13.461 2.344 13.691 2.428 13.874 2.563 C 14.09 2.736 14.263 2.99 14.414 3.352 C 14.687 4.087 14.753 5.093 14.823 6.157 L 14.832 6.305 C 14.901 7.508 14.986 9.005 15.48 10.128 C 15.771 10.774 16.15 11.246 16.64 11.571 C 17.117 11.887 17.702 12.068 18.378 12.11 L 20.558 12.111 L 20.558 0.309 Z"
                            clipRule="evenodd"></path>
                    </svg>
                    <Image id="ldpni-logo" alt="Louis D. Brown Peace Institute (LDBPI) logo" imgId='tngvi/logos/ldpi'
                        width={86} className='aspect-[3/2.8]' />
                    <Image id="mgh-logo" alt="MGH Center for Gun Violence Prevention logo" imgId='tngvi/logos/mgh-cgvp'
                        width={89} className='aspect-[3/2]' />
                </div>
            </div>
        </nav>
        </div>
    );
  }
}

export default Footer;
