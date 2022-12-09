export default {
  name: "socials",
  title: "Socials",
  type: "document",
  fields: [
    {
      name: "socialmedia",
      title: "Social Media",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "socialmedia",
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
