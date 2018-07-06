import React from 'react';
import Helmet from "react-helmet/es/Helmet";

export default class MarketoForm extends React.Component {

  componentDidMount () {
    const script1 = document.createElement("script");

    script1.src = "//app-sjn.marketo.com/js/forms2/js/forms2.min.js";
    script1.async = true;

    document.body.appendChild(script1);

    const script = document.createElement("script");

    script.src = 'MktoForms2.loadForm("//app-sjst.marketo.com", "243-XLW-551", 462)';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    const configuration = this.props.configuration.models.document.marketoform;

    return (
      <div>
        <Helmet>
          </Helmet>
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
      </div>
    );
  }
}