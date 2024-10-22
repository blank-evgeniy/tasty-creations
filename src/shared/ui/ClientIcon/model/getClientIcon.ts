import { Icons } from "./ClientIcon";

export const getClientIcon = (name?: string) => {
  if (!name || !(name in Icons)) {
    return Icons.default;
  }

  return Icons[name];
};
