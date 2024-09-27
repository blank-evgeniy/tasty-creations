type Mode = Record<string, string | boolean>;

export const classNames = (
  cls: string,
  mods: Mode = {},
  additional: (string | undefined)[] = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([__className, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(" ");
};
