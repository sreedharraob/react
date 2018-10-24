import React from "react";
import axios from "axios";

class Reddit extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://www.reddit.com/r/reactjs.json').then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({ posts });
        });
    }

    render() {
        return (
            <div>
                <h1>/r/reactsjs</h1>
                <ul>
                    {this.state.posts.map(post => (
                        <li key={post.id}><a href={post.url} rel="noopener noreferrer" target="_blank">{post.title}</a>
                            <ul>
                                <li>Score: {post.score}</li>
                                <li>Submitted User: {post.author}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Reddit;