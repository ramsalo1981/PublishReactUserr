import './Assets/main.scss';
import './Assets/boot.css';
import { Component } from 'react';
var randomColor = require('randomcolor'); 


class App extends Component {
  constructor() {
    super();
    this.state = {
      Last_articles: [],
      Articles: [],
      Categories: [],
      Last_categories: [],
      Opened_articles: [],
      Article_paragraph: [],
      article_title:"",
      homeOrCategoey: 1,
      homeActiveLink:"active_home",
      categoryActiveLink: ""
    };
    this.showHome = this.showHome.bind(this);
    this.hideHome = this.hideHome.bind(this);
  }

  componentDidMount() {
    fetch('/api/Articles/GetLastArticles')
      .then(res => res.json())
      .then(Last_articles => this.setState({Last_articles}));
    fetch('/api/Articles/')
      .then(res => res.json())
      .then(Articles => this.setState({Articles}));
    fetch('/api/Categories/GetLastCategories')
      .then(res => res.json())
      .then(Last_categories => this.setState({Last_categories}));
    fetch('/api/Categories')
      .then(res => res.json())
      .then(Categories => this.setState({Categories}));
  }
  showHome(e) {
    e.preventDefault();
    this.setState({homeOrCategoey: 1});
    this.setState({homeActiveLink: "active_home"});
    this.setState({categoryActiveLink: ""});
  }
  hideHome(e) {
    e.preventDefault();
    this.setState({homeOrCategoey: 2});
    this.setState({homeActiveLink: ""});
    this.setState({categoryActiveLink: "active_category"});
  }
  showSelectedArticles(artic) {
    this.setState({Opened_articles:artic});
    this.setState({homeOrCategoey: 3});
  }

  showSelectedArticleParagraph(articleParagraph, articleTitle){
    this.setState({Article_paragraph:articleParagraph});
    this.setState({homeOrCategoey: 4});
    this.setState({article_title: articleTitle});
    console.log(articleParagraph);
  }

  render() {
    var firstCategor = 0;
    var firstCategor_articles = [];
    var secondCategor = 0;
    var secondCategor_articles = [];
    var thirdCategor = 0;
    var thirdCategor_articles = [];
    var fourthCategor = 0;
    var fourthCategor_articles = [];
    for(var i=0; i < this.state.Last_categories.length; i++){
      if(i === 0) {
        firstCategor = this.state.Last_categories[i];
        firstCategor_articles = this.state.Last_categories[i].articles;
      }
      if(i === 1){
        secondCategor = this.state.Last_categories[i];
        secondCategor_articles = this.state.Last_categories[i].articles;
      } 
      if(i === 2){
        thirdCategor = this.state.Last_categories[i];
        thirdCategor_articles = this.state.Last_categories[i].articles;
      } 
      if(i === 3){
        fourthCategor = this.state.Last_categories[i];
        fourthCategor_articles = this.state.Last_categories[i].articles;
      } 
  }

    return (
      <div className="App">
        <header id="header">
          <div className="container">
            <div className="row top-block">
              <div className="col-lg-5 logo-block">
                <div id="logo">
                  <h1>
                    <p className="logo_text">Zington IT</p>
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
                            <div onClick={ this.showHome } className={this.state.homeActiveLink}>HOME</div>
                          </li>
                          <li id="menu-item-127" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-127">
                            <div onClick={ this.hideHome } className={this.state.categoryActiveLink}>CATEGORIES</div></li>
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
          {this.state.homeOrCategoey === 1 &&
            <div id="primary" className="col-lg-8" style={{height: "auto!important", minHeight: "0px!important"}}>
              <aside id="ct_sticky_widget-2" className="widget ct_sticky_widget clearfix">
                <div className="sticky-block" style={{backgroundColor: "#6a4248"}}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="sticky-icon">
                        <i className="fa fa-star">

                        </i>
                      </div>
                      
                      {this.state.Articles.map(article =>{
                        return article.stickyArticle ?
                        <img src={article.articleImageSrc} alt="Sticky Article" key={article.articleId} />
                        :
                        (null)
                      }
                      )}
                      
                    </div>
                    <div className="col-lg-6">
                      <div className="right-side clearfix">
                        <h2>
                          <div href="true" title="Permalink to Sticky Article">
                            Sticky Article 
                          </div>
                        </h2>
                        <div className="clear"></div>
                        <div className="margin-10b"></div>
                        {this.state.Articles.map(article =>{
                        return article.stickyArticle ?
                        <div>
                          <div className="post-content" key={article.articleId}>
                            {article.articleTitle}
                          </div>
                          <div className="clear"></div>
                          <div style={{cursor:"pointer"}} className="btn-more-circle" title="Sticky Article" onClick={this.showSelectedArticleParagraph.bind(this,article.articleParagraphs, article.articleTitle )}>
                            <i className="fa fa-chevron-right"></i>
                          </div>
                        </div>
                        :
                        (null)
                      }
                      )}
                        
                        
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
                        <span className="count">{firstCategor_articles.length}</span>
                        <div className="clear"></div>
                        <span className="items">items</span>
                      </div>
                      <h3>
                        <div style={{cursor:"pointer"}} onClick={this.showSelectedArticles.bind(this,firstCategor.articles )} title={firstCategor.categoryTitle}>{firstCategor.categoryTitle}</div>
                      </h3>
                      
                        {firstCategor_articles.length > 0 &&
                        <ul className="category-posts">
                          {firstCategor_articles.map(article => 
                            <li>
                              <div style={{cursor:"pointer"}} onClick={this.showSelectedArticleParagraph.bind(this,article.articleParagraphs, article.articleTitle )} key={article.articleId} title={article.articleTitle}><i className="fa fa-pencil"></i>{article.articleTitle}</div>
                            </li>
                          )}
                          
                          
                        </ul>
                        }
                      
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="entry-cat-block" style={{backgroundColor:"#4e8031"}}>
                      <div className="count-items">
                        <span className="count">{secondCategor_articles.length}</span>
                        <div className="clear"></div>
                        <span className="items">items</span>
                      </div>

                      <h3>
                        <div style={{cursor:"pointer"}} onClick={this.showSelectedArticles.bind(this,secondCategor.articles )} title={secondCategor.categoryTitle}>{secondCategor.categoryTitle}</div>
                      </h3>

                      {secondCategor_articles.length > 0 &&
                        <ul className="category-posts">
                          {secondCategor_articles.map(article => 
                            <li>
                              <div style={{cursor:"pointer"}} onClick={this.showSelectedArticleParagraph.bind(this,article.articleParagraphs, article.articleTitle )} key={article.articleId} title={article.articleTitle}><i className="fa fa-pencil"></i>{article.articleTitle}</div>
                            </li>
                          )}
                          
                          
                        </ul>
                      }
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="entry-cat-block" style={{backgroundColoro: "#2daacd"}}>
                      <div className="count-items">
                        <span className="count">{thirdCategor_articles.length}</span>
                        <div className="clear"></div>
                        <span className="items">items</span>
                      </div>
              
                      <h3>
                        <div style={{cursor:"pointer"}} onClick={this.showSelectedArticles.bind(this,thirdCategor.articles )} title={thirdCategor.categoryTitle}>{thirdCategor.categoryTitle} 
                        </div>
                      </h3>
        
                      {thirdCategor_articles.length > 0 &&
                        <ul className="category-posts">
                          {thirdCategor_articles.map(article => 
                            <li>
                              <div style={{cursor:"pointer"}} onClick={this.showSelectedArticleParagraph.bind(this,article.articleParagraphs, article.articleTitle )} key={article.articleId} title={article.articleTitle}><i className="fa fa-pencil"></i>{article.articleTitle}</div>
                            </li>
                          )}
                          
                          
                        </ul>
                      }
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="entry-cat-block" style={{backgroundColor:"#40342b"}}>
                      <div className="count-items">
                        <span className="count">{fourthCategor_articles.length}</span>
                        <div className="clear"></div>
                        <span className="items">items</span>
                      </div>

                      <h3>
                        <div style={{cursor:"pointer"}} onClick={this.showSelectedArticles.bind(this,fourthCategor.articles )} title={fourthCategor.categoryTitle}>{fourthCategor.categoryTitle} 
                        </div>
                      </h3>

                      {fourthCategor_articles.length > 0 &&
                        <ul className="category-posts">
                          {fourthCategor_articles.map(article => 
                            <li>
                              <div style={{cursor:"pointer"}} onClick={this.showSelectedArticleParagraph.bind(this,article.articleParagraphs, article.articleTitle )} key={article.articleId} title={article.articleTitle}><i className="fa fa-pencil"></i>{article.articleTitle}</div>
                            </li>
                          )}
                          
                          
                        </ul>
                      }
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            }
            {this.state.homeOrCategoey === 2 &&
              <div id="primary" className="col-lg-8">
                <aside id="ct_sticky_widget-2" className="widget ct_sticky_widget clearfix">
                {this.state.Categories.map(category =>
                   <div className="sticky-block" style={{backgroundColor: randomColor()}} onClick={this.showSelectedArticles.bind(this,category.articles )}>
                   <div className="row">
                     <div className="col-lg-6 number_article">
                      <div className="count-items">
                        <span className="count">{category.articles.length}</span>
                        <div className="clear"></div>
                        <span className="items">Articles</span>
                      </div>
                      <img src={category.categoryImageSrc} alt="Sticky Article" key={category.categoryId} />   
                     </div>
                     <div className="col-lg-6">
                       <div className="right-side clearfix">
                         <h2>
                           <div title="Permalink to Sticky Article">
                            {category.categoryTitle} 
                           </div>
                         </h2>
                         <div className="meta clearfix">{category.categoryPublishDate}</div>
                         <div className="clear"></div>
                         <div className="margin-10b"></div>
                         <ul className="category-posts">
                          {category.articles.map(article => 
                            <li>
                              <div key={article.articleId} title={article.articleTitle}><i className="fa fa-pencil"></i>{article.articleTitle}</div>
                            </li>
                          )}
                          
                          
                        </ul>
                         
                         <div className="clear"></div>
                         <div className="btn-more-circle" title="Sticky Article">
                           <i className="fa fa-chevron-right"></i>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  
                )}
                </aside>
              </div>
            }
            {this.state.homeOrCategoey === 3 &&
              <div id="primary" className="col-lg-8">
                <aside id="ct_sticky_widget-2" className="widget ct_sticky_widget clearfix">
                {this.state.Opened_articles.map(article =>
                   <div className="sticky-block" key={article.articleId} style={{backgroundColor: randomColor()}} onClick={this.showSelectedArticleParagraph.bind(this,article.articleParagraphs, article.articleTitle )}>
                   <div className="row">
                     <div className="col-lg-6 number_article">
                      <img src={article.articleImageSrc} alt="Sticky Article" key={article.articleId} />   
                     </div>
                     <div className="col-lg-6">
                       <div className="right-side clearfix">
                         <h2>
                           <div title="Permalink to Sticky Article">
                            {article.articleTitle} 
                           </div>
                         </h2>
                         <div className="meta clearfix">{article.articlePublishDate}</div>
                         <div className="clear"></div>
                         <div className="margin-10b"></div>
                         
                         <div className="clear"></div>
                         <div className="btn-more-circle" title="Sticky Article">
                           <i className="fa fa-chevron-right"></i>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  
                )}
                </aside>
              </div>
            }
            {this.state.homeOrCategoey === 4 &&
              <div id="primary" className="col-lg-8">
                <header className="entry-header clearfix" style={{backgroundColor:"#eee", marginBottom: "30px"}}>
                  <h1 className="entry-single-title">{this.state.article_title}</h1>                              
                </header>
                {this.state.Article_paragraph.map(articleParagraph =>
                   <div className="Topic_topicListPen-3t_kg" key={articleParagraph.articleParagraphId}>
                      <div className="thumbnail-wrap">
                        <img className="grid-preview-image" loading="lazy" alt="" src={articleParagraph.articleParagraphImageSrc} />
                      </div>
                      <div className="Topic_about-2dnxY">
                        <h2>{articleParagraph.articleParagraphTitle}</h2>
                        <div className="Topic_description-3tPZs">
                          <p>{articleParagraph.content}</p>
                        </div>
                      </div>
                    </div>
                )}
              </div>
            }
            <div id="secondary" className="sidebar col-lg-4" role="complementary">
              <aside id="ct-populararticles-widget-4" className="widget ct-populararticles-widget clearfix">
                <div className="popular-block" style={{backgroundColor: "#378463"}}>
                  <i className="fa fa-star"></i>
                  <h4 className="widget-title">Last Articles</h4>
                  <ul className="popular-posts-widget popular-widget-658000136">
                  <li className="clearfix">
                      <div className="post-title">
                        <i className="fa fa-pencil"></i>
                      </div>
                  </li>
                  {this.state.Last_articles.map(article => 
                    <li style={{cursor:"pointer"}} key={article.articleId} className="clearfix" onClick={this.showSelectedArticleParagraph.bind(this,article.articleParagraphs, article.articleTitle )}>
                      <div className="post-title">
                        <h5>
                          <div title={article.articleTitle}>
                            {article.articleTitle}
                          </div>
                        </h5>
                      </div>
                    </li>
                  )}
                    

                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div id="footer" role="contentinfo">
          <div className="container clearfix">
              <div className="row">				
                <div className="col-lg-12">			
                     <div>NewTechIT</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
