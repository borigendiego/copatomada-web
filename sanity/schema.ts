import { type SchemaTypeDefinition } from 'sanity'
import pet from './schemas/pet';
import home from './schemas/home';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet, home],
}
