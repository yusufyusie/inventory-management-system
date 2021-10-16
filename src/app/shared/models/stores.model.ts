import { StoreItemDTO } from "./store-items.model";

export interface StoreHeaderCreationDTO {
  supplierId: string;
  reciverId: string;
  date: Date;
  graNo: string;
  pox: string;
  checkedBy: string;
  acceptedBy: string;
  inspectedBy: string;
  storeItemsIds: StoreItemDTO[];
}
export interface StoreHeaderDTO {
  id: number;
  supplierId: string;
  reciverId: string;
  date: Date;
  graNo: string;
  pox: string;
  checkedBy: string;
  acceptedBy: string;
  inspectedBy: string;
}

export interface StoreHeaderPostGetDTO {
  storeItems: StoreItemDTO[];
}

export interface StoreHeaderPutGetDTO {
  storeHeader: StoreHeaderDTO;
  selectedItems: StoreItemDTO[];
  nonSelectedItems: StoreItemDTO[];
}

export interface storeCreate {
  supplierId: string;
  graNo: string;
  storeItems: storeItem[];
}

export interface storeItem {
  name: string;
  itemSpecification: string;
  unit: string;
  qtyOrdered: string;
  qtyRecived: string;
  unitPrice: string;
}

export interface StoreItems {
  name: string;
  itemSpecification: string;
  unit: string;
  qtyOrdered: string;
  qtyRecived: string;
  unitPrice: string;
  totalPrice: string;
}
