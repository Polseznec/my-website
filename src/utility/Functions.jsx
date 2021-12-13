// Utility Functions

// Translate Object in to one String
export const tClassName = (...args) => {
  let string = "";

  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      if (string.length > 0) string += " ";

      string += args[i];
    }
  }

  return string;
};
