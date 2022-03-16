import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Script from 'next/script'

import { query } from '.keystone/api';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { InferRenderersForComponentBlocks } from '@keystone-6/fields-document/component-blocks';
import Image from '../../components/Image';
import { componentBlocks } from '../../admin/components/component-blocks';

type MediaItem = {
    title: string;
    key: string;
    content: any;
    shortDescription: string;
    filters: string;
    videos: any[];
}

const componentBlockRenderers: InferRenderersForComponentBlocks<typeof componentBlocks> = {
  image: (props: any) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image id={'img-' + props.image.data.image.publicId} alt={props.image.data.altText} imgId={props.image.data.image.publicId}  />
      </div>
    );
  },
};

export default function MediaItem({ item }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
      !item ? 'Not found!' :
    <div>
        <div className='video'>
            <img alt={`Thumbnail image for video with title "${item.videos[0].label}"`} src={item.videos[0].thumb} />
            {/* <div id="video-embed-main">
                <iframe
                    src={item.videos[0].value}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <Script src="https://player.vimeo.com/api/player.js"></Script>
            </div> */}
        </div>

        <h1 className="text-3xl">{item.title}</h1>
        <DocumentRenderer document={item.content.document} 
            componentBlocks={componentBlockRenderers} />
    </div>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const items = (await query.MediaItem.findMany({
      query: `key`,
    })) as { key: string }[];
  
    const paths = items
      .filter(({ key }) => !!key)
      .map(({ key }) => `/media/${key}`);
  
    return {
      paths,
      fallback: false,
    };
  }
  
export async function getStaticProps({ params }: GetStaticPropsContext) {
    const item = (await query.MediaItem.findOne({
        where: { key: params!.key as string },
        query: 'title shortDescription filters { name } content { document(hydrateRelationships: true) } videos',
    })) as MediaItem;
    return { props: { item } };
}