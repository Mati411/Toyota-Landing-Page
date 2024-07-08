export interface ICar {
  id?: number;
  name?: string;
  segment?: string;
  year?: number;
  price?: number;
  thumbnail?: string;
  photo?: string;
  title?: string;
  description?: string;
  model_features?: ModelFeature[];
  model_highlights?: ModelHighlight[];
}

export class Car implements ICar {
  constructor(
    public id?: number,
    public name?: string,
    public segment?: string,
    public year?: number,
    public price?: number,
    public thumbnail?: string,
    public title?: string,
    public description?: string,
    public model_features?: ModelFeature[],
    public model_highlights?: ModelHighlight[]
  ) {}
}

export interface ModelFeature {
  name?: string;
  description?: string;
  image?: string;
}

export interface ModelHighlight {
  title?: string;
  content?: string;
  image?: string;
}
