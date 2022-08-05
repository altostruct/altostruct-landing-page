declare module "*.json" {
  const JSONPrimitive = string | number;
  const JSON = Record<JSONPrimitive, JSON>;
  const content: JSON[];
  export = content;
}
