import { translations } from "./de";

export const t = (key: string): string => {
  const keys = key.split(".");
  // TODO: In real world, we should use a better type for the translations object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations;
  
  for (const k of keys) {
    if (value[k] === undefined) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    value = value[k];
  }
  
  return value;
};