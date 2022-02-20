interface ImageMetaOptions {
  url: string;
  alt?: string;
  width?: string;
  height?: string;
}

interface MetaOptions {
  title?: string;
  titleTemplate?: string | null;
  description?: string | null;
  image?: ImageMetaOptions | null;
  url?: string;
}

export default MetaOptions;
