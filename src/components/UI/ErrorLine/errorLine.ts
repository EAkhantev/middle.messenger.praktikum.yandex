import './errorLine.scss';
import Block from '../../../utils/Block';
import ErrorLineTemplate from './errorLine.hbs?raw';

import { ErrorLineProps } from '../../../interfaces/component.interfaces';

export default class ErrorLine extends Block {
  constructor(props: ErrorLineProps) {
    super(props);
  }

  render() {
    return ErrorLineTemplate;
  }
}
