export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 36,
      },
    },
    {
      name: "cover",
      title: "Cover",
      type: "image",
    },
    {
      name: "backgroundColor",
      title: "Background color",
      type: "string",
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "blockContent",
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
    },
    {
      name: "projectDelivery",
      title: "Project Delivery",
      type: "string",
    },
    {
      name: "projectTime",
      title: "Project Time",
      type: "string",
    },
    {
      name: "projectSolution",
      title: "Project Solution",
      type: "string",
    },
    {
      name: "projectLinks",
      title: "Project Links",
      type: "string",
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "process",
      title: "Process",
      type: "blockContent",
    },
    {
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "reference", to: [{ type: "software" }] }],
    },
  ],
};
