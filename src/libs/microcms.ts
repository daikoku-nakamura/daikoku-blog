import {
  type MicroCMSContentId,
  type MicroCMSDate,
  type MicroCMSImage,
  type MicroCMSQueries,
  createClient,
} from 'microcms-js-sdk';

export type Blog = {
  title: string;
  description: string;
  body: string;
  eyecatch: MicroCMSImage;
  categories: Category[];
} & MicroCMSContentId &
  MicroCMSDate;

export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogList = async (queries?: MicroCMSQueries) => {
  const ListData = await client.getList<Blog>({
    endpoint: 'blogs',
    queries,
  });
  return ListData;
};

export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
  });
  return detailData;
};

export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId,
    queries,
  });
  return detailData;
};
