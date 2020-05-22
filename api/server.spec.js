const supertest = require('supertest')
const server = require('./server')


describe('server testeration', ()=>{
    it('can run the tests', ()=>{
        expect(true).toBeTruthy();
    })

    describe('GET /', ()=>{
        it('should return status code 200', ()=>{
            return supertest(server)
            .get('/')
           // .expect(200) //from supertest
            .then(response =>{
                //from jest
                expect(response.status).toBe(200)
            })
        })
        it('should return api up', ()=>{
            return supertest(server)
            .get('/')
            .then(res =>{
                expect(res.body).toEqual({api:"up"})
                expect(res.body.api).toBeDefined()
                expect(res.body.api).toBe('up')

            })
        })
    })
    describe('GET /boogers', ()=>{
        it('should return array', ()=>{
            return supertest(server)
            .get('/api/boogers')
            .then(res =>{
                expect(Array.isArray(res.body)).toBe(true)
            })
        })
        // it('should return length of array', ()=>{
        //     return supertest(server)
        //     .get('/api/boogers')
        //     .then(res =>{
        //         expect(res.body).toHaveLength(9)
        //     })
        // })
    })
    describe('GET /boogers/:id', ()=>{
        it('should return specific item by id', ()=>{
            return supertest(server)
            .get('/api/boogers/2')
            .then(res =>{
                expect(res.body.id).toBe(2)
            })
        
        })  
        it('should return status 400 when id doesnt exist', ()=>{
            return supertest(server)
            .get('/api/boogers/200')
            .then(res =>{
                expect(res.status).toBe(400)
            })
        })
    })
     describe('POST /', ()=>{
        
        it('should return status code 201',  () =>{
            let data = {
               name: 'new booger'
            }
           return supertest(server)
           .post('/api/boogers')
           .send(data)
           .then(res =>{
            expect(res.status).toBe(201)
           })

           
        
    //     it('should return status code 201', () =>{
           
    //         return supertest(server)
    //         .post('/api/booger')
    //         .send({name: 'New Name'})
    //         .then(res =>{
                
    //             expect(res.status).toBe(201)
    //         })
         })
         it('should return 500 upon failure', ()=>{
             let newPost = {
                 booger : 'booger'
             }
             return supertest(server)
             .post('/api/boogers')
             .send(newPost)
             .then(res =>{
                 
                 expect(res.status).toBe(500)
             })
         })
        
     })
})