export type SuperInputType =
  | 'text' | 'number' | 'email' | 'password' | 'date';

export class SuperInput {
  type: SuperInputType = 'text';
  label = '';
  placeholder = '';
  value = '';

  constructor(config: Partial<SuperInput> = {}) {
    Object.assign(this, config);
  }
}

