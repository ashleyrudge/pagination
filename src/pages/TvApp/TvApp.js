
import couch from './assets/couch.svg';
import dropdown from './assets/dropdown.svg';
import search from './assets/search.svg';
import profile from './assets/profile.svg';
import poster from './assets/Poster.svg';
import add from './assets/add.svg';
import img1 from './assets/Image 1.svg';
import img2 from './assets/Image 2.svg';
import img3 from './assets/Image 3.svg';
import orange from './assets/orange.svg';
import strange from './assets/strange.svg';
import chernobyl from './assets/chernobyl.svg';
import whatif from './assets/WhatIf.jpg';
import './App.scss';

function TvApp() {
  return (
    <div id="tv-app">
     <div class="head-div">

     <div class="header">
       <div class="section-1">
         <div class="logo">
           <img class="logo-img" src={couch} alt="logo"/>
         </div>
         <div class="brand">
         CouchTV
         </div>
       </div>
       <div class="section-2">
         <button>
           <div class="browse-text">
           Browse
           </div>
           <img class="dropdown-img" src={dropdown} alt="dd"/>
         </button>
       </div>
       <div class="section-3">
         <button>
         <img class="search" src={search} alt="search"/>
         </button>
         <img class="profile" src={profile} alt="profile"/>
       </div>
     </div>
     </div>
     <div class="featured">
       <div class="poster">
         <img class="poster-img" src={poster} alt="poster"></img>
       </div>
       <div class="discription">
         <div class="season">
           New season
         </div>
         <div class="title">
         True Detective
         </div>
         <div class="info">
           <div class="episode">Season 1 · TV-14</div>
           <div class="category">Drama, Action & Adventure, Suspense</div>
           <div class="match">86% match</div>
         </div>
         <div class="summary">
         A 17-year hunt for a serial killer in Louisiana begins with Detectives Rust Cohle (Matthew McConaughey) and Martin Hart (Woody Harrelson) joining the search in this eight-episode anthology series.
         </div>
         <div class="action">
           <div class="act-1">
             <button class="watch">
               Watch
             </button>
           </div>
           <div class="act-2">
             <button class="add">
              <div class="add-icon">
                <img src={add} alt="add"/>
              </div>
             <div class="add-text">
               Add to My List
              </div>
             </button>
           </div>
         </div>
         <div class="preview">
           <div class="no1">
             <img src={img1} alt="img"/>
           </div>
           <div class="no2">
             <img src={img2} alt="img"/>
           </div>
           <div class="no3">
             <img src={img3} alt="img"/>
           </div>
         </div>
       </div>
     </div>
       <div class="featured-row">
         <div class="row-title">
         New Releases
         </div>
         <div class="series">
           <div class="coverart">
             <img class="pic" src={orange} alt="series"/>
             <div class="series-title">
               Orange Is New Black
             </div>
           </div>
           <div class="coverart">
             <img class="pic" src={strange} alt="series"/>
             <div class="series-title">
             Strange Things
             </div>
           </div>
           <div class="coverart">
             <img class="pic" src={chernobyl} alt="series"/>
             <div class="series-title">
             Chernobyl
             </div>
           </div>
           <div class="coverart">
             <img class="pic-w" src={whatif} alt="series"/>
             <div class="series-title">
             What/If
             </div>
           </div>
         </div>
       </div>
     </div>
  );
}

export default TvApp;
