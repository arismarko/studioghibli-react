import React, { Component, PropTypes } from 'react';

import './listings.scss';

export class Listings extends Component {
  constructor(p, c) {
    super(p, c);
    this.state = { color: 'blue' };
  }

  render() {
    return (
      <div className="container ">
        <div id="products" className="row">
          {this.props.items.map(item =>
            <div className="item  col-xs-16 col-lg-4 col-sm-16 list-group-item" key={item.title}>
              <div className="thumbnail">
                <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                <div className="caption">
                  <h4 className="group inner list-group-item-heading">
                    {item.title}
                  </h4>
                  <p
                    className="group inner list-group-item-text"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p className="lead">
                        {item.release_date}
                      </p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <a className="btn btn-success" href="http://www.jquery2dotnet.com">
                        {item.title}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )};
        </div>
      </div>
    );
  }
}

Listings.propTypes = {
  items: PropTypes.array,
};

export default Listings;
