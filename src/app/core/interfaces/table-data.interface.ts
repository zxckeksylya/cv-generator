import { TableItem } from './table-item.interface';
import { TableParamsOfData } from './table-params-of-data.interface';

export interface TableData {
  paramsOfDataObjects: TableParamsOfData[];
  listOfTableItem: TableItem[];
}
