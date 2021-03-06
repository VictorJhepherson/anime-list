export interface Images {
  large: string;
  original: string;
  small: string;
  tiny: string;
  medium?: string;
}

export interface Titles {
  en: string;
  en_jp: string;
  ja_jp: string;
}

export interface Attributes {
  canonicalTitle: string;
  averageRating: string;
  ageRating: string;
  ageRatingGuide: string;
  coverImage: Images;
  posterImage: Images;
  description: string;
  episodeCount: string;
  episodeLength: string;
  status: string;
  startDate: string;
  endDate: string;
  subtype: string;
  showType: string;
  titles: Titles;
  youtubeVideoId: string;
}

export interface Anime {
  id: string;
  type: string;
  attributes: Attributes;
}

export interface IProps {
  anime: Anime;
  key: string;
}

export interface AttributesGenre {
  name: string;
}

export interface Genre {
  id: string;
  attributes: AttributesGenre;
}

export interface IPropsGenre {
  genre: Genre[];
  key: string;
}

export interface CharacterAttributes {
  canonicalName: string;
  description: string;
  image: Images;
}

export interface Character {
  id: string;
  attributes: CharacterAttributes;
}

export interface Characters {
  id: string;
}

export interface IPropsCharacters {
  character: Characters[];
  key: string;
}

export interface IPropsCharacter {
  character: Character;
  key: string;
}
