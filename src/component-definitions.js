import Banner from './cms-components/essentials/banner';
import Content from './cms-components/essentials/content';
import BlogList from './cms-components/essentials/blog-list';
import BlogItem from './cms-components/essentials/blog-item';
import SEO from './cms-components/essentials/seo';

const componentDefinitions = {
  "Banner": { component: Banner, contentComponent: true },
  "Content": { component: Content, contentComponent: true },
  "Generic List": { component: BlogList },
  "Blog Item": { component: BlogItem, contentComponent: true },
  "SEO": { component: SEO}
};

export { componentDefinitions };