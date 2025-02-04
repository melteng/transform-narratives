import {
  list
} from '@keystone-6/core';
import {
  json,
  relationship,
  text
} from '@keystone-6/core/fields';
import {
  document
} from '@keystone-6/fields-document';
import {
  Lists
} from '.keystone/types';
import path from 'path';
import {
  componentBlocks
} from '../../components/component-blocks';
import { cloudinaryImage } from '../../components/cloudinary';
import { CreateKey } from '../hooks';

const Studio: Lists.Studio = list({
  fields: {
    name: text({
      validation: {
        isRequired: true
      }
    }),
    thumbnail: cloudinaryImage({
      label: 'Thumbnail (need to be sized consistently)',
      cloudinary: {
        cloudName: `${process.env.CLOUDINARY_CLOUD_NAME}`,
        apiKey: `${process.env.CLOUDINARY_KEY}`,
        apiSecret: `${process.env.CLOUDINARY_SECRET}`,
        folder: 'tngvi/studios',
      },
    }),
    blurb: text({
      label: 'Blurb (appears on Studios index page)',
      validation: {
        isRequired: true
      },
      ui: {
        displayMode: 'textarea'
      }
    }),
    key: text({
      isIndexed: 'unique',
      isFilterable: true,
      ui: {
        createView: {
          fieldMode:'hidden'
        },
        itemView: {
          fieldMode: 'hidden'
        }
      }
    }),
    filters: relationship({
      ref: 'Filter',
      isFilterable: true,
      many: true,
      ui: {
        displayMode: 'select',
      }
    }),
    content: document({
      formatting: {
        headingLevels: [3, 4],  
        inlineMarks: true,
        listTypes: true,
        alignment: true,
        blockTypes: true,
        softBreaks: true,
      },
      dividers: true,
      links: true,
      layouts: [
        // [1, 1],
        // [1, 1, 1],
        [2, 1],
        // [1, 2],
        // [1, 2, 1],
      ],
      ui: {
        views: path.join(process.cwd(), 'admin/components/component-blocks')
      },

      componentBlocks,

      relationships: {
        image: {
          kind: 'prop',
          listKey: 'StudioImage',
          selection: 'imageName altText image {publicUrlTransformed publicId}',
        },
      },
    }),
    photos: relationship({
      ref: 'StudioImage.studioImages',
      many: true,
      label: "Images (add here for use in 'Content' field)",
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'imageName', 'altText', 'caption'],
        inlineCreate: {
          fields: ['image', 'imageName', 'altText', 'caption']
        },
        inlineEdit: {
          fields: ['image', 'imageName', 'altText', 'caption']
        },
      },
    }),
    // associatedMedia: relationship({
    //   ref: 'MediaItem',
    //   many: true,
    //   ui: {
    //     displayMode: 'select',
    //   }
    // }),

    // file: azureStorageFile({ azureStorageConfig: azConfig }),
  },
  hooks: {
    resolveInput: async ({
      listKey,
      operation,
      inputData,
      item,
      resolvedData,
      context,
    }) => {
      if(resolvedData.name) {

        resolvedData = {
          ...resolvedData,
          key: CreateKey(resolvedData.name)
        }

      }
      return resolvedData;
    }
  }
});
export default Studio;