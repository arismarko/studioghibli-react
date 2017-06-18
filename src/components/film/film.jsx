import React, { Component, PropTypes } from 'react';

export class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="main-banner">
          <div className="container">
            <h1 className="text-light text-center-sm text-center-xs">
              {this.props.selected.title}
            </h1>
          </div>
        </div>
        <div className="main-container container">
          <section className="intro-about-section text-center-xs">
            <div className="row">
              <div className="col-sm-7 col-xs-12">
                <h4 className="text-normal">{this.props.selected.title}</h4>
                <span
                  dangerouslySetInnerHTML={{ __html: this.props.selected.content }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

Film.propTypes = {
  selected: PropTypes.object,
};

export default Film;
