import { CollectionConfig } from "payload/types";

const Paises: CollectionConfig = {
  admin: { useAsTitle: "title" },
  slug: "paises",
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

export default Paises;
