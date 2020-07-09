import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, Link } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true',
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route exact path="/" render={() => <h1>Home</h1>} />
                <Route exact path="/" render={() => <h1>Home 2</h1>} /> */}
                <Route exact path="/" component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;