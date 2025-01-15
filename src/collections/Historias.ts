import { CollectionConfig } from "payload/types";

const Historias: CollectionConfig = {
  slug: "historias",
  admin: { useAsTitle: "title" },
  access: { read: () => true },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "textarea",
    },

    {
      name: "paises",
      label: "Paises",
      type: "relationship",
      relationTo: "paises",
      required: true,
      admin: {
        allowCreate: true,
        sortOptions: "label",
      },
    },
    {
      name: "paisesIngles",
      label: "Paises en Ingles",
      type: "relationship",
      relationTo: "paisesIngles",
      required: true,
      admin: {
        allowCreate: true,
        sortOptions: "label",
      },
    },
    {
      name: "categorias",
      label: "Categorias",
      type: "relationship",
      relationTo: "categorias",
      required: true,
      hasMany: true,
      admin: {
        allowCreate: true,
        sortOptions: "label",
      },
    },
    {
      name: "youtube",
      label: "Link a Youtube",
      type: "text",
    },
    {
      name: "latitud",
      label: "Latitud",
      type: "text",
      required: true,
    },
    {
      name: "longitud",
      label: "Longitud",
      type: "text",
      required: true,
    },
  ],
};

export default Historias;
