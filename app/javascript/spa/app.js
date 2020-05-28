"use strict";

import Utils from './services/Utils.js'

import Navbar from './views/components/Navbar'

import Error404 from './views/pages/Error404.js'
import Home from './views/pages/Home.js'
import NewInterview from './views/pages/NewInterview.js';
import EditInterview from './views/pages/EditInterview.js';
import Participants from './views/pages/Participants.js'


const routes = {
    // '/' : Home,
    '/' : Error404,
    '/interviews/new' : NewInterview,
    '/interviews/:id/edit' : EditInterview,
    '/participants' : Participants
};

const router = async () => {

    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');

    header.innerHTML = await Navbar.render();
    await Navbar.after_render();

    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);