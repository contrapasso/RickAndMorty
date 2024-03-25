import { ICharacter, ILocation, IOrigin } from "./interfaces/ICharacter";

export class Character implements ICharacter {
  constructor(
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: IOrigin,
    location: ILocation,
    image: string,
    episode: Array<string>,
    url: string,
    created: string
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.type = type;
    this.gender = gender;
    this.origin = origin;
    this.location = location;
    this.image = image;
    this.episode = episode;
    this.url = url;
    this.created = created;
  }
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}