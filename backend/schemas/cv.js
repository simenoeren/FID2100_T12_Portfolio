export default {
  name: "cv",
  title: "CV",
  type: "document",
  fields: [
    {
      name: "employer",
      title: "Employer",
      type: "string",
    },
    {
      name: "from",
      title: "From",
      type: "date",
    },
    {
      name: "to",
      title: "To",
      type: "date",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "reference",
      title: "Reference",
      type: "string",
    },
    {
      name: "tools",
      title: "Tools",
      type: "reference",
      to: [{ type: "software" }],
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
    },
  ],
};
