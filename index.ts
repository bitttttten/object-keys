export function objectKeys<O extends Record<string, any>>(
  object: O
): Array<keyof O> {
  return Object.keys(object);
}
