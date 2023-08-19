

describe('API Tests', () => {

  it('1', () => {

        let i =0
        let count = 0
  
        cy.request({
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        url: 'http://api.zippopotam.us/de/bw/stuttgart'
            }).then ((response) => {
  
              while(i < (response.body.places.length))
                {
                    if(response.body.places[i]["post code"]== 70597 && response.body.places[i]["place name"] == "Stuttgart Degerloch")
                    {        
                        count++
                    }     
                    i++;
                } 
                // Verify that the response status code is 200 and content type is JSON.
                expect(response.status).to.be.eq(200, 'Verify that the response status code is 200')

                // Verify content type is JSON.
                expect(response.headers['content-type']).to.be.eq('application/json', 'Verify the content type is JSON.')
                
                //Verify that the response time is below 1s.
                expect(response.duration).not.to.be.above(1000, 'Verify that the response time is below 1s.')
                
                // Verify in Response - That "country" is "Germany" 
                expect(response.body.country).to.be.eq('Germany', 'Verify in Response - That "country" is "Germany"')
                
                // Verify in Response - "state" is "Baden-Württemberg".
                expect(response.body.state).to.be.eq('Baden-Württemberg', 'Verify in Response - That "state" is "Stuttgart Degerloch"')
                
                // Verify in Response - For Post Code "70597" the place name has "Stuttgart Degerloch".
                expect(count).to.be.above(0, 'For Post Code "70597" the place name has "Stuttgart Degerloch".')

             });
          
      })     
*


      it('2', () => {

        let rowsLength

        cy.task('readXlsx', { file: 'cypress/fixtures/Country_PostalCode_PlaceName.xlsx', sheet: "Data" }).then((rows) => {
          rowsLength = rows.length;
          cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
        })
       
        cy.fixture('xlsxData').then((data) => {
          for (let i = 0; i < rowsLength; i++) {
              
        cy.request({
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        url: 'http://api.zippopotam.us/'+data.rows[i].Country_row+'/'+data.rows[i].Postal_Code_row
            }).then ((response) => {
              
              // Verify that the response status code is 200 
              expect(response.status).to.be.eq(200, 'Verify that the response status code is 200')

              // Verify content type is JSON.
              expect(response.duration).not.to.be.above(1000, 'Verify that the response time is below 1s.')

              // Verify in Response - "Place Name" for each input "Country" and "Postal Code".
              expect(response.body.places[0]["place name"]).to.be.eq(data.rows[i].Place_Names_row, 'Verify in Response - "Place Name" for each input "Country" and "Postal Code".')
             
            });   
            
            }  
            })
          
      })     
    
    })