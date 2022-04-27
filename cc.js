const fs = require("fs");

(async () => {
  const errorText = "####: Что-то пошло не так в функции";

  const componentName = process.argv[2];

  const modifiedComponentName =
    componentName[0] === componentName[0].toUpperCase()
      ? componentName
      : `${componentName[0].toUpperCase}${componentName.slice(1)}`;

  const componentTemplate = `import React from "react";
import styles from "./${modifiedComponentName}.module.scss";

export const ${modifiedComponentName} = () => {
  return (
   
  );
};
`;

  const scssTemplate = `.root {\n\n}`;

  const createDirectory = async () => {
    const directoryPath = `./src/components/${modifiedComponentName}`;

    if (fs.existsSync(directoryPath)) {
      throw new Error("Такой компонент уже существует");
    }

    await fs.mkdir(directoryPath, { recursive: true }, (err) => {
      if (err) {
        throw new Error(errorText);
      }
    });
    return directoryPath;
  };

  createDirectory()
    .then(async (directoryPath) => {
      await fs.writeFile(
        `${directoryPath}/${modifiedComponentName}.js`,
        componentTemplate,
        (err) => {
          if (err) {
            throw new Error(errorText);
          }
        }
      );

      return directoryPath;
    })
    .then(async (directoryPath) => {
      await fs.writeFile(
        `${directoryPath}/${modifiedComponentName}.module.scss`,
        scssTemplate,
        (err) => {
          if (err) {
            throw new Error(errorText);
          }
        }
      );
    });
})();
