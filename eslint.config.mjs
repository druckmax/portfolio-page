import react from "@eslint-react/eslint-plugin";
import prettier from "eslint-config-prettier";

export default [
  {
    files: ["src/**/*.{js,jsx}"], // <-- specify files here
    plugins: { react },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  prettier,
];
