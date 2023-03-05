type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Video extends Base {
  title: string;
  videoUrl: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: slug;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface mainImage {
  _type: 'string';
  current: string;
}

interface Title {
  _type: 'string';
  current: string;
}

interface CategoryDropDown {
  _id: string;
  title: string;
}

interface HomePageState {
  allPosts: Post[];
  allVideos: Video[];
  selectedTab: string;
  selectedCategory: string;
  filteredPosts: Post[];
  filteredVideos: Video[];
  searchValue: string;
}
