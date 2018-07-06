import Banner from './cms-components/essentials/banner';
import Content from './cms-components/essentials/content';
import BlogList from './cms-components/essentials/blog-list';
import BlogItem from './cms-components/essentials/blog-item';
import SEO from './cms-components/essentials/seo';
import tagManagerHead from './cms-components/essentials/tagmanagerhead';
import TagManagerBody from './cms-components/essentials/tagmanagerbody';
import CodeTop from './cms-components/essentials/codetop';
import CodeBottom from './cms-components/essentials/codebottom';
import MarketoForm from './cms-components/essentials/marketoform';

const componentDefinitions = {
  "Banner": { component: Banner, contentComponent: true },
  "Content": { component: Content, contentComponent: true },
  "list": { component: BlogList },
  "Blog Item": { component: BlogItem, contentComponent: true },
  "marketoform": { component: MarketoForm },
  "seo": { component: SEO},
  "tagmanagerhead":{component: tagManagerHead},
  "tagmanagerbody":{component: TagManagerBody},
  "codeTop":{component: CodeTop},
  "codeBottom":{component: CodeBottom}
};

export { componentDefinitions };