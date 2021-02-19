
export const getGifs = async ( category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=fb3lE73znlU0yeGyQBxzidd6tSSFJDOf`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    //objeto que cogemos lo que necesitamos de la data
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
   
    return gifs;
  };

