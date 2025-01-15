import { CollectionConfig } from "payload/types";

const PaisesIngles: CollectionConfig = {
  admin: { useAsTitle: "title" },
  slug: "paisesIngles",
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

export default PaisesIngles;
