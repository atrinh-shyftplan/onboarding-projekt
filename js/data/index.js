import { dashboardPages } from './dashboards.js';
import { milestonePages } from './milestones.js';
import { presentationPages, presentationDefinitions } from './presentations.js';
import { specialPages } from './special-pages.js';
import { toolPages } from './tools.js';

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