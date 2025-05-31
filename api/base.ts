import Airtable from "airtable";

const api_key = "pat0KKcyJgleQlGLT.353a85aee1992cb1a59a857748c10f7575b814898579e7c62cae0d21f6d44c1f";
export const base_afwn_summit = new Airtable({ apiKey: api_key}).base('appXWHoec0zlH347C');
export const base_afwn_agency = new Airtable({apiKey:api_key}).base("app87zsRRFeIm8R1V");
export const base_afwn_emerging_fashion_designer = new Airtable({apiKey:api_key}).base("appHBLohvMg8Da6RI");
export const base_afwn_designers = new Airtable({apiKey:api_key}).base("apptqsZ3nRotqZuSq");
export const base_afwn_partnership = new Airtable({apiKey:api_key}).base("appvXZGF5yqRfpIJ6");
export const base_afwn_press_media = new Airtable({apiKey:api_key}).base("appcLL4Ow7MPuMaO6");
export const base_afwn_reserve_seat = new Airtable({apiKey:api_key}).base("appj45YR2AgbyYu4m");
export const base_afwn_contacts = new Airtable({apiKey:api_key}).base("appayXLBnIapqXhOc");