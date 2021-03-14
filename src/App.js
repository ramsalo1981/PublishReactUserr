import './Assets/main.scss';
import './Assets/boot.css';

function App() {
  return (
    <div className="App">
      <header id="header">
        <div className="container">
          <div className="row top-block">
            <div className="col-lg-5 logo-block">
              <div id="logo">
                <h1>
                  <p className="logo_text">Blogg Website</p>
                </h1>
              </div>
            </div>
            <div className="col-lg-7 right-block" style={{paddingTop : "25px"}}>
              <div id="live-search">
                <form role="search" method="get" id="searchform" className="clearfix">
							    <input type="text" name="s" id="s" autoComplete="off" />
								  <button type="submit" className="submit btn fa fa-search" name="submit" id="searchsubmit"></button>
							    <i className="live-search-loading icon-spinner icon-spin"></i>
							  </form>
              </div>
            </div>
          </div>
        </div>
        <div id="mainmenu-block-bg" className="second_nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="navigation" role="navigation">
                  <div id="menu">
                    <div className="menu-main-menu-container">
                      <ul id="menu-main-menu" className="sf-menu sf-js-enabled" style={{display: "block"}}>
                        <li id="menu-item-7" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7">
                          <a href="true" className="sf-with-ul">HOME</a>
                        </li>
                        <li id="menu-item-127" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-127">
                          <a href="true">CATEGORIES</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="content" className="container" role="main" style = {{height: "auto!important"}}>
        <div className="row" style={{height: "auto!important"}}>
          <div id="primary" className="col-lg-8" style={{height: "auto!important", minHeight: "0px!important"}}>
            <aside id="ct_sticky_widget-2" className="widget ct_sticky_widget clearfix">
              <div className="sticky-block" style={{backgroundColor: "#6a4248"}}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="sticky-icon">
                      <i className="fa fa-star">

                      </i>
                    </div>
                    <img src="http://wp.color-theme.com/techdesk/wp-content/uploads/2013/09/photodune-2243193-tourist-s-770x428.jpg" alt="Sticky Article" />
                  </div>
                  <div className="col-lg-6">
                    <div className="right-side clearfix">
                      <h2>
                        <a href="true" title="Permalink to Sticky Article">
                          Sticky Article 
                          <i className="fa fa-long-arrow-right" style={{marginLeft:"10px"}}></i>
                        </a>
                      </h2>
                      <div className="clear"></div>
                      <div className="margin-10b"></div>
                      <div className="post-content">
                        By default, WordPress.com blogs display posts in reverse chronological order on the home page with the latest post at the top.								
                      </div>
                      <div className="clear"></div>
                      <a href="true" className="btn-more-circle" title="Sticky Article">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div id="secondary" className="sidebar col-lg-4" role="complementary">
            <aside id="ct-populararticles-widget-4" className="widget ct-populararticles-widget clearfix">
              <div className="popular-block" style={{backgroundColor: "#378463"}}>
                <i className="fa fa-star"></i>
                <h4 className="widget-title">popular Articles</h4>
                <ul className="popular-posts-widget popular-widget-658000136">
                  <li className="clearfix">
                    <div className="post-title">
                      <i className="fa fa-pencil"></i>
                      <h5>
                        <a href="true" title="Permalink to Can I rename the WordPress folder?">
                          Can I rename the WordPress folder?
                        </a>
                      </h5>
                    </div>
                  </li>
                  <li className="clearfix">
                  <div className="post-title">
                      <i className="fa fa-pecture"></i>
                      <h5>
                        <a href="true" title="Permalink to Sticky Article">
                          Sticky Article
                        </a>
                      </h5>
                    </div>
                  </li>
                  <li className="clearfix">
                  <div className="post-title">
                      <i className="fa fa-pecture"></i>
                      <h5>
                        <a href="true" title="Giving WordPress Its Own Directory">
                          Giving WordPress Its Own Directory
                        </a>
                      </h5>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="post-title">
                      <i className="fa fa-pecture"></i>
                      <h5>
                        <a href="true" title="My contributions not showing up on my profile">
                          My contributions not showing up on my profile
                        </a>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
