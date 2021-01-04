export default {
    // Computer name
    name: "topping",
    // Visible title
    title: "toppings",
    type: "document",
    icon: () => "🌶️",
    fields: [
      {
        name: "name",
        title: "name",
        type: "string",
      },
      {
        name: "vegetarian",
        title: "vegetarian",
        type: "boolean",
        options: {
            layout: "checkbox"
        }
      }
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian'
        },
        prepare: ({name, vegetarian}) => ({
            title: `${name} ${vegetarian? '🍃': ''}`
        })
    }
  };
  