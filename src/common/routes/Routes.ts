export const HOME : string = '/'
export const NEW_CAMPAIGN  : string = '/new-campaign'
export const OPEN_CAMPAIGN : string = '/open-campaign'
export const JOIN_CAMPAIGN : string = '/join-campaign'

import Home from './Home.svelte'
import NewCampaign  from './NewCampaign.svelte'
import OpenCampaign from './OpenCampaign.svelte'
import JoinCampaign from './JoinCampaign.svelte'

export function Routes() {
    const routes = { }
    routes[HOME         ] = Home
    routes[NEW_CAMPAIGN ] = NewCampaign
    routes[OPEN_CAMPAIGN] = OpenCampaign
    routes[JOIN_CAMPAIGN] = JoinCampaign
    return routes
}