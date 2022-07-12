const apiSchema = {
  routes: [
    {
      '/api/image': {
        methods: 'GET',
        args: {
          filename: {
            description: 'Name of the image to resize',
            type: 'string',
            required: true
          },
          width: {
            description: 'End desired width for the image to be resized',
            type: 'integer',
            required: true
          },
          height: {
            description: 'End desired height for the image to be resized',
            type: 'integer',
            required: true
          }
        }
      }
    }
  ]
};

export default apiSchema;
