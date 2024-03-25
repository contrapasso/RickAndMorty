import { Constants } from "@/constants/constants"

export class Connector {
  public static GetCharacters = async (filter: string): Promise<Response> => {
    let endPoint: string = `${Constants.RickAndMortyApiUrl}${Constants.GetCharactersEndPoint}`;
    if (filter) {
      endPoint = `${endPoint}?${filter}`;
    }

    const response = await fetch(endPoint);

    return response.json();
  }
}