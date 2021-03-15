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
            <aside id="ct_catsubcat_widget-2" className="widget ct_catsubcat_widget clearfix">
              <div className="row">
                <div className="col-lg-6">
                  <div className="entry-cat-block" style={{backgroundColor:"#c27d23"}}>
                    <div className="count-items">
                      <span className="count">6</span>
                      <div className="clear"></div>
                      <span className="items">items</span>
                    </div>
                    <h3>
                      <a href="true" title="View all posts in Wordpress">Wordpress <i className="fa fa-long-arrow-right"></i></a>
                    </h3>
                    <div className="entry-cat-desc">
                      WordPress is web software you can use to create a beautiful website ...
                    </div>
                    <ul className="category-posts">
                      <li>
                        <a href="true" title="Permalink to Giving WordPress Its Own Directory"><i className="fa fa-picture"></i>Giving WordPress Its Own Directory</a>
                      </li>
                      <li>
                        <a href="true" title="Permalink to Can I rename the WordPress folder?"><i className="fa fa-pencil"></i>Can I rename the WordPress folder?</a>
                      </li>
                      <li>
                        <a href="true" title="Permalink to How I Can Upgrade WordPress?"><i className="fa fa-picture"></i>How I Can Upgrade WordPress?</a>
                      </li>
                      <li>
                        <a href="true" title="Permalink to How WordPress Processes Post Content"><i className="fa fa-pencil"></i>How WordPress Processes Post Content</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="entry-cat-block" style={{backgroundColor:"#4e8031"}}>
		    					  <div className="count-items">
			    			      <span className="count">5</span>
			    			      <div className="clear"></div>
			    			      <span className="items">items</span>
			    		      </div>

			    	        <h3>
                      <a href="true" title="View all posts in envato">envato <i className="fa fa-long-arrow-right"></i></a>
                    </h3>

			    				  <div className="entry-cat-desc ">Envato Support Category. Answer on Your Questions.</div>
			              <ul className="category-posts">
                      <li>
                        <a href="true">
                          <i className="fa fa-picture"></i>VirtueMart Template Submission Requirements</a>
                      </li>

			    			      <li>
                        <a href="true" title="Permalink to PSD Templates Submission Requirements">
                          <i className="fa fa-picture"></i>PSD Templates Submission Requirements</a>
                      </li>

                      <li>
                        <a href="true" title="Permalink to Facebook Templates Submission Requirements">
                          <i className="fa fa-picture"></i>Facebook Templates Submission Requirements</a>
                      </li>

			    			      <li>
                        <a href="true" title="Permalink to General File Preparation Guidelines">
                          <i className="fa fa-camera"></i>General File Preparation Guidelines</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
	    	        <div className="col-lg-6">
		    	        <div className="entry-cat-block" style={{backgroundColoro: "#2daacd"}}>
		    					  <div className="count-items">
			    			      <span className="count">4</span>
			    			      <div className="clear"></div>
			    			      <span className="items">items</span>
			    		      </div>
		    		
			    	        <h3>
                      <a href="http://wp.color-theme.com/techdesk/category/microlancer" title="View all posts in microlancer">microlancer 
                        <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </h3>

			    				  <div className="entry-cat-desc ">
                      Microlancer is a platform which allows freelancers to create a virt ...
                    </div>
			
                    <ul className="category-posts">
                      <li>
                        <a href="http://wp.color-theme.com/techdesk/terms-of-using-microlancer" title="Permalink to Terms of using Microlancer">
                          <i className="fa fa-film"></i>Terms of using Microlancer</a>
                      </li>

			    			      <li>
                        <a href="http://wp.color-theme.com/techdesk/can-buyers-of-services-resell-the-work" title="Permalink to Can buyers of services resell the work">
                          <i className="fa fa-music"></i>Can buyers of services resell the work</a>
                      </li>

			    			      <li>
                        <a href="http://wp.color-theme.com/techdesk/how-does-buying-a-service-work" title="Permalink to How does buying a service work?">
                          <i className="fa fa-picture"></i>How does buying a service work?</a>
                      </li>

			    			      <li>
                        <a href="http://wp.color-theme.com/techdesk/what-is-microlancer" title="Permalink to What is Microlancer?">
                          <i className="fa fa-pencil"></i>What is Microlancer?</a>
                      </li>

			              </ul>
                  </div>
                </div>
	    	        <div className="col-lg-6">
		    	        <div className="entry-cat-block" style={{backgroundColor:"#40342b"}}>
		    					  <div className="count-items">
                      <span className="count">7</span>
                      <div className="clear"></div>
                      <span className="items">items</span>
			    		      </div>

			    	        <h3>
                      <a href="http://wp.color-theme.com/techdesk/category/github" title="View all posts in github">github 
                        <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </h3>

			    				  <div className="entry-cat-desc ">
                      Powerful features to make software development more collaborative. ...
                    </div>

			              <ul className="category-posts">
                      <li>
                        <a href="http://wp.color-theme.com/techdesk/what-happens-when-i-change-my-username" title="Permalink to What happens when I change my username?">
                          <i className="fa fa-picture"></i>What happens when I change my username?</a>
                      </li>

			    			      <li>
                        <a href="http://wp.color-theme.com/techdesk/what-plan-should-i-choose" title="Permalink to What plan should I choose?">
                          <i className="fa fa-picture"></i>What plan should I choose?</a>
                      </li>

			    			      <li>
                        <a href="http://wp.color-theme.com/techdesk/how-do-i-cancel-my-account" title="Permalink to How do I cancel my account?">
                          <i className="fa fa-music"></i>How do I cancel my account?</a>
                      </li>

			    			      <li>
                        <a href="http://wp.color-theme.com/techdesk/what-is-my-disk-quota" title="Permalink to What is my disk quota?">
                          <i className="fa fa-pencil"></i>What is my disk quota?</a>
                      </li>
                    </ul>
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
