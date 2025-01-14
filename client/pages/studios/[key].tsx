import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { DocumentRenderer, DocumentRendererProps } from '@keystone-6/document-renderer';
import { InferRenderersForComponentBlocks } from '@keystone-6/fields-document/component-blocks'
import Link from 'next/link';
import _ from 'lodash';

import { query } from '.keystone/api';

import FlexLayout from '../../components/FlexLayout';
import BlockRenderers from '../../components/BlockRenderers';
import Layout from '../../components/Layout';
import HeadingStyle from '../../components/HeadingStyle';
import Video from '../../components/Video';

type Studio = {
  id: string;
  name: string;
  key: string;
  filters: any[];
  content: any;
  associatedMedia:[{ videos: any[]}];
};
const renderers: DocumentRendererProps['renderers'] = {
block: {
  heading: ({ level, children, textAlign }) => {
    return HeadingStyle(level, children, textAlign);
  },
  layout: ({layout, children}) => {
    return FlexLayout(layout, children);
  }
},
};

export default function Studio({ item, relatedItems }: InferGetStaticPropsType<typeof getStaticProps>) {
return (
  !item ? 'Not found!' :
  <Layout>
    <div>
        <div className='content-container container w-full mt-14 mb-24 xl:mt-16 px-4 xl:px-8'>
            <h1 className="text-2xl font-bold text-bluegreen mb-2">{item.name}</h1>
            <p className="text-bluegreen mb-10">{_.map(item.filters, 'name').join(', ')}</p>

            <DocumentRenderer document={item.content.document} componentBlocks={BlockRenderers} renderers={renderers} />
{/* 
            {item.associatedMedia &&
              <div className='mt-14'>
                {item.associatedMedia.map((media) => {
                  if(!media.videos) return;
                  return media.videos.map((video, i) => (
                      <div key={`video-${i}`}>
                        <Video videoLabel={video.label} videoUrl={video.value} thumbUrl={video.thumb} />
                        <h3 className="text-bluegreen text-xl font-semibold hover:text-green-blue group-hover:text-green-blue">{video.label}</h3>
                        <p className="mt-2 mb-20">{video.caption}</p>
                      </div>
                  ));
                })}
              </div>
            } */}

           {/*  {relatedItems &&
                <div>
                  <h3 className='text-2xl text-bluegreen font-semibold'>Explore Related Media</h3>
                  <div>
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <p>Browse similar Studio courses from the same course series, professor, or media.</p>
                        <Link href='/media-archive' passHref>
                            <a>
                                See All
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-col lg:flex-row'>
                        {relatedItems.map((relatedItem, i) => (
                          <Link key={i} href={`/media/${relatedItem.key}`} passHref>
                          <a className="w-full lg:w-1/3">
                          <div>
                          <Image id={`thumb-${i}`} alt={`Thumbnail for media with name "${relatedItem.name}"`} imgId={relatedItem.thumbnail.publicId} width={302}  />
                          <h4 className='text-xl font-semibold mt-3'>{relatedItem.name}</h4>
                          
                          <p>{_.map(relatedItem.filters, 'name').join(', ')}</p>
                          </div>
                          </a>
                          </Link>
                        ))
                    </div>
                  </div>
                </div>
            }} */}
        </div>
    </div>
  </Layout>
);
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const items = (await query.Studio.findMany({
    query: `key`,
  })) as { key: string }[];

  const paths = items
    .filter(({ key }) => !!key)
    .map(({ key }) => `/studios/${key}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const item = (await query.Studio.findOne({
      where: { key: params!.key as string },
      query: 'name filters { name } content { document(hydrateRelationships: true) } ',
  })) as Studio;
  const relatedItems = (await query.Studio.findMany({
      query: 'name key filters { type name } thumbnail { publicId }',
  })) as Studio[];
  
  return { props: { item, relatedItems } };
}