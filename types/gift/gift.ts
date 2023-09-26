import {GiftEntity} from "./gift.entity";

export type CreateGiftReq = Omit<GiftEntity, 'id'>; //create new type, use type GiftEntity but remove id. Type for
// Frontend!!! without id

export interface GetSingleGiftRes {
    gift: GiftEntity;
    givenCount: number;
}
