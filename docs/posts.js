module.exports = {
  paths: {
    "/posts/getAll": {
      get: {
        tags: {
          Posts: "Get Posts",
        },
        description: "Get posts",
        operationId: "getPosts",
        parameters: [],
        responses: {
          200: {
            description: "Posts were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/posts",
                },
              },
            },
          },
        },
      },
    },
        "/posts/getPostsById/{_id}": {
      get: {
        tags: {
          Posts: "Get Posts by id",
        },
        description: "Get posts by id",
        operationId: "getPostsById",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
                _id: {
                    type: "objectId",
                    description: "post identification ",
                    example: "6201064b0028de7866e2b2c4",
                  },
            },
          },
        ],
        responses: {
          200: {
            description: "Post by id was obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/posts",
                },
              },
            },
          },
        },
      },
    },
    "/posts/getPostsByName/{name}": {
      get: {
        tags: {
          Posts: "Get Posts by name",
        },
        description: "Get posts by name",
        operationId: "getPostsByName",
        parameters: [
          {
            name: "name",
            in: "path",
            schema: {
                name: {
                    type: "string",
                    description: "post's title",
                    example: "make an excellent post",
                  },
            },
          },
        ],
        responses: {
          200: {
            description: "Post by Name was obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/posts",
                },
              },
            },
          },
        },
      },
    },
    "/posts/deleteposts/{_id}":{
    delete: { 
      tags: {
        Posts: "Delete a Post",
      },
      description: "Deleting a Post",
      operationId: "deleteTask",
      parameters: [
        {
          name: "_id",
          in: "path",
          schema: {
            $ref: "#/components/schemas/_id",
          },
          description: "Deleting a done post",
        },
      ],
      responses: {
        200: { description: "Post deleted successfully" },
        404: { description: "Task not found" },
        500: { description: "Server error" },
      },
    },
  },
},
}

