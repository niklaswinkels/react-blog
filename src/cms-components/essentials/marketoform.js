import React from 'react';

export default class MarketoForm extends React.Component {

  render() {
    const configuration = this.props.configuration.models.document.marketoform;
    var tag = document.createElement('script');
    tag.async = false;
    tag.type = "text/javascript";
    tag.innerHTML = 'MktoForms2.loadForm("//app-sjn.marketo.com", "243-XLW-551", '+configuration.formId+')';
    document.body.appendChild(tag);
    return (
        <div className="col-lg-8">
          <div className="block block--gray p-lg-6">
            <div className="block block--gray">
              <h2>{configuration.formTitle}</h2>
              <p className="mb-4">{configuration.formSubtitle}</p>
              <div className="marketo-form">
                <form id={"mktoForm_"+configuration.formId}></form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}