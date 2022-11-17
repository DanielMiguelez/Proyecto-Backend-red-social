module.exports = {
  components: {
    securitySchemes: {
        ApiKeyAuth: {
        type: "apiKey",
        name: "Authorization",
        in: "header"
        }
    }
        ,
    schemas: {
      posts: {
        type: "object",

        properties: {
          _id: {
            type: "objectId",
            description: "post identification number",
            example: "6201064b0028de7866e2b2c4",
          },

          name: {
            type: "string",
            description: "post's title",
            example: "make an excellent post",
          },

          body: {
            type: "string",
            description: "The status of the post",
            example: false,
          },
          likes: {
            type: "array",
            description: "The status of the post",
            $ref: "#/components/schemas/_id",
          },
          commentIds: {
            type: "array",
            description: "The status of the post",
            $ref: "#/components/schemas/_id",
          },
        },
      },
      _id: {
        type: "objectId",
        description: "An identifier",
        example: "6201064b0028de7866e2b2c4",
      
    },
    
    },
  },
};
