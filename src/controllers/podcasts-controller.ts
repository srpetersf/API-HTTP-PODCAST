import {IncomingMessage, ServerResponse} from 'http';
import {servicesListEpisodes} from "../services/list-episodes-service";

export const getListEpisodes = async (
    req: IncomingMessage, res: ServerResponse) => {

        const content = await servicesListEpisodes();   

    res.writeHead(200,{'content-Type': "application/json"});
    res.end (JSON.stringify(content));
};