import React, { Component } from 'react'
import CottonWood from './../svg/CottonWood.jsx'
import PlumBlossom from './../svg/PlumBlossom.jsx'
import BeanSoup from './../svg/BeanSoup.jsx'
import Notebook from './../svg/Notebook.jsx'

class SvgTemplate extends Component {
  render() {
    return(
      <div className='theme-container'>
        <header>{this.props.title}</header>

        <aside className='sidebar-left'>
          <h1>About this page:</h1>

          <div className='sidebar-content'>
            This is a space for testing new svg ideas in d3.<p />
            Whether making soup in a crock-pot at home or walking along the
            tree-lined sidewalk of Montezuma street, there is striking beauty
            to be found in nearly every aspect of everyday life.<p />
            This svg journal is here for me to share with you these impressions.
          </div>
        </aside>

        <article>
          <h2>{this.props.title}:</h2>
          <BeanSoup />
          <PlumBlossom />
          <CottonWood />
          <Notebook />
        </article>

      </div>
    )
  }
}

export default SvgTemplate;
