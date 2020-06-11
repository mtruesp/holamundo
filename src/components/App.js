import React from 'react'
import Faker from 'faker'

import Comments from './comments'
import Button from './button'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }

    addComment(){
        let comment = {
            userAvatar: Faker.image.avatar(),
            name: Faker.name.firstName,
            date: Date.now().toLocaleString(),
            comment: Faker.lorem.paragraph()
        }
        this.setState({comments: comment})
    }

    render(){
        return (
            <div>
                <Button />
                {
                    this.state.comments.map((comment) => { 
                        return <Comments 
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