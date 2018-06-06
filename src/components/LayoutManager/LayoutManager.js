import React, {Component} from "react";
import {Col, Row, Container} from "reactstrap";
import Card from "../Card/Card";

class LayoutManager extends Component {
  // constructor (props) {
  //   super(props);
  // }

  componentWillReceiveProps () {
    var layoutElements = []; //array that contains the child react components
    var that = this;
    if (this.props.data && this.props.data.page) {
      this.props.data.page.components.forEach(component => {
        //identify the main landing page component that has drag&drop components
        if (component.componentClass === 'org.hippoecm.hst.pagecomposer.builtin.components.StandardContainerComponent'
          && component.label === 'Landing page container'
          && component.name === 'main') {

          //traverse each drag&drop component
          var hstBlogs = []; // keep a list of blogs returned by delivery tier
          component.components.forEach(containerComponent => {
            //identify list that has the blogs
            if (containerComponent.componentClass === 'org.onehippo.cms7.essentials.components.EssentialsListComponent'
              && containerComponent.label === 'Generic List'
              && containerComponent.name === 'list') {
              containerComponent.models.pageable.items.forEach(item => {
                hstBlogs.push(this.props.data.content[item["$ref"].split("/")[2]]);
              });
              var blogs = [];
              hstBlogs.forEach(hstBlog => {
                const date = new Date(hstBlog.publicationDate);
                if (hstBlog.authors) {
                  var authorJsonLinkIndex = hstBlog.authors[0]["$ref"].split("/")[2]
                }
                const authorObj = this.props.data.content[authorJsonLinkIndex];
                blogs.push({
                  date: date.toDateString(),
                  title: hstBlog.title,
                  introduction: hstBlog.introduction,
                  author: authorObj,
                  fullyQualifiedUrl: hstBlog.fullyQualifiedUrl,
                  imageUrl: hstBlog.externalUrl
                });
              });
              layoutElements.push(this.renderBlogs(blogs)); //save the rendered blog cards
            }

            //identify marketo form
            if (containerComponent.componentClass === 'com.bloomreach.components.catalog.MarketoFormComponent'
              && containerComponent.label === 'Marketo Form'
              && containerComponent.name === 'marketoform') {
              var form = {
                title: containerComponent.models.document.marketoform.formTitle,
                subtitle: containerComponent.models.document.marketoform.formSubtitle

              };
              layoutElements.push(this.renderForm(form));
            }
          });
        }
      });
    }
    that.setState({layoutElements: layoutElements});
  }

  renderForm (form) {
    return <div className="newsletter-form">
      <button
        type="button"
        className="close-popup-cross"
        onClick={this.toggle}
      >
        <i className="icon icon-close"/>
      </button>
      <div className="newsletter-form-title">{form.title}</div>
      <div className="newsletter-msg">{form.subtitle}</div>
      <form action="http://go.bloomreach.com/join-the-hippo-community.html" method="post">
        <div className="flex-container newsletter-input">
          <input className="form-control" type="email" name="email" placeholder="email@address.com" required=""/>
          <div className="newsletter-subscribe-btn">
            <button type="submit">Sign me up!</button>
          </div>
        </div>
      </form>
    </div>
  }

  renderBlogs (blogs) {
    if (blogs) {
      return blogs.map((blog, index) => {
        return (
          <Col md="6" lg="4" key={index}>
            <Card
              post={{
                name: blog.author.displayName,
                img: blog.imageUrl,
                date: blog.date,
                title: blog.title,
                text: blog.introduction,
                src: blog.author.image ? "http://localhost:8080" + blog.author.image.original._links.site.href
                  : "https://secure.gravatar.com/avatar/d6231e4205a426a0d82eb7df97e52222?s=80&amp;d=mm&amp;r=g",
                url: blog.fullyQualifiedUrl.split("http://localhost:8080/site/developer/resourceapi/blog/")[1]
              }}
            />
          </Col>
        )
      })
    }
  }

  render () {
    return (
      <Container>
        {this.state && this.state.layoutElements && this.state.layoutElements.map((layoutElement, index) => {
          return (<Row key={index}>{layoutElement}</Row>);
        })}
      </Container>
    )

  }
}

export default LayoutManager;