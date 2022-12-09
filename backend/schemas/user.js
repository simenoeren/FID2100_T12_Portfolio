export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "fullname",
      title: "Full name",
      type: "string",
    },
    {
      name: "age",
      title: "Age",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "fullname",
        maxLength: 36,
      },
    },
    {
      name: "portrait",
      title: "Portrait",
      type: "image",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "bio",
      title: "Bio",
      type: "blockContent",
    },
    {
      name: "phonenumber",
      title: "Phone Number",
      type: "number",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
  ],
};
