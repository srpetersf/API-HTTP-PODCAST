import fs from 'fs';
import path from 'path';

interface Podcast {
    podcastName: string;
    episode: number;
    videoID: string;
    categorias: string;    
}

const pathData = path.join(__dirname, "../repositories/podcasts.json"); 

export const repositoryPodcast = async (): Promise<Podcast[]> => {
    const rawdata = fs.readFileSync(pathData, 'utf-8');
    const jsonFile = JSON.parse(rawdata);
    return jsonFile;
};