var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

// Blog container
var BlogContainer = React.createClass({
  render : function(){
    return(
      <div className ="container" id = "main">
      <Navbar />
      <main>
      {this.props.children}
      </main>
      </div>
    );
  }
});

// Navigation bar
var Navbar = React.createClass({
  render: function(){
    return(
      <div className ="container-fluid">
      <nav class="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">Tech Blogs</a>
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            <div className="collapse navbar-collapse navHeaderCollapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#/home">Home</a></li>
              <li><a href="#/blog">Blogs</a></li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
});

// Home component
var Home = React.createClass({
    render : function(){
    return(
  <div className ="home">
      <div id="head" className="parallax" parallax-speed="2">
      <h1 id="logo" className="text-center">
      </h1>
      </div>

      <main id="main">
      <div className="container">

		    <div className="row section topspace">
			  <div className="col-md-12">
				<p className="lead text-center text-muted">It’s hard to remember a world without blogs. Originally a sort of online journal full of mundane personal updates, web logs have morphed into an extremely powerful form of communication.</p>
			  </div>
		    </div>

        <div className="row section featured topspace">
    			<h2 className="section-title"><span>Tech Career Blogs</span></h2>
    			<div className="row">
    				<div className="col-sm-6 col-md-3">
    					<h3 className="text-center">Mashable</h3>
    					<p>If you haven’t heard of “The Social Media Guide,” you just might be living under an old Commodore 64. Updated constantly, and nearly always entertaining, Mashable takes the worlds of Twitter, Facebook, entertainment, news, and everything else techies are talking about and, well, mashes it up into the kind of blog we can’t get enough of.</p>
    					<p className="text-center"><a href="" className="btn btn-action">Read more</a></p>
    				</div>
    				<div className="col-sm-6 col-md-3">
    					<h3 className="text-center">Gizmodo</h3>
    					<p>Pretty much known as the TMZ of tech after they paid for a “lost” next-gen Apple iPhone — the fallout became front-page news across the world. Scandals aside, Gizmodo’s been a must-follow site for a long time, with tons of relevant posts, a youthful vibe, and some of the funnier commenters on the Internet.</p>
    					<p className="text-center"><a href="" className="btn btn-action">Read more</a></p>
    				</div>
    				<div className="col-sm-6 col-md-3">
    					<h3 className="text-center">GigaOM</h3>
    					<p>If you’re looking for what’s next, look no further. Om Malik’s creation has grown into one of the largest blogs worldwide, and it’s all due to focusing on what’s new. News and analysis on Web 2.0, technologies and startups, social media, gaming — you name it, GigaOM has it covered. That’s what happens when you have a team of 12 writers.</p>
    					<p className="text-center"><a href="" className="btn btn-action">Read more</a></p>
    				</div>
    				<div className="col-sm-6 col-md-3">
    					<h3 className="text-center">ZDNet</h3>
    					<p>In online terms, 10 years is a lifetime and 20 is an eternity. How long ZDNet has been in existence makes this go-to tech website (formerly “ZiffNet”) an anomaly among blogs. Founded in 1991, formerly on CompuServe and Prodigy, ZDNet was purchased in 2000 by CNET (CBS Interactive), and reports on a variety of tech news.</p>
    					<p className="text-center"><a href="" className="btn btn-action">Read more</a></p>
    				</div>
    			</div>
    		</div>
      </div>
      </main>

<footer id="footer" className="topspace">
	<div className="container">
		<div className="row">
			<div className="col-md-3 widget">
				<h3 className="widget-title">Contact</h3>
				<div className="widget-body">
					<p>+234 23 9873237<br/>
						<a href="mailto:#">some.email@somewhere.com</a><br/>
						<br/>
						234 Hidden Pond Road, Ashland City, TN 37015
					</p>
				</div>
			</div>

			<div className="col-md-3 widget">
				<h3 className="widget-title">Follow me</h3>
				<div className="widget-body">
					<p className="follow-me-icons">
						<a href=""><img src="images/facebook.jpeg" /></a>
						<a href=""><img src="images/twitter.jpeg" /></a>
						<a href=""><img src="images/google.jpeg" /></a>

					</p>
				</div>
			</div>

			<div className="col-md-3 widget">
				<h3 className="widget-title">Text widget</h3>
				<div className="widget-body">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil natus explicabo ipsum quia iste aliquid repellat eveniet velit ipsa sunt libero sed aperiam id soluta officia asperiores adipisci maxime!</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil natus explicabo ipsum quia iste aliquid repellat eveniet velit ipsa sunt libero sed aperiam id soluta officia asperiores adipisci maxime!</p>
				</div>
			</div>

			<div className="col-md-3 widget">
				<h3 className="widget-title">Form widget</h3>
				<div className="widget-body">
					<p>+234 23 9873237<br/>
						<a href="mailto:#">some.email@somewhere.com</a><br/>
						<br/>
						234 Hidden Pond Road, Ashland City, TN 37015
					</p>
				</div>
			</div>

		</div>
	</div>
</footer>
  </div>
    );
  }
});

// Blog component
var Blog = React.createClass({
  getInitialState : function(){
    return {data :[]};
  },
  getData : function(){
  $.ajax({
    url: '/api/getBlogs',
    dataType: 'json',
    cache: false,
    type: 'GET',
    success: function(data) {
      this.setState({data: data});
      }.bind(this)
    });
  },
  componentDidMount : function(){
    this.getData();
    setInterval(this.getData, 5000);
  },

  render : function(){
    return(

      <div>
      <img src="images/Tech2.jpeg" height="350px;" width ="1070px;"/>
      <Blogs data = {this.state.data} />
      <footer id="footer" className="topspace">
      	<div className="container">
      		<div className="row">
      			<div className="col-md-3 widget">
      				<h3 className="widget-title">Contact</h3>
      				<div className="widget-body">
      					<p>+234 23 9873237<br/>
      						<a href="mailto:#">some.email@somewhere.com</a><br/>
      						<br/>
      						234 Hidden Pond Road, Ashland City, TN 37015
      					</p>
      				</div>
      			</div>

      			<div className="col-md-3 widget">
      				<h3 className="widget-title">Follow me</h3>
      				<div className="widget-body">
      					<p className="follow-me-icons">
      						<a href=""><img src="images/facebook.jpeg" /></a>
      						<a href=""><img src="images/twitter.jpeg" /></a>
      						<a href=""><img src="images/google.jpeg" /></a>

      					</p>
      				</div>
      			</div>

      			<div className="col-md-3 widget">
      				<h3 className="widget-title">Text widget</h3>
      				<div className="widget-body">
      					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil natus explicabo ipsum quia iste aliquid repellat eveniet velit ipsa sunt libero sed aperiam id soluta officia asperiores adipisci maxime!</p>
      					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil natus explicabo ipsum quia iste aliquid repellat eveniet velit ipsa sunt libero sed aperiam id soluta officia asperiores adipisci maxime!</p>
      				</div>
      			</div>

      			<div className="col-md-3 widget">
      				<h3 className="widget-title">Form widget</h3>
      				<div className="widget-body">
      					<p>+234 23 9873237<br/>
      						<a href="mailto:#">some.email@somewhere.com</a><br/>
      						<br/>
      						234 Hidden Pond Road, Ashland City, TN 37015
      					</p>
      				</div>
      			</div>

      		</div>
      	</div>
      </footer>
      </div>
    );
  }
});

// Blogs component
    var Blogs = React.createClass({
      render : function(){
        return (
        <div>
        {
          this.props.data.map(function(result){
      return (
        <div className ="home">
            <div className="parallax" parallax-speed="2">
            <h1 id="logo" className="text-center">
            </h1>
            </div>
            <main id="main">
             <div className="container">
               <div className="row topspace">
                  <div className="col-sm-8 col-sm-offset-2">
                     <article className="post">
                     <header className="entry-header">
                     <div className="entry-meta">
                    <span className="posted-on"><time className="entry-date published" date="2013-06-17">{result.Date}</time></span>
                    </div>
                    <h1 className="entry-title"><a href="single.html" rel="bookmark">{result.Title}</a></h1>
                    </header>
                    <div className="entry-content">
                    <p><img alt="" src={result.Image}/></p>
                    <p>{result.Description} <a href="single.html" class="more-link">Continue reading&#8230;</a></p>
                    </div>
                    </article>
                   </div>
                   </div>
                   </div>
                         <center className="">
                           <ul className="pagination">
                             <li className="disabled"><a href="">&laquo;</a></li>
                             <li className="active"><a href="">1</a></li>
                             <li><a href="">2</a></li>
                             <li><a href="">3</a></li>
                             <li><a href="">4</a></li>
                             <li><a href="">5</a></li>
                             <li><a href="">6</a></li>
                             <li><a href="">&raquo;</a></li>
                           </ul>
                         </center>
    </main>
    </div>
      );
    }
    )}
    </div>
    );
    }
    });

// Main Route
var browserHistory = ReactRouter.browserHistory;
ReactDOM.render(
(
<Router history = {browserHistory}>
    <Route path="/" component={BlogContainer}>
    <IndexRoute component = {Home} />
      <Route path="/home" component={Home} />
      <Route path="/blog" component={Blog} />
      </Route>
  </Router>
),
document.getElementById('content')
);
