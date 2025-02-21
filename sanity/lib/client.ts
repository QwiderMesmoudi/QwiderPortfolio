import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
//import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

//export const urlFor = (source: any) => builder.image(source);