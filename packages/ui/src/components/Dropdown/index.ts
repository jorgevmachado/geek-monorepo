import { DropdownProps, OAppearance } from './interface';
import { OContext } from '../../interfaces';

export { default } from './Dropdown';

export const GenerateDropdowns = (dropdownProps: DropdownProps) => {
   return OAppearance.map((appearance) => {
       return {
           id: appearance,
           key: appearance,
           label: `DROPDOWN ${appearance.toUpperCase()}`,
           contexts: OContext.map((context) => ({
               ...dropdownProps,
               context,
               appearance,
               children: `${context}`,
           }))
       };
   });
};