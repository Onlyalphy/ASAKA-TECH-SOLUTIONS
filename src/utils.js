// Utility function to create page URLs
export const createPageUrl = (pageName) => {
  if (pageName === "Home") {
    return "/";
  }
  return `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
};

