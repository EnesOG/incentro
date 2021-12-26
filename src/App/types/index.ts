import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputElementType = Omit<
DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
"ref"
>

export interface Incentronaut {
  initials: string;
  middle_name?: string;
  last_name: string;
  postal_code: string;
  street_name:string;
  city: string;
  house_number: number;
  email: string
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Properties {
  osm_id: number;
  country: string;
  city: string;
  countrycode: string;
  postcode: string;
  locality: string;
  type: string;
  osm_type: string;
  osm_key: string;
  housenumber: string;
  street: string;
  district: string;
  osm_value: string;
  state: string;
}

export interface Feature {
  geometry: Geometry;
  type: string;
  properties: Properties;
}

export interface AddressResponse {
  feature?: Feature;
  features: Feature[];
  type: string;
}