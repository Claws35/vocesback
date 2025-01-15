import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Historias from "./collections/Historias";
import HistoriasUruguay from "./collections/HistoriasUruguay";
import Paises from "./collections/Paises";
import Categorias from "./collections/Categorias";
import PaisesIngles from "./collections/PaisesIngles";
import Departamentos from "./collections/Departamentos";
import CustomLogo from "./CustomLogo";
import CustomIcon from "./CustomIcon";

export default buildConfig({
  admin: {
    components: {
      graphics: {
        Icon: CustomIcon,
        Logo: CustomLogo,
      },
    },

    user: Users.slug,
    bundler: webpackBundler(),
  },
  cors: "*",

  editor: slateEditor({}),
  collections: [
    Users,
    Historias,
    Paises,
    Categorias,
    PaisesIngles,
    HistoriasUruguay,
    Departamentos,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
