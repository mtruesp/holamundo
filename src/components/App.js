import React from 'react'
import Faker from 'faker'

import Comments from './comments'
import Button from './button'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            comments: [],
            test: 'hola'
        }
        this.addComment = this.addComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }

    addComment(){
        let comment = {
            userAvatar: Faker.image.avatar(),
            name: Faker.name.firstName(),
            date: Date.now().toLocaleString(),
            comment: Faker.lorem.paragraph()
        }
        let copyComments = this.state.comments
        copyComments.push(comment)
        let copyState = {...this.state, comments: copyComments}
        this.setState(copyState)
        // copyState.push(comment)
        // this.setState({comments: copyState})
    }

    deleteComment(){
        let copyComments = this.state.comments
        copyComments.pop()
        let copyState = {...this.state.comments, comments: copyComments}
        this.setState(copyState)
    }

    render(){
        return (
            <div>
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