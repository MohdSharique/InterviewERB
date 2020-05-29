"use strict";

import Utils from './services/Utils.js'

import Navbar from './views/components/Navbar'

import Error404 from './views/pages/Error404.js'
import Home from './views/pages/Home.js'
import NewInterview from './views/pages/NewInterview.js';
import EditInterview from './views/pages/EditInterview.js';
import Participants from './views/pages/Participants.js'
import ShowInterview from './views/pages/ShowInterview.js'


const routes = {
    '/' : Home,
    // '/' : Error404,
    '/new_interview' : NewInterview,
    '/interviews/:id/edit' : EditInterview,
    '/interviews/:id/show' : ShowInterview,
    '/participants' : Participants
};

const router = async () => {

    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');

    // console.log("check check")

    header.innerHTML = await Navbar.render();
    console.log("check check 2")
    await Navbar.after_render();

    console.log("check check")
    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // debugger
    console.log(parsedURL);
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    
    content.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);