import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        <p>
          When we started BloomReach Development for Android, binary size
          optimization was not one of our main&nbsp;concerns.&nbsp;In fact we
          even started to develop in JAVA before switching to C/C++ for{" "}
          <a href="https://developers.bloomreach.com/">
            reasons of performance
          </a>.
        </p>
        <p>
          We were reminded of the importance of binary size by&nbsp;<a
            href="http://android.cyrilmottier.com"
            target="_blank"
          >
            Cyril Mottier
          </a>&nbsp;who informed us that it would be difficult to integrate our
          lib in
          <a href="https://developers.bloomreach.com/">
            AVelov
          </a>
          Android Application because its size. AVelov is 638KB and BloomReach was
          850KB, which would mean that AVelov would more than double in size
          with BloomReach Search embedded.
        </p>
      </div>
    );
  }
}
export default Content;
