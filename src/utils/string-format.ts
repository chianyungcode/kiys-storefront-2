export const capitalizationFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const convertNameToSlug = (name: string) => {
  const slug = name.replace(/\s+/g, "-").toLowerCase();

  return slug;
};
