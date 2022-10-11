// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'project',
      type: 'document',
      title: 'Project',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'image',
          title: 'Image',
          type: 'array',
          of: [{type: 'image'}]
        },
        {
          name: 'shortDesc',
          type: 'string',
          title: 'Short Description'
        },
        {
          name: 'longDesc',
          type: 'string',
          title: 'Long Description'
        },
        {
          name: 'tech',
          title: 'Tech',
          type: 'array',
          of: [{type: 'string'}]
        },
        {
          name: 'url',
          title: 'URL',
          type: 'string'
        },
        {
          name: 'github',
          title: 'Github',
          type: 'string' 
        }
      ]
    }
  ]),
})
