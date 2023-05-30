export const searchContentForAttribute = (content: string, attribute: string) => {
  let value: string = "";
  let key = `${attribute}: `;

  content.split(/\r?\n/).forEach((line) => {
    if (line.includes(key)) {
      value = line.replace(key, "");
    }
  });

  return value;
};
