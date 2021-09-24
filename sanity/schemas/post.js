/**
 * Schema for blog post
 */

export default {
  type: "document",
  title: "Post",
  name: "post",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Sub Title",
      name: "subtitle",
      type: "string",
      hidden: ({ document }) => !document?.title,
    },
  ],
};
