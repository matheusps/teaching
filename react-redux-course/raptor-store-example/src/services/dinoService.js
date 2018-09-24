import { request } from 'graphql-request';


class DinoService {

    url = 'https://api-useast.graphcms.com/v1/cjm0tvnbk0ftt01dmsjok76p0/master';

    async getAll () {
        
        const query = `{
            dinosaurs{
                id,
                name,
                price,
                image {
                  url
                }
            }
        }`

        return await request(this.url, query);
    }

}

export default new DinoService();