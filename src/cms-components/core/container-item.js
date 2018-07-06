import React from 'react';
import ContentComponentWrapper from './content-component-wrapper';
import UndefinedComponent from './undefined';
import { componentDefinitions } from "../../component-definitions";
import { addBeginComment, addEndComment } from '../../utils/add-html-comment';

export default class CmsContainerItem extends React.Component {
  renderContainerItem(component, pageModel, preview) {
    // based on the type of the component, render a different React component
    if (component.name in componentDefinitions) {
      if ("contentComponent" in componentDefinitions[component.name]
        && componentDefinitions[component.name]["contentComponent"]) {
        // wrap component in ContentComponentWrapper class
        return (
          <ContentComponentWrapper configuration={component} pageModel={pageModel} preview={preview} />
        );
      } else if (componentDefinitions[component.name].component) {
        // component is defined and does not have to be wrapped in ContentComponent, so render the actual component
        const componentEl = React.createElement(componentDefinitions[component.name].component,
          { configuration: component, pageModel: pageModel, preview: preview }, null);
        return (componentEl);
      }
    } else if(preview){
      // component not defined in component-definitions
      return (
        <UndefinedComponent name={component.name} />
      );
    }
  }

  addMetaData(htmlElm, configuration, preview) {
    addBeginComment(htmlElm, 'afterbegin', configuration, preview);
    addEndComment(htmlElm, 'beforeend', configuration, preview);
  }

  render() {
    const configuration = this.props.configuration;
    const pageModel = this.props.pageModel;
    const preview = this.props.preview;

    if(configuration.name === "tagmanagerbody" || configuration.name === "codeBottom"){
      return(
        null
        // configuration &&
        // this.renderContainerItem(configuration, pageModel, preview)
      );
    }else {
      return (
        <div className="hst-container-item"
             ref={(containerItemElm) => {
               this.addMetaData(containerItemElm, configuration, preview);
             }}>
          {configuration &&
          this.renderContainerItem(configuration, pageModel, preview)
          }
        </div>
      );
    }
  }
}