import {
    InferGetStaticPropsType
} from "next";
import {
    query
} from '.keystone/api';
import {
    InferRenderersForComponentBlocks
} from '@keystone-6/fields-document/component-blocks';
import _ from 'lodash';
import {
    componentBlocks
} from '../admin/components/component-blocks';
import Image from '../components/Image';
import create from 'zustand';

type Filter = {
    name: string;
    type: string;
};
type MediaItem = {
    title: string;
    shortDescription: string;
    filters: string;
    thumbnail: {
        publicId: string;
    }
}
type FilterState = {
currentFilters: any[];
  add: (filter: any) => void
  reset: () => void
}

// Create store with Zustand
const useStore = create<FilterState>(set => ({
    currentFilters: [],
    add: (filter: any) => set((state) => {
        const isPresent = state.currentFilters.indexOf(filter) > -1;
        if (!isPresent) {
            return {
                ...state,
                currentFilters: [...state.currentFilters, filter]
            }
        }
    }),
    //    remove:
    reset: () => set({ currentFilters: [] })
}));
useStore.subscribe(console.log)

const filterIntersects = (items: any[]) => {
        let currentFilters = useStore(state => state.currentFilters);

        console.log(items
            .filter(item => _.map(item.filters, 'name').some(r => currentFilters.indexOf(r) >= 0)))
        return items
            .filter(item => currentFilters.length === 0 || (_.map(item.filters, 'name').some(r => currentFilters.indexOf(r) >= 0)))
                .map((item, i) => (
                    <div key={i} className="w-1/3">
                        <Image id={`thumb-${i}`} alt={`Thumbnail for media "${item.title}"`} imgId={item.thumbnail.publicId} width={235}  />
                        <p>{item.title}</p>
                        <p>{item.shortDescription}</p>
                    </div>
    ))
};
  
function FiltersDebug() {

    const f = useStore(state => state.currentFilters);
    return <h1>{_.map(f, 'name')} around here ...</h1>
}
  

const renderFilters = (filters: { [x: string]: any[]; }) => {
    const haveFilters = useStore(state => state.currentFilters).length > 0;
    const addFilter = useStore(state => state.add);
    const reset = useStore(state => state.reset);
    return <div>
            {(!haveFilters ? null : <a className="uppercase" onClick={(e) =>{ reset(); e.preventDefault() }}>
               (x) Clear
            </a>)}
                {Object.keys(filters).map((key) => (
                    <div key={key}>
                        <p className="uppercase">
                            {key}
                        </p>
                        <ul>
                            {filters[key].map(filter => {
                                return( <li key={filter}><a href="#" onClick={(e) =>{ addFilter(filter); e.preventDefault() }}>{filter}</a></li>)
                            })}
                        </ul>
                    </div>
                ))}
        </div>
}
export default function MediaArchive({ filtersGrouped, mediaItems }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div
        className="container mx-auto mt-14 mb-14 xl:mt-16 flex flex-col md:flex-row items-center font-work-sans text-xl md:text-2xl">
            <div className='w-1/3'>
                {renderFilters(filtersGrouped)}
            </div>
            <div className="flex">
                {/* {FiltersDebug()} */}
                {filterIntersects(mediaItems)}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const filters = await query.Filter.findMany({ query: 'name type' }) as any[];
    // Group filters by type
    const filtersGrouped = filters.reduce((filterMemo, {type, name}) => {
        (filterMemo[type] = filterMemo[type] || []).push(name);
        return filterMemo;
    }, {})
    const mediaItems = await query.MediaItem.findMany({ query: 'title shortDescription filters { name } thumbnail { publicId }' }) as MediaItem[];

    return {
      props: {
        filtersGrouped,
        mediaItems,
      }
    };
  }