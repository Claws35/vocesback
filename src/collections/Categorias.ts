import { CollectionConfig } from "payload/types";

const Categorias: CollectionConfig = {
  admin: { useAsTitle: "title" },
  slug: "categorias",
  access: { read: () => true },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
  ],
};

export default Categorias;
