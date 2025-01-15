import { CollectionConfig } from "payload/types";

const Departamentos: CollectionConfig = {
  admin: { useAsTitle: "title" },
  slug: "departamentos",
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

export default Departamentos;
