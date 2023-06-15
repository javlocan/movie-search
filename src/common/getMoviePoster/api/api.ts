
export const getMoviePoster = async (query: string): Promise<any> => {
  // LA QUERY STANDARD PIDE LAS NOVEDADES
  console.log('QUERY:', query)

  return await fetch('https://customsearch.googleapis.com/customsearch/v1' + query,
    {
      method: 'GET',
      headers: {

        'Access-Control-Allow-Origin': 'true'
      }
    }).then(async res => await res.json())
}
