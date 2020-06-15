import React from 'react'
import Faker from 'faker'

import Comments from './comments'
import Button from './button'
import InputComment from './inputComment'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            comments: [],
            commentText: '',
            name: ''
        }
        
        this.addComment = this.addComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }

    addComment(){
        let comment = {
            userAvatar: Faker.image.avatar(),
            name: this.state.name,
            date: Date.now().toLocaleString(),
            comment: this.state.commentText
        }
        let copyComments = this.state.comments
        copyComments.push(comment)
        let copyState = {...this.state, comments: copyComments}
        this.setState(copyState)
        this.setState({commentText: ''})
        // copyState.push(comment)
        // this.setState({comments: copyState})
    }

    deleteComment(){
        let copyComments = this.state.comments
        copyComments.pop()
        let copyState = {...this.state.comments, comments: copyComments}
        this.setState(copyState)
    }

    handlerComment(e){
        this.setState({commentText: e.target.value})
    }

    handlerName(e){
        this.setState({name: e.target.value})
    }

    render(){
        return (
            <div>
                <InputComment handler={(e) => this.handlerName(e)} value={this.state.name}></InputComment>
                <InputComment handler={(e) => this.handlerComment(e)} value={this.state.commentText}></InputComment>
                <Button func={this.addComment} text={'Comentar'}/>
                <Button func={this.deleteComment} text={'Borrar'}/>
                {
                    this.state.comments.map((comment) => { 
                        return <Comments 
                            key={`comment_${comment.name}_${Date.now()}`}
                            userAvatar={comment.userAvatar} 
                            name={comment.name} 
                            date={comment.date}
                            comment={comment.comment}
                        />
                    })
                }
            </div>
        )
    }
}

export default App