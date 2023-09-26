import {ChildEntity} from "./child.entity";
//import { ChildEntity } from '../child/index';
import {GiftEntity} from "../gift";

export interface ListChildrenRes {
    giftsList: GiftEntity[];
    childrenList: ChildEntity[];
}

export type CreateChildReq = Omit<ChildEntity, 'id'>;

export interface SetGiftForChildReq {
    giftId: string;
}
