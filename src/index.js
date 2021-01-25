import { useElement } from '@nebula.js/stardust';
import properties from './object-properties';
import data from './data';

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      console.log(element, 'element');
      element.innerHTML = '<div>Hello!</div>'; // eslint-disable-line
    },
  };
}
