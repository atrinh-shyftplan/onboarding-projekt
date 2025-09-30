import { dashboardPages } from './data/dashboards.js';
import { milestonePages } from './data/milestones.js';
import { presentationPages, presentationDefinitions } from './data/presentations.js';
import { specialPages } from './data/special-pages.js';
import { toolPages } from './data/tools.js';

export let pageData = {
    ...dashboardPages,
    ...milestonePages,
    ...presentationPages,
    ...specialPages,
    ...toolPages
};

export let presentations = {
    ...presentationDefinitions
};