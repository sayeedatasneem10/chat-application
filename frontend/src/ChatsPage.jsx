import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage =(props) =>{
    const chatProps=useMultiChatLogic(
        '8fba2001-44af-4e03-884c-f6b75d483c34',
        props.user.username,
        props.user.secret
    )
    return(
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
    )
}

export default ChatsPage