export default {
  // Computer name
  name: "pizza",
  // Visible title
  title: "pizzas",
  type: "document",
  icon: () => "🍕",
  fields: [
    {
      name: "name",
      title: "Pizza Name",
      type: "string",
      description: "Name of the pizza",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",

      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
        name: "image",
        title: "Image",
        type: "image",
  
        options: {
          hotspot: true
        },
      },
      {
        name: "price",
        title: "Price",
        type: "number",
        description: "Price of pizza in cents",
        validation: Rule => Rule.min(1000).max(5000),
        options: {
          hotspot: true
        },

        // TO DO: Add custom component
      },
  ],
};
