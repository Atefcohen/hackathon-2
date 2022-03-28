const knex = require('knex')


const db = knex({
    client:'pg',
    connection:{
        host: '127.0.0.1',
        port:'5432',
        user:'postgres',
        password:'123456',
        database: 'RnadomVideos'

    }
})
const queryLauncher=  async ()=> db 
.select('URL')
.from('Videos')
.then(data =>{
    return data;
})
.catch(e => {
    console.log(e)
})
 
module.exports ={
    queryLauncher
}
