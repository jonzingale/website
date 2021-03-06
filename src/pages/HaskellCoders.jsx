import React, { Component } from 'react'

class HaskellCoders extends Component {
  render() {
    const imgUrl = '/images/haskelltospreadsheet.png'

    const jupyterStub1 = 'https://github.com/jonzingale/Haskell/blob/master/HaskellStudy/Lists/Documentation/'
    const jupyterStub2 = 'https://github.com/jonzingale/Haskell/blob/master/HaskellStudy/LinearAlgebra/ComplexVector/Documentation/'
    const jupyterStub3 = 'https://github.com/jonzingale/Haskell/blob/master/Attenuations/dev/Documentation/'

    return(
      <div className='theme-container'>
        <header>{this.props.title}</header>

        <aside className='sidebar-left'>
          <h1>Santa Fe Haskell Coders</h1>

          <div className='sidebar-content'>
            In Santa Fe and looking for a cool Haskell coding group?<p />
            Send me an email for meeting time and place.<p />We often meet
            over a pint at any one of many pubs and bistros around the city.
          </div>
        </aside>

        <article>
          <h2 className='title'>{this.props.title}</h2>
          <div className='introduction'>
            Recently, I have found myself leading a Haskell programming group
            in Santa Fe, New Mexico. These meetings have been a great
            opportunity to actually learn to apply Haskell. Included here are
            some of my notes.
          </div>
          <div className='theme-card'>
            <h2><a href={jupyterStub1 + 'Listables.ipynb'}>Listable</a></h2>
            Here we write some methods for treating Integers as lists in the sense that
            we can define notions of <code>take, drop, (:), (++), and unit </code>
            on Integers. From these we derive further functionality, namely:
            <code>length, reverse, head, tail, and (!!)</code>. Since clearly both
            Integers and Lists are both instances of the same functionality, we define
            a class <a href={jupyterStub1 + 'Listables.ipynb'}> Listable </a>
            handling both.
          </div>
          <div className='theme-card'>
            <h2><a href={jupyterStub1 + 'Sortable.ipynb'}>Sortable</a></h2>
            Now that there is a Listable class, we extend Listable things to be Sortable
            things. Put another way, given <code>(Ord a, Listable a) => a</code> we
            define a class whose instances can be sorted via <code>sort</code> and
            shuffled via <code>shuffle</code>. The sort is a quick-sort and the shuffle
            is a key-shuffle.
          </div>
          <div className='theme-card'>
            <h2><a href={jupyterStub2 + "Vector.ipynb"}>Vector</a></h2>
            <a href={jupyterStub2 + "Vector.ipynb"}>Vector</a> is a module designed to
            facilitate mathematical vector operations in the Hermitian style. For
            simplicity, I model only three-dimensional vectors but allow the underlying
            fields to be arbitrary. Complex and Double serve as example fields
            throughout.
          </div>
          <div className='theme-card'>
            <h2><a href={jupyterStub1 + "AbelianActions.ipynb"}>Abelian Actions on a Zipper</a></h2>
            The goal here is to write an <code>Action</code> class which depends on an
            <code>Abelian</code> data type and acts on a <code>Zipper</code> type.
            Composition of left Abelian actions <code>Ab x G -> G</code> and evaluation
            are then given in the instance declaration for
            <code>Action (Zipper v)</code>.
          </div>
          <div className='theme-card'>
            <h2><a href={jupyterStub3 + "HTF.ipynb"}>Haskell Test Framework</a></h2>
            Having a reliable test framework is an amazing thing. Here is a small
            collection of notes describing some of the features and organizational
            structure of the <code>Haskell Test Framework</code>​ (HTF). Most of the
            examples are designed for my recent work developing a ray tracing algorithm.
          </div>
          <div className='theme-card'>
            <h2><a href='/haskell_on_jupyter/umeboshi'>Umeboshi</a></h2>
            <a href='/haskell_on_jupyter/umeboshi'>Umeboshi</a> is a drum machine
            written in Haskell and built from a Roland 808 sound bank. The drum machine
            is designed to facilitate poly-rhythmic percussion in non-standard time
            signatures. It relies heavily <code>Unboxed Vector</code> types and
            the <code>Data.WAVE</code> library.
          </div>
          <div className='theme-card'>
            <h2><a href='/haskell_on_jupyter/havel-hakimi'>Havel Hakimi Graphs</a></h2>
            The Swiss-McMahon tournament can be seen as a special case of the
            Erdős–Gallai theorem and as such, the Havel-Hakimi algorithm can be used to
            produce graphic tournaments. This module is designed to facilitate the
            production of these graphs.
          </div>
        </article>

        <aside className='sidebar-right'>.</aside>
      </div>
    )
  }
}

export default HaskellCoders;
