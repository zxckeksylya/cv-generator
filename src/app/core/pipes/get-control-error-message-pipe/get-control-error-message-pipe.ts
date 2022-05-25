import { Pipe, PipeTransform } from '@angular/core';
import { I18nKeyMessageConfig } from '../../interfaces/n-key-message-config.interface';

@Pipe({
  name: 'getControlErrorMessage',
})
export class GetControlErrorMessagePipe implements PipeTransform {
  public transform(
    controlErrors: Record<string, any> | null,
    errorsMap: Record<string, I18nKeyMessageConfig>,
  ): I18nKeyMessageConfig | null {
    if (!controlErrors) {
      return {
        i18nKey: '',
      };
    }

    const key = Object.keys(controlErrors || {})[0];
    return errorsMap[key] || {};
  }
}
