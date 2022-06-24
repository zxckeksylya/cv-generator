import { TypeOfAlertConstants } from '../constants/type-of-alert.constants';

export interface AlertNotification {
  typeOfAlert: TypeOfAlertConstants;
  message: string;
  title: string;
}
