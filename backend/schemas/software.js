export default {
  name: "software",
  title: "Software",
  type: "document",
  fields: [
    {
      name: "software",
      title: "Software",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "software",
        maxLength: 36,
      },
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
  ],
};
